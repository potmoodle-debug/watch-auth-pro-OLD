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

Current exact progress is in the generated coverage files: **178 identifier keys
reviewed, 2,060 unreviewed; 134 source records reviewed, 2,313 unreviewed**. There are
**518 catalogue assets: 487 verified, 22 pending and 9 rejected**, including 31
legacy assets. Verified reference-key coverage: **front 158, movement 65, caseback
139, bracelet/clasp 136**. Reviewed gaps describe the inspected source set, not a
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
CA; certificate verification must remain enabled. All 487 accepted photographs across 202 explicit covered keys
passed this check on 2026-10-09. Rerun after catalogue additions. The Node suite passes all 28
tests, and the fixture browser suite covers the preserved workflows and mocked
authenticated refreshes.

Before publishing, inspect and load every accepted real photograph, test shared
refreshes with permitted live data, resolve/review the inventory, and verify the
BenchAuth Pages deployment. Do not change or deploy the separate WatchAuthPro
production repository. Publication is pending complete inventory research and
these checks. Live authenticated refresh/RLS testing requires a permitted BenchAuth
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
campaign media has unproven photograph-versus-render provenance. Both keys
have explicit reviewed gaps; neither inherits neighbouring photographs.
See `photograph-fratello-tudor-fifth-sources.json` and
`photograph-fratello-tudor-sixth-sources.json`.
