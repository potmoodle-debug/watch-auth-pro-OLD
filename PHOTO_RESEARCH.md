# BenchAuth photograph research — in progress

This branch is a reviewable implementation draft. **Do not deploy it as completed
photograph research.** The user supplied the original goal: entering a brand and
case reference must show useful, correctly matched actual photographs, with
documented variants and four comparison categories. Review every stored reference;
leave unsupported categories empty; preserve existing workflows and safety rules;
publish only after research and checks pass. The separate production WatchAuthPro
repository must not be modified.

Network access was verified first. GitHub and the BenchAuth live site return HTTP
200. Of 1,564 distinct stored source URLs, 1,531 return HTTP 200 and 33 manufacturer
Breitling URLs return HTTP 403. HTTP access and download counts **do not** establish
visual review. The existing live site is unchanged.

Rollback: GitHub branch `rollback/benchauth-before-photographs-20261008`, commit
`b4ffc080c4dba6f55bb246377a24a3c2bf284052`. A local Git bundle is saved at
`/workspace/benchauth-before-photographs-20261008.bundle`.

## Inventory and counts

Run `node scripts/build-photo-audit.mjs` to rebuild `photograph-coverage.json` and
`photograph-coverage.csv`. The JSON includes source records, per-identifier category
coverage, candidate IDs, evidence and exact counts. The CSV supports bench research.

Current inventory: the shared BenchAuth database has 982 reference-fact rows
(937 repository rules and 45 research updates), including 47 verified textual
mappings. Those rows plus 1,465 imported catalogue variant records
= **2,447 source records**. The finite literal
identifiers in the existing public rules, research updates and imported
catalogue yield **2,238
stored identifier keys**. Only aggregate shared database counts are retained; no row-level database
snapshot is published. The inventory is built from the public repository files.
These are lookup keys, not 2,238 distinct
watch models: punctuation/case duplicates collapse; M-prefixed aliases, base
references and catalogue suffixes remain separate keys. Broad patterns require
enumeration and source review; they are never counted as exact references.

Current exact progress is in the generated coverage files: **54 identifier keys
reviewed, 2,184 unreviewed; 56 source records reviewed, 2,391 unreviewed**. There are
**161 catalogue assets: 131 verified, 22 pending and 8 rejected**, including 31
legacy assets. Verified reference-key coverage: **front 47, movement 10, caseback
34, bracelet/clasp 29**. Reviewed gaps describe the inspected source set, not a
claim that no suitable image exists elsewhere. Existing textual research and
pre-existing "verified" mapping badges do not verify photographs. Unreviewed
categories are not counted as reviewed gaps.

`photograph-source-access.json` records the complete stored-source HTTP scan.
`photograph-legacy-access.json` records checks of all 31 original assets; all 24
decodable original files were visually inspected. Eight unsuitable legacy
attachments are rejected, including tiny IWC thumbnails, an HTML challenge posing
as an image, and a generic movement without case/period execution evidence.
Manufacturer product media with unconfirmed photograph-versus-render provenance
remain pending.

`photograph-breitling-sources.json` records 44 matching specialist model pages
and 99 decoded gallery images inspected. `photograph-auction-sources.json` records
the inspected selections from Bukowskis auction 671. All 160 auction lots were
scanned for exact inventory identifiers; 38 matched and 404 candidate images were
downloaded. Those counts must not be mistaken for 404 completed visual reviews.
Only selected, individually inspected specimens are attached. Replacement clasps,
service parts and material variants are explicit in captions. Unproven diamond
dial settings and an incompatible replacement dial/bezel are withheld as front
comparison baselines. No private auction paperwork is attached.

`photograph-tudor-history-sources.json` records six manufacturer history pages
and all 62 main historical gallery images inspected. The selected specimens
include correctly paired movement photographs with explicit rotor/finishing
execution and period. The archive explicitly documents dial variants sharing a
case reference. Media filenames are not model-identification evidence: the blue
1993 79090 front has a misleading 79190 filename, while the following 1997 79190
specimen and its movement remain separate. No neighbouring reference inherits
these images.

## Matching and display

`photographs.json` is a public, independent catalogue. Shared reference-fact
refreshes and sign-in/out cannot change its matches. Photographs are matched only
against explicit brand/reference keys and explicit `representativeFor` base keys.
Normalisation removes punctuation and case differences. It never truncates a
case reference, searches by calibre, uses a neighbouring model, expands a regex
family or silently assumes a dial/bracelet suffix. Add a documented alias
explicitly after checking its source and scope.

The renderer presents front, movement, caseback and bracelet/clasp categories
inside expanded Watch information. Unsupported categories have no image. Verified
photos open in a keyboard-accessible enlargement dialog; source, credit, caption
and variant stay visible. Failed loading produces a source-link fallback.
Special-construction safety rules still prevent opening and suppress movement
photographs. The prototype `samples.json` and imported rule `visuals` are retained
for the audit, but no longer control image selection.

## Reviewing a reference

Research Tudor, Rolex, Breitling, Cartier, Omega and Panerai first, then remaining
brands. Prefer manufacturer photographs, then reputable auctions, authorised
dealers and documented specialists. Manufacturer catalogue assets may be renders;
do not assume that a raster file is an actual photograph.

For each candidate, inspect the actual pixels and original source page. Record
the source URL and credit, photographed reference/variant, comparison caption,
and any limits on dial, bracelet, period or movement execution. Check the calibre
and the specific rotor/bridge/finishing execution before accepting a movement
photo. A different model sharing a calibre does not establish the same execution.

Only promote an asset after setting `mediaKind: "photograph"`, a confirmed credit,
explicit reference identifiers and variant, and `review.status: "verified"` with
`visualInspected`, `referenceVerified`, `executionVerified`, `inspectedAt`,
`loadedAt` and `evidence`. The matcher withholds assets missing these checks.
Correct candidate scope before promotion: the candidate metadata is imported,
not independently verified. Do not infer a white-dial specimen's configuration
from a bare base reference. Put explicit representative base keys in
`representativeFor`; put the documented pictured variants in `references`.

Record searches and unresolved gaps in `photograph-reviews.json`.
`identifierReviews` entries contain `brand`, `reference`, and `categories`, each
with `reviewedAt`, `evidence` (searched sources and findings) and `finding`.
Mark an identifier reviewed only after investigating all four categories.
`sourceRecordReviews` entries identify an inventory record by its exact `id`,
with `reviewedAt` and `evidence`; pattern records require enumerated scope review.
These reviews do not promote images. Regenerate the coverage files after changes.

## Validation and publishing

`node --test tests/*.mjs` checks matching, variant boundaries, verification gates,
safety, historical Rolex indicators, note copying logic, clasp reminders and
daily reset logic. Run a local server with `python -m http.server 8765`, then
`node tests/photographs-browser.cjs` using installed Chromium. Browser tests use
mock account/database responses and non-watch pixel fixtures only; they do not
authenticate to Supabase or verify real photograph loading or live RLS.

`node tests/photographs-real-browser.cjs` uses the actual local catalogue and
public image servers without mocked images or authenticated database mutations.
It checks every accepted photograph's load, enlargement, credit, representative
label and mobile overflow. Chromium must trust the configured environment proxy
CA; certificate verification must remain enabled. All 131 accepted photographs across 51 covered keys
passed this check; rerun after catalogue additions. The Node suite passes all 23
tests, and the fixture browser suite covers the preserved workflows and mocked
authenticated refreshes.

Before publishing, inspect and load every accepted real photograph, test shared
refreshes with permitted live data, resolve/review the inventory, and verify the
BenchAuth Pages deployment. Do not change or deploy the separate WatchAuthPro
production repository. Publication is pending complete inventory research and
these checks. Live authenticated refresh/RLS testing requires a permitted BenchAuth
test account or an authenticated test browser; neither is configured. Public read
access alone does not prove live signed-in behavior.
