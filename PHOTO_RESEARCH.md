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
visual review. The published checkpoint is PR #14 at 9c408757b16897dfe9fe130c054ecad1a30eda09. New research additions below remain unpublished until validation passes.

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

Current exact progress is in the generated coverage files: **238 identifier keys
reviewed, 2,000 unreviewed; 173 source records reviewed, 2,274 unreviewed**. There are
**656 catalogue assets: 624 verified gallery entries, 23 pending and 9 rejected**, including 31
legacy assets. Verified entries use **610 distinct stored image URLs and 609 distinct inspected file hashes**; the same photograph can serve two categories. Verified reference-key coverage: **front 201, movement 78, caseback
173, bracelet/clasp 166**. Reviewed gaps describe the inspected source set, not a
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

PR #14 at 9c408757b16897dfe9fe130c054ecad1a30eda09 is deployed and
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
