# BenchAuth photograph research — in progress

This branch is a reviewable implementation draft. **Do not deploy it as completed
photograph research.** No real source image has been visually inspected in this
environment. Source photograph access and live-site access currently return proxy
HTTP 403. The existing live site is unchanged.

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
= **2,447 source records**, all unreviewed for photographs. The finite literal
identifiers in the existing public rules, research updates and imported
catalogue yield **2,238
stored identifier keys**, all unreviewed. Only aggregate shared database counts are retained; no row-level database
snapshot is published. The inventory is built from the public repository files.
These are lookup keys, not 2,238 distinct
watch models: punctuation/case duplicates collapse; M-prefixed aliases, base
references and catalogue suffixes remain separate keys. Broad patterns require
enumeration and source review; they are never counted as exact references.

There are **31 distinct legacy assets**: 30 pending inspection and one rejected
prototype movement attachment. **Verified coverage is zero in all four required
categories.** Existing textual model research and pre-existing "verified" mapping
badges do not verify a photograph. Unreviewed categories are not counted as
reviewed gaps. The original research audit remains available unchanged.

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

Before publishing, inspect and load every accepted real photograph, test shared
refreshes with permitted live data, resolve/review the inventory, and verify the
BenchAuth Pages deployment. Do not change or deploy the separate WatchAuthPro
production repository. Publication is pending these checks and network access.
