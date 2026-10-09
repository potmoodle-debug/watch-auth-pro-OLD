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
visual review. The current verified checkpoint is prepared for publication to BenchAuth.

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

Current exact progress is in the generated coverage files: **211 identifier keys
reviewed, 2,027 unreviewed; 163 source records reviewed, 2,284 unreviewed**. There are
**555 catalogue assets: 523 verified gallery entries, 23 pending and 9 rejected**, including 31
legacy assets. Verified entries use **512 distinct stored image URLs and 511 distinct inspected file hashes**; the same photograph can serve two categories. Verified reference-key coverage: **front 175, movement 66, caseback
147, bracelet/clasp 143**. Reviewed gaps describe the inspected source set, not a
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
with 507 verified photographs. Subsequent additions remain on the research branch
until tested and deployed; current catalogue counts above include those additions.

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
