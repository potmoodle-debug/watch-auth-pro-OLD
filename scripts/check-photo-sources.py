"""Audit public inventory source access; never infer photograph verification.

Run after build-photo-audit.mjs. Existing results are resumed unless --refresh
is supplied. Only public source pages are requested; no database is accessed.
"""
import argparse
import concurrent.futures
import datetime
import hashlib
import json
import pathlib
import urllib.error
import urllib.request
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent.parent


class Metadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.title_seen = False
        self.title = []
        self.canonical = None
        self.image = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title' and not self.title_seen:
            self.in_title = True
            self.title_seen = True
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if tag == 'meta' and attrs.get('property') == 'og:image':
            self.image = attrs.get('content')

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title.append(data)


def check(url):
    result = {'url': url, 'checkedAt': datetime.datetime.now(datetime.timezone.utc).isoformat()}
    try:
        # Keep the inherited proxy and TLS trust. Limit public HTML downloads.
        with urllib.request.urlopen(url, timeout=20) as response:
            body = response.read(4 * 1024 * 1024 + 1)
            result.update(status=response.status, finalUrl=response.url,
                          contentType=response.headers.get('Content-Type', ''),
                          bytes=len(body), truncated=len(body) > 4 * 1024 * 1024,
                          sha256=hashlib.sha256(body).hexdigest())
            if 'text/html' in result['contentType']:
                parser = Metadata()
                parser.feed(body.decode('utf-8', errors='replace'))
                result.update(title=''.join(parser.title).strip(), canonical=parser.canonical,
                              previewImage=parser.image)
            result['finding'] = 'Accessible source; source identity, real photographs and all category scopes still require review.'
    except urllib.error.HTTPError as error:
        result.update(status=error.code, finding='HTTP access failure; not a reviewed photograph gap.')
    except Exception as error:
        result.update(error=str(error), finding='Request failure; not a reviewed photograph gap.')
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--refresh', action='store_true')
    parser.add_argument('--workers', type=int, default=8)
    args = parser.parse_args()
    inventory = json.loads((ROOT / 'photograph-coverage.json').read_text())['inventory']
    urls = list(dict.fromkeys(url for row in inventory for url in row['sources']))
    destination = ROOT / 'photograph-source-access.json'
    previous = json.loads(destination.read_text()) if destination.exists() and not args.refresh else {}
    results = {row['url']: row for row in previous.get('sources', []) if row['url'] in urls}

    def save():
        counts = {'storedIdentifierKeys': len(inventory), 'uniqueSourceUrls': len(urls),
                  'checkedSourceUrls': len(results),
                  'http200SourceUrls': sum(row.get('status') == 200 for row in results.values()),
                  'http403SourceUrls': sum(row.get('status') == 403 for row in results.values()),
                  'identifierKeysWithNoStoredSource': sum(not row['sources'] for row in inventory)}
        report = {'version': 1, 'scope': 'Public repository inventory source access only. HTTP success is not photograph verification or completed reference research.',
                  'counts': counts, 'sources': [results[url] for url in urls if url in results]}
        temporary = destination.with_suffix('.tmp')
        temporary.write_text(json.dumps(report, indent=2) + '\n')
        temporary.replace(destination)
        return counts

    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, min(args.workers, 16))) as pool:
        futures = [pool.submit(check, url) for url in urls if url not in results]
        for future in concurrent.futures.as_completed(futures):
            result = future.result()
            results[result['url']] = result
            if len(results) % 50 == 0:
                print(json.dumps(save()), flush=True)
    print(json.dumps(save()), flush=True)


if __name__ == '__main__':
    main()
