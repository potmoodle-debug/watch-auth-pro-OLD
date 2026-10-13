# BenchAuth photograph research — in progress

This checkpoint is a partial photograph release. **Photograph research remains
in progress; it must not be described as complete.** The user supplied the original goal: entering a brand and
case reference must show useful, correctly matched actual photographs, with
documented variants and four comparison categories. Review every stored reference;
leave unsupported categories empty; preserve existing workflows and safety rules;
continue systematic research and validation. The separate production WatchAuthPro
repository must not be modified.

Network access was verified first. GitHub and the BenchAuth live site return HTTP
200. Of 1,564 distinct stored source URLs, 1,531 return HTTP 200 and 33 manufacturer
Breitling URLs return HTTP 403. HTTP access and download counts **do not** establish
visual review. The historical PR #16 checkpoint was bb26ced602af392fa2b1a55c2feffe527ab7c998 (Pages run 37977132750 succeeded). Current published and fully verified live checkpoint is PR #26 at 0260ca3b177c4d97617e06c20b3b2eb5b64de882, with 858 verified entries and both catalogue/web image search; Pages run 38263636917 succeeded. Earlier unpublished/waiting descriptions below are preparation history. The eighteen Sinn additions below are published; their preparation notes retain the status at that time. The ninth-checkpoint additions below are published; earlier next-checkpoint descriptions record the status when those batches were prepared.

Rollback: GitHub branch `rollback/benchauth-before-photographs-20261008`, commit
`b4ffc080c4dba6f55bb246377a24a3c2bf284052`. The original workspace recorded a local bundle at
`/workspace/benchauth-before-photographs-20261008.bundle`; that path is historical.
Restoration preserved the remote rollback and saved a fresh local bundle containing
pre-restore main and the original rollback ref.

## Inventory and counts

Run `node scripts/build-photo-audit.mjs` to rebuild `photograph-coverage.json` and
`photograph-coverage.csv`. The JSON includes source records, per-identifier category
coverage, candidate IDs, evidence and exact counts. The CSV supports bench research.

Historical shared-count checkpoint: the BenchAuth database had 982 reference-fact rows
(937 repository rules and 45 research updates), including 47 verified textual
mappings at the historical shared-count checkpoint. Current public files contain 937 rules and 53 research updates (990 rows), separately from the historical shared982 count; plus 1,465 imported catalogue variants = **2,455 source records**. The finite literal
identifiers in the existing public rules, research updates and imported
catalogue yield **2,246
stored identifier keys**. Only aggregate shared database counts are retained; no row-level database
snapshot is published. The inventory is built from the public repository files.
These are lookup keys, not 2,246 distinct
watch models: punctuation/case duplicates collapse; M-prefixed aliases, base
references and catalogue suffixes remain separate keys. Broad patterns require
enumeration and source review; they are never counted as exact references.

Current exact progress is in the generated coverage files: **326 identifier keys
reviewed, 1,920 unreviewed; 253 source records reviewed, 2,202 unreviewed**. There are
**893 catalogue assets: 858 verified gallery entries, 26 pending and 9 rejected**, including 31
legacy assets. Verified entries use **815 distinct stored image URLs and 814 distinct inspected file hashes**; the same photograph can serve two categories. Verified reference-key coverage: **front 262, movement 101, caseback
229, bracelet/clasp 223**. Reviewed gaps describe the inspected source set, not a
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

`photograph-auction-archive-sources.json` records the next research pass through
Bukowskis auctions 630, 634, 638, 643, 647, 651, 655, 659, 663 and 667. **1,191
lots were scanned, 278 matched exact inventory identifiers, and 65 previously
unreviewed reference keys were selected. All 913 photographs in those 65 galleries
were decoded and visually inspected**, including full-resolution selected movement
images and specimen identification. This pass adds 230 verified photographs and
one rejected movement candidate. Other matching lots remain discovery candidates;
their pixels have not been reviewed.

The rejected Omega 311.30.42.30.01.005 movement photograph has serial 78778267,
whereas the lot description and pictured watch identify 77734248. A shared 1861
calibre does not repair that mismatch. Rolex 16570 has a documented late 3186
execution; 216570 retains its own 3187 execution. The yellow-gold 16528 uses the
pictured Rolex 4030 execution, without inheriting a generic Zenith image or later
4130. Service hands, replacement dials, later clasps, service backs and damaged
links are explicitly scoped or withheld. Internal shared caseback numbers do not
create model aliases. Manufacturer M prefixes and full dial/bracelet suffixes
still require their own documented identification.

`photograph-older-auction-sources.json` records another 1,051 archived auction
lots scanned, 124 exact matching lots discovered, and nine new Rolex reference
keys investigated. All 155 images in those nine galleries were visually inspected;
35 photographs are verified. Later clasps, personal back engravings, movement
finishing and calibre boundaries remain explicit.

`photograph-fratello-tudor-sources.json` records four hands-on articles and all
97 main article images inspected. `photograph-fratello-tudor-additional-sources.json`
records another 12 articles and all 186 main image occurrences inspected, including
embedded tiled galleries. These passes add 42 photographs with manufacturer
corroboration where available. Off-model comparisons are excluded: the bronze
Black Bay 58 article pictures a silver 925 display-back movement, which does not
supply bronze movement coverage. The ceramic specimen has its own photographed
black MT5602-1U execution. Full manufacturer dial/bracelet suffixes are attached
only where documented; base-reference examples stay representative.

Year-coded FXD references need separate evidence. The 2024 GMT article identifies
2542G247NU, whereas the current manufacturer wildcard product route identifies
2542G267NU. Its reused 2024 media/user-guide metadata does not establish the back
execution of a 2026 specimen. The inventory key 2542G257 also lacks documented
identification. Likewise, the photographed M25707B/21 specimen is not attached to
25707B/26 or the incomplete 25707 key. All such categories remain unresolved.

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
CA; certificate verification must remain enabled. All 507 accepted photographs across 226 explicit covered keys
passed this check on 2026-10-09. Rerun after catalogue additions. The Node suite passes all 30
tests, and the fixture browser suite covers the preserved workflows and mocked
authenticated refreshes.

The user authorised publishing the current verified checkpoint on 2026-10-09,
while inventory research continues. Inspect and load every accepted photograph
and verify the BenchAuth Pages deployment. Preserve the rollback and existing
workflows. Do not change or deploy the separate WatchAuthPro production repository.
Complete inventory research and live authenticated refresh checks remain outstanding. Live authenticated refresh/RLS testing requires a permitted BenchAuth
test account or an authenticated test browser; neither is configured. Public read
access alone does not prove live signed-in behavior.

The third Tudor hands-on pass inspected all 178 main image occurrences in 12
articles and accepted 17 photographs for nine additional stored identifier keys.
Black Bay 58 GMT bracelet photographs match its full -0001 configuration;
Monochrome and burgundy bracelet variants retain base-reference labels. The
silver 925 owner photograph explicitly labels its aftermarket strap, and its
actual MT5400 display-back photograph remains separate from bronze and ceramic
executions. Blue Chrono, Carbon 25 and Royal photographs do not establish
coverage for neighbouring stored models. An independent Monochrome review corroborates North Flag M91210N-0001
and MT5621; four actual Fratello specimen photographs are accepted, including
the visible movement execution. Incomplete 79733 identity remains open. See `photograph-fratello-tudor-third-sources.json`.

The fourth Tudor specialist pass inspected all 147 main image occurrences across
nine articles and accepted 15 actual photographs. Early 79220R/B rose-logo ETA
variants have explicit individual lookup keys; joined slash-pattern inventory
entries remain unreviewed until all variant boundaries are investigated. The
black/gilt 79030N Fifty-Eight, original steel-bezel 79350 Chrono and slate-grey
79250BA Bronze gain labelled front and closed-back coverage. Breitling B01 and
unproven isolated MT5813/MT5612 media remain withheld. Full bronze fabric and
leather suffixes remain separate. See `photograph-fratello-tudor-fourth-sources.json`.

The fifth Tudor pass inspects all 94 main image occurrences in eight articles
and accepts seven photographs. The P01 prototype back marked PROTOTYPE R408
is withheld from production caseback coverage. Actual Pelagos Ultra photos stay
separate from LHD comparisons. The 79220R/B/N joined pattern is now enumerated
and reviewed through individual R, B and N specimens; the literal joined string
is not fabricated into an exact photograph lookup.

The sixth Tudor pass inspects all 100 main image occurrences in six articles
and accepts ten photographs. Actual Ranger 36 black and beige fronts match
-0001 and -0007 separately; unpaired back/clasp details attach to the base only.
It adds a clear burgundy 41 mm closed back and labelled opaline GMT fabric/clasp
views. Source 70330N cannot establish inventory 79330. New black 7939A1A0NU
campaign media has unproven photograph-versus-render provenance. Those sources left both keys with reviewed gaps; later Monochrome hands-on
photographs resolve the newer black front coverage without inheriting neighbouring photographs.
See `photograph-fratello-tudor-fifth-sources.json` and
`photograph-fratello-tudor-sixth-sources.json`.

The Monochrome Tudor pass inspects all 87 main image occurrences in six articles
and accepts eight actual photographs. New black/gilt Black Bay 58 five-link and
rubber suffixes remain separate, as do burgundy three-link, blue Black Bay 54
bracelet/rubber and Black Bay 68 blue/silver fronts. The Black Bay 68 sample clasp
stamped 0000 is withheld; its complete reference does not establish the stored
incomplete 7943A1A0 alias. Black Bay One campaign provenance and size/dial pairing
remain unresolved for 79600/79640/79660/79680. Advisor 79620TC is outside inventory
and must not supply 79600 photographs. See `photograph-monochrome-tudor-sources.json`.

The seventh Tudor comparison pass inspects 77 decodable photographs among 79
main image occurrences; two unavailable occurrences remain unresolved. One
Xupes front photograph of black 25600TN is accepted, corroborated against exact
manufacturer M25600TN-0001. The mixed article back stamped 25610T and an unpaired
clasp are withheld. See `photograph-fratello-tudor-seventh-sources.json`.

The Tudor history pass inspects all 109 main image occurrences in four Monochrome
articles, accepting two actual 2016 black 79230N front/bracelet details. WatchBase
corroborates colour/reference identity; its -0001 is leather and is not assigned
to the pictured bracelet. Isolated MT5602 and three-colour product media remain
withheld. Joined 79230R/B/N is enumerated, not made into a literal photograph
alias. Three additional auction lots provide 33 inspected photographs and nine
accepted assets: ETA 79220N/R and explicitly labelled State of Qatar 79230R.
Protective film and specimen clasp codes are explained; no opened movement is
implied. See `photograph-monochrome-tudor-history-sources.json` and
`photograph-tudor-extra-auction-sources.json`.

## Research after the published checkpoint

The published PR #8 checkpoint is commit `e18a772808cdd56cf2e7bb4f32b285b79f8dc22c`
with 507 verified photographs. Subsequent additions through PR #16 have been
tested and deployed; current catalogue counts above include the restored unpublished research.

`photograph-tudor-older-sources.json` records 25 actual auction/dealer gallery
photographs inspected. Six Sterling Vault photographs add front, closed caseback
and outer bracelet/clasp views for Clair de Rose 35200 (26 mm Roman dial) and
35500 (30 mm eight-diamond dial). Manufacturer specifications corroborate these
configurations; no full suffix or opened T201 movement photograph is inferred.
The 74000 candidate has inconsistent dating, unsupported diamond originality and
no visible exact reference stamp; the 74033 candidate has conflicting 75203 image
metadata. Both remain reviewed gaps, with all photographs withheld. Further
research remains open, including other fetched candidates not visually reviewed.

`photograph-tudor-watchfinder-sources.json` records seven actual Watchfinder
M91650-0001 gallery photographs inspected. Two accepted photographs document
the 41 mm silver-blue Arabic-dial 1926 front and steel bracelet/outer clasp.
The obscured caseback and unphotographed movement remain empty; no neighbouring
size or dial suffix inherits these images.

The next research branch adds three inspected professional-seller Catawiki
photographs for 34 mm Clair de Rose 35800 (front, closed caseback, outer clasp),
corroborated by manufacturer specifications. `photograph-tudor-catawiki-sources.json`
records all 23 gallery images inspected for that lot and a conflicting 12510
listing; the latter is withheld because its description identifies 21010 instead.
`photograph-tudor-prince-dealer-sources.json` records nine actual 76200 dealer
gallery photographs inspected and one accepted silver-dial front. Its replacement
leather strap is labelled, with no factory bracelet, production year or movement
execution inferred. PR #9 is published at `f6ba5f03ef06be9e208449eeb92fa98cf9175ab8`
with 515 photographs; these four later additions await validation and deployment.

## Tudor inventory review checkpoint after PR #10

All **100 stored Tudor identifier keys** now have a four-category review. This
is review coverage, not complete photographic coverage: unresolved real-photo,
movement and variant gaps remain. The other brands still have 2,027 unreviewed
keys overall. Broad source-rule patterns still require enumeration and research.

The next batch adds two actual 25807KN FXD Chrono front/back photographs, distinct
from the three-hand 25707KN. It adds two champagne-dial Black Bay S&G front/back
photographs: the physical case is visibly stamped **79733**, paired by the source
with full **M79733N-0004**, so 79733 has a documented representative case-reference
match. No other full suffix is inferred. Source and pixel receipts are recorded
in the new FXD Chrono and Black Bay S&G reports.

Paired full-size case-stamp inspections also resolve representative lookups
**25407 → 25407N**, **25610T → 25610TNL**, and **79010S → 79010SG** for the
previously accepted hands-on/owner views only. This supersedes the initial gaps
for those keys: a stamp alone was insufficient, but the paired complete specimen
identity provides the missing evidence. Other short strings remain unexpanded.
The silver specimen’s replacement strap stays labelled and its actual MT5400
display-back photograph remains subject to movement-image restrictions.

The newer M79360N-0013 manufacturer five-link configuration has 11 inspected
media views but unconfirmed photograph/render provenance; one candidate remains
pending and none is displayed. Five manufacturer media for the 36 mm 91450 and
39 mm 91550 also remain withheld pending real-photograph provenance. The 41 mm
91650 specimen never supplies these neighbouring sizes.

PR #10 is published at `2b7fadc7fba8e211c3ca5ff6ee9d9f3a49c37a57`: 519 gallery
entries using 507 distinct inspected image files. The live catalogue matches the
release, and all four new live photographs load/enlarge with suffix boundaries
and mobile layout checked. The latest ready-list exports reflect that deployment.
The subsequent four photographs and documented case aliases remain unpublished
until validation passes. Unique-file counts now accompany gallery-entry counts
to avoid counting one photograph in two categories as two distinct image files.

## Published PR #11 and next Rolex case-reference batch

PR #11 is published at `332742d25695996d2d04fa9f8089842fff6b21e5`, with
523 gallery entries using 511 distinct inspected image files. Pages build
37948606608 succeeded. Public release files match the local release byte for byte;
all 523 gallery entries loaded and enlarged across 244 accepted keys. The live
mobile checks verified the documented Tudor case aliases and withheld variants.
The rollback branch remains at `b4ffc080c4dba6f55bb246377a24a3c2bf284052`.
Live authenticated shared-refresh/RLS testing still requires permitted test access.

The next unpublished batch adds 21 real photographs for physical cases 116619,
116710, 116713, 6305 and 6611. `photograph-rolex-case-sources.json` records the
actual inspected galleries, source descriptions, decoded file hashes and decisions.
Visible between-lug stamps pair the modern cases with documented LB/LN variants;
internal back stamps pair the vintage cases with 6305/1 and 6611B. Actual cased
3135, separate steel/two-tone 3186 executions and stamped 1055 photographs are
accepted. Unidentified 6305 movement photographs and its unsigned strap buckle
remain withheld. The 6611 buckle is explicitly gold-plated; the leather strap's
factory originality is not established. Internal 2350/2379 back numbers are not
new watch-reference aliases. Source condition and wear remain specimen-specific.

44 Rolex-only candidate auction pages were fetched. Six galleries (83 image
occurrences) were visually inspected in the first batch. These counts do not
claim all 44 galleries reviewed. The 116610LN gallery lacks a legible numeric
case stamp or opened movement; further LN/LV specimens are being inspected.
A number-only Patek 3546 candidate was excluded from Rolex research.

Validation for this 21-photo batch: all 32 Node tests pass, including exact
case-stamp aliases, suffix boundaries, separate 3186 specimen images and the
unsupported 6305 movement/clasp gap. Browser fixtures pass all preserved workflows,
sign-in/out matching, shared refreshes and safety restrictions. Actual public
images load and enlarge for all 544 accepted gallery entries (532 distinct
inspected files) across 254 exact accepted keys, with credits, representative
labels and mobile overflow checked. No TLS verification was disabled.


## Modern Rolex physical case references — next inspected checkpoint

PR #12 deployment succeeded, and six public application/catalogue files matched
commit b58654ed27c9aaa25d13fb3dbe5848aa50ad3f7b. A real live Chromium check
loaded and enlarged all 21 newly published images, checked unsupported suffixes
and passed the mobile layout check. The ready-reference exports reflect that
published checkpoint until this next batch is deployed and verified.

`photograph-rolex-modern-sources.json` documents 10 auction galleries and all
152 decoded image occurrences visually inspected. Selected photographs were
also inspected at full resolution. This batch adds 37 distinct inspected files:
116610LN and 116610LV (separate black/green and green/green configurations),
116500LN (white-dial Daytona with the actual 4130 execution), 116613LN,
126610LV (black dial/green bezel with actual source-identified 3235 execution),
126710BLRO (Jubilee with photographed 3285 stamp), 126613LB and 126500LN.
Actual paired case stamps document the six numeric aliases 116610, 116500,
116613, 126610, 126710 and 126613. No automatic suffix stripping is used.

The 126500LN gallery has no opened 4131 photograph or numeric case stamp;
only its documented full variant receives front, closed-back and clasp views.
Numeric 126500 remains a reviewed gap. The 126613LB movement remains empty.
Written calibre statements never stand in for absent photographs. Existing
126610LN images are retained without duplicate attachments or an inferred
numeric alias; the second 126710BLRO specimen's accompanied loose Oyster
bracelet does not establish a factory Oyster configuration. No paperwork images
are attached. Internal back numbers 2360, 2100 and 2520 are specimen details,
not newly accepted watch-reference aliases. Visible versus source-only clasp
codes and obscured calibre stamps are identified in captions.

Fifteen explicit lookup keys receive category reviews; seven occur in the finite
stored inventory. The inventory now has 223 reviewed keys and 2,015 unreviewed
keys. Source records stay at 164 reviewed and 2,283 unreviewed: these numeric
case aliases are inventory keys, not literal source-record keys. Research remains
in progress. Application workflows and rollback remain unchanged. Live
signed-in shared-database/RLS verification still requires an authorized test
session; deterministic refresh fixtures do not substitute for that live check.

Validation for this batch: all 33 Node checks pass, including dial/suffix,
numeric-alias and 4130/4131 movement boundaries. The actual catalogue Chromium
check loaded and enlarged all 581 accepted gallery entries (569 distinct
inspected files) across 268 explicit keys with credits, representative labels
and mobile overflow checked. Deterministic browser fixtures pass normalized
matching, variants, failed-image handling, sign-in/out and shared-data refresh,
safety restrictions, replica flags/clasp reminders, note copying, save/next,
RMA, daily reset/progress and history. The legacy workflow smoke was run from
a temporary harness using the installed Chromium, current inventory label,
existing MC1 note terminology and desktop navigation before mobile collapse;
lookup, movement checks, manual notes, safety, draft recovery and responsiveness
pass. Its stale original browser path/count/note expectations were not treated
as application regressions. No production repository or application workflow
was changed. Live authenticated database verification remains separately open.


## Datejust II and Yacht-Master specialist specimens — next checkpoint

PR #16 at bb26ced602af392fa2b1a55c2feffe527ab7c998 is deployed and
verified: six public files match, and live Chromium loaded/enlarged 47 images
across the new numeric/full-variant lookups, unsupported suffixes and mobile
layout. The ready-reference exports list 268 accepted keys at that checkpoint.

`photograph-rolex-specialist-sources.json` documents three new specialist
source galleries: all 37 actual photographs inspected, including selected full
resolution photographs. Loupe This lot 2893 provides 116334 blue-dial Datejust II
front, actual 3136 stamp/execution, internal back 2410, signed Oyster clasp and
physical case stamp. Its single opened-movement/back frame serves two categories,
with that reuse explicit in captions. The catalogue says 2015 but the photographed
card gives purchase May 2014, so no exact specimen year is asserted.

Sotheby's exact 116621 chocolate-dial steel/pink-gold specimen has a confirming
reference card but no opened movement or dedicated clasp view. Its written
3235 statement supplies no photographed execution evidence and is not inherited
by the gallery. The pink-gold 116655 black-dial/Oysterflex specimen likewise has
front and closed-back photographs only, with its external 750 mark visible.
Movement/clasp categories remain empty for both. No full dial/bracelet suffix is
inferred. Heritage's 114300 page returned HTTP 403: no pixels inspected and no
review coverage claimed from that request.

Four further Bukowskis galleries contain 75 inspected actual image occurrences.
The selected 659/1107 specimen documents 116710BLNR, a physical 116710 case
stamp, actual 3186 movement stamp/execution, internal 2350 back and Oyster clasp
STEELINOX/200 marks. It joins 116710 as a clearly labelled blue/black variant;
116710LN and later 126710 variants remain separate. Additional already-covered
specimens are recorded as inspected without duplicate attachments.

This checkpoint adds 14 gallery entries from 13 distinct inspected files and
reviews three more stored keys, giving 226 reviewed and 2,012 unreviewed.
Source-record counts remain 164 reviewed / 2,283 unreviewed. Research and live
authenticated shared-database verification remain open. Existing application,
workflows and rollback are preserved; production WatchAuthPro is untouched.

Validation: all 34 Node checks pass. Actual Chromium loads and enlarges all
14 new gallery entries (13 distinct files) across five accepted lookup keys,
including both case/full-variant lookups for the new GMT specimen, with
representative labels, credits and mobile overflow checked. The preceding
581 entries passed the complete actual-image run before PR #13; this batch
leaves those entries and application code unchanged. The refreshed browser
fixtures pass normalized matching, variants, image failure handling,
sign-in/out/shared refresh, safety, replica flags/clasp reminder, clipboard,
save/next, RMA, daily reset/progress and history. Live authenticated RLS remains
an explicitly separate verification gap.

## Eighth checkpoint: Loupe This archive specimens

PR #14 was published and verified: Pages run 37956142627 succeeded; six
served application/audit files matched the tested local SHA-256 hashes. Actual
live Chromium checks loaded and enlarged 32 photographs, checked unsupported
suffixes and existing representative coverage, and passed mobile overflow.

The next batch inspects eight complete Loupe This galleries: 166 decoded actual
photographs, all visually reviewed. It attaches 29 gallery entries representing
27 distinct photographed files for 18239, 124060, 134300, 6426, 326934, 5500,
224270 and 226570. Photographed tags establish only the explicitly listed
configuration suffixes and M-prefixed full aliases. Other suffixes remain empty.
18239 is physically stamped and its photographed movement is 3155, contradicting
the source's 3055 table. 5500 has a photographed 1520 with 26-jewel inscription.
6426's exact manual-wind calibre is not established; movement remains empty.
All five modern watches lack opened movement photographs and retain empty
movement categories. Paired internal-back numbers 18200, 1002 and 6427 are not
new watch-reference aliases. Later fitted bracelets and source discrepancies
are labelled, without claims of factory originality. No paperwork images are
attached. `photograph-loupe-rolex-sources.json` retains the full inspected
gallery and provenance evidence.

`photograph-loupe-archive-discovery.json` records a sanitized title-only scan
of all 4,368 closed auction lots across 44 public API pages. Its 820 potential
reference matches are discovery leads, not visually verified coverage. Matching
uses numeric boundaries in the original title, preserving separators; this
avoids 14270 being inferred from 214270 or 1807 from 18078. No bidder identifiers
or auction-account data are published. Earlier Catawiki URLs redirected to
generic category pages and yielded no identifiable reference coverage.

Research is still IN PROGRESS: 2,000 stored identifier keys remain unreviewed,
and reviewed gaps remain open for further suitable sources. Live authenticated
shared refresh/RLS validation still requires an authorized test session.

Eighth-checkpoint validation: all 35 Node tests passed. Actual-source Chromium
loaded and enlarged all 29 new entries / 27 distinct inspected files across all
18 explicitly accepted keys, checking credits, variant labels, match scopes and
mobile overflow. Existing 595 entries were unchanged from prior published checks.
Browser fixtures passed signed-in/out matching and refresh, movement restrictions,
Rolex reference/serial/clasp flags and reminder, copy, save/next, RMA, daily reset,
progress and history. Fixtures do not prove live authenticated Supabase/RLS access.

## Ninth checkpoint: documented Rolex configurations

PR #15 was published and verified: Pages run 37976320808 succeeded; six served
application/audit files matched the tested local SHA-256 hashes. Actual live
Chromium loaded and enlarged 52 photographs, checked unsupported full suffixes
and existing positive controls, and passed mobile overflow. The ready-reference
exports were updated against that live catalogue: 290 exact accepted keys.

This next partial batch inspects all 179 photographs in eight complete Loupe
This galleries and attaches 27 entries / 26 distinct files. References: 116000,
116900, 124200, 124300, 126200, 126600, 126710BLNR and physically stamped 126711
paired with documented 126711CHNR. Actual tags establish 116900-0001,
124300-0003, 126200-0017 and 126710BLNR-0002, including their explicit M prefixes.
116000 is physically stamped and has a photographed 3130 calibre stamp and
internal back 2080. Source title incorrectly says Date; the actual dial has no
date and no neighbouring date reference is inferred. Other seven movements are
not photographed and remain empty. The 116900 caseback has auction-documented
Oman/Khanjar engraving, labelled as this special specimen, not a standard
caseback baseline; the photograph alone does not establish factory engraving
provenance. Jubilee configurations and Wimbledon/lavender/blue dials remain
explicit. The tag phrase OYSTER M does not override photographed Jubilee
bracelet construction. No numeric 126710 alias is inferred without physical
case evidence for this new specimen.

`photograph-loupe-configuration-sources.json` retains gallery inspection, source
descriptions, provenance and exact accepted keys. Research remains IN PROGRESS:
1,990 stored keys are unreviewed, and reviewed category gaps remain open.

Ninth-checkpoint validation: all 36 Node tests pass. Actual Chromium loaded and
enlarged all 27 new entries / 26 distinct inspected files across 17 explicit keys,
checking source credits, representative scopes and mobile overflow. Full workflow
fixtures again passed matching/refresh/safety, Rolex flags/clasp reminder, copying,
save/next, RMA, daily reset/progress and history. Live authenticated RLS remains open.

## Tenth checkpoint: vintage case and calibre evidence

PR #16 was published and verified: Pages run 37977132750 succeeded; six served
application/audit files matched tested SHA-256 hashes. Live Chromium loaded and
enlarged 51 photographs, checked unsupported suffixes and positive controls,
and passed mobile overflow. Ready exports now list 307 accepted exact keys.

Eight complete Loupe This galleries supply 154 actual photographs, all visually
inspected. Selected opened movements, internal backs and identifying marks were
inspected at full resolution. This batch attaches 41 entries / 33 distinct files
for physically stamped 14010M, 14270, 15000, 16628, 18039, 1807, 6542 and paired
internal-back-identified 6694. Source title/table say 14010, but the actual case
reads 14010M with photographed 3130; 14010 receives a reviewed gap, not these
neighbouring-reference photos. Source table says 1030 for 6542, but the actual
rotor reads 1066. Other photographed markings establish 3000, 3035, 3135, 3055,
1556 and 1225. A diagnostic crop confirms 6694's actual 1225 marking; the attached
photograph is the unchanged source file. Internal numbers 2140, 16620, 18000
and 1803 are not new watch-reference aliases. Special Kuwait Oil Company, Honda
and Qaboos configurations are labelled. External award engravings have separate
closed-back views. Later fitted Oyster equipment and UK-made gold bracelet
construction are explicit, without factory-originality claims.

`photograph-loupe-vintage-sources.json` preserves the inspected galleries, exact
case identities, movement execution evidence and source discrepancies.

An opened photograph reused as Caseback could previously bypass external-only
movement filtering. The matcher now suppresses any photograph sharing the URL
or inspected file hash of a verified movement, plus explicitly marked
`depictsMovement` photographs (including opened 6426 whose exact calibre remains
unverified). Ordinary lookups retain the galleries; external-only lookups retain
suitable external photos and the existing opening warnings. Tests cover both
same-URL and alternate-URL/same-file cases, explicit marking, and an actual
restricted Sinn UX browser fixture with a movement reused under Caseback.

Research is IN PROGRESS: 1,981 stored identifier keys remain unreviewed. Live
authenticated refresh/RLS validation still requires an authorized test session.

Tenth-checkpoint validation: all 38 Node tests passed. Actual-source Chromium
loaded and enlarged all 692 accepted gallery entries (668 distinct inspected
files) across 315 explicit reference keys, with credits, representative labels
and mobile layout checks. The separate new-batch check loaded all 41 entries
from 33 files across eight exact keys. Browser fixtures passed existing workflows,
sign-in/out and refresh, and the opened-photo Caseback restriction regression.
Live authenticated shared-refresh/RLS remains pending an authorized test session.


## Eleventh research checkpoint — publication awaiting GitHub access

The tested tenth checkpoint is saved locally in commit 0a3e70b. GitHub's session
credential became invalid before pushing, so the live site remains at PR #16
with 651 verified entries. Reconnection has been requested; no production
repository or rollback point was changed.

Ten further complete Loupe This galleries contain 186 actual photographs, all
visually inspected. Selected case-reference stamps, opened views, cards and
clasps were inspected at full resolution. This adds 39 gallery entries from 36
files for nine exact keys. Only 126720VTNR is documented on its photographed
card; numeric 126720 remains a reviewed gap without a documented numeric alias.
The physically stamped 6536/1 specimen is withheld from stored 6536. No full
catalogue suffix is inferred. Reference 268622 has an actual rotor marked 2236,
contradicting the source table's 2235; the internal 2470 is not a case alias.

Vintage Submariner service dials/hands are labelled; fitted bracelets are not
claimed factory-original. The 5508's actual 62510H / B clasp is later Jubilee-coded
equipment fitted to an Oyster bracelet. References 6204 and 6205 have photographed
internal backs, but their exact A260 execution is not sufficiently established,
so Movement remains empty and the opened back views are marked depictsMovement.
The 6204 back has a struck-through 6205 with 6204 underneath; its physical case
reads 6204 and does not become a 6205 alias. Reference 6538's actual 1030 and I59
back are recorded without inheriting the source's 1955 year claim. Its aftermarket
nylon strap supplies no Rolex bracelet/clasp baseline. The 278278 gallery supplies
gold President construction with a closed clasp; internal clasp markings remain
unsupported. Its photographed card says champagne ten diamonds despite a source
table saying silver. Modern unopened calibres remain gaps.

photograph-loupe-service-sources.json preserves the complete inspected source set
and acceptance decisions. Current progress: 267 stored keys reviewed, 1,971
unreviewed. Research is IN PROGRESS. Authenticated shared refresh/RLS still
requires an authorized test session.

Eleventh-checkpoint validation: all 39 Node checks passed. Actual-source Chromium
loaded and enlarged every new entry: 39 gallery entries from 36 inspected files
across nine exact keys; source credits, representative labels and mobile layout
passed. The local catalogue has 324 explicitly accepted keys. These additions
remain unpublished because the GitHub session credential is invalid.


## Twelfth research checkpoint — Breitling specialist gallery audit

Re-inspected all 99 images from the previously enumerated BreitlingSource.com
model galleries. For 23 stored keys whose image-category reviews had not yet
been recorded, audited 28 source pages and 47 distinct gallery images. All 28
pages returned HTTP 200 on this pass. Two actual photographed front views are
accepted: A13362 Bentley GT and A59028 Jupiter Pilot. Original 300 x 300 resolution
and the limited usefulness for fine-detail comparison are explicit; credits and
watermarks remain intact. Neither supplies an opened movement or verified clasp.

Mixed reference/era galleries (A44364, A13353 and D12022), gold-looking Flying B
specimens under steel A16362, and product media whose exact photographed origin
is insufficiently established remain reviewed gaps. Model-page reference lists
never identify every pictured specimen. Other source sets still require research.
photograph-breitling-gallery-audit.json records source access, inspected file
hashes and acceptance decisions. No pending media was silently promoted.

The live site remains PR #16 / 651 entries; local unpublished research contains
733 verified entries. Publication awaits reconnection of GitHub access.

Twelfth-checkpoint validation: all 39 Node checks passed. Actual-source Chromium
loaded and enlarged both new Breitling front photographs across their two exact
keys; source credits, representative labels and mobile overflow passed.
Authenticated live refresh/RLS remains an outstanding separate check.

## Thirteenth research checkpoint — Cartier Santos WSSA0039 / 4072

Inspected all 21 actual photographs in Loupe This lot 4763, including selected
full-resolution front, back, clasp and identifying paperwork. Four entries add
front, closed caseback, caseback marking detail and Cartier-signed folding clasp
with fitted black rubber strap. The warranty card explicitly identifies WSSA0039
and BLACK ADLC STEEL; the paired physical back independently stamps case 4072
and the matching serial suffix. Both identifiers match this labelled specimen.
The gallery does not imply that all 4072 configurations have this dial or strap.
Auction/service stickers on the back are described as specimen-specific. No
opened movement is photographed; Movement remains empty. Paperwork is research
evidence, not a gallery attachment. photograph-cartier-santos-sources.json retains
the complete inspected source set, image hashes and matching evidence.

Validation: all 39 Node checks passed. Actual-source Chromium loaded and enlarged
all four photographs for WSSA0039 and 4072; credits, representative labels and
mobile overflow passed. The live site still has 651 entries; the local catalogue
has 737. Publishing is blocked by invalid workspace GitHub credentials and absent
GitHub connector tools. Authenticated live shared-refresh/RLS validation remains
open. Research remains IN PROGRESS with 1,947 stored keys unreviewed.

## Fourteenth research checkpoint — two fully identified Omega Moonwatch variants

Inspected all 49 actual photographs from Loupe This lots 4565 and 4277. Selected
front, back, signed clasp and full-reference cards were checked at full resolution.
Seven gallery entries use six photographs across 310.30.42.50.01.001 and
310.30.42.50.04.001. The black-dial Hesalite variant has a closed steel back;
its paperwork naming 3861 supplies no movement photograph, so Movement stays
empty. The white-dial sapphire variant has the photographed manual 3861 execution
visible through its closed display back; the actual movement serial matches its
full-reference card. The same actual frame serves Movement and Caseback and is
marked depictsMovement so restricted-image handling suppresses that back too.
Paperwork remains identification evidence rather than gallery attachments.

photograph-omega-moonwatch-sources.json preserves the complete inspected galleries,
matching evidence and file hashes. No black-dial sapphire .01.002 variant, other
white-dial suffix, abbreviated family reference or common-calibre neighbour
inherits these images. Original clasp inscriptions are specimen-specific.

Validation: all 39 Node checks passed. Actual-source Chromium loaded and enlarged
all seven new entries, with credits, representative labels and mobile layout
checked. Direct checks passed full-reference punctuation normalisation, strict
variant boundaries, empty Hesalite Movement and restricted display-back handling.
The live checkpoint remains PR #16 / 651 entries; the local catalogue has 744.
Publishing still lacks valid workspace GitHub authentication; live authenticated
shared-refresh/RLS validation also remains open. Research is IN PROGRESS: 293
stored keys reviewed, 1,945 unreviewed. Nine further downloaded Omega galleries
await selected full-resolution evidence and promotion decisions.

## Publication verification — 2026-10-11

PR #8 is merged, and the latest photograph checkpoint is PR #16 at
`bb26ced602af392fa2b1a55c2feffe527ab7c998`. Pages deployment
37977132750 completed successfully. Six live files (`index.html`, `bench.js`,
`photographs.js`, `photographs.json`, `photograph-coverage.json` and
`photograph-coverage.csv`) matched the checkout byte for byte. Regenerating the
coverage ledger produced no changes. The rollback branch still resolves to
`b4ffc080c4dba6f55bb246377a24a3c2bf284052`. The earlier local rollback bundle
is not present in this resumed workspace; the remote rollback remains available.

The Node suite passed all eight test files, including the photograph assertions.
Browser fixtures passed the preserved workflows. Actual live Chromium loaded and
enlarged all 27 ninth-checkpoint entries (26 distinct inspected files) across 17
explicit reference keys, checking credits, variants and mobile overflow with TLS
verification enabled. Research remains in progress: 1,990 stored identifier keys
are unreviewed. Live authenticated shared refresh/RLS remains unverified because
no permitted test session is configured.

## Backup restoration and release validation — 2026-10-12

Restored `benchauth-recovery-744.zip` in a new directory. The bundle SHA-256
matched `276683b0df9258af650c03846c381afc1242b0bf6e9692c500aa67f034775e12`;
Git verified its required published base, and restored HEAD exactly matched
`045ffc1f5888157fbbf3518ea3099bef3ee5379b`. Reconciled the saved research with
main `936d73e428bb193336f773dd861bbba52c16a195`, retaining its publication record.

All 41 Node tests pass, including new Omega exact-suffix/display-back safety
and Cartier/Breitling scope regressions. Workflow browser fixtures pass. Actual
Chrome loaded and enlarged all 744 accepted gallery entries (716 distinct inspected
files) across 330 explicit reference keys, checking credits, representative labels,
variants and mobile overflow. TLS verification remained enabled. Temporary Windows
harnesses served local application files through Playwright routing because local
loopback connections timed out; actual public photograph requests were not mocked.
The first full-photo attempt timed out; the logged rerun passed the complete catalogue.
The audit was regenerated, synchronizing stale Omega movement evidence wording
with photograph-reviews.json without changing counts.

The original rollback ref still resolves to
`b4ffc080c4dba6f55bb246377a24a3c2bf284052`. A fresh local Git bundle preserves
pre-restore main and that rollback. Publication is scoped only to
`potmoodle-debug/watch-auth-pro-OLD`; production WatchAuthPro is untouched.
Command-line credential-helper execution failed; publication uses the connected
GitHub API, preserving the original recovery bundle and exact checkpoint locally.

Research remains IN PROGRESS: 293 stored keys reviewed, 1,945 unreviewed.
Authenticated live shared refresh/RLS remains unverified without a permitted test
session. The nine previously downloaded Omega galleries are discovery leads; their
local downloads were not included in this recovery bundle and must be fetched and
inspected again before promotion. These counts do not imply completion.

## Publication and resumed research — 2026-10-12

PR #18 merged at b71e7c07ed04fc20ff5df5079e53247a66ad159d. Pages run
38233570145 succeeded. Six live application/audit files matched published Git
bytes. Live Chrome loaded/enlarged 13 restored Omega, Cartier and Breitling
entries, with credits, variants and mobile layout checked. Both rollback branches
are retained. The original recovery commit remains verified in the local bundle.

Research continued after publishing. European Watch Company stock 45681 has nine
inspected Globemaster photographs; Phillips HK080216 lot 851 has one inspected
PAM00024 photograph. Four new entries cover exact identified front/back/clasp
views without neighbouring-reference aliases. Omega Movement remains a gap because
its calibre engraving is obscured; Panerai Movement, Caseback and Clasp remain
gaps because those views are absent. The Omega display back is marked
depictsMovement for safety suppression. Full receipts are in
photograph-resumed-20261012-sources.json. These new additions are local research,
not part of the published 744-entry release. Research remains IN PROGRESS.

Resumed-batch validation: all 42 Node tests pass. Actual Chrome loaded and enlarged
all four new public-source entries with credits, variant labels and mobile overflow
checked. Published release remains 744 entries; the local research checkpoint has
748 entries, 295 reviewed keys and 1,943 unreviewed keys. No production repository
was modified. Live authenticated shared refresh remains pending a permitted session.

## Panerai specimen pass — 2026-10-12

Inspected 19 photographs across four complete galleries for PAM00091, PAM00287,
PAM00380 and PAM00557. Twelve entries add exact-reference front/back/clasp views
and the source-paired manual P.3000 execution for left-handed PAM00557. Movement
026697 and the two-screw balance bridge are visible. Its display-back frame serves
Movement and Caseback and is suppressed in both categories for external-only
lookups. Other three movements remain empty; the PAM00557 buckle is not pictured.
Miquel original 490 px images have explicit comparison limits. Seller masking and
specimen edition numbers remain explicit, and OP markings create no PAM aliases.
Personal guarantee paperwork is not attached or transcribed. Full receipts are
in photograph-panerai-specimen-sources.json. Research remains IN PROGRESS.

Validation: all 43 Node tests pass. Actual Chrome loaded/enlarged the complete
unpublished 16-entry batch (13 distinct inspected files) across six exact keys,
with source credits, variants and mobile layout checked. The prior published 744
entries are unchanged. The local catalogue now has 760 verified entries; 299
stored keys and 218 source records reviewed; 1,939 keys remain unreviewed.

## Further Panerai specimen review — 2026-10-12

Thirteen accepted entries from four exact references (PAM00574, PAM00609, PAM01005, PAM01024), after inspecting all 30 distinct gallery frames and selected movements/backs/buckles at full resolution. Source receipts and individual matching limits are in photograph-panerai-second-specimen-sources.json. PAM00574 has contradictory seller metadata: manual description and visible rotorless execution take precedence over the Automatic field; physical P.1000 engraving is not claimed. PAM00609 visibly carries P.5000 / EIGHT DAYS / 21 JEWELS and movement 020836. Both display-back images are withheld for external-only lookups. Closed-back models retain movement gaps. No short PAM24, OP, adjacent-reference or suffix aliases were added. Four of fourteen stored Panerai keys remain unreviewed. Research and signed-in refresh verification remain incomplete.

Validation: all 44 Node regression tests pass. Real-image browser check loaded the prior 16 additions and the PAM00574 views, then timed out while enlarging the Christie's PAM00609 front image. This batch is not published; direct browser delivery must be resolved or affected photographs withheld before release.

## Delivery gate and PAM00915 review — 2026-10-12

Three PAM00609 entries retain their inspected evidence but are pending and withheld: original and resized source URLs repeatedly timed out when loaded directly in Chrome. This does not invalidate the visual evidence; browser delivery remains unresolved. PAM00915 adds exact-reference front, closed steel back and signed pin buckle views after all seven gallery photographs were inspected, including selected back/buckle at full resolution. No source-described P.5000 movement image is inferred. Contradictory paper dating and seller-masked identity are documented.

Current release candidate: 29 accepted additions over published PR #18; 45 Node regression tests pass; all 29 actual images (25 distinct inspected files) load and enlarge across 10 explicit keys with credits, variant labels and mobile overflow checked. No application code or workflows changed. Three Panerai keys remain unreviewed, and the complete inventory and live signed-in refresh/RLS remain unfinished. Current pre-release main is b71e7c07ed04fc20ff5df5079e53247a66ad159d; original rollback refs are preserved.

## PR #19 publication and continued PAM01271 research — 2026-10-12

PR #19 merged at 39163341dc25ade497b32b35a5015119f5c9c69e with exact tested tree 5bbed2cf3d9260dfc50fbeaf43b345910d86ded4. Pages run 38237342597 succeeded. Live index.html, bench.js, photographs.js, photographs.json and both coverage files returned HTTP 200 and matched main byte for byte. All 29 additions passed live real-image loading/enlargement, credits/variants and mobile overflow checks. A complete 773-entry Git recovery bundle was verified and restored to b049fdde8e57be6726f21e08706a39bee34b70c5; original 045ffc1 and rollback history were confirmed present.

Research continues after publishing: EWC stock 57576 PAM01271 six-frame gallery inspected, selected closed steel back and signed buckle at full resolution; three accepted exact-reference photographs passed actual Chrome loading/enlargement/credits/mobile. These three entries are LOCAL AND UNPUBLISHED. Manufacturer archive redirect to PAM01372 is not a matching source; no neighbouring-reference photos are reused. Written P.900 data does not supply a movement image. Two stored Panerai keys remain unreviewed; overall 1,933 keys remain unreviewed and authenticated refresh/RLS remains outstanding.

## Final stored Panerai keys reviewed — 2026-10-12

PAM01305 EWC stock 70146 and PAM01572 GINZA RASIN item U-PAM01572: all fourteen gallery frames inspected; selected back/movement/buckle frames at original resolution. Four PAM01305 entries retain the photographed signed automatic rotor, 31-jewel execution and two-screw balance bridge; source-paired P.9010 identification does not claim an unreadable physical calibre inscription. Three PAM01572 entries retain AA-series source label, actual closed back OP7607 / 50 m and original 640 px limits. Dealer-stated recent service/paper dating is labelled as source evidence, not a factory-originality claim. Illustrative mannequin and paperwork frames are excluded from public attachments/receipt URLs. Neither OP7607 nor neighbouring references inherit images.

Safety correction: PAM00574 and PAM01305 buckle frames also show blurred display-back movements in the background. Both entire frames are flagged depictsMovement and withheld for external-only lookups. Actual browser checks passed fourteen entries (twelve distinct files) across four keys: the ten unpublished PAM01271/PAM01305/PAM01572 additions plus the affected PAM00574 specimen. All 47 Node regression checks pass.

All fourteen stored Panerai keys now have source reviews, with categories and source-record evidence documented. This is reviewed inventory, not complete photograph coverage: absent movements/buckles remain researched gaps, three PAM00609 assets remain pending delivery and further source research stays open. Local catalogue: 783 verified entries; published PR #19 remains 773. Overall 1,931 identifier keys and 2,221 source records remain unreviewed. Live authenticated refresh/RLS remains outstanding.

## PR #20 publication and continued Sinn research — 2026-10-12

PR #20 merged at 080313df7f30e22f8d305ba06b5a795232bca86c. Uploaded and fetched main tree 07021a88b5bc440d11e10c676d6df7821bc38e07 exactly matches tested local files. Pages run 38238782029 succeeded. Live index.html, bench.js, photographs.js, photographs.json and both coverage files returned HTTP 200 and matched current main byte for byte. All fourteen affected/new Panerai entries (twelve files, four keys) passed real live loading/enlargement/credits/variant/mobile checks. Original rollback refs plus rollback/benchauth-before-panerai-final-20261012 at 39163341dc25ade497b32b35a5015119f5c9c69e are preserved.

Continued source research: June 10 2025 Teddy Baldassarre hands-on white 104 St Sa I W review supplies four accepted views, with generic 104/Sinn 104 explicitly representative. Actual photographed rotor/finishing/layout retained; source-described SW220-1 does not imply physical calibre inscription or interchangeable ETA execution. U15/UX comparison frames excluded. Delray Watch U1 SDR inventory 7172 supplies exact source-identified front, closed back and signed clasp; all eight frames inspected and selected back/clasp at full resolution. Numeric 1010 and adjacent U1 variants are not aliases. No movement view exists. Source receipts are photograph-sinn-104-sources.json and photograph-sinn-u1-sources.json.

Seven LOCAL UNPUBLISHED Sinn entries (six distinct files) passed actual Chrome image loading/enlargement/credits/variant/mobile across five explicit keys. All 49 Node checks pass. Four of six stored Sinn keys remain unreviewed. Overall 309/2,238 keys and 228/2,447 source records reviewed, with 1,929 keys unreviewed. No authorized signed-in session is available; live authenticated refresh/RLS remains outstanding. Research remains IN PROGRESS.

## Sinn 140 / 42 conflict review — 2026-10-12, unpublished

Inspected all six Betteridge inventory 40991281 / AS08304 gallery frames and its original description. The listing title says 140/42, but the description identifies the particular watch as a 142. Its Lemania 5100 attribution is textual; there is no opened movement photo. Closed back has commemorative space engraving, and the rear bracelet frame does not show a detailed clasp. No images were accepted for the stored key. The public source receipt preserves the conflict and inspected image hashes; exact-model research remains open. Generated coverage now records 310 reviewed keys and 229 reviewed source records, with 790 verified photograph entries unchanged. All 49 Node tests pass. This review has not been published.

## Final three stored Sinn keys — 2026-10-12, prepared for publication

Eleven additional views were inspected and accepted across 358 Anniversary (four), 206 Arktis II (four) and U50 Hydro (three). Generic 358 is explicitly representative of the slate Anniversary specimen, with actual 1961–2011 dial and 50 JAHRE / 428/500 display back. Used brown strap and buckle side view retains signature/material limits. The source dimension and hidden calibre are not independently verified. The Arktis II front and actual display back agree with the dealer-identified blue steel specimen; its movement calibre is not physically established. Its clasp frame includes background movement, and all movement-bearing frames are flagged for external-only suppression. U50 Hydro has a physically marked closed back, steel-bezel black HYDRO dial and signed clasp; source-dated 2024 and 715 Li quartz attribution remain textual. There is no opened movement image and HYDRO safety remains intact. All box/paperwork frames are excluded from public attachments and receipt URLs.

All six stored Sinn keys now have an initial review, including the unresolved 140/42 listing/specimen conflict; this is not complete photograph coverage. Overall inventory remains 1,925 unreviewed keys and 2,215 unreviewed source records. All 51 Node checks pass. Eleven new entries (nine distinct actual files) passed real Chrome loading/enlargement/credits/variant/mobile checks across seven explicit keys. Combined with the earlier seven Sinn entries, this prepares eighteen photograph entries for release beyond published PR20. No authorized signed-in session is available; live authenticated refresh/RLS remains outstanding. Research remains IN PROGRESS.

## Sinn publication verified — PR21, 2026-10-12

Published only to potmoodle-debug/watch-auth-pro-OLD. PR21 merged as ff2aac29b5f1a2bfe59846074a200300fd6e7094; release tree 07f1942af08e020a5af47cc4056bcf7d90be1876 exactly matches the tested local tree. Rollback branch rollback/benchauth-before-sinn-20261012 retains prior main 080313df7f30e22f8d305ba06b5a795232bca86c. Pages run 38241213996 completed successfully. Six live files (index.html, bench.js, photographs.js, photographs.json, photograph-coverage.json and CSV) returned HTTP200 and matched main bytes exactly. All eighteen new Sinn entries (fifteen actual files) loaded and enlarged on the live site across twelve explicit keys, with credits, variants and mobile layout verified. App and workflow files were unchanged; production WatchAuthPro was untouched.

The original goal continues: 1,925 keys and 2,215 source records remain unreviewed; reviewed gaps and pending media remain open. Signed-in refresh/RLS remains outstanding because no authorized session is available. Next initial source review: stored anOrdain Model 2.

## Early anOrdain Model 2 — 2026-10-12, local unpublished

Three actual Kibble Watches specimen views accepted: front, UK/Ireland-map closed back and pin buckle. All nine gallery frames inspected, selected originals 1000px. Source identifies August 2020 early polished-steel 36mm white vitreous-enamel Model 2 and attributes manual SW210-1. Stored Model 2 receives an explicitly representative white early variant; no current Porcelain, G101, decorated A1, large-case or other-dial inheritance. Hidden calibre and manufacture date remain source attribution. Map engraving is specimen-specific; the source describes a signed buckle but the accepted face view does not show a legible signature. Staged frames with an unrelated loose gold-tone movement prop are excluded; no actual opened movement photo was accepted. Box/paperwork frame excluded from public receipt URLs.

All 52 Node tests pass. Three distinct files loaded and enlarged in real Chrome across the two explicit Model 2 lookup keys, including credits, representative labels and mobile overflow checks. Published main remains PR21 with 801 entries; these three additions are local and unpublished. Research remains IN PROGRESS: 1,924 stored keys and 2,214 source records unreviewed. No authorized signed-in session; live refresh/RLS remains outstanding.

## Baume & Mercier case 65900 — 2026-10-12, local unpublished

Three CLOSER 905886 views accepted: actual grey sapphire front, legibly stamped 65900 display back/crown, and signed folding clasp. All six originals inspected, selected 1000px; second CLOSER 962847 seven-frame gallery inspected as comparison but no entries merged across specimens. Source explicitly pairs M0A10617/65900. Manufacturer 10617 page identifies modern 2021 Riviera, black ADLC steel, smoked grey sapphire dial, rubber strap and 120-hour Baumatic; original Wempe authorised-dealer listing attributes BM13-1975A. Corrected the prior Vintage/Classic description and vague calibre display in the one stored 65900 rule. Retained legacy 1975A only as limited family guidance with manual review; no BM12 equivalence. All other intelligence and safety data were compared structurally and preserved exactly. Generic case 65900 has an explicitly representative M0A10617 grey/ADLC/rubber specimen; other configurations cannot inherit an unqualified variant assertion.

No movement-category entry accepted: actual display-back views are out of focus/washed out and do not physically establish calibre or detailed execution. Back and clasp frame retain movement flags, so external-only comparison shows the front only. Manufacturer ratings are specifications, not present water resistance or independently measured reserve. No independent manufacture-date, originality or authenticity verdict. Second specimen box/paperwork frame excluded from public receipt URLs.

All 53 Node tests pass. Three actual files loaded/enlarged in Chrome across the two explicit case/model keys, with credits, variant labels and mobile overflow verified. Local catalogue now has 807 entries, six beyond published PR21 (801). Research remains IN PROGRESS: 1,923 keys and 2,213 source records unreviewed; signed-in refresh/RLS remains outstanding without an authorized session.

## Bell & Ross initial stored-key review — 2026-10-12, local unpublished

Stored BRBRV1-92-S remains unresolved. Exact spelling and an alternative were searched; original manufacturer Black Steel page identifies BRV192-BL-ST/SCA and S/M/L wrist-size SKUs. Sole product image inspected but no actual-photograph provenance or exact stored-key equivalence established. No image accepted, no prefix silently stripped and no hidden full configuration inferred. All four categories retain researched identity/view gaps; further investigation remains open.

Three actual Delray 4732 BR03-92-S Black Steel views accepted: full-size front, closed back and fitted canvas/buckle. Six original scenes plus a smaller front rendition inspected; full original front/back images used. Actual closed back has BR03-92-S prefix and seller-masked identity; DO NOT UNSCREW and military-style wording are retained without inferring issue status or present pressure rating. Fitted olive canvas/dark scratched pin buckle are specimen-specific and buckle letters are not legible. Generic BR03 and source BR03-92-S are representative of this execution, not ceramic, Diver, Golden Heritage, chronograph or later generation. No opened movement photo, physically verified calibre, manufacture date or factory strap assertion. Broad source pattern was reviewed separately without promoting it to a literal stored identifier.

All 54 Node tests pass. Three new gallery entries (two actual files) loaded/enlarged in Chrome across two explicit lookup keys, with credits, representative labels and mobile overflow checked. Both stored Bell & Ross keys have an initial review; gaps remain. Local catalogue 810 includes nine unpublished additions beyond live PR21 (801). Research remains IN PROGRESS: 1,921 identifier keys and 2,210 source records unreviewed. No authorized signed-in session; refresh/RLS remains outstanding.

## PR #22 publication verified — 2026-10-12

The nine anOrdain, Baume & Mercier and Bell & Ross entries and the limited 65900 rule correction are published in OLD main c387eb67e44c79231a08f5d1dec07a0f2f0d0a35, tree 19939ec36e09aed67f84946768de478b2746ab18. Pages run 38243495983 completed successfully. Seven served files matched origin/main byte for byte (index.html, bench.js, photographs.js, photographs.json, photograph-coverage.json, photograph-coverage.csv, intelligence.json). Live Chrome checks passed all nine entries, eight distinct files, six explicit reference keys, enlargement, credits, representative variant labels and mobile overflow. Rollback branch rollback/benchauth-before-smallbrands-20261012 retains ff2aac29b5f1a2bfe59846074a200300fd6e7094. Research remains incomplete: 317/2238 keys and 237/2447 source records reviewed; 26 pending, nine rejected. Live authenticated refresh/RLS remains outstanding because no authorized session exists. Continue systematic research, beginning with the remaining Bremont records. Production WatchAuthPro was not modified.

## Bremont ALT1-C initial review — 2026-10-12, local unpublished

Four views from the original Delray ALT1-C/BL blue specimen accepted after inspecting eleven gallery files: full front, actual movement through display back, back surround and signed pin buckle. Three distinct full-size originals serve these categories. Manufacturer retired blue page supplies 2018 redesign and BE-50AE context, without establishing this specimen date or a physically legible calibre. Rotor signature, blue screws and visible finishing are recorded; no shared-base-calibre substitution. Broad ALT1-C is expressly representative of this blue steel/leather execution; ALT1-C-CR and all unsupported suffixes do not inherit it. Display-back and obscured buckle-background views carry movement flags so external-only lookup shows only front. Box/paperwork image is excluded from public receipt URLs.

All 55 Node checks pass, including strict suffix exclusions and external-only suppression. Four actual entries (three files) passed Chrome loading, enlargement, credits, representative labels and mobile layout across ALT1-C and source ALT1-C/BL. Live PR22 remains 810 entries; local next release has 814. Research IN PROGRESS: 1,920 keys and 2,209 source records unreviewed, 26 pending and nine rejected. Signed-in refresh/RLS remains outstanding. Continue with remaining seven literal Bremont keys and all remaining Bremont source records.

## Bremont ALT1-C cream review — 2026-10-12, local unpublished

Two actual original Worthington W26W12154 views accepted for the separately stored ALT1-C-CR key: cream Arabic/black-register front and signed pin buckle with brown leather. Dealer attributes ALT1-C/CR-R-S, UK supply December 2014, June 2026 service and BE-50AV. Manufacture/calibre/service are attributed, not physically verified. Five actual gallery images inspected. No unobscured caseback or movement view: categories retain researched gaps, not borrowed blue photos. Paperwork frame excluded from public receipt URLs. Buckle has conservative movement flag for obscured display-back background. Current manufacturer product JSON gives ALT1-C2-CR-SS-R-S, a different generation identifier; no equivalence inferred. Existing punctuation normalization is retained for the documented source identifier and representative cream key; unsupported full suffixes and generations remain excluded.

All 56 Node checks pass, including cream/blue separation, unsupported suffix exclusions, retained view gaps and external-only suppression. Two actual images loaded/enlarged across two explicit lookup keys with credits, representative labels and mobile layout verified. Local catalogue 816 contains six unpublished Bremont entries; live PR22 remains 810. Research IN PROGRESS, 1,919 keys and 2,208 source records unreviewed. No authorized signed-in session; refresh/RLS outstanding. Continue the remaining Bremont inventory and source records.

## Bremont ALT1-B initial review — 2026-10-12, local unpublished

Four original SWC BM-19770S views accepted after inspecting fifteen gallery scenes: special-project front, display-back movement, back surround and separately photographed external clasp. Three distinct files. Variant labels explicitly say dealer-identified 28 Squadron, December 2015 attributed, black DLC steel/bracelet and squadron/helicopter dial; no standard civilian or Apache configuration inference, no independent military provenance claim. Actual signed dark skeletonised rotor has red lettering, blue screws and visible bright bridge/gear/balance details; no legible calibre stamp. Back identity seller-masked, pressure/chronometer inscriptions are not present-performance evidence. Listing unworn statement coexists with clasp coating wear; no independent condition grade. Paperwork frame excluded public URL. A standard Timepiece Collection listing returned 403; inaccessible media not accepted.

All 57 Node tests pass. Four entries (three actual files) passed Chrome loading/enlargement/credits/variant/mobile checks for explicit ALT1-B. External-only retains front and separate external clasp; movement/back suppressed. Local catalogue 820 includes ten unpublished Bremont entries beyond live PR22 (810). Research IN PROGRESS: 1,918 keys and 2,207 source records unreviewed; signed-in refresh/RLS outstanding.

Next ALT1-ZT/51 research has located original manufacturer pages and original Exquisite Timepieces preowned listing https://www.exquisitetimepieces.com/bremont-alt1-zt-51-preowned.html (210000000250 / 00182362). Shreve source ALT1-ZT-51-R-S page archived locally; its product artwork needs actual-photograph provenance before acceptance. ALT1-ZT/51 has not yet been marked reviewed or assigned images.

## Bremont ALT1-ZT/51 review — 2026-10-12, local unpublished

Original Exquisite Timepieces preowned 210000000250 / 00182362 gallery inspected, six actual frames. Front and underside folding-clasp hardware accepted; fitted brown leather/steel/black dial execution retained, no readable clasp signature or factory originality assertion. Actual front has pale upper/lower registers, dark running-seconds register, date three, internal GMT scale, red-bordered triangular GMT hand and LONDON. No unobscured display-back or movement frame: those remain researched gaps. Relative one-month-old/23-month-warranty description is undated, not a manufacture year. No physical calibre stamp established. Source ALT1/ZT/51 and stored ALT1-ZT/51 retain existing punctuation normalization and explicitly representative specimen scope, not neighbouring ZT/BK, older ZDG, ALT1-B, P-51 or arbitrary full suffixes. Paperwork frame excluded public receipt URL. Shreve new product artwork not promoted without actual-photograph provenance.

All 58 Node checks pass, including variant boundaries, missing back/movement gaps and external-only behaviour. Two actual files passed Chrome loading/enlargement, credits, representative labels and mobile overflow across two explicit spellings. Local next release 822 includes twelve unpublished Bremont entries; live PR22 remains 810. Research IN PROGRESS: 1,917 identifier keys and 2,206 source records unreviewed. No authorized signed-in session; refresh/RLS outstanding. Four remaining literal Bremont keys (ALT1-P2, SOLO-43, S300, S502) plus remaining source records still require systematic review before this brand inventory can be called reviewed.

## Bremont ALT1-P2 JET review — 2026-10-12, local unpublished

Four actual Kibble ALT1-P2-JET views accepted after inspecting nine gallery frames: front, display-back movement, back surround and separate signed pin buckle. Three distinct files. Generic stored Bremont ALT1-P2 is expressly representative of the JET/brown-leather execution, not non-JET or arbitrary suffixes. Dealer dates September 2021 and attributes BE-53AE; physical calibre stamp is not legible in dark movement view. Actual dark skeletonised rotor and gear/bridge details retained without base-calibre equivalence. Selected images show brown leather despite another source paragraph describing black sailcloth/blue stitching. Captions preserve this conflict and actual fitted strap. Loose gold movement props in staged frame two are unrelated and excluded public URL; paperwork frame four also excluded.

All 59 Node checks pass. Four entries (three actual files) loaded/enlarged with credits, representative labels and mobile overflow verified across two explicit lookup keys. External-only suppresses actual movement/back and retains front/separate buckle. Local next release 826 includes sixteen unpublished Bremont entries; live PR22 remains 810. Research IN PROGRESS: 1,916 keys and 2,205 source records unreviewed. Signed-in refresh/RLS remains outstanding. Remaining literal Bremont SOLO-43, Supermarine S300 and Supermarine S502 plus remaining source records still require review.

## Bremont SOLO-43 initial review — 2026-10-12, local unpublished

Delray inventory 3801 title/model Solo / WH Black Dial 43mm, reference NA: eight files inspected (seven scenes plus smaller front). Four views use two actual originals: full front and partly strap-obscured back/movement/buckle frame. Source model wording retained with existing punctuation normalization; literal SOLO-43 is explicitly representative black-dial steel/leather execution. No full SKU, white-dial meaning, date or 34mm/37mm/broad-family inheritance established. Actual gold-coloured rotor, striped bright bridges and blue screws visible, whole signature/execution partly obscured and no calibre stamp. Back has rating inscription, partial BREMONT and partly masked identity. Signed steel pin buckle/black leather foreground has actual movement background; external-only retains only front. Paperwork frame excluded public URL. Broad Bremont Solo source record reviewed against this limited 43mm specimen; other sizes/configurations remain unsupported, not silently matched.

All 60 Node checks pass. Four entries (two actual files) passed real Chrome loading/enlargement/credits/variant/mobile checks across two explicit model/key spellings. Local next release 830 includes twenty unpublished Bremont entries; live PR22 remains 810. Research IN PROGRESS, 1,915 keys and 2,203 source records unreviewed. Signed-in refresh/RLS remains outstanding. Remaining literal Supermarine S300/S502 and remaining Bremont source records require review.

## Bremont Supermarine S300 initial review — 2026-10-12, local unpublished

Three original Delray 8985 views accepted after inspecting nine files (eight scenes and smaller front rendition): full black-dial front, actual closed aircraft caseback and signed pin buckle/black rubber. Source identifies S300, 40mm steel, automatic time/date, no box/papers and no manufacture year. Actual back has BREMONT SUPERMARINE / AUTOMATIC CHRONOMETER / 300M-980FT, rubber 20-R002. Rating/chronometer are inscriptions, not present performance. No opened movement or physical calibre evidence, so movement remains an explicit research gap. Representative black steel/rubber scope retained for source S300 and stored Supermarine S300; no blue/white or S301/S302/S500/S502/full-suffix inheritance. Source regex reviewed separately, not promoted into literal inventory. Fitted strap/hardware originality unproven.

All 61 Node checks pass. Three distinct actual files passed Chrome loading/enlargement/credits/representative/mobile checks across two explicit lookup keys. All three are exterior views and remain in external-only lookup. Local next release 833 includes twenty-three unpublished Bremont entries; live PR22 remains 810. Research IN PROGRESS: 1,914 identifier keys and 2,201 source records unreviewed. Signed-in refresh/RLS remains outstanding. Remaining literal Supermarine S502 and the remaining Bremont source records require review; then reconcile and publish this tested batch to OLD only.

## Bremont Supermarine S502 initial review — 2026-10-12, local unpublished

Two actual Worthington W22W0116 photographs accepted after inspecting five original gallery files: older 43mm JET black DLC steel front and signed dark pin buckle on ribbed black rubber. September 2022 UK supply is dealer attribution, not manufacture-year proof. The separate bright buckle on the leather display stand is not fitted watch hardware. No unobscured caseback or opened movement appears, so both remain researched gaps. Paperwork angles are excluded from public image URLs. Originality and current performance remain unproven. The Shreve listing describes the same source code S502-JET-R-S as 40mm; the conflict is unresolved. Both the source code and stored Supermarine S502 therefore match only as an explicitly labelled representative 43mm specimen, with no neighbour/suffix inheritance. See photograph-bremont-s502-sources.json for exact receipts and conflict source.

All eight stored literal Bremont keys have an initial review, but only ten of 29 Bremont source records have been reviewed; nineteen broader source records and category gaps still require research. Local next release 835 contains twenty-five unpublished Bremont entries; published PR22 remains 810. Research IN PROGRESS: 1,913 identifier keys and 2,200 source records unreviewed. Signed-in refresh/RLS remains outstanding.

S502 completion checks: all 62 Node regression checks pass, including source-code ambiguity, neighbour exclusion, missing interior categories and external-only matching. Two actual remote image files passed Chrome loading/enlargement/credit/representative-label/mobile checks across both explicit keys after the ambiguity labels were added. No application or workflow code changed in the Bremont batch.

## Bremont release PR23 — merged, Pages verification pending (2026-10-12)

PR23 https://github.com/potmoodle-debug/watch-auth-pro-OLD/pull/23 merged to OLD main cd3ae0ebe635167abad51e213a362bcefce998be. Release API commit 79ef93e07c7e9fa930e14dd870bab56546c6e6be and merged main both use tested tree fa3cbd57f118676ba43e779fd98cb55de6dbe91c. All fourteen uploaded blobs were checked against exact local Git blob hashes, including CSV line endings. The 25 Bremont entries use 20 inspected image files across 15 explicit lookup keys. Rollback branch rollback/benchauth-before-bremont-20261012 preserves c387eb67e44c79231a08f5d1dec07a0f2f0d0a35. Existing original, pre-restore and earlier release rollback history retained. Local test suite passed all 62 checks and specimen browser checks passed before merge.

Pages run 38254092212 built successfully; deploy job 114827739377 remains waiting at github-pages as of 13:16 UTC. Pending environment payload has no reviewers, wait_timer 0 and current_user_can_approve false; no conclusion or cause inferred. Do not restart this live run just because it is waiting. Recheck the same run/job, then run work/verify-pr23-live.cjs and the saved .pr23-live-browser.cjs harness from tests temporarily. Initial live file comparison confirms unchanged app files but photographs.json still differs from merged main, so the new photo release is NOT yet proven live. No deployment-complete claim is justified until Pages succeeds, all seven served files match exact main bytes, and all 25 entries load/enlarge with credits, labels and mobile checks.

Research continuation after release: RULE:0619 exact AIRCO-M1-WH-R-S original Goldsmiths specimen located; four original 600px files downloaded and contact sheet inspected in work/bremont-airco-pass. No photos accepted yet. Inspect individual back/movement frame before acceptance, record source-size/date/calibre/originality limitations, enumerate the single exact pattern and test neighbour/external-only boundaries. Full goal remains active: 1,913 identifier keys and 2,200 source records unreviewed, plus researched gaps and signed-in refresh/RLS outstanding. Production WatchAuthPro untouched.

## Bremont Airco exact pattern review — 2026-10-12, local unpublished

RULE:0619 is the single exact pattern ^AIRCO-M1-WH-R-S$, enumerated only as AIRCO-M1-WH-R-S. Original Goldsmiths 406000419490 explicitly identifies four gallery images as actual watch. Source approximately 40mm white steel automatic/date on leather; August 2022 is dealer year attribution, not manufacture proof. All four actual 600px files inspected; accepted front one, pin buckle three and display-back four serving movement/caseback. Actual white outlined Arabic dial/red seconds/date three, signed crown/dark middle case barrel, dark brown leather/pale stitching, bright signed BREMONT pin buckle and strap 20-R001. Back BREMONT CHRONOMETERS / WATER RESISTANT 100M with identity 39221. Signed bright rotor/red BREMONT and upper-edge gears/balance are visible but rotor/reflection obscure other execution; no legible physical calibre stamp or opened loose movement. No current performance or originality inferred. EveryWatch mirror with undisclosed original source/conflicting packaging excluded. Only exact white leather reference matched; no black, family, Mach2/Mach3 or bracelet suffix inheritance.

All 63 Node checks pass. Four accepted entries (three actual distinct files) passed Chrome actual remote loading/enlargement/credit/scope/mobile checks for one explicit key. Interior display-back file serves both categories and is suppressed in external-only lookup; front/buckle remain. Source-record review reaches 248 of 2,447, with 2,199 unreviewed. Stored literal progress remains 325/2,238 because this exact pattern is a source record, not a newly invented inventory key. Eleven of 29 Bremont source records initially reviewed; eighteen broader records and category gaps remain. Local next release 839 adds four unpublished Airco entries to merged PR23. Deployment run 38254092212 still waiting; follow the same run and verify seven live bytes/25 published Bremont entries when it completes. No signed-in session available. Full goal remains active.

## PR23 live deployment verification completed — 2026-10-12

The SAME Pages run 38254092212 completed successfully after its environment wait; it was not restarted. All seven served files compared exactly byte-for-byte against origin/main cd3ae0ebe635167abad51e213a362bcefce998be: index.html, bench.js, photographs.js, photographs.json, photograph-coverage.json, photograph-coverage.csv and intelligence.json. Live Chrome loaded/enlarged all 25 accepted Bremont entries (20 distinct inspected files) across 15 explicit reference keys, checking scope labels, variants, credits and 390px mobile overflow. No account or database mutation. This supersedes earlier deployment-pending notes. Harness uses published main catalogue rather than local unpublished Airco entries. Work logs: verify-pr23-live.cjs; pr23-live-browser.log; validation-harnesses/.pr23-main-live-browser.cjs. Original rollback and new before-Bremont branch preserved.

Live PR23 has 835 entries; local next release 839 has four tested Airco additions and all 63 Node checks pass. Research remains incomplete: 1,913 identifier keys and 2,199 source records unreviewed, pending media and researched gaps still open, and no signed-in refresh/RLS session. Continue remaining 18 Bremont source records and full finite inventory; never describe this partial release as the finished product.

## Kingsman initial source review — 2026-10-12, local unpublished

Four EWC 27756 actual gallery entries accepted from three of eight inspected files: BKM-SS steel/white front, signed decorated display-back movement/back, and signed folding clasp on fitted black rubber 22-R001. August 2015 papers, 79/500 and BE-54AE are dealer attribution; edition/identity black-masked in pixels, no legible calibre stamp or opened movement. Broad Bremont Kingsman is representative of this pictured steel/white/rubber variant only; no rose-gold/DLC/full-suffix/ALT1-WT or ALT1-B inheritance. Originality and present performance unproven; package frame not promoted. All 64 Node checks and four gallery-entry actual image browser checks pass across two explicit keys, including movement-image suppression, credits, scope and mobile. RULE:0423 reviewed within that limited source set; other Kingsman variants remain gaps. Source-record progress 249/2,447; 2,198 unreviewed. Twelve of 29 Bremont sources initially reviewed; seventeen remain. Local843, live835. User also requests BOTH verified catalogue image search and a web-image-search link; implement and validate without treating web results as verified or altering inspection identifiers. Full original research goal remains active.

## Image search requested and validated — 2026-10-12, local next release

User requests BOTH catalogue discovery and web image search. Added Search images beside Watch information. Dialog prefills brand/reference only, supports partial/details text, category filtering, twenty-entry paging, empty/no-result states, existing image enlargement/source credits and mobile layout. Discovery is explicitly labelled catalogue search result requiring reference/variant confirmation; it never assigns aliases or changes exact lookup, inspection reference/serial or manual note. Web link opens an encoded Google image query without transmitting inspection serial/comments, clearly labelled unverified with variant/render caveat. Catalogue search always excludes pending/rejected media. External-only state from explicit condition or safety rule withholds movement categories, movement-bearing views and hash/URL duplicates; movement-category web link is withheld and other web queries request exterior images with -movement (external results remain uncontrolled/unverified).

Validation: 67 Node tests pass. New actual-image Chrome search checks pass for query/category/no-result/pagination, real loading/enlargement/credit, nested-dialog Escape, exact and safety restrictions, retained inspection/manual note, serial excluded from link and desktop/mobile overflow. Existing workflow and photograph fixtures pass for lookup/mapping, discrepancies, note preservation, safety/draft/navigation, gallery failures, fixture sign-in/out/refresh, copying, save/next, RMA, daily reset/progress/history. Windows harness adaptations use local app-file fulfillment, preserve fixture routing, current MC1 output and existing mobile workspace select instead of hidden legacy navigation. These fixture checks do NOT verify live signed-in refresh/RLS; no authorized session is available. User image-search requirement added to outputs/BENCHAUTH_GOAL.md. Full photo inventory goal remains active after this release.

## PR24 image-search release verified live — 2026-10-12

PR24 https://github.com/potmoodle-debug/watch-auth-pro-OLD/pull/24 merged OLD main eb2a0e3e0c4352120a87e18f629e368c0eee472d. API release commit 78b7f65759d9d542bc5a33a2ca674366af0e11a9 and merged main use tested tree 8570fa129fd2858c27288a2ae6e9ed9f748d860c. All fourteen uploaded blobs verified against exact local Git bytes. rollback/benchauth-before-image-search-20261012 preserves prior main cd3ae0ebe635167abad51e213a362bcefce998be. Full original/pre-restore/earlier rollback history retained.

Pages run 38257400043 succeeded. All TEN served files match origin/main byte-for-byte: index.html, bench.js, styles.css, photographs.js, photo-gallery.js, photo-search.js, photographs.json, photograph-coverage.json, photograph-coverage.csv and intelligence.json. Live actual-image search browser checks passed for partial discovery, category, no results, paging, actual source loading/enlargement/credit, nested-dialog Escape, encoded web link excluding inspection serial, retained inspection/manual note, explicit and safety external-only restrictions and desktop/mobile. Live new-photo browser checked all eight entries (six distinct files) across three explicit keys with credit/variant/scope/enlargement/mobile. No live cloud/account mutation. All 67 Node tests and existing workflow fixtures pass. Fixture authenticated tests are separate from outstanding LIVE signed-in refresh/RLS; no session exists.

All 843 entries and both image-search options are now in verified live OLD release. Remaining research is still 1,913 identifier keys and 2,198 source records unreviewed, plus pending media and researched category/variant gaps. Next Bremont source records include BROADSWORD RULE:0503 and broader pattern RULE:0715: Kibble 2024 Broadsword Recon original listing located at https://kibblewatches.co.uk/products/2024-bremont-broadsword-recon-40mm-limited-edition; not yet visually accepted. Continue full goal after this feature publication. Never modify production WatchAuthPro.

## Broadsword Recon initial source review — 2026-10-12, local unpublished

Twelve actual original Kibble images inspected. Accepted three distinct files: clear steel/black stencil front with small seconds/date, closed armed-forces-badge back and signed pin buckle on black fabric/tan-leather-backed strap. Source BROADSWORD-RECON-R-S, approximately 40mm; January 2024 is dealer attribution. Actual back 015/200, APPROVED BY/HER MAJESTYS ARMED FORCES, CHRONOMETER/AUTOMATIC/WR 10 ATM are inscriptions rather than independent military issue, manufacture, certification or present performance verification. No opened movement/physical calibre evidence; dealer BE-95-2AV specification does not fill movement-image gap. Strap underside 20-R; hardware originality unresolved. Pocket-watch props and package/paperwork angles excluded from public receipts.

RULE:0503 broad BROADSWORD and RULE:0715 broader pattern initially reviewed within the limited Recon source set. Full source code is documented; BROADSWORD and BROADSWORD RECON lookups remain explicit representative Recon only, with no bronze/DLC/generic steel/full-suffix inheritance. Other pattern variants/category gaps remain open, so this is not complete family coverage. All 68 Node checks pass; three actual distinct images load/enlarge with credits, scope/variant labels and mobile checks across three explicit keys. All are exterior and remain under external-only mode. Local next release 846 contains three unpublished Recon entries; verified live PR24 remains843 with image search. Research remains 1,913 stored identifier keys and 2,196 source records unreviewed. Fourteen of 29 Bremont source records initially reviewed; fifteen remain. Signed-in refresh/RLS still outstanding. Continue remaining ARROW, broad SUPERMARINE and other source records; preserve original full goal.

## Arrow initial source review — 2026-10-12, local unpublished

Original Mappin & Webb ARROW-R-S listing and four original photographs inspected. Accepted three distinct exterior files: black Arabic monopusher front, closed armed-forces-badge back and signed bright pin buckle. Pictured blue fabric upper and brown leather backing differ from dealer leather-only description; captions retain the distinction. Source size 42mm steel and year 2020 are dealer attribution, not independently established manufacture date. Inscriptions do not prove military issue, certification, originality or current performance. No opened movement or physical calibre stamp, so BE-51AE/SW510 specification does not fill the movement-image gap. Contradictory JG Watch Co Arrow title with Broadsword reference/40mm/calibre details excluded.

RULE:0534 initially reviewed. Full ARROW-R-S is documented; ARROW remains explicitly representative of this strap specimen. ARROW-B bracelet, Vulcan and other suffixes not inferred. All 68 Node checks pass. Three actual files load/enlarge with credits and variant labels across two explicit keys, including mobile layout. Local total849 includes six unpublished Broadsword/Arrow entries; live PR24 remains843. Research remains incomplete: 1,913 identifier keys and 2,195 source records unreviewed. Fifteen of 29 Bremont source records initially reviewed; fourteen remain. Live signed-in refresh/RLS outstanding.

## PR25 publication and next priority — 2026-10-12

Six Broadsword Recon and Arrow entries published in PR25. Exact remote tree 94014c7d59b632bfe6c1c4c612e07ebd5e6ea2f7 matches the tested local tree; prior main preserved as rollback/benchauth-before-arrow-recon-20261012. Pages run38259484711 succeeded. Ten served files match current main byte-for-byte. Six actual original files load/enlarge across five explicit lookup keys with credits, variant/scope and mobile checks. Research remains incomplete; signed-in refresh/RLS outstanding.

User requested the live Missing-reference queue be researched next. Read-only query against the confirmed BenchAuth Lab project found42 requests:41 open and1 researching. No status/data changes made. Queue snapshot stays in local work files; customer questions, authors and serials are not published. Prioritise exact-reference and brand validation from that queue before resuming general inventory. The oldest item has a brand/reference mismatch requiring clarification, rather than silently inferring a cross-brand alias. Broad family names, truncated references and possible serials require explicit matching limits. Keep the full original finished-product goal active.

## Missing-reference queue: Cartier W5000156 — initial photographic review

Five actual original EWC stock13436 files inspected. Accepted three distinct views: silver guilloche Roman/date-six dial, closed four-screw back engraved Cartier/AUTOMATIC/WATER RESISTANT/750/1840 and signed/hallmarked pin buckle underside. Source W5000156 explicitly documented. Black embossed leather with pale backing; originality not independently established. Dealer18k gold attribution and750 inscription are not an assay. Dimensions differ: EWC29x35mm versus separate Christies specimen28x32.5mm. No manufacture period transferred from the other auction specimen. No opened movement or physical calibre stamp, so calibre120 remains unaccepted pending stronger evidence. Exact W5000156 pictures added without generic Tank/1840/neighbouring reference aliases. This queue reference is absent from the existing finite public inventory; no invented existing-inventory review record added. Textual mapping remains a separate outstanding task.

All69 Node checks pass including cross-brand/adjacent-reference and movement-gap boundaries. Three actual files load/enlarge with credits and variant labels, with mobile overflow checked. Local852 includes three unpublished Cartier views; livePR25 remains849. Queue remains open and statuses unchanged. Continue exact identity/specification research and remaining41 queue entries, then the full inventory. Signed-in refresh/RLS outstanding.

## W5000156 exact-reference mapping and second specimen — local unpublished

Original Alpha Omega h189 identifies automatic Cal.120 and reports internal movement inspection. This supports an attributed specification with manual-review limits; actual galleries still contain no opened movement or calibre stamp. New exact W5000156 update lists120/Cartier120 only, with no ETA equivalence or1840 alias, and preserves dimensional discrepancy. Nine original h189 files visually inspected; accepted front, closed back and signed/hallmarked buckle on explicitly aftermarket brown Cassis strap. Seller-masked identity retained. Back AUTOMATIC/SWISS MADE/18K and buckle750 are observed marks, not independent assay/performance proof. Jomashop contradictory quartz title/calibre comments and marketplace conflicting jewel counts excluded. All69 checks pass, including physical-calibre confirmation messaging, unsupported ETA caution, wrong-brand and suffix boundaries. Six actual Cartier files load/enlarge with credits, labelled variants and mobile checks.

Local855 contains six unpublished Cartier entries and one exact-reference update. Finite public inventory grows to2448source records and2239keys:253records/326keys initially reviewed;2195records/1913keys remain. Historical shared database counts982/47 are not changed or presented as a current public-file total. Queue status remains open because physical execution and remaining evidence gaps are unresolved. LivePR25 remains849. Full goal remains active; next queued research A32360, then remaining queue and full inventory.

## Missing-reference queue: A32360 follow-up — local unpublished

Existing RULE0000 already documents Steelfish GMT with exact-reference scope, calibre32 and explicit period/edition/dimension limits. Fifteen actual original Whizz Watch files inspected. Accepted three new views: blue concentric12/9/6 GMT dial with red-arrow hand/inner24 scale/date three; closed signed back; signed steel folding clasp with surface wear and microadjustment holes. Caseback LIMITED EDITION visible, but exact fraction/identity not asserted. No opened movement or physical calibre stamp, no underside clasp code or factory originality proof. Dealer2003/42mm claims remain attribution; bidirectional-bezel claim conflicts with other sources and is not adopted. H&T product JSON404; Watches.co.uk1mm field rejected. No ColtA32350/A32370, full suffix or separate edition inheritance.

Existing A32360 identifier and source review refreshed with original gallery evidence; this is gap improvement, not newly reviewed inventory. New back/clasp category coverage closes two inspected-source exterior gaps. All70 Node checks pass. Browser loads/enlarges all three new files and two existing A32360 catalogue entries with credits, representative variants and mobile layout. Harness initial count included existing entries and was corrected to verify the complete displayed set and every new asset. Local858 contains nine unpublished Cartier/Breitling views and the Cartier exact update. LivePR25 remains849; queue statuses unchanged, research incomplete, authenticated refresh/RLS outstanding. Next reconcile/publish this tested queue batch, then continue L37904 and other missing references before general inventory.

## PR26 merged; deployment verification pending

PR26 merged to OLD main0260ca3b177c4d97617e06c20b3b2eb5b64de882; exact tested tree2f6df2210288287c3e8fe777fb8df208094e54b5. Nine queue photos and Cartier exact-reference update are now in main. Prior main preserved in rollback/benchauth-before-queue-research-20261012. Confirmed Pages run38263636917: build success, deploy job114860383804 waiting. Current served photographs.json still differs from new main, so no claim of live release verification. Continue polling this same run, then execute verify-pr26-live.cjs and prepared .pr26-live-photos.cjs for all new photos plus existing A32360 entries. Do not restart deployment simply because observation expires. Queue priority remains active, no statuses changed. Longines L37904 official linked variant enumeration recorded in local work for next implementation. Full goal and live authenticated validation remain outstanding.

## PR26 live verification completed

Same confirmed Pages run38263636917 completed successfully; earlier waiting/mismatch descriptions record preparation status only. Eleven served files match origin/main byte-for-byte, including research-updates-20261008.json. Live browser verified all nine new actual source files plus two existing A32360 entries across two exact lookup keys, with enlargement, credits, variant/representative scope and mobile overflow checks. Cartier exact-reference source mapping is now served. Existing browser/auth limitations retained: no live authorized signed-in refresh/RLS session. Queue statuses unchanged; research incomplete.

Next queued L37904 research: archived six official full-reference pages. Each selected ProductPageAdditionalDocument product record identifies mvt_fct_calibre_name L844.5 and12.90mm thickness. The operating manual/video family name L844 is not substituted as precise execution. Original linked variants retain suffix-specific dial/strap differences. No images yet accepted or public mapping created for this next reference; further pixel/manual/detail review is required.

## Missing-reference queue L37904: scoped manufacturer mappings — local unpublished

Archived six original Longines full-reference pages and selected their exact ProductPageAdditionalDocument product records. All identify L844.5,41mm diameter,21mm lugs,12.90mm thickness and49.40mm lug-to-lug. Manufacturer GMT/date,25,200vph and up-to72h specification retained. New seven mappings provide base L3.790.4/L37904 family guidance plus exact96.6 blue bracelet,06.6 green bracelet,56.6 black bracelet,66.6 brown bracelet,96.9 blue rubber and56.9 black rubber. Base requires suffix confirmation; individual physical calibre/execution remain manual review. Unsuffixed L844 manual label is not accepted as equivalent physical execution; no ETA substitution,43mm L3.890.4, non-GMT or unlisted-suffix inheritance. No exhaustive historical production interval claimed.

Exquisite original product endpoint returned one650x650 image explicitly labelled LIVE IMAGES COMING SOON. Pixels inspected and image excluded; no actual photographs accepted and no fabricated movement/back/clasp coverage. Original official imagery and further actual specimen sources still need review. Source receipt records selected technical fields and archived-page hashes. All70 checks pass with exact/base, wrong-brand, suffix and calibre-equivalence boundaries. Browser confirms seven guidance records display precise L844.5 and their correct scope, with empty photo gallery and mobile layout. This does not establish image delivery or physical movement verification.

Public inventory expands to2455source records/2246keys;253records/326keys photo-reviewed,2202records/1920keys remain unreviewed. Seven new textual mappings do not count as reviewed photograph inventory. Shared historical aggregate982/47 unchanged. Local maps53; livePR26 maps46 and858verified gallery entries. Queue remains open. Continue genuine-photo/manual/execution research for L37904 and remaining queue, then full inventory; no signed-in test session.

## Missing-reference queue Omega25025000 — local unpublished

Original Omega exact2502.50.00 page supports black/steel42.2mm, self-winding Co-Axial2500 and48h nominal reserve. Twelve original SwissWatchExpo files inspected; four gallery entries from three distinct files accepted: front1, movement/back7 and signed clasp8. Papers10 corroborate25025000/2500 but are excluded as category photographs. Actual rotor marked OMEGA2500; no2500A/B/C/D execution suffix confirmed. Bracelet underside code/originality, full production interval and individual date remain unresolved. Dealer EWC9471 conflicting blue-dial description excluded. Clasp view includes display movement; external-only retains only front. No partial2502.50, adjacent2503/2504, quartz2512, unsupported suffix or generic ETA equivalence.

All71 Node checks pass, including exact/wrong-brand and physical-calibre/external-only boundaries. Four actual entries (three files) load/enlarge with credits, variant/scope and mobile checks. Local862 verified entries and54 research updates; livePR26 remains858/46. Inventory2456sources/2247keys;254sources/327keys initially reviewed;2202sources/1920keys unreviewed. Research remains incomplete; queue status unchanged and no live authenticated session. Next reconcile/publish Longines+Omega tested batch to OLD only, then WAY2113 and remaining queue/full inventory. Original rollback history retained.

## PR27 published and live verified

Longines seven mappings and Omega exact guidance/four photographs published via PR27 to OLD main499b9c204b36fe1129e7fe13220506ee22473a0b, tested tree595b6c329788ca2dd119b349ccd3441bdcae0a0f. Rollback branch rollback/benchauth-before-longines-omega-20261012 preserves prior main0260ca3. Pages run38266436794 completed successfully. Eleven served files match main byte-for-byte; all four Omega gallery entries (three distinct originals) load/enlarge live with credits, variant/scope and mobile checks. No signed-in session; authenticated refresh/RLS outstanding. Queue statuses unchanged; full goal active.

Next WAY2113 research: official WAY2113.BA0928 page found. Search excerpts conflict between steel title and steel/gold description; inspect exact specifications and actual photographs before accepting material/execution. Do not infer ETA/Sellita identity from Calibre5 or promote base suffixes without evidence.

## Missing-reference queue WAY2113 — local unpublished,2026-10-13

Archived original manufacturer WAY2113.BA0928 and SWC18998S source pages. Manufacturer technical section specifies grey/steel41mm Calibre5 automatic38h28800vph300m; steel/gold description contradicts steel case/bezel fields and is retained as discrepancy. Dealer partial WAY2113 says40.5mm and December2016 warranty date; neither size resolved nor manufacture date inferred. Two new scoped mappings: partial base requiring suffix confirmation and exact manufacturer BA0928. No ETA2824/SW200 equivalence or unlisted bracelet-suffix inheritance.

Five actual original800x800 files inspected. Accepted front1, closed diver-helmet back3 and clasp3 as three entries/two distinct files. Grey horizontal-groove dial with date three and CALIBRE5 printing. Back reference/identity too faint to assert; no opened movement. Clasp safety catch/microholes visible, but blue TAGHeuer-printed protective film hides metal-face marks; underside code/originality unproven. Partial specimen remains representative for WAY2113 only; it does not supply BA0928/BA0910 full-reference photos. Packaging view excluded. All72 Node checks pass, including wrong-brand/suffix/execution boundaries; three actual entries load/enlarge with credits/scope/mobile checks. External-only retains three exterior entries.

Local865 verified entries,56 updates. LivePR27 remains862/54. Queue statuses unchanged, research incomplete; no live authorized signed-in session. Next reconcile/publish tested WAY2113 batch to OLD, then PAM00992 and remaining queue/full inventory. Production WatchAuthPro untouched; rollback history preserved.

## PAM00992 next queue source checkpoint —2026-10-13

Original SwissWatchExpo exact-reference page and twelve actual original files archived locally with dimensions/hashes. Contact sheet and detailed movement/back/buckle images inspected. Movement visibly markedP.5000 with broad bright bridge and open cutout exposing a gear; do not substitute generic fully closed bridge illustrations. Signed pin buckle view also reveals display movement and requires external-only suppression if accepted. No public photos/mapping added yet; continue full front/strap/papers/specification inspection and precise execution limits before acceptance. WAY2113 tested local batch remains unpublished. Full goal active; queue statuses unchanged.

## PAM00992 exact specimen accepted — local unpublished2026-10-13

Source and papers10 corroborate exact PAM00992. Accepted four entries/three files: front2, physically markedP.5000 open-cutout bridge movement/back6 and signed pin buckle7. Buckle view reveals movement; external-only front only. Papers March11,2021 not manufacture-date proof, identity not authentication. Dealer45mm/8day attribution retained; no neighbouringPAM/case-code alias or fully closed/generic P.5000 execution substitution. All73 Node checks pass, including exact/wrong-brand/neighbour and external-only boundaries. Four actual entries load/enlarge with credits/scope/mobile checks. Local869 verified entries/57 updates; livePR27 remains862/54. WAY2113/PAM00992 tested batch awaits reconciliation/publication to OLD; research incomplete, queue statuses unchanged and authenticated refresh/RLS outstanding.

## PR28 live verified —2026-10-13

Published WAY2113/PAM00992 batch via PR28 to OLD maincf8b8d8d30507177e1429b8ca428a762307842db, exact tested tree36db64420626210d68368ab0cb1536a86c6987c7. Rollback/benchauth-before-tag-pam992-20261013 preserves499b9c2. Pages38365740761 succeeded; eleven served files match main byte-for-byte. All seven new gallery entries/five distinct originals across two explicit keys load/enlarge live with credits/scope/variant/mobile checks. Live869 entries57 updates. Full research remains incomplete, queue statuses unchanged; no authorized signed-in refresh/RLS session.

Next queue L37884: original Longines L3.788.4.06.6 page and original technical sheet found; initial search indicates42mm non-GMT HydroConquest/L888.5. Do not transfer earlier41mm L37904 GMT/L844.5 or43mm L38904 evidence. Inspect exact full suffix product data and original pixels before acceptance. Source https://www.longines.com/zh-tw/p/watch-hydroconquest-l3-788-4-06-6 and manufacturer technical sheet https://cdn.uc.assets.prezly.com/28de94ad-5c1a-482d-8aa6-4c2bc6a3ed18/-/inline/no/Technical%20Sheet%20EN%20HydroConquest.pdf remain next review targets, not accepted mapping/photo evidence.

## Queue L37884 limited source guidance — local unpublished2026-10-13

Three exact manufacturer pages archived/selected product records: L3.788.4.06.6 green,56.6 black,96.6 blue lacquered bracelet variants. All specify L888.5,42mm,21mm lugs,11.70mm thick,51.20mm lug-to-lug. New four mappings comprise partial base plus these three exact suffixes, with manual execution/suffix review. Broader dealer L888 and conflicting L888.2 not equivalent; no transfer of earlier GMT L844.5 or neighbouring references. Other linked variations remain to enumerate; no exhaustive family or production-period claim.

No actual photos accepted; all four photographic categories remain open. No source/identifier photograph review invented from textual mapping. All73 checks pass with exact/wrong-brand/unsupported-suffix/calibre boundaries. Browser confirms four guidance records display precise L888.5 and correct scope, empty photo galleries and mobile layout; zero-image harness output does not establish image/credit verification. Local61 updates/869 verified photos; livePR28 remains57/869. Queue statuses unchanged; full goal/authenticated checks remain outstanding. Continue original pixel/specimen research and linked variants before publication, then remaining queue/full inventory.

## L37884 linked-variant enumeration — local unpublished2026-10-13

Archived four further exact linked manufacturer pages70.6/90.6/98.6/99.6 and selected their ProductPageAdditionalDocument records. All againL888.5,42mm/21mm/11.70mm/51.20mm. Now eight scoped records: partial base plus seven exact suffixes.98.6 labels frosted-blue exclusive edition/steel bracelet; no limited count inferred.70.6/90.6/99.6 visible wording leaves detailed bracelet configuration requiring further material/pixel review; no mesh/rubber/sibling inheritance invented. Source receipt retains exact paths and page hashes. All73 checks pass; browser confirms eight guidance/scope records, empty galleries and mobile layout. No actual images or photograph reviews added; local65updates869photos, livePR28 remains57/869.

Specimen search located JZL partial-reference green listing mirrored on EveryWatch and original Poshmark seller listing; eBay267733447474 original fetch failed. Link-only seller listing128106545880 is loose bracelet hardware and not a watch specimen. No mirror image accepted; no category coverage invented. Continue original seller-page/gallery pixels and manufacturer imagery review before accepting, then publish tested mappings/photos to OLD and resume Tudor7699/remaining queue/full inventory. Queue statuses unchanged; signed-in checks unavailable; full goal active.

## L37884 original seller specimen photos — local unpublished

Original seller gallery eleven1000x1333 files inspected; accepted front1, closed base-reference back8 and open bracelet/clasp6. Green partial L3.788.4 representative only; no complete06.6 suffix inferred and no full-reference photos transferred. Back magnetic/water markings not test evidence; faint hardware code fragment unasserted. Movement/physical L888.5 gap remains. Packaging excluded. All74 checks pass and three actual files load/enlarge with credits/scope/mobile checks. Local872 photos65 updates; livePR28 remains869/57. Full goal active; queue unchanged and authenticated checks outstanding. Reconcile/publish this tested batch next; continue remaining queue/full inventory.

## User-requested workday tally settings —2026-10-13

Added Your workday dialog from target and Set workday & breaks controls: total goal, same-day start/finish and editable break start/finish rows with add/remove. Productive blocks replace fixed timetable in pace/expected/finish calculations. Overlapping/outside/empty workday rejected; no break counted twice. Existing shared daily-target upsert retained,1–500 constraint retained. Schedule persists per-account in browser and reused on later days; no database schema/auth/RLS change. UI states storage scope. Editing retains completed/RMA totals and unsaved watch draft; goal changes do not reset history.

All75 Node checks pass, custom clock-based browser fixtures verify save/refresh/break exclusion/forecast/overlap/mobile/draft/count. Existing workflow fixture passes sign-in/out/refresh, safety, notes/copy, save-next/RMA/daily-reset/history. Fixtures are not live authenticated verification; no authorized session available. Eight L37884 scoped guidance records and three original representative exterior photos remain in this same tested release batch. Full research goal remains active after publishing.

## PR29 live release and workday request completed —2026-10-13

OLD main1768c624bab8f53d428584b76ba2b59bb5dfbfca, exact tested tree52b20afb1a129b185ceb38b26229585d89ac3990. PR29 custom workday tally plus L37884 source/photo batch merged; rollback/benchauth-before-workday-20261013 preservescf8b8d8. Pages38371053994 succeeded. Twelve served files including performance.js match origin/main byte-for-byte. Deployed workday editor passes clock-controlled account/data fixtures for save/refresh, pace/future-break forecasts, invalid overlap, draft/count and mobile; no real account writes. Three actual L37884 original files load/enlarge live with credits/scope/mobile. User-facing control visible beside target; same-day London times, goal1–500, schedule stored per-account in browser, shared goal uses existing daily target. No database schema/auth/RLS changes. Original/full goal remains active and live authenticated refresh/RLS unavailable. Next queued Tudor7699, then remaining queue/full finite inventory.

## Queue Tudor7699 unresolved —2026-10-13

Exact-number searches and two original sources archived with page hashes. Original Hodinkee title/description7966 conflicts with Fine Print7699; its mirrored7699 title is not independent corroboration. Watchtrader original79470 listing uses7699/W7699 as stock code. No safe identity established: no mapping, photos, ETA2452 or7966/79470 alias accepted. Need legible physical case-reference or independent primary exact-specimen evidence. Queue stays open; this is unresolved research, not completed photo review. Public unresolved receipt records evidence/limits without customer questions or serials. Continue other queue items rather than substitute a neighbouring model.

Next Cartier83041488: original Antiqurious model83041488/8191 page located. Seller quartz grey ghost dial32mm steel/gold attribution and reported2025 boutique service include replacement dial/hands/crown; do not assume factory-original components or manufacture-date confirmation. Archive original source/product gallery for pixel review. No public mapping/photos yet. Full original goal and signed-in checks remain outstanding.

## Cartier83041488 original serviced specimen — local unpublished

Seventeen original Antiqurious IT5PXDIT90DO files inspected. Exact83041488 seller model supported; no broad8191/81912 alias. Three actual entries/front6/back11/clasp10 accepted. Grey no-index two-hand dial, screw gold-coloured bezel, bicolour bracelet, blue cabochon; seller-reported2025 dial/hands/crown replacements explicit, not as-issued claim. Closed six-screw Cartier/Quartz back with AC/OR0.750/gram inscriptions and seller-masked identity, signed folding clasp with wear. Marks not independent assay; service paperwork not independently validated. No opened movement/precise calibre number, so calibre list empty and movement comparison remains unassessed. Model32mm and late1980s/early1990s period seller attribution only.

All76 Node checks pass, with exact/wrong-brand/adjacent/case-code photo boundaries and empty-calibre no-match behavior. Three actual originals load/enlarge with credits/service variant labels/mobile checks. Local875 verified entries66source mappings; livePR29 remains872/65. Tudor7699 unresolved receipt remains source conflict, no unsafe alias/photos. Queue statuses unchanged; full research/authenticated requirements outstanding. Reconcile/publish tested queue batch next, then TAGHeuerWBY1112 and remaining queue/full inventory.

## PR30 live verified —2026-10-13

Cartier83041488 exact source/photos and Tudor7699 unresolved receipt published via PR30 to OLD maine66292c62bb817d3ec47118f1f3d810bc605fca8, tested tree5330a37bc4ada128607e593350a488aa66dc2f73. Rollback/benchauth-before-cartier830-20261013 preserves1768c624. Pages38373077465 succeeded; twelve served files match origin/main byte-for-byte. Three actual Cartier files load/enlarge live with credit/service scope/mobile checks. Live875photos66updates. Queue statuses unchanged; full research/authenticated requirements outstanding.

Next WBY1112: original exact WBY1112.BA0042 manufacturer page archived200. Describes Formula1 Solargraph blue opalin dial,38mm steel,9.9mm thickness,18.5mm lugs,TH-Polylight bezel, plain steel back, solar quartzTH50-00,100m factory rating and steel folding double-security clasp. Full charge up-to10months and cell lifespan up-to15years are manufacturer nominal claims, not present performance or charging time equivalence. Do not transfer AquaracerWBP1112, other Formula1 suffixes, generic solar movement/cell or manufacture-period evidence. Actual photo/movement execution still to inspect; no public mapping/photo yet accepted. Continue original goal beyond this partial release.

## WBY1112 exact original specimen — local unpublished2026-10-13

Manufacturer WBY1112.BA0042 Formula1 Solargraph specification archived. Rasin original exact-reference specimen gallery nine640x640 files inspected, including repeated front/illustrative mannequin/packaging. Accepted three distinct front1/back4/clasp5 originals. Actual blue dial/bezel, white flange, red seconds,date3,FORMULA1/SOLARGRAPH; closed shield/check-pattern back and folding clasp text/pushbuttons. Peripheral identity/reference faint; hardware originality/code unproven. No opened movement/physical TH50-00 stamp. Generic Watch Buyers product image excluded.

New exact BA0042 and limited representative base WBY1112 guidance: solar quartzTH50-00 manufacturer attribution,38mm/9.9mm/18.5mm,TH-Polylight bezel,100m nominal. No AquaracerWBP1112,otherFormula1suffix,ordinary disposable-cell or generic Eco-Drive execution equivalence.10month full-charge/15year cell-life nominal claims not actual performance. All77 checks pass; three original files load/enlarge across two scoped keys with credits/representative labels/mobile checks. Local878photos68updates; livePR30 remains875/66. Queue unchanged, full research/authenticated requirements outstanding. Next reconcile/publish, then Omega21092422001001/remaining queue/full inventory.

## PR31 live verified —2026-10-13

WBY1112 batch published via PR31 to OLD mainaed376a8a8f9846055f72a43d3aaaa3aa583d162, exact tested tree07d66f95992166009de52cb5e78e702c8c44ef12. Rollback/benchauth-before-wby1112-20261013 preservese66292c. Pages38374322015 succeeded; twelve served files match main byte-for-byte. Three actual original WBY files load/enlarge across two scoped keys with credits/representative labels/mobile. Live878photos68updates. Queue unchanged; full goal/authenticated requirements outstanding.

Next Omega21092422001001: exact manufacturer page confirms NATO/polyamide pin buckle/titanium, brown dial/bezel,42mm grade2 titanium,12.99mm thickness,20mm lugs,49.60mm lug-to-lug and8806 automatic55h. Do not transfer mesh-bracelet21090422001001 or other suffixes. Dealer EWC35665 says14mm; retain manufacturer precision versus dealer rounding/claim. No claim of limited run from dealer title or actual magnetic/water testing. Original specimen/physical movement photos remain next review. Full goal continues.

## Omega21092422001001 NATO specimen — local unpublished

Exact manufacturer and EWC35665 original pages archived200. Eight actual original800x640 files inspected; accepted front0,closed back5,pin buckle4. No-date dial/beige markers/broad arrow/red Seamaster,skeleton hands,striped grey/beige/brown NATO; closed NAIADLOCK/007/0552-923/A-007-62 back and signed Omega pin buckle/007 loop under protective film. Marks not military issue,limited count,manufacture date or independent performance proof. No opened movement/physical8806 stamp. Packaging excluded.

Exact full NATO source mapping uses manufacturer42mm grade2 titanium,12.99mm/20mm/49.60mm,8806 automatic55h and300m nominal. Dealer steel-table field rejected against manufacturer/description; dealer14mm discrepancy retained. Papers May2020 date not manufacture proof. No mesh210.90,other suffix or8800/ETA equivalence. All78 Node checks pass and three actual originals load/enlarge with credits/scope/mobile. Local881photos69updates; livePR31 remains878/68. Queue unchanged and full research/live authenticated requirements outstanding. Reconcile/publish next, then LonginesL37644/remaining queue/full inventory.

## PR32 live verified —2026-10-13

Exact Omega NATO batch published via PR32 to OLD mainc44e859faf991a72844cc935879666b6fa5da997, tested tree1b709338a7aa441c19bc8aa9a79cfc82db5583c7. Rollback/benchauth-before-omega-nato-20261013 preservesaed376a. Pages38375450521 completed successfully; previous waiting observation did not restart deployment. Twelve served files match origin/main byte-for-byte. Three actual original NATO images load/enlarge live with credits/scope/mobile checks. Live881photos69updates. Queue unchanged; full research/live authenticated requirements outstanding.

Next LonginesL37644: archived green exact L3.764.4.06.6 manufacturer selected product record confirms L888.6,39mm,20mm lugs,12.70mm thick,47.00mm lug-to-lug. Broad L888 marketplace label not physical-execution equivalence. Attempted black50.6 page did not yield matching selected product key; do not adopt redirected content as that suffix. Blue90.6 and other variants still to archive/review. Original gallery/pixels and public mapping not yet accepted. Continue exact Legend Diver research, not HydroConquest/GMT inheritance, then remaining queue/full inventory.

## LonginesL37644 current exact-source enumeration — local unpublished

Ten currently linked manufacturer pages archived with selected ProductPageAdditionalDocument keys/hashes:06.6 green steel,50.0 black brown leather,50.7 black steel,90.7 blue steel,99.6 grey steel,96.6 terracotta steel,16.6 white steel,50.9 black rubber,90.9 blue rubber,06.9 green rubber. All specify L888.6,39mm,20mm lugs,12.70mm thick,47.00mm lug-to-lug.11 source mappings: partial base plus ten exact configurations, manual movement/variant review. Earlier attempted50.6 yielded no exact selected product record; current50.7/90.7 not equated to historical50.6/90.6. Broad L888/L888.5/ETA not accepted as physical execution. Current source enumeration does not establish full historic production interval.

All78 checks pass, including current-suffix/wrong-brand/calibre/strap distinctions. Browser verifies11 guidance/scope records and empty galleries/mobile layout; zero-photo harness output is not image/credit validation. No actual photographs or photograph-inventory reviews added. Local80updates881photos; livePR32 remains69/881. Continue original specimen pixels and historical variant sources before publication. Queue unchanged; full finite-inventory goal/live authenticated requirement outstanding.

## Legend Diver green photo checkpoint — 2026-10-13T09:33:10.700Z

Three actual Grand Caliber L3.764.4.06.6 photographs accepted: front, closed caseback and signed folding clasp. Partial L3.764.4 lookup is representative green only; other suffixes receive no photos. L888.6 remains manufacturer specification without an opened movement. Seller2026 is not manufacture proof, and inscriptions are not tested performance. Original source and image hashes recorded in photograph-queue-longines-l37644-sources.json. Research and authenticated refresh validation remain incomplete. This checkpoint is local until publication is verified.
