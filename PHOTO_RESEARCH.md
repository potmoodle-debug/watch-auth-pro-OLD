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

## Verified PR33 and finish-clock correction — 2026-10-13

PR33 merged170e537e17b50f805d8f315a88367e8ad4397e4d, tested tree944e309f692c6575284d04d25e3b0d725ef85d40. Pages38377819258 completed successfully. Twelve served application/data files match origin/main byte-for-byte; actual three green Legend Diver files load and enlarge live across partial/base and exact keys with credits, variant labels and mobile layout checked. Rollback/benchauth-before-l37644-20261013 preserves priorc44e859. Research remains incomplete; next queue gallery A37320 has been fetched and inspected, but is not yet accepted. Authenticated refresh/RLS remains outstanding without an authorized session.

User correction: Finish must display estimated clock time rather than elapsed lateness. Late forecast retains the existing24-hour convention and appends late; crossing midnight wraps the clock and explicitly labels day offset. Pace/break calculations and stored counts are preserved. Seventy-nine Node tests pass, including late, on-time and next-day cases. Actual UI fixture confirms20:30 late, save/refresh, unchanged draft/count, validation and mobile layout; cloud writes are fixtures only. Cache URLs updated for deployed module reload. Publication of this correction is pending verification.

## PR34 deployment verified — 2026-10-13

Main1a458082e4587c37ca8371f4632f621425417438, tree4a5bd655e09ec362f7b2bfbaed0df29e512c809a. Pages38378464065 completed successfully. Twelve served files match origin/main byte-for-byte, including performance.js and cache-refreshed bench.js/index.html. Deployed workday UI fixture explicitly confirms20:30 late as the estimated clock time, save/refresh, preserved draft/count, overlap rejection and mobile layout. Cloud account/data responses are fixtures, not proof of live authenticated refresh/RLS. Rollback/benchauth-before-finish-clock-20261013 retains prior170e537. Product/research goal remains active; A37320 original gallery is the next inspected candidate, not yet accepted.

## A37320 black mesh photo checkpoint — 2026-10-13T09:48:21.070Z

Three actual Kibble Watches representative black A37320 photographs accepted: front, closed back and signed flip-lock clasp. Photographed caseback confirms base A37320; seller extra A37320264 field is not an accepted alias. Calibre37 is seller attribution without opened movement/physical stamp; no generic ETA2895-2 equivalence or movement photo inheritance. Seller2011/2007–2012 and originality claims retained as attribution. Source/image hashes and gaps recorded in photograph-queue-breitling-a37320-sources.json. Queue unchanged; goal and authenticated refresh requirement remain open. This checkpoint is local until publication is verified.

A37320 checkpoint validation:80 Node tests pass. Actual three distinct original Kibble image files load and enlarge in the real local gallery; credits, representative labels and390px mobile layout checked. Unsupported seller code/neighbouring references and wrong brand are excluded. ETA2895-2 remains caution rather than accepted calibre equivalence. Catalogue887 entries,81 source mappings. Publication pending; authenticated refresh/RLS remains outstanding.

## PR35 verified and user-requested queue cleanup — 2026-10-13

PR35 main efc1e05564e47242e83e4b7e2264a3c44f2de67a, tree1b38b367bd9886377af7f798b449312981eb559d. Pages38400320395 completed successfully. Twelve served files match origin/main bytes, and actual three A37320 files load/enlarge live with representative labels, credits and mobile checked.

User explicitly requested double-checking the Missing-reference queue and removing completed requests. Confirmed BenchAuth Lab projectlkxqqntexxwdqfljtvri from config/project identity. Nine missing-lookup mapping requests have published sources and recorded calibre matches; marked resolved with scoped resolution notes. This resolves reference lookup availability, not all photograph gaps or physical authentication. Wrong-brand OmegaWBD2313, ambiguous Tudor7699, unknown Cartier83041488 calibre and Breitling observed-base-movement discrepancies remain active. All rows retained with guarded private rollback and snapshots outside public repo. All48 original unselected rows verified unchanged. Two new requests arrived during audit; verified total59,active50,resolved9. Public audit receipt omits serials/questions/author information.

Queue UI defaults to active requests, displays active/resolved counts and provides Show resolved history. Admin can reopen resolved requests.80 Node tests and actual app browser fixture pass for counts, resolve/hide/history/reopen/refresh, escaped questions, retained records/draft/count, mobile and signout clearing. Live cloud responses in UI fixture are mocked; live authenticated refresh/RLS remains explicitly outstanding. Queue display publication is pending verification. Product/research goal remains active.

## PR36 queue-history deployment verified — 2026-10-13

Mainb5e0e50f2876de05ac3b5175715d41a7ae52d2b0, tested tree708c1a79a169b05acc6fc9ad8be2dfd6cfcaf526. Pages38406916957 completed successfully. Twelve served files match origin/main bytes. Actual deployed app queue fixture passes active filtering/counts, resolve/history/reopen/refresh, escaping, row/draft/count retention, mobile and signout clearing. Fixture was strengthened to wait for asynchronous queue loading before asserting the initial count, after live network latency exposed a premature assertion; application code unchanged. Fixture cloud responses are mocked; this is not live authenticated refresh/RLS proof.

Live management-SQL readback verified only9 selected queue status/question updates; all48 original unselected rows remain unchanged, all records retained, and2 new requests arrived during audit. Before/after snapshots and guarded SQL rollback are kept in private local recovery. Lookup requests resolved do not close the original photo research goal; missing images, variant/specimen review and unresolved calibre/reference requests continue. Rollback/benchauth-before-queue-history-20261013 preserves priorefc1e05.

## Piaget90802 champagne9P2 checkpoint — 2026-10-13T14:12:17.524Z

Four actual Le Petit Suisse photographs accepted: front,movement,closed back and SWISS750 buckle. Caseback90802 and physical9P2 marking inspected; representative specimen only. Separate Antiquorum white-gold blue90802 attributed9P is not supplied these photos. No9PS equivalence; queue remains open. Replacement strap and service/originality/date/assay limits documented in photograph-queue-piaget-90802-sources.json. Local pending publication; full product/research goal and live authenticated refresh remain outstanding.

Piaget90802 checkpoint validation:81 Node tests pass, including unsupported suffix/brand exclusion,9PS/9P caution and movement suppression in external-only mode. Four distinct original1600x1600 files load/enlarge in the local actual gallery; credits, representative variant labels and390px mobile layout checked.891 photograph entries,82 source mappings. Queue stays open because recorded9PS has not been physically established. Publication pending; authenticated refresh/RLS and the full original product/research objective remain outstanding.

## PR37 deployment and manual External-only gallery correction — 2026-10-13

PR37 main9431a2ee6f59dc6846c887fce2e636a65dca02aa, tested treef9a0ace526929b10a71d6bbdb333f92b110bc233. Pages38412263449 completed successfully. Twelve served files match origin/main; four actual Piaget files loaded/enlarged live with credits, representative labels and mobile layout. Queue9PS remains open. The additional live manual External-only check exposed a pre-existing UI defect: matchingPhotographs suppressed movement when supplied the option, but renderInfo supplied only automatic safety restrictions and manual condition changes did not redraw the gallery.

Correction now includes either automatic safety or selected External-only state, and redraws the current gallery on condition changes. This leaves lookup metadata/counts untouched. Cache URL refreshed.81 Node tests pass. Actual staged Piaget images suppress movement on selecting External only and restore all four on clearing it. Expanded browser fixtures pass manual selection/relookup/restoration and existing sign-in/out/refresh,safety,Rolex flags/clasp reminder,clipboard,save/next,RMA,daily reset/progress/history. Cloud/image responses in workflow fixtures are mocked; actual-source Piaget check is separate. Fixture transport/output paths adapted for Windows outside committed source. Live correction deployment is pending verification. Live authenticated refresh/RLS and full original research/product objective remain outstanding.

Next queue source: EWC40182 Rolex179174 original eight-image gallery fetched/inspected. Mother-of-pearl diamond dial,Jubilee,closed back and signed clasp candidates; no opened2235. Bucherer exact CPO179174 separately corroborates26mm/2235, while generic28mm page text is not the exact-reference spec. Candidate observations saved outside public catalogue; not yet accepted.

## PR38 manual External-only deployment verified — 2026-10-13

Maine121b6f6403439df7fc3af4a3c479e568b27e233, tested tree71b8a9a4baa393222c7a21c085c3ae122526ba0d. Pages38413825397 completed successfully. Twelve served application/data files match origin/main bytes. Actual deployed Piaget front,movement,caseback and buckle files load/enlarge with credits, representative labels and mobile layout. Live manual External-only selection hides movement and leaves3 exterior images; clearing it restores4 categories. No live account/database mutation was used. Automatic safety and existing workflows pass separate browser fixtures.81 Node tests pass. Rollback/benchauth-before-manual-external-20261013 preserves PR37 main; rollback/benchauth-before-piaget90802-20261013 preserves PR36.

Catalogue891 photographs and82 source mappings are now live. Piaget queue remains open for recorded9PS; no equivalence asserted. Rolex179174 EWC40182 and separate Bucherer CPO original sources/actual gallery are archived and inspected outside catalogue for next work. Remaining reference inventory, gaps and live authenticated refresh/RLS are not complete; full goal stays active. Production WatchAuthPro untouched.

## Rolex179174 EWC checkpoint — 2026-10-13T14:35:20.267Z

Three actual EWC40182 photographs accepted: representative mother-of-pearl diamond/Jubilee front,plain closed back and signed open clasp. Exact EWC record and separate Bucherer Rolex CPO record corroborate26mm/2235; generic28mm marketing and separate CPO certification are not transferred. No opened movement or physical2235. Source2007/date/material/originality/clasp-code limits documented in photograph-queue-rolex-179174-sources.json. Local pending publication; full photo research and live authenticated refresh/RLS remain incomplete.

Rolex179174 checkpoint validation:82 Node tests pass, including wrong-brand/neighbouring reference and unverified suffix exclusion,2236/2135 caution and26mm exact-record handling. Actual three distinct1080x864 EWC files load/enlarge in local gallery; credits, representative labels and390px mobile layout checked.894 verified gallery entries,35 pending entries (929 total records),83 source mappings. No physical2235 image or full clasp-code/date/originality conclusion. Publication pending; request status unchanged until the published lookup is verified. Full goal and live authenticated refresh/RLS remain outstanding.

## PR39 Rolex179174 deployment and scoped queue resolution verified — 2026-10-13

Maine1a9fe217c58b5de9a46b328799b5bba65f9a27b, tested tree2c09c1f5ed63a683cf26f3f2630ebcdbbe5cd82a. Pages38415780210 completed successfully. Twelve served application/data files match origin/main bytes. Actual three EWC40182 files load/enlarge live with credits,representative labels and390px mobile layout.82 Node tests pass.894 verified gallery entries,35 pending entries and83 mappings now live. Rollback/benchauth-before-rolex179174-20261013 preserves priore121b6f.

Under the user's queue-cleanup instruction, re-read the single BenchAuth Lab Rolex179174 request: still open,original missing-lookup question,recorded2235. After verifying the published lookup,guarded exact-id/status/question update marked only that request resolved and appended a scoped resolution note. Readback confirms original created_at/request text retained plus note. Private before/after snapshots and question-guarded SQL rollback saved outside public repo. This closes missing lookup availability only; no opened2235,full clasp-code/date/originality proof or complete photo research claimed. No schema/auth/policy/other queue-row changes. Live authenticated refresh/RLS remains outstanding without a session.

Next queue item Bremont Solo: archived original manufacturer37 RG and34 LC records plus37 collection page. Existing broad imported Solo record assigns43mm and accepts BE-36AE/SW220-1 despite distinct34/37/43mm variants. Manufacturer37 RG BE-36AE,date3,20mm lugs differs from34 LC BE-92AV,date6,16mm lugs. RecordedSW1000/exact queued size/generation remain unverified; no equivalence or arbitrary43mm assignment may be inferred. Actual photo/source research and fuller generation review remain in progress. Original full product/research goal stays active; production WatchAuthPro untouched.

## Bremont Solo scope and actual32mm checkpoint — 2026-10-13T15:14:20.376Z

Broad Solo lookup no longer assumes43mm or acceptsBE-36AE/SW220-1 universally. Original sources establish distinct32/34/37/43mm configurations. Four actual Grailzee SOLO32-AJ-WH-R-S entries from3 files accepted,representative32 only for broad lookup. Display holder obscures calibre stamp; no SW1000 or branded-calibre equivalence asserted. Back/movement share file; buckle frame includes peripheral exhibition back,so external-only mode conservatively retains front only. Manufacturer34/37 fields do not transfer. Primary technical PDF502 unavailable; no unread manual claims adopted. Queue remains open. Local pending publication; full goal and authenticated refresh remain incomplete.

Bremont Solo checkpoint validation:83 Node tests pass. Broad name now collection/manual review with no accepted generic calibre or43mm assignment; full Solo32 SKU remains precise-calibre unknown. Wrong size/dial SKU and wrong-brand photographs excluded. Actual4 entries from3 distinct inspected files load/enlarge across broad representative and exact SKU keys;credits,variant labels and390px mobile checked. Manual External only leaves front alone because movement,shared exhibition-back and peripheral movement-bearing buckle frames are suppressed; clearing restores4.898 verified entries,35 pending entries,85 source mappings. Queue stays open for exact model/generation/SW1000. Five original manufacturer pages archived with hashes; primary technical PDF502 limitation retained without inferring its contents. Publication and live authenticated refresh/RLS remain outstanding; full original product/research objective active.

## PR40 Bremont Solo deployment verified — 2026-10-13

Main1509babe64b635be87bb35d7e249eff2ca559e2b,tested tree8130f37268d9bba73c5f334c2f4fc7a0986ea7b6. Pages38421911827 completed successfully. Twelve served application/data files match origin/main bytes. Live broad Solo lookup shows exact model/size required and no universal43mm assignment;exactSOLO32-AJ-WH-R-S shows precise physical calibre unverified. Four actual entries from3 distinct Grailzee files load/enlarge across both reference keys with credits,representative labels and390px mobile checked. Manual External only suppresses movement,shared exhibition back and peripheral movement-bearing buckle frame,leaving front; clearing restores4 categories.83 Node tests pass.898 verified entries,35 pending entries,85 mappings live. Rollback/benchauth-before-bremontsolo-20261013 preserves priore1a9fe2.

Bremont broad request remains open for exact size/model/generation/recordedSW1000; no data-status mutation for this release. Source34/37 calibre fields do not transfer to32 or broad name. No physical calibre equivalence or manufacture/originality conclusion. Live authenticated refresh/RLS and remaining original inventory/photo gaps remain incomplete;full goal active,production WatchAuthPro untouched.

Next original queue item Omega22525000: fresh original manufacturer2252.50.00 page HTTP200 archived with hash.36.25mm steel,Omega1120 self-winding44h,300m factory rating,steel foldover diver-extension clasp andapprox141g specifications are not current resistance/authentication thresholds. Nine original SWE70407 images inspected;front2,closed seahorse/wave back6 and signed Omega clasp8 candidates. No opened1120;partial identity/endlink markings do not establish manufacture date or hardware originality. Candidate notes/photos remain outside catalogue until next research checkpoint. No2254.50/quartz2262.50/AquaTerra2502.50 or broadSeamaster inheritance.

## Omega2252.50.00 midsize checkpoint — 2026-10-13T15:31:42.714Z

Three actual SWE70407 photographs accepted: front,closed seahorse/wave back and signed clasp. Fresh original manufacturer record confirms36.25mm steel,Omega1120 self-winding44h and foldover diver-extension specification. No opened movement;141g approximate weight and300m factory rating are not authentication/current-performance thresholds. Partial marks do not establish manufacture date or full hardware originality. No larger/quartz/AquaTerra aliases or generic movement equivalence. Source/image hashes and remaining gaps recorded in photograph-queue-omega-22525000-sources.json. Local pending publication; full original goal and live authenticated refresh/RLS remain incomplete.

Omega2252 checkpoint validation:84 Node tests pass. Exact dotted/compact reference matches3 exterior categories in normal and External-only modes;larger2254,quartz2262,AquaTerra2502,unsupported partial and wrong-brand coverage excluded.1120 source attribution matches whileETA2892/2500 remain caution. Three distinct original SWE files load/enlarge in local actual gallery with credits,labels and390px mobile checked.901 verified entries,35 pending entries,86 mappings. No opened1120 or independent period/hardware/originality proof. Publication pending and request status unchanged until verified live lookup. Full goal and live authenticated refresh/RLS remain incomplete.

## PR41 Omega2252.50.00 deployment verified

Published main563fb05d56ea1c869cb4acef647205fc94fbac12, tested tree7b5e55ce920f6e307adc2fc50482a9a3ad8a4a3d. Pages38424948599 completed successfully. Twelve served files match published main bytes; three actual SWE photographs load and enlarge with credits,scope labels and390px mobile layout checked.84 Node tests pass;901 verified entries,35 pending,86 mappings live. Rollback/benchauth-before-omega22525000-20261013 preserves previous main1509babe. No opened1120 photo or specimen originality/date proof. Live authenticated refresh/RLS remains outstanding; full inventory research continues. Production untouched.

Next queue item TAGWBP5A8A: official exactWBP5A8A.BF0619 page read; TH30-00 COSC automatic70h and45mm titanium guidance preliminary. Shell source response incomplete; no accepted mapping yet. Official front/back product imagery inspected but photographic/rendered provenance uncertain, held out of actual-specimen catalogue. Generic movement.svg is not physical movement evidence. Original Watches by Timepiece TH380 listing found, explicitly actual-watch photos, but images await inspection; seller2024 not manufacture proof. Queue remains open.

## TAGWBP5A8A Superdiver checkpoint — 2026-10-14T09:54:20.223Z

Three actual TH380 photographs accepted for representative baseWBP5A8A only:front,partly obscured closed helmet back and closed signed clasp. Separate exact manufacturerWBP5A8A.BF0619 lookup recordsTH30-00 automatic70h;full suffix does not inherit dealer photos. No physical movement or manufacture/originality/hardware proof. Generic movement icon and uncertain rendered product images excluded. Sources/hashes and matching limits recorded in photograph-queue-tag-wbp5a8a-sources.json. Local pending publication;queue unchanged and full original goal/live authenticated refresh remain incomplete.

TAGWBP5A8A checkpoint validation:85Node tests pass, including full-suffix/other-Aquaracer/wrong-brand photo exclusion and generic calibre mismatch cautions. Actual3dealer files load/enlarge with credits,representative labels and390px mobile layout. Exact full-suffix lookup displaysTH30-00 guidance with0inherited dealer images; returning to base restores3. Initial network-restricted image loading failed; after authorized network access, actual remote images passed without mocks.904verified gallery entries,26pending assets and9rejected entries,88reviewed mappings;939total catalogue records. Local pending publication. Opened physical movement,fullsuffix/backmarks/clasp internals/date/originality remain gaps;current factory rating/COSC are not specimen pass/fail proof. Full original goal and live authenticated refresh/RLS remain incomplete.

## PR42 TAGWBP5A8A deployment verified — 2026-10-14

Published main9902599b0a26cc8ad0f92c3a8a73a813af49ab86,tested tree9a978dc133206553db3558ebc6ddbc9075192cc0. Pages38559775233 completed successfully. Twelve served files match published main bytes;three actual TH380 files load/enlarge with credits,representative labels and390px mobile checked. Exact manufacturer fullWBP5A8A.BF0619 lookup has0inherited dealer images and base lookup restores3.85Node tests pass;904verified entries,26pending/9rejected,88reviewed mappings live. Rollback/benchauth-before-tagwbp5a8a-20261014 preserves previous563fb05 main. Original and pre-restore refs retained. Full research/specimen gaps and live authenticated refresh/RLS remain incomplete;production untouched.

Fresh missing-reference audit81records:Omega22525000/recorded1120 andTAGWBP5A8A/recordedTH30-00 have published lookup guidance. Guarded lookup-only resolution attempted after saving private before/expected-after/rollback. Connector returned Invalid or expired requestState;fresh all-column read confirms all81original rows unchanged and both requests still open. No completed database mutation claimed. Ten existing resolved requests retained. Saved guarded update/rollback and snapshots outside public repository;photo/suffix/period/originality gaps remain tracked even after any future lookup-only resolution.

Next queued broad SeamasterDiver review:three original OmegaHK manufacturer pages HTTP200archived with hashes and matching content. Collection includes multiple calibres/executions;exact older36.25mm212.30.36.20.01.001 attributes2500 andexactAmerica'sCup210.32.42.20.04.002 attributes8806. Existing broad imported42mm/8800/55h/modern rule must be replaced with name-only collection/manual review,without universal physical calibre,size,generation or inherited photos. No catalogue/rule change yet;queue stays open for exact case reference. Source research notes saved outside repository for next checkpoint.

## Broad SeamasterDiver scope correction — 2026-10-14T12:08:07.624Z

Original name-only rule no longer assigns8800/42mm/55h/modern universally. Three archived original manufacturer pages demonstrate differing executions;collection/manual review now requires exact reference and physical movement. No new photographs accepted or inherited by family name. Existing exact mappings remain separate. Identifier/all4category and original RULE source review recorded with explicit identity gaps;queue remains open. Local pending publication and full original goal/live authenticated refresh remain incomplete.

Scope correction validation:86Node tests pass. Anonymous browser checks family/manual review,source-backed collection identity label,absence of universal8800/42mm/55h/modern execution facts,no inherited images,no8800 movement verdict or suggested calibre. Existing exact2252.50.00 guidance remains1120/36.25mm;normalized name relookup and390px mobile pass. No new source photographs or account/database mutation.904verified gallery entries unchanged;26pending/9rejected and88reviewed update mappings. Generated inventory/source reviews include original RULE0010 and broad identifier;reviewed scope does not mean complete specimen/photo coverage. Publication pending;full goal active.

## PR43 SeamasterDiver correction deployment verified — 2026-10-14

Published main138e6cb4ffe656881da0539c89156f4efff5fc0d,tested tree8897eaa6f4adb6a612b9c43c5c40b58a01fe980e. Pages38563957989 completed successfully. Twelve served files match published main bytes. Actual live broad lookup shows collection/manual review,source-backed identity only,no universal calibre/size/period,no8800 verdict/suggestion and0inherited photos. Exact2252.50.00 guidance remains1120/36.25mm;normalized broad relookup and390px mobile pass. Existing3actual TAG dealer files load/enlarge with credits/labels/mobile andfull-suffix exclusion/base restore intact.86Node tests pass.904verified entries,26pending/9rejected,88reviewed update mappings unchanged. Rollback/benchauth-before-diver-family-20261014 preserves previous9902599 main. No queue/account/database mutation by this release. Exact identity request and full original inventory/photo/specimen goal remain open;live authenticated refresh/RLS outstanding,production untouched.

Next queueFearsTheGimlet:original partner02GIG page HTTP200archived and content inspected. Calibre accordion saysSW200-2M Power+,separate story section saysSW210-1/42h. These are conflicting primary product fields,not evidence of interchangeable calibres. No precise accepted mapping or new photographs yet. Original page identifies38mm/manual and200piece2025event edition,not individual manufacture proof. Resolve physical execution/history/source conflict before matching recordedSW210-1. Research notes/source outside catalogue;queue remains open.

## FearsTheGimlet checkpoint — 2026-10-14T12:36:22.292Z

Three actual first Kibble specimen photographs accepted:front,closed lime-wheel back and co-signed pin buckle. Named edition only;no code/other-cocktail/Brunswick/other-brand aliases. PrimarySW200-2M Power+ versusSW210-1 conflict retained;calibre[] and no physical opened-movement evidence. Separate newerlisting Habring text excluded. No manufacture/number/originality inference. Source hashes/credits/gaps recorded;queue remains open,local pending publication and full original goal/live authenticated refresh incomplete.

Gimlet validation:87Node tests pass;unproven code/cocktail/Brunswick/wrong-brand aliases excluded,andSW210-1/SW200-2M/ETA7001 receive no precise movement match verdict. Actual3original Kibble files load/enlarge with credits,representative labels and390px mobile. UI retains conflicting primary specification warning,noSW210-1 verdict andnoaccepted calibre suggestion. Two separate12image dealer galleries contact-inspected;fullfirst0/8/9 inspected and accepted,not24newphotos.907verified gallery entries,26pending/9rejected,89reviewed update mappings locally. No opened movement or complete identity/date/originality proof. Local pending publication;queue and full original research/product goal remain open,live authenticated refresh/RLS outstanding.

## PR44 Gimlet publication verified — 2026-10-14

Published main928cdd730b97de9154ce3aedfd29247aba3cad6f,tested treed0a78e6cf751ff4f4c6e4cd7e2df4ca045f235f7. Pages38565818982 completed successfully. Twelve served files match published main bytes. Three actual Kibble specimen files load/enlarge with credits,representative labels and390px mobile. Live UI preserves conflicting primary specification warning,noSW210-1 verdict andnoaccepted calibre suggestion.87Node tests pass;907verified gallery entries,26pending/9rejected,89reviewed update mappings live. Rollback/benchauth-before-gimlet-20261014 preserves previous138e6cb main. Named edition only;movement and individual identity/date/originality gaps remain open. No account/queue/database mutation. Full inventory/product goal and live authenticated refresh/RLS remain incomplete;production untouched.

Next queueRaymondWeil2761-STC-50001:exact official regional collection/product pages discovered/read andHTTP200archived. Exact blue GMT product attributes40.5mm steel,9.7mm,RW3230 automatic/~56h. Separate2765Worldtimer/green/black specifications not transferred. RecordedSW330-2 not independently established as equivalent;need physical execution and actual specimen photo research. Global search429 is not technical evidence. No accepted new mapping/photos yet;queue remains open. Sources/research notes saved outside catalogue.

## ExactRaymondWeil2761-STC-50001 checkpoint — 2026-10-14T12:50:12.951Z

Four actual Birmingham gallery entries from3distinctfiles accepted:front,sealed exhibition movement/shared caseback andsigned clasp withperipheral movement. RW3230 remains manufacturer attribution;no readable supplier code orSW330-2 equivalence. Exact blue/leather suffix only,no base/Worldtimer/othervariant aliases. All movement-bearing categories suppressed inExternalonly. Source hashes/credits/matching limits retained;queue staysopen forphysical execution/date/originality. Local pending publication;full original goal/live authenticated refresh incomplete.

Raymond2761 validation:88Node tests pass;full dotted/compact reference matches4entries from3files,Externalonly leavesfront,other suffix/base/Worldtimer/wrongbrand excluded. ManufacturerRW3230 matchessource attribution whileSW330-2/ETA2893-2 remaincaution. Four actual remote gallery entries load/enlarge withcredits,scope/variant labels and390px mobile. Browser retains attributed RW3230/observedSW330-2 caution;manualExternalonly hidesmovement,sharedback andperipheral movement-bearing clasp,clearingrestores4.911verified gallery entries,26pending/9rejected,90reviewed update mappings locally. No opened supplier code orindividualdate/hardware/originality proof;queue and full original goalremainopen. Publication pending;live authenticated refresh/RLS outstanding.

## PR45 exactRaymond2761 publication verified — 2026-10-14

Published main5942a4a569eb337668ac35c7a85694d964bb170b,tested tree2ba569d079111ca15df7913ffb0592eaebd2d670. Pages38567773151 completed successfully. Twelve served files match published main bytes. Four actual gallery entries from3distinctBirmingham files load/enlarge withcredits,scope/variant labels and390px mobile. LiveRW3230 manufacturer attribution/SW330-2 caution retained;manualExternalonly leavesfront,clearingrestores4.88Node tests pass;911verified gallery entries,26pending/9rejected,90reviewed update mappings live. Rollback/benchauth-before-raymond2761-20261014 preserves previous928cdd7 main. No queue/account/database mutation. Exactphysical supplier code,complete identity/date/hardware/originality andfull originalinventory/productgoal remainopen;live authenticated refresh/RLS outstanding,production untouched.

NextCartierW2SA0028:original regional product page read andHTTP200archived. Supportslargequartz,steel/yellowgold,greyRoman/swordhands/alligatorstrap,43.5x31.4mm/7.3mm;doesnotidentifyprecise157. Aggregator430MC/manual contradictions not accepted. OriginalSWEcatalogue stock81236found,butdetailgallery/imagepixelsnotyetinspected. Replica/homage searchresult reusingstocknaming/textexcludedentirely;original provenance required. No acceptedmapping/photosyet;queue remainsopen andcalibre/date/originalityresearchcontinues.

## Cartier W2SA0028 original photo research checkpoint

Exact SWE81236 detail page obtained through the original catalogue link and archived. Ten original images downloaded with hashes/dimensions;all contact-inspected,full2/6/7 inspected. Suitable exterior candidates:front,closed four-screw Santos back and pin buckle/strap. Visible4240case code is not accepted as a cross-reference alias;partial serial redacted by source. SmallAu750plate does not prove whole-case assay or originality. Strap underside signedCartier/BDC;no clear buckle-face signature,parts/date/originality remain unverified. No opened movement or physical157 evidence. Duplicatefront crops excluded. Candidate research remains outside catalogue pending acceptance,matching tests and actual delivery checks;live catalogue still911verified entries. Queue/full original goal remain open;production untouched.

## Cartier W2SA0028 accepted exterior checkpoint — 2026-10-14T13:05:55.825Z

Three actual SWE81236 files accepted: front, closed back and pin buckle/strap. Exact full reference only; no4240 or neighbouring aliases. Quartz source attribution retained, calibre[] and physical157 unverified. Strap signature distinguished from unclear buckle signature; Au750plate/partialserial not assay/date/originality proof. Movement empty. Credits/hashes and matching limits retained; queue stays open. Local pending publication; full original goal and authenticated refresh/RLS remain incomplete.

W2SA0028 validation:89Node tests pass. Exact reference supplies three exterior categories in normal and External only modes;4240,otherreferences,suffix and wrong-brand inheritance excluded. Calibre157/430MC/ETA2000-1 receive no unsupported precise match verdict. Three original SWE files load/enlarge with credits,variant/scope labels and390px mobile. UI retains quartz attribution and precise157 unverified label;no157 verdict or accepted calibre suggestion.914verified gallery entries,26pending/9rejected,91reviewed update mappings locally. No physical movement/date/whole-case assay/parts originality proof. Local pending publication;queue/full original goal and live authenticated refresh/RLS remain open.

## PR46 Cartier W2SA0028 publication verified — 2026-10-14

Published main6f2b2f50aa7f875cba679cfe4252c327143fd051,tested tree44d71fabd781003189e97d81475a93c6c71aece5. Pages38570085784 completed successfully. Twelve served files match published main bytes. Three actual SWE files load/enlarge with credits,variant/scope labels and390px mobile. Live quartz attribution/precise157 unverified label retained,no157 verdict or accepted calibre suggestion.89Node tests pass;914verified gallery entries,26pending/9rejected,91reviewed update mappings live. Rollback/benchauth-before-cartierw2sa0028-20261014 preserves previous5942a4a main. No4240/otherreference/suffix/wrongbrand inheritance. No account/queue/database mutation. Physical157,movement,individual date/identity/assay/parts originality gaps remain open;full original inventory/product goal and authenticated refresh/RLS incomplete,production untouched.

Next exact Omega210.22.44.51.01.001:original primary regional URL redirects to exact official en-gb product page,HTTP200archived with hash and verified TechnicalData. Exact44mm steel/Sedna gold,black dial/rubber,9900/60h/steelpinbuckle attribution. Neighbouring bracelet/yellowgold/allgold/Seamaster executions not transferred;nominal weight/rating not specimen thresholds. No accepted new mapping oractual photo evidence yet. Need original dealer gallery,pixel inspection andindividual9900 execution/matching limits. Queue staysopen;source research outside catalogue.

## Omega210.22.44.51.01.001 accepted checkpoint — 2026-10-14T13:26:54.257Z

Four actual BQ49422 entries from3distinctfiles accepted:front,sealed9900 rotor/shared caseback andsignedpinbuckle withperipheral movement. Exactrubberreference only,no neighbouring aliases. Physical9900rotormark corroborates manufacturer attribution;notopenedmovement/parts/date/originalityproof. BQmanual/year assertion excluded,extra braceletnotinherited. Bloombarsoftrear/holder views andPO600Mfilenamesnotadopted. Sourceaccesslimits/credits/hashes/gaps retained;queuependingpublication andfulloriginalgoal/authenticatedrefreshremainopen.

Omega210224 validation:90Node tests pass. Exact dotted/compact rubber reference matches4entries from3files;bracelet/yellowgold/allgold/otherreference/wrongbrand excluded.9900 matches source/visible rotor attribution;9901 remains caution. Four actual public source-associated CDN entries load/enlarge withcredits,scope/variant labels and390px mobile. Manual Externalonly hidesmovement,sharedback andperipheral movement-bearing pinbuckle,leavingfront;clearingrestores4.918verified gallery entries,26pending/9rejected,92reviewed updates locally. DirectBQHTML403 and web-source association explicitly retained;no access-control bypass or replica source adoption. Individual identity/date/material assay/component originality andopened execution remain gaps. Localpendingpublication;queue/fulloriginalgoal/authenticatedrefreshremainopen.
## PR47 Omega 210.22.44.51.01.001 publication verified — 2026-10-14

Published main947d9851cb4f16c876835ef5b77c978e053914e9, tested tree1d94b6fd6270c8e77ea9ed813e7c0bb2f6175577. Pages38574103753 completed successfully; all12 served files match main bytes. Four actual BQ entries from3distinct files load/enlarge with credits,variant/scope and390px mobile checks. Visible9900/source attribution retained;9901 remains caution. Manual External only leaves front and clearing restores4; no neighbouring execution inheritance.90Node tests pass;918verified gallery entries,26pending,9rejected,92reviewed updates. Rollback/benchauth-before-omega210224-20261014 preserves6f2b2f5 main.

Missing-reference queue separately double-checked: Omega2252.50.00 andTAGWBP5A8A lookup requests resolved after published evidence recheck, then exactOmega210224 resolved after PR47 live verification. All original questions/authors/timestamps preserved; unselected rows unchanged. Private guarded before/after/rollback records kept outside public repository. Snapshot13resolved/75active,88total; counts are timestamped, not a live guarantee. Lookup resolution does not close individual identity/date/assay/component originality or opened execution gaps. Full inventory/product goal and authenticated refresh/RLS remain incomplete; production untouched.

Next Hublot542.NX.1171.RX: exact official page HTTP200 archived with hash d99acff1616c3db69a0f848efe41a4e93d93f6bfec274c41eeb2e11c99c34435. Source supports42mm titanium,matte black dial,black rubber,steel deployant andHUB1110/approx48h. RecordedSW300-1 not accepted as equivalent; physical supplier execution remains unverified. No new Hublot accepted photos/mapping yet. Continue original-source gallery and actual pixel research.


## Hublot542.NX.1171.RX accepted local checkpoint — 2026-10-14T13:51:04.315Z

Four EWC62252 entries from3actual original files:front,exhibition movement/shared back andopened deployant. All8 contact-inspected,full0/5/6 inspected. Exactrubber reference only; manufacturerHUB1110 attribution,recordedSW300-1 execution remains unverified andqueue staysopen. Clasp includes blurred backgroundmovement andis externally suppressed. No neighbouring reference/calibre inheritance;source hashes/credits/gaps retained. Pending matching,delivery tests andpublication;full originalgoal/authenticatedrefreshremainopen.
Hublot542 validation:92 Node tests pass. Exact dotted/compact reference matches four entries from three files; LR,CM,511,blue,diamond/WOS24 suffix and wrong-brand inheritance excluded. HUB1110 manufacturer attribution retained; SW300-1/HUB1112/ETA2892-A2 remain caution. Four original EWC entries load/enlarge with credits,variant/scope and390px mobile. Manual External only leaves front and clearing restores4. Local922verified entries,26pending,9rejected,93reviewed update mappings. Supplier execution/date/individual identity/assay/component originality gaps remain; queue stays open. Pending publication; full original goal/authenticated refresh remain incomplete.
PR48 Hublot542 publication verified: main df65cdf83f7f032f24b67aae1bd55df5973a2f81, tested tree ac70aa86d4ec98f799a12a8ffb351b0ab987c864. Pages38576055611 completed success. Twelve served files match main bytes; four actual EWC entries from3files load/enlarge with credits,scope and390px mobile. HUB1110 attribution retained,SW300-1 caution; manual External only1front/restores4.92Node tests pass;922verified entries26pending9rejected93reviewed mappings live. Rollback/benchauth-before-hublot542-20261014 preserves947d985. Queue remains open for supplier execution; no database mutation. Individual date/identity/assay/component originality and full inventory/product/authenticated refresh remain incomplete. Next broad AquaTerra research: original quartz1538,chronograph3313 and modern8900/8800 sources archived; remove unsupported collection-wide precise calibre assumptions while preserving exact rules. Production untouched.

## Aqua Terra collection scope correction — 2026-10-14T14:01:01.518Z

Two imported broad rules no longer accept3313 or8800 universally. Three original manufacturer records establish quartz/date-only/chronograph/generation diversity; broad name now requires full case reference and physical execution. Existing exact rules remain unchanged. No actual photos or neighbouring identifiers inherited; all4broad-request category gaps and source-record reviews recorded. Queue remains open;local pending publication/full original goal/authenticated refresh incomplete.

Regression found third broad AquaTerra rule RULE0096 still assigning8900 before later8800 fallback. Corrected all3original broad rules; exact-reference rows unchanged. No generic8900 inference remains.
AquaTerra validation:94Node tests pass; all937 rules compared to published PR48, only3broad rows changed. Exact8900/8500/8800 reference rules and2252.50.00 guidance retained. Broad names have no1538/3313/8800/8900 verdict/suggestion andno actual-photo inheritance. Desktop/390px browser checks pass.922verified entries26pending9rejected93reviewed update mappings unchanged;280source records reviewed,1936identifier keys still unreviewed. Queue remainsopen for full case identity. Local pending publication/fulloriginalgoal/authenticatedrefresh incomplete.
PR49 AquaTerra collection correction publication verified: main31d0761eec0706eaef2212be3238bd87afc425c0,tested treee85afc117bae39cbca75df4e8463c04d9622410b. Pages38577605638 completed success.12served files match main bytes;live broad names have no precise1538/3313/8800/8900 mapping/verdict/suggestion/photo inheritance. All3original broad rules corrected; allother rules unchanged,exact2252.50.00 guidance retained.94Node tests pass;desktop/390px broadUI and4realHublot entries from3files load/enlarge/credits/scope/External only1front/restores4 pass.922verified entries26pending9rejected93reviewed update mappings;280source records reviewed1936identifier keys unreviewed. Rollback/benchauth-before-aquaterra-family-20261014 preservesdf65cdf. Queue remainsopen for exact identity;no database mutation/fulloriginalgoal/authenticatedrefresh incomplete/production untouched.
Next LonginesL37794: three original manufacturer pages archived including .56.6/.90.6 and2026release;embedded .56.6 product field attributesL888.5. Original LeSabre155146 full .56.6 gallery10files inspected;full0front/2closedback-signedopenedclasp/3clasp inspected. BackphysicallyL3.779.4;sourcefullblack/H-link execution only,notqueueindividualserial/date proof. Suitable3exterior candidates;no openedmovement/physicalL888.5. Generic manufacturer calibre image andscreenshot/box excluded. Need completeprimaryfield/variant research,matching/delivery tests,acceptance/publication;no Longinesnewmapping/photosyet.

## LonginesL3.779.4 accepted local checkpoint — 2026-10-14T14:13:24.875Z

Three actual LeSabre155146 .56.6 exterior files accepted;exactfullreference andexplicitpartial-base representative scope only. Full0/2/3 and10filecontact inspected. Manufacturerexact .56.6/.90.6 per-productJSON L888.5 attribution;physicalmovement empty/unverified. .90.6 receives no .56.6photos; no neighbouring/suffix/42mm/oldgeneration/calibre equivalence. Partialidentity/date/assay/micro-adjust/hardware originality gaps remain. Pending tests/publication;fulloriginalgoal/authenticatedrefresh incomplete.
LonginesL37794 validation:96Node tests pass;full .56.6 exact andpartialL37794 explicitlyrepresentative mappings supply3exterior entries from3actual files,none movement. ManufacturerL888.5 attribution retained;L888/L888.6/ETA A31 remain caution. .90.6/otherdial/suffix/L37884/wrongbrand photos notinherited. Six actual entry deliveries across2explicitkeys load/enlarge withcredits,scope/variant and390px mobile;External only retains3.925verified entries26pending9rejected96reviewed update mappings locally. Individualfullsuffix/date/identity/physicalcalibre/microadjust/hardware originality gaps remain. Pendingpublication/fulloriginalgoal/authenticatedrefresh incomplete.
PR50 LonginesL37794 merged but live verification pending: remote main7e2b41979b5c723133e9ad2b19cec087a0db21f9,tested tree8ae370c0b3e61a589db30130202d3d624421435c. Pages38579383057 buildsuccess,deployqueued at latestauthoritativecheck; pollsame run,do not restart.96Node/localactualphotos/mobile/External only checks passed.925entries merged,not yet confirmed served. Rollback/benchauth-before-longinesl37794-20261014 preserves31d0761. Queue/database unchanged. NextHamiltonH384290 original3pages and16actualfiles archived;full0front/6openedwide/7movementdetail/8closedback/10signedbuckle inspected. H384290physicallymarked;makerretailH38429710/H38429130 H-51 sourcefields extracted. No readableA05291/H-51 physicalmark established; sourcecard notfactoryidentity/dateproof; no acceptednewHamiltonmapping/photosyet. Fulloriginalgoal/authenticatedrefresh remainopen,production untouched.

HamiltonH384290 localacceptedcheckpoint 2026-10-14T14:25:19.615Z:4actual Shuckfiles acrossfront/openedmanualmovement/closedmarkedback/signedbuckle.16contact/full0/6/7/8/10 inspected. PreciseA05291/H-51 unverified;calibre[] noverdict/suggestion;retailmanufacturercontext notaliases. Queueopen. Pendingtests/publication;PR50 liveverificationstillpending/fullgoal/authenticatedrefresh incomplete.
HamiltonH384290 validation:98Node tests pass.4actual original files load/enlarge withcredits,variant/scope and390px mobile. Exactcasecode only,no retail/neighbouring/wrongbrand inheritance. PreciseA05291/H-51/H-31/7753 receive no unsupported verdict or calibre suggestion. External only3exteriors/restores4.929verified entries26pending9rejected97reviewed updates locally. Supplierdesignation/fullretailidentity/date/partsoriginality remainopen. PR50 Pages38579383057 stillqueued;no restart/liveverification remainspending. Fulloriginalgoal/authenticatedrefresh incomplete.
PR50 Longines publication verified: main7e2b41979b5c723133e9ad2b19cec087a0db21f9,tested tree8ae370c0b3e61a589db30130202d3d624421435c. Pages38579383057 completed success confirmed withfresh run resource;12served files byte-match origin/main.3actual files load/enlarge acrossfull .56.6/base representative keys withcredits,variant/scope and390px mobile;Externalonly3exteriors.96Node release tests passed;925entries26pending9rejected96reviewed mappings live. LookupavailabilityL37794 queue resolved withpartial/manual limits explicitlypreserved;originalquestion/author/timestamp preserved,allunselectedrecords unchanged,privateguardedbefore/after/rollback retained. Snapshot14resolved77active91total. PhysicalL888.5/fullsuffix/date/identity/partsoriginality remaingoaltracked. Hamilton929localtested98Node remainsunpublished;MING17.09 original4pages/9Burgundyfiles researched,nextactualmapping pending. Fulloriginalgoal/authenticatedrefresh incomplete;production untouched.

MING17.09 acceptedlocalcheckpoint 2026-10-14T14:41:15.371Z:3KibbleBurgundyexteriors;bare17.09 explicitlyrepresentative,documentedBurgundyname notinventedengraved suffix.5originalprimarypages and9galleryfiles/full0/5/6 inspected. Barecalibre[] noverdict/suggestion;exactBurgundy330.M1 sourceattribution,genericSW330-2/SW330-1 notacceptedcompleteexecutionequivalence. Movementempty,variantreserve/date/revision/partsoriginality gapsretained. Pendingtests/publication;PR51Hamilton deployment verification pending,fullgoal/authenticatedrefresh incomplete.
PR51 Hamilton publication verified: main2e1be5f64b72c451607fed74a4479f259bf20bb0,tested tree7ab9b217b737c406ee16a59ee4f568f254170b91. Pages38582318686 completedsuccess;12servedfilebytes matchmain.4actual files load/enlarge withcredits/variant/scope/390pxmobile;Externalonly3exteriors/restores4. PreciseA05291 unverified,no unsupportedverdict/suggestion.98Node release tests;929verified entries26pending9rejected97reviewed updates LIVE. Rollback/benchauth-before-hamiltonh384290-20261014 preserves7e2b419. Queue staysopen/no database mutation;fullretailidentity/date/supplier/componentoriginality/fullinventory/authenticatedrefresh incomplete,production untouched.
MING17.09 localvalidation:100Node tests pass.3actualBurgundyfiles load/enlarge acrossdocumentedvariant/base representative keys withcredits,labels and390px mobile;Externalonlyretains3,movementempty. Barecalibre[] no preciseverdict/suggestion;exactBurgundy330.M1 attribution,genericSW330-2/SW330-1/SW330.M1 remaincaution. Otherdial/specialedition/17.03/17.06/wrongbrand inheritance excluded.932verified entries26pending9rejected99reviewed updates LOCALLY;unpublished. Barequeuevariant/physicalmodification/revision/date/partsoriginality remainopen. Continuefulloriginalgoal beyondrelease.
PR52 MING publication verified: main5108d5777415ce73a27a08f8ccb6de0e9e0a66db,tested treeebf9ab9c4542b1ea006cece58e9c5e5269892f9f. Pages38583620183 completedsuccess;12servedfilebytes matchmain.3actualBurgundyfiles load/enlarge acrossdocumentedvariant/base representative keys withcredits/scope/390pxmobile;Externalonly3,movementempty. Bare17.09 no preciseverdict/suggestion;genericSW330-2 notacceptedcompletephysicalexecutionequivalence.100Node release tests;932verified entries26pending9rejected99reviewed mappings LIVE. Rollback/benchauth-before-ming1709-20261014 preserves2e1be5f. Queue staysopenforfullvariant/modifiedexecution/revision/date/partsoriginality;no database mutation/fulloriginalgoal/authenticatedrefresh incomplete/production untouched.
NextTudor79250B:existing79250BA separatelycovered,base79250Bunknown. OriginalSWE34117 14source-associatedfiles/full2/6/7/8 inspected;actualbrownfront,closedMT5601legendback,openedTudorsignedmovement andsignedbuckle candidates. Relatedgray13excluded;41mm/tachymeter/sellerdateclaims notadopted. CurrentmakerMT5601/family2016context archived,notolderbrownBMretailalias proof. Brownphotos mustbeexplicitrepresentativeforbasecasecode;noBM/BA/greyinheritance. NoacceptednewTudormapping/photosyet;precisionmovementdesignation/fullretail/date/assay/partsoriginalityresearch remainsopen.

Tudor79250B localacceptedcheckpoint 2026-10-14T14:55:56.525Z:4actualSWE34117 brownrepresentative entriesfront/openedmovement/closedMT5601legendback/signedbuckle.14contact/full2/6/7/8 inspected. CalibreMT5601 attributedbacklegend/makercontext,notreadablemovementmark;noBM/BA/M alias/currentgrey/historicalperiod/thickness inheritance. 41mm/tachymeter/sellerdate claims excluded. Fullretail/date/assay/partsoriginality gaps remain;pendingtests/publication/fulloriginalgoal/authenticatedrefresh incomplete.
Tudor79250B validation:102Node tests pass. OriginalgenericTudorfallback unexpectedlyaccepted79250B-0001; new exactReferenceOnly researched-ruleflag now blocksunsupportedsyntheticM/suffixmatches for thiscasecode,whileold documentedfallback behavior retained. Bench/core cacheversions bumped;newrelease mustverifycore.js plusother12servedfiles.4realbrownrepresentative files load/enlarge withcredits/scope/390pxmobile;MT5601 backlegend attribution,MT5602 caution;Externalonly3/restores4. Fullworkflowfixture passeslookup,sign-in/out+refresh,safety,notes/copy,save/next,RMA,reset/progress/history. Thisisfixturecoverage,notliveauthenticatedrefresh/RLS.936verified entries26pending9rejected100reviewed updates locally. Fullretailidentity/readablemovementmark/date/assay/partsoriginality remainopen. Pendingpublication/fulloriginalgoal/authenticatedrefresh incomplete.

PR53 verified 2026-10-15: main df4f6abec3350cb51fe189ac88cbb1bda6597d9f; tree 768c90b082da6b6182658b837bb85cf5e6ec6113; Pages38702208804 success. All13 served files including core.js byte-match main. Four original Tudor79250B photos load/enlarge with credits and representative labels on desktop/mobile; External only retains3, clearing restores4. Live undocumented suffix/M lookups refused. 102Node tests and full local workflow fixture passed; real authenticated refresh/RLS remains untested. 936verified26pending9rejected100reviewed updates live. Rollback/benchauth-before-tudor79250b-20261015 retained.
Queue double-check:96 records checked against published reviewed guidance. Fourteen already-resolved records retained; Tudor79250B lookup now resolved after live verification, preserving original question/history/author/timestamp. All95 unselected records unchanged. Snapshot15resolved81active. Reviewed calibre conflicts, broad identity gaps and unpublished research remain active. Private before/after snapshots and guarded rollback SQL retained outside public Git. Full original research goal remains active; Universal204610-2 original-source work is still unpublished. Production untouched.

Universal204610-2 accepted local checkpoint 2026-10-15T08:22:06.217Z:5actual separately labelled Tokibank/Huntington photos (2front/1movement/2back). Physical218-2 Tokibank and marked204610-2 separate Huntington back,zero preserved. No buckle view,categoryempty;replacementstraps notfactoryproof. Near20461-2/20461/2/215-2/generic218 excluded. Fullproductioninterval/date/chemistry/material/componentoriginality unresolved. Unpublished pendingtests/livechecks;queueunchanged/fullgoal/authenticatedrefresh incomplete.

Universal204610-2 validation checkpoint:104Node tests passed. Five actual original-source image files loaded/enlarged with credits and separate specimen/representative labels;390px mobile has no overflow.218-2 match and215-2 caution;External only retains4exteriors/clearing restores5;unsupportedbuckleempty. Initial browserDNS failures cleared with network permission; harness restored-photo expectedcount corrected from4to5 and final run passed.941verified26pending9rejected101reviewedupdates LOCAL ONLY. Publication/live served verification pending; queue remainsopen/fullgoal/authenticatedrefresh incomplete.

PR54 Universal204610-2 verified: main b73675112a1f8ff1dc234cd320e8cbfeca8926b8; tree1df5bfc9f5433181a7b10bc56acdfee18765c625; Pages38706015771 completed success.13servedfilebytes matchmain;5actualoriginalfiles load/enlarge withcredits/representativespecimenlabels/mobile;Externalonly4/restores5,buckleempty.104Node/fullworkflowfixtures passed.941verified26pending9rejected101reviewedupdates LIVE. Rollback/benchauth-before-ug2046102-20261015 retained. Queue lookup nowresolved,originalquestion/author/timestamp unchanged andallotherbefore-records unchanged,newuserrecords retained;97total16resolved81active snapshot. Longquestionnote writes twice failed expiredrequestState; short guarded status-only update succeeded. Use private status-only-rollback.sql (older rollback/update files were unsuccessful attempts). Fullproductioninterval/date/material/lumechemistry/componentoriginality remaintracked;lookupresolutionnotauthentication. Real authenticatedrefresh/RLS remainsuntested/fullfiniteinventorygoal incomplete/production untouched. Next IWC324010 originalKibble9files andmakerexact35111 source found;Glashutte016204 exactidentity unsupported,notguessed.

IWC324010 acceptedlocalcheckpoint 2026-10-15T08:50:01.844Z:3actualKibble8954107625778 exteriorsfront/aircraftclosedback/signedfoldingclasp;9contact/full0/5/6inspected. Makerexact35111/36mm/10.6mm/50h/25jewels/28800;notinstalledexecutionproof. Seller10.5mm/SW300-1Aequivalence/dateclaims excluded;C35111unverified,movementcategoryempty. Fullperiod/date/material/hardware/componentoriginality gapsremain;queueopen/pendingtests/publication/fullgoal/authenticatedrefresh incomplete.

IWC324010 validation:106Node tests passed.3actualKibblefiles loaded/enlarged withcredits/exactscope/390pxmobile. Mobilecheck exposed unbroken case-detail prose overflow; rewrittenreadablecase/technical/notes prose fixeswidth withoutCSSchange. Exact35111match,C35111/SW300-1/2892caution;other3240variants excluded. Externalonlyretains3,movementempty.944verified26pending9rejected102reviewedupdates locally;pendingpublication/fullgoal/authenticatedrefresh incomplete.

PR55 IWC324010 merged: main5ff96ba62ed45e636573775526e99a7abd002e5c,testedtreeaba6fba6a217f757a5ac35f55c0afb3739da6444. Pages38709256057 buildsuccess/deployinprogress confirmedsamejobs; do not restart.106Node/fullworkflowfixture/3actualfiles/mobile passed locally.944verified26pending9rejected102reviewedupdates merged,NOTyetverifiedserved. Rollback/benchauth-before-iw324010-20261015 preservesb736751. Queue unchanged/C35111unverified. NextCartierWSTA0071:originalTowerwatch7files allcontact/full1/3/4inspected,actualblackfront/4322closedback/pinbuckle;noopenedmovement. ExactCartierChina sourcearchivedHTTP200 confirmsquartz/29.5x22/6.6mm/blackalligator/steelpinbuckle/3bar,noprecise157/616designation established. Candidate3exteriors only;noacceptednewCartierdata. Fullgoal/authenticatedrefresh incomplete,production untouched.

CartierWSTA0071 accepted local checkpoint 2026-10-15T09:00:42.784Z:3actualTowerwatch exteriors front/4322closedback/pinbuckle;7contact/full1/3/4inspected. Maker exact high-autonomy quartz but no precise157/616 designation;calibre[] and no verdict/suggestion. Movement empty;no4322/WSTA0041 alias. Material/species/date/hardware/componentoriginality gaps remain;queueopen/pendingtests/publication/fullgoal/authenticatedrefresh incomplete.

PR55 IWC verified:main5ff96ba62ed45e636573775526e99a7abd002e5c/treeaba6fba6a217f757a5ac35f55c0afb3739da6444/Pages38709256057 completed success.13servedfilebytes matchmain;3actualoriginalfiles load/enlarge withcredits/exactscope/390pxmobile,Externalonlyretains3,movementempty.106Node/fullworkflowfixtures passed;944verified26pending9rejected102reviewedupdates LIVE. C35111 nomenclature/installedexecution/date/material/componentoriginality gapsremain,queueopen. Real authenticatedrefresh/RLS/fullfiniteinventorygoal incomplete,production untouched.
CartierWSTA0071 validation:108Node tests pass;3actualTowerwatchfiles load/enlarge withcredits/exactscope/390pxmobile. Precise157/616 unknown,noverdict/suggestion;no4322/WSTA0041 inheritance. Externalonlyretains3,movementempty.947verified26pending9rejected103reviewedupdates LOCALUNPUBLISHED. Queue157 staysopen;material/species/date/hardware/componentoriginality researchgapsremain.

PR56 CartierWSTA0071 verified:main31dfb56f19c6525e4524ecf3b832a33b602a6f3f/tree2694faf602798d0909f49d982c53f53aa3085a8b/Pages38710275896 completed success.13servedfilebytes matchmain;3actualTowerwatchfiles load/enlarge withcredits/exactscope/390pxmobile. Precise157/616 unknown,noverdict/suggestion;Externalonlyretains3,movementempty.108Node/fullworkflowfixtures passed.947verified26pending9rejected103reviewedupdates LIVE. Rollback/benchauth-before-cartierwsta0071-20261015 preserves5ff96ba. Queue157 staysopen;date/fullperiod/species/material/hardware/componentoriginality remainresearchgaps. Real authenticatedrefresh/RLS/fullfiniteinventorygoal incomplete,production untouched. NextIWC500401 originalEWC35540 page/8files contact/full0/5/6inspected;actualbrownleather/blackdial/closedback/signeddeployant,noopenedmovement. Historicalmaker catalogue/preciseexecution needed;noacceptednewIWC500401 data.

IWC500401 accepted local checkpoint 2026-10-15T09:09:03.575Z:3actualEWC35540 exteriors front/closedback/signeddeployant,8contact/full0/5/6inspected. Original2010/11 IWCcatalogue cover/PDF11/99 renderedinspected:51111,42jewels,21600vph,7days,46.2/15.8mm,steelblackalligatorIW500401. Dealerbrownstrap notfactoryproof,noopenedmovement. C51111/51110/51113 notequated;fullperiod/date/material/partsoriginality unresolved. Pendingtests/publication;queueopen/fullgoal/authenticatedrefresh incomplete.

IWC500401 validation:110Node tests passed;targeted51113 caution added/passed.3actualEWCfiles loaded/enlarged withcredits/exactscope/390pxmobile,Externalonlyretains3,movementempty. Fullworkflowfixture passedlookup/variants/imagefailure/accountfixture refresh/safety/notes/copy/save-next/RMA/reset/progress/history;notreal authenticatedRLS.950verified26pending9rejected104reviewedupdates locally. Exactmaker51111/42jewels/21600vph cataloguecontextnotinstalledmovementproof;C51111/51110/51113 remaincaution. Queueopen/fullgoal incomplete/pendingpublication.

PR57 IWC500401 verified:mainf7079553cc4ad235cf08a7154b2b0ae3c448b6e2/tree6194a81a744c97d4bdd3fa2bc4966603a0a786f2/Pages38711254549 completed success.13servedfilebytes matchmain;3actualEWC35540files load/enlarge withcredits/exactscope/390pxmobile. Manufacturer51111 attribution,C51111 caution,Externalonlyretains3,movementempty.110Node/fullworkflowfixtures passed.950verified26pending9rejected104reviewedupdates LIVE. Rollback/benchauth-before-iw500401-20261015 preserves31dfb56. QueueC51111 staysopen;installedexecution/date/fullperiod/material/strap/hardware/componentoriginality remainresearchgaps. Real authenticatedrefresh/RLS/fullfiniteinventorygoal incomplete,production untouched. NextRolex1002 SWE73449:11originalfiles contact/full6/8/9/10 inspected;physical1002case/1570movement,whiteRoman/Oyster;fullfront2 anddisclosedreplacement/period evidence stillneeded. Ebel64601712 exactidentity unsupported,notguessed. NoacceptednewRolexdata.

Rolex1002 accepted local checkpoint 2026-10-15T09:16:06.229Z:4actualSWE73449 representative whiteRoman files;11contact/full2/6/8/9/10inspected. Physical1002case/1570movement. No inferred1560/1530/1520 equivalence or otherdial/period/hardware coverage. Dealer1964-65 estimate notindependentdateproof;T SWISS T notchemistryproof. Fullperiod/date/material/refinishing/replacement/componentoriginality unresolved. Pendingtests/publication;queueunchanged/fullgoal/authenticatedrefresh incomplete.

Rolex1002 validation:112Node tests passed;expanded1002A/1003/1005/5500/othercalibre exclusions targetedpass.4actualSWEfiles load/enlarge withcredits/representativelabels/390pxmobile,Externalonly3/restores4. Fullworkflowfixture passed.954verified26pending9rejected105reviewedupdates LOCALLY. Physical1570 source supportsonewhiteRoman specimen,notallperiods/componentoriginality. Dealer1964-65 notindependentdateproof. Pendingpublication;queueunchanged/fullgoal/authenticatedrefresh incomplete.

PR58 Rolex1002 verified:mainfa2a88eaf3883db4e6e1e06eacea58437d900477/treef2a958b0e823550b9dacb3bf289d5ae64c13b88d/Pages38712197101 completed success.13servedfilebytes matchmain;4actualSWE73449files load/enlarge withcredits/representativelabels/390pxmobile. Physical1570 attribution/1560caution,Externalonly3/restores4.112Node/fullworkflowfixtures passed.954verified26pending9rejected105reviewedupdates LIVE. Rollback/benchauth-before-rolex1002-20261015 preservesf707955. Missinglookup1002 resolved afterliveverification;originalquestion/author/timestamp unchanged,allotherbefore-rows unchanged,privatebefore/after/guardedrollback retained. Lookupavailabilityresolutionnotindividualauthentication;date/fullperiod/dial/lume/material/bracelet/hardware/partsoriginality gapsremaintracked. Real authenticatedrefresh/RLS/fullfiniteinventorygoal incomplete,production untouched. NextOmega321051 initialexactmakerURLunavailable,Maxwatches404,WatchLimit/WatchSource webfetchunavailable;noacceptednewOmegaevidence,noguessed32105100 alias.

Omega321051 accepted local checkpoint 2026-10-15T09:25:59.071Z:3actualWatchSource65044 exteriors,10contact/full0/1/5inspected. Exactsource3210.51/1164attribution,physicalexecutionunverified,movementempty. Sellerpolishing/2019nonfactoryservice disclosed;2013/yearpaper notmanufacturedateproof.42vs44hreserveconflict,no7750/1164B/32105100/1780055 equivalence. ExactOmegaURLs404recorded;separateWindsor6filesnotcombinedasoneunit. Pendingtests/publication;queueunchanged/fullgoal/authenticatedrefresh incomplete.

Omega321051 validation:114Node tests/fullworkflowfixtures passed.3actualWatchSourcefiles load/enlarge withcredits/exactscope/390pxmobile,Externalonlyretains3,movementempty. Dealer1164match/generic7750and1164Bcaution;32105100/1780055/otherSpeedmaster inheritance excluded.957verified26pending9rejected106reviewedupdates LOCALUNPUBLISHED. Sellerpolishing/2019nonfactoryservice disclosed,42vs44hconflict andphysicalexecution/fullperiod/date/material/componentoriginality remainresearchgaps. Queueunchanged/fullgoal/authenticatedrefresh incomplete.

PR59 Omega321051 verified:maine37ffb1f8ee60f1f9e0a30e3ede02dc82a4aed08/tree47909c3466c38ea53986c7985bba13ee459042a7/Pages38713350357 completed success.13servedfilebytes matchmain;3actualWatchSource65044files load/enlarge withcredits/exactscope/390pxmobile. Dealer1164attribution/generic7750caution,Externalonlyretains3,movementempty.114Node/fullworkflowfixtures passed.957verified26pending9rejected106reviewedupdates LIVE. Rollback/benchauth-before-omega321051-20261015 preservesfa2a88e. Queueunchanged,physicalexecution/manufacturerrecord/fullperiod/date/service/material/hardware/componentoriginality gapsremain. Real authenticatedrefresh/RLS/fullfiniteinventorygoal incomplete,production untouched. NextbroadConstellation audit:originalruleindex5 incorrectlysupplies561fromcollectionname;manufacturer2026ObservatorypresspageHTTP200archived confirmsmultiple8914/8915executions. Scopefuturecorrectiononlybroadname,exactrulesunchanged,no255411inference. NoacceptednewConstellationdata/correctionyet.

Constellation broad-name correction 2026-10-15T09:32:40.544Z:onlyRULE0005 changed,calibre[] removesunsupported561default. Manufacturer2026Observatorysource provesmultipleexecutions,not identity/dateproof. No255411/commoncalibreequivalence,0newphotos/all4categoriesunsupported. Exactreference rules unchanged. Pendingtests/publication/fullgoal/authenticatedrefresh incomplete.

Constellation validation:116Node/fullworkflowfixtures passed. Exactcomparisonprovesall936otheroriginalrules unchanged fromPR59;existingexactConstellation mappings retained. OldAquaTerra historicaldiff test now recognizesseparatelytestedbroadindex5 correction. Browserbroadnameandnormalizedname have0photos/no561-or255411 verdict/no calibre suggestion;exact22525000 lookup retained,390pxmobilepasses.957verified26pending9rejected106reviewedupdates unchanged;0newphotos. Queueexactidentity remainsopen,pendingpublication/fullgoal/authenticatedrefresh incomplete.

PR60 Constellation correction verified:main14913a98e49fd64c79f45d459e0f4faac37f3c9d/tree6b4351d597bfe14dae52985cdd0a7bc4d40a0ba8/Pages38714176361 completed success.13servedfilebytes matchmain. Livebroadname/normalizedlookup0photos/no255411verdict/nocalibresuggestion,exact22525000retained,390pxmobilepass.116Node/fullworkflowfixtures passed;all936otheroriginalrules unchanged.957verified26pending9rejected106reviewedupdates unchanged. Rollback/benchauth-before-constellation-family-20261015 preservese37ffb1. QueueunidentifiedConstellation staysopen. Fullgoal/authenticatedrefreshRLS remainincomplete,productionuntouched. UserreplicaTudor94110eightphotos preservedprivatelyinwork,neveraddedtogenuinecatalogue/publicGit;userreportedclassificationnotindependentauthentication.

## 2026-10-15 Team admission recursion incident (PR61)
Published OLD main 73c7e58d15769c14793c1794d90b10a79106d900, tree 367daf665a2cdd6b9174bcc904baabd03a3cb2cf. Pages 38755438830 build/deploy/report jobs success. All 13 served application/data files matched origin/main. Live served UI passed team-admission fixture (mocked auth/API only): return=minimal, member role, successful empty response and preserved duplicate error/input. 116 Node tests and full browser workflow fixtures pass.
BenchAuth Lab lkxqqntexxwdqfljtvri migration fix_benchauth_team_member_policy_recursion applied: private fixed-purpose security-definer admin lookup with empty search_path, auth.uid() guard, no caller-controlled identity parameter, PUBLIC/anon execution revoked. INSERT restricted to member role; SELECT stays own-only; RLS remains enabled. Reproduced original 42P17 before repair. Database-role tests passed admin insert, own-only reads, denied non-admin/outsider/anonymous insertion and admin-role escalation; transaction rolled back and no probe memberships remain. This tests simulated claims, not real authenticated login/refresh. No colleague membership was added. Security advisor only reported existing leaked-password-protection warning.
SQL repair, incident rollback and repeatable transactional SQL/browser tests included. Git rollback rollback/benchauth-before-team-access-fix-20261015 preserves previous main14913a9. 957 photos/26pending/9rejected/106 reviewed updates unchanged. Private Tudor replica photos excluded from Git/genuine gallery. Production WatchAuthPro untouched. Full inventory research goal and real authenticated session checks remain incomplete.

## 2026-10-15 Private replica gallery (PR62)
Published OLD main0772e44512cc9f552bbed5a74f7337c1d44ea7bf tree9571eb7663c64dbb92e0cba5d32aff4e0f51250d. Pages38758221553 build/deploy/report success;15 served application/data files including cloud.js and replica-gallery.js matched origin/main. Live served replica gallery fixture passed JPEG upload, failed-metadata retry without duplicate objects, normalized-reference warnings, report/photo review separation, rejected-report warning exclusion, enlargement, genuine-gallery separation, 390px mobile and sign-out clearing. Extra live fixture checked new-report save opens photo dialog and closes entry form. Authentication/storage mocked; real authenticated upload/login/refresh remain unverified (no authorised test session).
116 Node tests, full workflow and team-access browser fixtures passed. BenchAuth Lab lkxqqntexxwdqfljtvri migration add_private_benchauth_replica_evidence_gallery applied: private JPEG bucket, RLS-protected replica_photos, approved-team reads, report-author/admin uploads, admin-only review, no client evidence replacement/deletion. Transactional database-role tests passed admin upload/review, member read, own-report non-admin upload, denied cross-author upload, denied member/pre-reviewed status, immutable captions/objects, outsider/anonymous isolation. All probe data rolled back; final bucket/object and metadata counts zero. Advisor only existing leaked-password-protection warning.
Genuine catalogue remains957verified26pending9rejected106reviewedupdates. Replica copies cannot enter genuine photographs.json. No user Tudor originals automatically uploaded; originals remain private. Added setup/rollback/instructions and repeatable tests. Git rollback/benchauth-before-replica-gallery-20261015 preserves previous main73c7e58; SQL rollback disables new evidence access while retaining all stored evidence. Production WatchAuthPro untouched. Full research goal remains incomplete.

## 2026-10-19 Queue completion reconciliation
User requires researched missing-reference requests to be marked resolved. RESEARCH_COMPLETION.md makes post-publication queue reconciliation an explicit release step. Audited113queue rows:17previouslyresolved. Omega3210.51 request only sought missing lookup with observed1164; PR59 already supplied deployed exact-reference dealer-attributed1164 guidance and inspected exteriors. Live exact mapping was rechecked against published research, then selected status changed open->resolved with exact id/brand/reference/originalquestion/status guard. Original question/author/time preserved; fresh-read comparison proved every other existing row unchanged.18resolved95active. Private before/after and guarded rollback outsideGit. Queue fixture resolve/history/reopen/refresh/mobile/draft preservation passed. This resolves lookup availability only: individual execution/manufacturer-record/component limits remain documented; uncertain/conflicting/unresearched entries remain active. No application changes or production changes. Full research goal remains incomplete.

## 2026-10-19 Required watch reminder (PR63)
Published OLD main85598bc798c00e07cca09e83ba94a92320c47424 tree583c2b5f36a849e62e30f0be2fe26466d9ffb279. Pages39221081532 build/deploy/report success;15 served app/data files matchorigin/main. Missing brand/reference now alerts with a specific reminder before clasp prompt/save, focuses the missing field, keeps draft and button available. Local and live served member/mobile fixture passed all missing-field combinations, focus, draft retention and zero save writes. Full workflow fixture passed. No schema/permission changes; previous unpublished diagnostic changes were discarded after user identified missing brand. Rollback/benchauth-before-required-watch-20261019 preserves previousmain0772e44. Queue reconciliation instructions published;18resolved95active at19Octaudit. Full research and real authenticated validations remain incomplete; production untouched.

## 2026-10-19 User-supplied replica serial list
Read and rendered supplied15page Serial numbers - Sheet1.pdf privately; positional extraction grouped baseline differences to preserve brand/identifier pairs.442nonemptyrows:348acceptedoccurrences reduced to323unique brand/identifier reports (25repeatoccurrences);94held:74missingserial,6possiblemodel/reference/claspcodes,12shortnumbers/editionfractions,1ambiguousbrand,1missingbrand. Imported323 into BenchAuth Lab counterfeit_register only, as Replica/userreported, unreviewed, empty unknown-reference field, sourcepage/row/originalidentifier/SHA trace. AllX characters literal; no wildcard, O/0 substitution, guessed references or automatic authenticity verdict. Matched all323 exact identifiers/status/source hashes afterwrite;0N/Aimports/duplicatepairs; all3existingreports unchanged. TAGHEUER exactserial lookup verified in database. User list is not independently authenticated. Private original/manifest/renders/importSQL/heldCSV/rollback in work/replica-serial-list-20261019; serial list not placed in publicGit or genuine gallery. No app/schema changes. Production untouched; overallresearch remains incomplete.

2026-10-19 Rolex1003 LOCAL UNPUBLISHED:4actualSWE32940 files;12contact/full0/6/8/9/11 inspected. Physical1003/1570 markings;silverbaton/T SWISS T/brownstrap/plain tangbuckle specimen. No factoryhardware/lume/date/material/originality assertion,1560equivalence or neighbouringreference aliases. Queue resolution pending publication/liveverification;fullgoal/authenticatedchecks incomplete.

PR64 Rolex1003 verified:mainc457021df86f1979bfc676988c2a9e8cff43c996/treebef76b2e79abe68fc3360324837709b12934e4c7/Pages39238859342 alljobs success.15servedfilebytes matchorigin/main. Live4actualimages load/enlarge withcredits/representativescope;Externalonly3/restores4 and390pxmobile pass. Live harness firstattempt raced asynchronous startup and hidden panel; corrected harness waits for reference inventory and expands information before checking image visibility, then passes. Current4CDNimages HTTP200 differ inbytes from archived originals; current receipts/copies archived privately and contact-inspected same specimen/views, not falsely claimed byte-identical.118Node/fullworkflowfixtures passed;961verified26pending9rejected107reviewedupdates. Exactmissinglookup1003 resolved afterlivecheck; originalquestion/author/time retained,allotherexistingqueue rows unchanged;private before/after/guardedrollback saved.19resolved110active129total fresh snapshot;16newqueue rows arrived since earlier19Octaudit. Lookupavailability is not individualauthentication;fullperiod/date/lume/material/strap/hardware/originality gapsremain. Rollback/benchauth-before-rolex1003-20261019 preserves85598bc. Productionuntouched;fullgoal/realauthenticatedchecks incomplete. Next6020ShellmanD9177 originalpageHTTP200 archived,9imagecandidates notyetinspected/accepted;Sothebys6020originalsearch lead andWrzeciono710source also found,neither providescompletedpixelreview.

2026-10-19 Rolex6020 LOCAL UNPUBLISHED:3ShellmanD9177 actualphotos;9contact/full4/7/8 inspected. Dealerexact6020/710 attribution,no precisephysical710or6020stamp established. Patinatedcream/plainindices/double12/blue-lookingseconds/tantexturedstrap specimen;no buckleview. Seller30mm/17mm/1953Q1/materialclaims attributednotindependentproof;no genericHunter/700/710A/720/1210 equivalence. Pendingtests/publication/liveverification beforequeuelookupresolution;fullgoal/authenticatedchecks incomplete.

PR65 Rolex6020 verified:main2c7ee13c6963b4db542964c54bdd4352889c2631/tree6545e3d0b69dd3e52b759a8ec79c6cbe41bb8508/Pages39239855757 build/deploy/report success.15servedapp/datafilebytes matchorigin/main. Live3actualShellmanD9177images load/enlarge withcredits/representativescope,Externalonly2/restores3,390pxmobilepass.120Node/fullworkflowfixtures passed;964verified26pending9rejected108reviewedupdates. Exact6020 missinglookup resolved only afterliveverification;originalquestion/author/time preserved,allotherexistingqueue rows unchanged;private before/after/guardedrollback retained. Precisephysical710/6020marks notestablished;dealerattribution/manualreviewremainsvisible. Noindependentdate/material/period/strap/buckle/originality/performanceproof. Rollback/benchauth-before-rolex6020-20261019 preservesc457021. Fullgoal/realauthenticatedchecks incomplete,production untouched. Next169622 originalSWE23835pageHTTP200 archived with14imagecandidates;notyetpixel-reviewed/accepted. CPOoriginalWatchesofSwitzerland exactM169622-0002 lead found,notyetused to inferotherreference/variant specs.

2026-10-19 Rolex169622 LOCAL UNPUBLISHED:4actualsourcephotos,11contact/full0/5/7/8/9inspected. Physical169622case/2235movement. URL23835actualstock23749;other3recommendedstockthumbsexcluded. Silvertextured/redseconds/Oysterspecimen;dealerplatinum/luminova/date/29mmclaims attributednotindependentproof;unidirectionalbezel wordingnotadopted. NootherYachtMaster size/ref/calibre inheritance. CPOoriginalpagewebcachemiss,noCPOspecificationsadopted. Queuependingpublication/livechecks;fullgoal/authenticatedchecks incomplete.

PR66 Rolex169622 verified:main3b78d17acb385daa056f7b070e8d5c187b0605b0/tree2ed91a943174519e942a968b1b26b14ae91829d1/Pages39240994495 build/deploy/report success.15servedapp/datafilebytes matchorigin/main. Live4actualSWE URL23835/stock23749 images load/enlarge withcredits/representativescope;Externalonly3/restores4 and390pxmobile pass.122Node/fullworkflowfixtures passed. Initialmobilecheck exposedunbrokenresearch/facts wording causing4pxoverflow;readablenotes/case/technologyprose fixed it withoutCSS/workflow changes.968verified26pending9rejected109reviewedupdates LIVE. Exact169622 missinglookup resolved onlyafterlivecheck,originalquestion/author/time retained,allotherexistingqueue rows unchanged;privatebefore/after/guardedrollback retained. Lookupresolutionnotindividualauthentication;fullperiod/date/material/lume/bezeloperation/factoryhardware/originality gapsremain. Rollback/benchauth-before-rolex169622-20261019 preserves2c7ee13. Fullgoal/realauthenticatedchecks incomplete,production untouched. NextCartierWSTA0053 officialintCartierpageHTTP200794972bytes/hashcc52f49605eafe96a3097506161183a37f8624c0eab8fce0d66e8f36a24f3669 andCartierBrazilHTTP2001424027bytes/hash1f95e2ea02a029d60c36e97341ea6528dc4a499b00eb1b51de00420db95f4afc archived;exactTankMustXL1847MClead,notTankFrancaise. OriginalEWC54417/63487/68761photo leadsfound,notyetdownloaded/inspected/accepted. DealerSolo-named48040/50621titleconflictsrecorded,donotinheritnaming/straporotherstockphotos.

2026-10-19 CartierWSTA0053 LOCAL UNPUBLISHED:3actualEWC54417 exteriors;8contact/full0/5/6inspected. Makerweb-reader exact1847MC/syntheticspinel/41x31/8.4/3bar;rawBrazilHTML lacks1847,internationalredirectnumberblank,so distinguishretrievalchannels. Noopenedmovement;Movementempty. Makerstone specificationpreferredoverdealersapphirewording. Noblurred4324/serialaliasorTankSolo/Francaise/neighbouringreference/strapinheritance. Papers2023notmanufacturedate. Pendingtests/publication/liveverification beforelookupresolution;fullgoal/authenticatedchecks incomplete.

PR67 CartierWSTA0053 verified:maineebb385ad1695ae3020505ad937ce81510cba127/tree6416ca266e2bf83e7d6b9da3cbf740edec20d9c7/Pages39242063722 build/deploy/report success.15servedapp/datafiles matchorigin/main. Live3actualEWC54417images load/enlarge withcredits;Movementempty,makersyntheticspinelvisible,Externalonlyretains3,390pxmobilepass.124Node/fullworkflowfixtures passed;971verified26pending9rejected110reviewedupdates LIVE. ExactmissinglookupWSTA0053 resolved onlyafterlivecheck;originalquestion/author/time preserved,allotherexistingqueue rows unchanged;privatebefore/after/guardedrollback retained. Maker1847MC attributionnotphysicalcalibreverification;blurredidentifiersnotread,factoryhardware/material/date/originalitychecksremain. Rollback/benchauth-before-cartierwsta0053-20261019 preserves3b78d17. Fullgoal/realauthenticatedchecks incomplete,production untouched. NextW69012Z4 exactCartierIndiaURL404674325bytes/hash8c843d1de432b627baf52407eecb0d86812b87ae97e9b51e09b876b410556029 archived;originalDavidSWproductHTTP200564097bytes/hash22d8a2e61a942c1c0f2f2ed4be7a08f9845335fd762983566dfa9ba586a80cf4 archived. Searchsource049not1847MClead;noactualphotos/precisemappingaccepted yet,donotinherit3001/3765casecodesorotherBallonBleus.

2026-10-19 CartierW69012Z4 LOCAL UNPUBLISHED:3actualDavidSW40994 exteriors;9gallerycontact/full0/3/8inspected. Dealerexact049attribution,noopenedmovement;Movementempty. Dealer42mm/42h/30m/September2011attributednotindependentproof;manufacturerexactURL404recorded. Noblurredcasecode/3001/3765alias,nogeneric049/49/076/1847MC/2892/SW300equivalence. Pendingtests/publication/livechecks beforelookupresolution;fullgoal/authenticatedchecks incomplete.

PR68 CartierW69012Z4 verified:main2077f780b174728b6631cc71d30f970a4f1386c4/tree276e6e109b4bfcef5972df3ae4c57dac9b4523e2/Pages39243096599 build/deploy/report success.15servedapp/datafiles matchorigin/main. Live3actualDavidSW40994images load/enlarge withcredits;Movementempty,dealer049attributionvisible,Externalonlyretains3,390pxmobilepass.126Node/fullworkflowfixtures passed;974verified26pending9rejected111reviewedupdates LIVE. ExactmissinglookupW69012Z4 resolved onlyafterlivecheck;originalquestion/author/time preserved,allotherexistingqueue rows unchanged;privatebefore/after/guardedrollback retained. Dealer049notphysicalcalibreverification;casecode/material/stone/date/factoryhardware/originalitychecksremain. Rollback/benchauth-before-cartierw69012z4-20261019 preserveseebb385. Fullgoal/realauthenticatedchecks incomplete,production untouched. NextRolex15223 originalSWE54381pageHTTP200 archived with13imagecandidates,notyetpixel-reviewed/accepted. Originalauction andCPO15223/3135leads found;no date/dial/bracelet/bezel variants inherited without review.

2026-10-19 Rolex15223 LOCAL UNPUBLISHED:4actualSWE54381photos;13contact/full0/6/8/9/10inspected. Physical15223case/3135movement. WhiteRoman/gold-tonebatons/two-toneOyster specimen;T SWISS MADE T notlumetestororiginalityproof. Dealer1991/34mm/18K/31jewelsattributednotindependentproof. NoJubilee/otherdial/adjacentref/3035/3130/3235equivalence. Pendingtests/publication/livechecks beforelookupresolution;fullgoal/authenticatedchecks incomplete.

## Rolex 15223 deployed verification — 19 October 2026
PR69 published main a31c275bdd2bc5475b66aaa2a4e00df35df2e321, tested tree f69f92615b0252851d0a37b8d0bdc62cd181e52a. Pages39244384643 succeeded. All15 served files matched origin/main bytes; four actual credited source images, enlargement, representative labels, External-only3/restores4 and390px mobile passed. 128 Node tests and full workflow fixtures passed before publication. Catalogue978 verified/26pending/9rejected;112 reviewed updates.
Exact Rolex15223 missing lookup resolved after live checks, original question/history retained. Private before/after and guarded rollback preserved; all other existing queue rows unchanged. Queue129 total,24resolved,105active. This resolves lookup only, not physical authentication or all variant evidence. Rollback branch rollback/benchauth-before-rolex15223-20261019 retained. Full inventory research and real authenticated refresh/upload checks remain incomplete. Production untouched.

## Longines L3.812.4 local evidence checkpoint — 2026-10-19T11:29:45.434Z
Three DelrayWatch7154 actual exterior photographs: physical L3.812.4 caseback, black dial/blue GMT hand/brown strap. Partial case representative only; exact suffix unestablished. Original maker .53.2/.53.6 technical payloads name L844.4, not physical execution proof. Movement empty; no exact suffix photo inheritance. Tests/publication and queue reconciliation pending. Full research and real authenticated checks incomplete.

Local validation:130 Node tests passed; full browser workflow fixtures passed. Actual Delray7154 three image loads, credits, enlargement, empty Movement, External-only retains3, and390px mobile passed. Exact manufacturer L844.4 attribution retained as source guidance, not physical execution evidence. Publication/live hash and queue reconciliation remain pending.

## Longines L3.812.4 published verification —19October2026
PR70 main47fb8b4b18b2bdd8a23eda2d4a5c8193e81b3bbd, tested tree2ecbf7fab6595c89f1dce6e92f2f86456d838d81. Pages39245536820 build/deploy/report succeeded.15served files matched origin/main bytes; three actual credited Delray7154 images loaded/enlarged, Movement empty, External-only retained3,390pxmobile passed.130Node tests and full workflow fixtures passed.981verified26pending9rejected photographs;115reviewed updates. Original missing lookup L38124 with observedL844.4 resolved after live checks, original question/history preserved; private before/after/guarded rollback retained, other existing queue rows unchanged. Full suffix, physical movement execution, factory hardware and manufacture date remain unverified. Full inventory and authorised real authenticated refresh/upload checks incomplete; production untouched. Rollback branch rollback/benchauth-before-longinesl38124-20261019 preserved.

## TAG Heuer WBD2113-0 local research checkpoint — 2026-10-19T15:26:36.767Z
Three actual Gray&Sons W529323 exterior entries accepted locally; exact -0 dealer attribution,full hardware suffix unverified. Original front and clasp/back actual pixels inspected; generic box excluded. Movement empty,Calibre5 attribution not underlying ETA/Sellita execution. Official maker web-reader technical evidence distinguished from raw challenge archive.20mm dealer/20.50mm maker lug discrepancy retained. No neighbouring/suffix alias inheritance. Tests/publication/queue reconciliation pending;full research/authenticated checks incomplete.

Local validation:132Node tests and full browser workflow fixtures passed. Three actual Gray&Sons images loaded with credits and enlargement; Movement empty,External-only retained3,390pxmobile passed. No authenticated session or database writes used. Publication/live hashes/queue reconciliation remain pending.

## TAG Heuer WBD2113-0 live verification —20October2026
PR71 maincff5403d75ef588519f5e430d50cb46f3bc61635,tree d6b7e5f0d0b66e5a7d7426fb4d66694ae2022225. Same Pages run39278967403 completed successfully after queued wait; not restarted. All15served files matched origin/main bytes. Three actual Gray&Sons images loaded/enlarged with credits,Movement empty,External-only retained3,390pxmobile passed.132Node/full workflow fixtures passed before publication.984verified26pending9rejected photos;116reviewed updates. Queue WBD21130 missing lookup with CAL5 notation resolved after live checks; physical movement execution/full hardware suffix/date/originality remain unverified. Private before/after/guarded rollback retained; all other existing queue rows unchanged. Original045ffc1 and rollback branch rollback/benchauth-before-tagwbd21130-20261019 retained. Wider inventory and real authenticated refresh/upload checks incomplete. Production untouched.

## Cartier WSSA0096 local research checkpoint — 2026-10-20T07:51:24.636Z
Two actual Noahs0008-7155 front/clasp photos accepted locally. Maker actual HTML explicitly1847MC; physical movement unobserved. Caseback/Movement empty. Generic NewYork images rejected; loose accessories not factory-originality proof. No4072/otherSantos aliases or calibre equivalence. Tests/publication/live/queue reconciliation pending. Full research/authenticated checks incomplete.

Local validation:134Node tests and full browser workflow fixtures passed. Two actual Noahs photographs loaded/enlarged with credits; caseback and Movement empty,External-only retained2,390pxmobile passed. No authenticated session/database writes used. Publication/live verification and queue reconciliation remain pending.

## Cartier WSSA0096 published verification —20October2026
PR72 main32c7a94fe06f8e6f9042b2dbc24f7ee6e65f8cd6,testedtree12e9192895ef5a08a6914e5019ac24b4351cba72. Pages39389786702 succeeded;15servedfiles matched origin/main bytes. Two actual Noahs photographs loaded/enlarged with credits;caseback and Movement empty,External-only retained2,390pxmobile passed.134Node/fullworkflow fixtures passed.986verified26pending9rejected photographs;117reviewed updates. Exact missinglookup WSSA0096 with1847MC resolved after live checks;physical movement/caseback/date/fullinterval/hardware originality gaps remain. Original question/history preserved;private before/after/guarded rollback retained;allotherexistingqueuerows unchanged. Original045ffc1 androllback/benchauth-before-cartierwssa0096-20261020 retained. Full inventory/real authenticated refresh/upload checks incomplete;production untouched.

## Rolex16700 local research checkpoint — 2026-10-20T08:02:34.139Z
Four actual SWE stock25999/URL26265 photos accepted locally;physical16700case/3175movement. Blackbezel/Oyster specimen;SWISS-T<25 not lume test. No adjacentref/otherbezel/Swiss-onlydial/Jubilee or3075/3185/3186/3285 equivalence. Dealer date/material/measurements attributed;codes/originality/fullinterval gaps retained. Tests/publication/live/queue reconciliation pending. Fullgoal/authenticatedchecks incomplete.

Local verification:136Node tests/full browser workflows passed. Four actual source images loaded/enlarged with credits/representative labels;External-only3/restores4 and390pxmobile passed. No authenticated session/database writes used. Publication/live hashes and queue reconciliation pending.

## Rolex16700 live verification —20October2026
PR73 main298a61308651ff97d9faf20d1cdbafe8f8475285,testedtree35525ae065702394bfaab0eca15cee89d06e1dc2. Pages39391200196 succeeded;15servedfiles matched origin/main bytes. Four actual credited photos loaded/enlarged with representative labels;External-only3/restores4 and390pxmobile passed.136Node/fullworkflow fixtures passed.990verified26pending9rejected photos;118reviewedupdates. Exact missinglookup16700 observed3175 resolved afterlivechecks;period/date/partsoriginality/material/otherconfiguration gaps remain. Originalquestion/history preserved;privatebefore/after/guardedrollback retained;allotherexistingqueuerows unchanged. Original045ffc1 androllback/benchauth-before-rolex16700-20261020 retained. Fullinventory/realauthenticatedrefresh/uploadchecks incomplete;production untouched.

## Cartier W5330003 local checkpoint — 2026-10-20T08:14:29.753Z
Four category entries from three distinct SWE74303 files;Movement/Caseback share displayback photo. Actual1904-PSMC rotor plus exact maker record. All rear/clasp views exposemovement;External-only retainsfront only. Blue strap not makerblackalligator factoryfitment proof. No3589/neighbour/calibre aliases;date/fullinterval/originality gaps. Tests/publication/live/queue reconciliation pending;fullinventory/authenticatedchecks incomplete.

Local verification:138Node/full browser workflow fixtures passed. Four category entries from3distinct actualfiles loaded/enlarged withcredits/representativelabels. External-only retained1front/restored4;390pxmobile passed. Noauthenticatedsession/databasewrites. Publication/livehash/queue reconciliation pending.

## Shared queue inspection details — local20October2026
Missing-reference cards now open read-only entered details:originalrequest plus allsaved inspections with exact storedbrand/reference,includingrequestauthor/otherteam labels,serial,time,workflow,outcome,allstructured fields andsavednote. Multiplewatches remain separate;no claim of direct uniqueinspection link. Manual/unsavedrequest empty state,retry,pagination,textContentescaping,mobile,draftpreservation andsignoutclearing validated. No database/schema/policy writes;live inspections SELECT policy alreadyapprovedteamread. Dedicated browserfixture andfullworkflow fixtures passed;138Node tests passed. Real signed-in cross-computer session remains unverified. Productionuntouched;OLDpublication/liveverification pending. Widerresearch remainsincomplete.

## Shared queue details and CartierW5330003 live verification —20October2026
PR75 mainc0137d0b48a4edf4071784301b10591eb27b6fde,testedtree90c70398b169fbcc358301b43e7ff0c3b9f36f80,Pages39393183877 success. All16servedfiles includingresearch-details.js matched origin/main bytes. Live-page browser fixtures verified colleague savedrecords,multiplewatches,serial/calibre/checks/comments/note,escapehandling,retry/empty,mobile,draftpreservation,signoutclearing andzeroDBwrites. Real authenticated cross-computer session remains outstanding. Existing teamread policy inspected;no permissions/schema altered.
PR74 researchmain7aa8e0a2120dbe077257c7d992e75153a033a8b2 includedinPR75verifiedtree. W5330003 actual4categoryentries/3distinctfiles loaded/enlarged withcredits,External-only1/restores4 and390pxmobile passed live.138Node/fullworkflow fixtures passed.994verifiedcategoryentries26pending9rejected;119reviewedupdates. ExactW5330003 missinglookup observed1904PSMC resolved afterlivechecks;originalquestion/history retained;allotherexistingqueuerowsunchanged. Privatebefore/after/rollback retained. Queue156total29resolved127active. Date/fullinterval/bluefactorystrap/partsoriginality gaps remain. Original045ffc1 andbothPR74/75rollbackrefs preserved. Fullinventory/real authenticatedrefresh/uploadchecks incomplete. Production untouched.

## Shared research queue export —local20October2026
Export research queue fetches fresh sharedrequests andsavedinspections,activeonly,stable request/inspectionIDs,originalquestions,times/status andseparate matchingwatchrecords. User requestedfullsavedinspectiondetails includingserials/notes bydefault;checkboxcanomitinspectionrecords. Exportdialog offersJSONdownload andCopyexport/manualselectionfallback. Exportneverresolvesrequests;policyrecordsresearch/publish/liveverification/recheck gate. Draftpreserved,noDB/schemawrites,close/signoutclear.140Node/fullworkflowfixtures passed;dedicatedbrowser verifiespayload,downloadtrigger/filename via instrumentedanchor,copy,activefilter,optionalprivacy,emptyqueue,mobile,zero writes. AutomatedChrome actualfilesystemdownload wascancelled evenonlocalserver;downloadcompletion notclaimed,testedcopyfallback available. Fullreal authenticatedsession check remainsoutstanding. Productionuntouched;publication/liveverification pending.

## Research export liveverification —20October2026
PR76 main382c0eb0db3cded26aa73f0f4899a2473ea66d42,testedtreeb66e8ce1f07d0bf8fc67a6c98762223ca746af6e,Pages39395541931success.17servedfilesincludingresearch-export.js matchedorigin/mainbytes. Livepagefixtureverifiedactiveonly/stableIDs,fullsavedinspectionoption,JSONpayload/downloadtrigger/filename,Copyexport,mobile,emptyqueue,draftpreservation andzeroDBwrites. Automatedfilesystemdownloadcompletion notverified;copyfallbacktested.140Node/fullworkflowfixturespass. Noqueue/schema/permissionchanges;real authenticatedsession/refresh/upload andfullinventoryresearch remainoutstanding. Original045ffc1/rollbackrefsretained;productionuntouched.

## Precista local research — 2026-10-20T09:08:16.170Z
Added an incomplete-prefix notice for 664599 and separate exact full-stock-number 6645-99-757-3314 lookup. VWS attributes ISA1198; physical movement execution remains unverified. Two representative Patina photographs, front and closed back; no movement/clasp or partial-prefix photo inheritance. Precista More brands button derives from the new rules. Wider research and authenticated checks remain incomplete.

Verified publication: PR77 merged as 7d64e6c7cd742f0891c624c0d9d63c2f195b6a87, tested tree 15ad779aa7a93d896dea8f39d3d937e476d8ba6a. Pages run39398958551 succeeded; all17 served application/data files matched origin/main bytes. 142 regression tests and full workflow fixtures passed. Live actual-source browser checks passed Precista brand button, incomplete-prefix isolation, ISA1198 attribution, two loaded photos, enlargement, empty Movement, External-only retaining two exteriors, and390px layout. Counts996verified category entries/26pending/9rejected;121 reviewed update rules. Real authenticated cross-computer/session/upload checks remain outstanding.

After live verification the original Precista664599 missing-information request was marked resolved, preserving its original fields and resolved history. Private before/after audit:161total,30resolved,131active; all other existing rows unchanged. Resolution addresses missing lookup information, not physical authentication or confirmation of fitted calibre. New queue arrivals remain active. Rollback branch rollback/benchauth-before-precista-20261020 retains pre-release main; original045ffc1 retained. Production WatchAuthPro untouched. Full inventory research remains in progress.

## Missing-reference research pass2026-10-20
Reviewed132 active snapshot requests.52 missing-mapping questions answered,80 retained for missing identifiers/source evidence or discrepancies.50 new exact textual source mappings; no new photo verification claimed. New brand buttons derive from reviewed rules, normalized to prevent duplicate case/punctuation labels including Panerai and Longines. Private research conclusions will remain team-only, separate from reference-rule acceptance. Existing workflow/live/deployment/queue reconciliation pending. Full photograph inventory and real authenticated checks remain incomplete.

PR78 publication verified: main a44fe32ecf08f115b03b9acfce1180134eff4416, tree183bb27350650287fbec081ad139ef2bf5a74cd8, Pages39430489779success. All19 served files matched published bytes.146Node tests, full workflow fixtures, live50 exact lookup/source pairs, unique brand buttons including Panerai/Longines, private conclusion fixture/escaping/refresh/signout clearing and390px passed. Direct database audit verified132 team-private review records;131 research-only records excluded from lookup acceptance, prior verified A32360 data/status/source preserved except added review metadata.52 requests resolved after verification;80 reviewed requests remain active (79 changed to researching, one already researching). Original questions/authors/times/identifiers preserved.28 later arrivals preserved;190total/82resolved/108active at audit. Real authenticated team-session checks remain outstanding. Rollback branch rollback/benchauth-before-queue-batch-20261020 preserved.

## Later28 queue requests —2026-10-20
Reviewed all28 later arrivals in the190-row cutoff snapshot.18 new source-backed mappings prepared;10 need identifiers or physical execution evidence. Combined reviewed160 requests,70 answered and90 needing evidence; publication/live/queue reconciliation for this second set pending. No new photo entries verified. Full inventory and real authenticated checks remain incomplete.
PR79 publication verified: main47c27b0a3b0a666eb61d6323c86bc01cc68b9961, tree31e9b87e3530ea43bdf6088ec1445f10266670ba, Pages39432444035success. All20 served files matched origin/main bytes.148Node tests passed; live browser checked68 exact source mappings, all unique brand choices, private conclusion escaping/refresh/signout clearing and390px layout using isolated auth/database fixtures. Direct database audit verified28 additional private reviews and18 additional resolved requests, preserving every existing question, author, date and identifier. Combined160 reviewed,70 newly resolved,90 evidence-needed. Final audit193total/100resolved/93active:90 reviewed evidence-needed plus3 newer arrivals preserved. No new photo verification;996verified category entries/26pending/9rejected and189 reviewed update rules. Real authenticated cross-computer/session/upload checks remain outstanding. Rollback branches for PR78/79 and original045ffc1 retained. Production WatchAuthPro untouched. Full inventory research remains incomplete.

## Second pass on90 evidence-needed requests —2026-10-20
Reviewed all90 prior conclusions and targeted original manufacturer, retailer and auction sources for deeper evidence.23 information questions answered;67 still need19 unconfirmed identifiers,17 complete references,11 family identities,5 brand corrections and15 execution evidence. Corrected prior false incomplete classification for complete compact Tudor M2836C1A00101. Exact source mappings do not approve physical authenticity or accept recorded supplier substitutions. Existing photos/credits/workflows preserved. Publication, live verification and private queue reconciliation pending. Full photograph inventory and real authorized-session checks remain incomplete.
PR80 verified: published main66907549a1b102206d55af9078589a101aad0cc7, tested treec99ac0d7b5924df4db4661e08b6211e6eada3540, Pages39436124332success. All21 served application/data files matched origin/main bytes.150Node tests and live23 exact-source lookup/browser fixtures passed, including unique brands/private findings/escaping/refresh/signout/mobile390px. Direct database audit verified all90 second-pass reviews and preserved previous reviews in metadata history, existing fact status/source/verified fields, and original queue questions/authors/times/identifiers.23 resolved;67 remain evidence-needed. Audit199total/123resolved/76active includes9 later arrivals outside this90-request pass, preserved.208 reviewed update rules; photograph totals unchanged996verified/26pending/9rejected. Rollback branch rollback/benchauth-before-research90-20261020 retained; guarded private database rollback saved separately. Original045ffc1 retained. Production WatchAuthPro untouched. Full photo inventory and real authorized signed-in cross-computer/session/upload checks remain incomplete.

## Cartier W20122U2 actual photographs —2026-10-20T14:16:09.858Z
Original Zeitauktion item2304646 explicitly identifies W20122U2/2878 and automatic076. All15 original gallery images contact-inspected; full1/11/14/15 inspected. Opened15 has readable Cartier076 rotor, SWISS and METALMD retaining-plate stamp; no ETA supplier-equivalence inference. Front1 shows white/silver Roman dial, three hands and white strap/bezel execution. Closedback11 shows Santos 100 / Cartier / AUTOMATIC / STAINLESS STEEL / WATER RESISTANT 100 m 330 ft / SWISS MADE, not a newly established independent retail alias. Strap underside has MSMD; pinbuckle14 is Cartier-signed. Seller approx2010 is an estimate, not independent manufacture date or complete period. Refurbishment/service/originality claims, material assay, exact strap/hardware codes and current water resistance require independent inspection; source paperwork/test-ticket is not a user-watch test. No bare2878 alias, otherSantos100 sizes/dials/straps, retailsuffix or common-calibre inheritance. Selected images are actual photographs, not renders. Source-listed dimensions are not authenticity thresholds.
Accepted four distinct original source files for front/movement/caseback/braceletClasp. Tested publication pending; wider inventory and real authenticated checks remain incomplete.
W20122U2 local validation:152Node tests passed. Actual original-source browser loads/enlarges all4 selected images with source credits, checks external-only3/restored4, rejects bare2878 photo inheritance, and fits390px mobile. Full workflow fixtures pass account/refresh/lookup/safety/notes/copy/save-next/RMA/reset/progress/history. Real authorized signed-in checks remain outstanding. Generated coverage1000verified category entries/26pending/9rejected,378 reviewed identifier keys,394 reviewed source records and2216 unreviewed source records. The inventory and product are not finished. Publication pending.
W20122U2 PR81 publication verified: main4a61de4c06795fb8518a5c43725d3695ccfe1803, treeb4867663cb8f464eb3e6b8371dd8da64076ee416, Pages39439101282success. All22 served application/data files byte-matched origin/main. Live actual-source4image load/enlarge/credits, external-only3/restored4, bare2878 isolation and390px pass.152Node checks/full workflow fixtures passed. Rollback branch rollback/benchauth-before-cartier-w20122u2-20261020 retained. No private database or production changes. Recovery includes source receipt/original inspected-image evidence. Still1000verified category entries/26pending/9rejected;2216 source records unreviewed. Pending PAM00609 records already have pixel/source evidence but retain earlier browser-delivery timeout finding; revalidate delivery before promotion. Continue finite inventory review; full product and real authenticated refresh/RLS checks remain incomplete.

## Pending-media review —2026-10-20T14:35:40.688Z
Original Cash Converters item 052700082882 explicitly identifies A32360 and describes a white-dial, steel-bracelet specimen as edition 90/100. All six gallery files contact-inspected; full 2/3/4/6 inspected. Front 2 shows a white dial with LIMITED EDITION, inner 24-hour scale, red arrow GMT hand and date at 3. Closed back 3 shows winged Breitling logo, chronometer/Swiss/1000M and limited-edition inscriptions, but small/obscured reference and edition digits are not independently transcribed. Bracelet/clasp 6 shows Breitling 1884 signing and microadjustment holes; underside hardware marks in 3/4 are not reliably read. No opened movement or physical calibre stamp is present. Seller Breitling32, 41mm, 1000m and January2016 purchase claims are not measurements, present water-resistance tests, manufacture date, universal edition totals or individual originality proof. No white-to-blue full-suffix transfer, Wempe attribution, A32350/A32370 inheritance or ETA2893-2 equivalence.
Rejected legacy-001 packaging group view from Front and accepted three distinct original Cash Converters close-ups in front/caseback/braceletClasp. No new movement photograph; existing movement gap remains. Compared original BreitlingSource accepted white front pixels: a different small, angled dark-background frame, not a duplicate of the new larger seller image. PAM00609 original front/back URLs were rechecked in actual Chrome and both still timed out at20s; three related category entries remain pending. Publication/tests pending; full inventory and authenticated checks incomplete.

## Original Omega source-record review —2026-10-20T14:38:59.808Z
Reviewed original RULE0001/0002/0006/0007/0008/0011/0012/0013 against manufacturer collections/releases and original exact176.009 auction evidence. These are collection names or nicknames, not complete case references. Removed unsupported generic calibre/size/reserve/technology/period assertions and recorded all four categories as identification gaps; exact numeric mappings preserved. No new photograph coverage claimed. Chronoscope9908/9909 alternatives are not interchangeable. Full finite inventory, publication/live checks and authorized-session checks remain incomplete.
Pending-media/name-record local validation:156Node tests pass; full workflow fixtures pass account/refresh/lookup/safety/notes/copy/save-next/RMA/reset/progress/history. Actual browser loads/enlarges all3 new Cash Converters photographs with credit, representative-variant labels, full-blue-suffix isolation, empty movement and external-only preservation; all8 reviewed Omega names have no calibre suggestion or inherited photographs and fit390px. Warm-cache browser regression reproduces stale565 using the real PR81 bench code, then proves current code conditionally revalidates intelligence/research-updates/photographs and removes that stale verdict; retained test tests/research-data-cache-browser.cjs uses a pinned historical snapshot. Three JSON fetches now use cache:no-cache, with a bench entry version bump. Historical AquaTerra/Constellation regression checks retain exact-reference invariants instead of asserting the whole unrelated catalogue is frozen. Counts1003verified/25pending/10rejected;402reviewed source records/2208unreviewed. Real authenticated refresh/RLS remains outstanding. Publication pending; no database mutations or production changes.
PR82 verified: published main587c0e97474133efbf1ea6b33ff1432e12ca3440, tested tree1496fa7f62c6248e2f44d444f5b7f63cb0f263a5, Pages39566198276success. All24 served application/data files byte-matched origin/main. Live Chrome after deployment passed3 original credited representative photographs loading/enlargement, empty movement, external-only preservation, blue-suffix exclusion,8 Omega names without unsupported calibre/photos and390px layout. Initial browser attempt before deployment completion timed out; post-success run passed.156Node and full workflow fixtures previously passed. Rollback branch retained.1003verified category entries/25pending/10rejected;402reviewed source records/2208unreviewed. Real authenticated refresh/RLS outstanding. Overall goal remains active and incomplete; production untouched.

## Original Omega424/232 exact-reference photographs —2026-10-21T09:47:22.571Z
424.10.40.20.03.001: Exact-reference Zeitauktion2502004 page attributes its actual specimen photographs to Zeitauktion. All15 contact-inspected; full1/10/12 inspected. Blue Roman/baton dial has date at3 and three hands. Closedback has Omega signing; underside bracelet stamps STZ00593 and STZ00584, HJC and11 are visible but do not establish universal hardware codes. Clasp bears Omega logo. No opened movement appears:2500 is a manufacturer/dealer specification, not an observed calibre stamp in this gallery. Seller purchase15April2019 is not manufacture date. Manufacturer documents39.5mm steel/blue execution and2500; no neighbouring suffix, alternate dial/strap, supplier equivalence, complete production period or component-originality inference. Source test-ticket applies only to its specimen; current user-watch pressure resistance requires testing. Ignore the dealer template Rolex manufacturer footer.
232.30.46.51.01.001: Exact-reference Zeitauktion2503509 page attributes its actual specimen photographs to Zeitauktion. All14 contact-inspected; full1/11/12/13 inspected. Black two-register chronograph dial has date6, orange central chronograph/recorder accents and black dive bezel. Image11 visibly reads Omega Co-Axial9300 on the rotor through the fitted display back; column-wheel and two-barrel legends visible. This is through-glass fitted movement evidence, not an opened inner-caseback inspection or proof of individual authenticity. Case rim bears Professional/PlanetOcean/600m2000ft; legends do not establish current pressure resistance. Image13 clasp is Omega-signed and also contains visible movement in background, so external-only suppresses it. Image11 serves both movement and full caseback categories; one file is counted distinctly from category entries. Seller purchase12January2018 is not manufacture date. Manufacturer documents steel45.5mm black chronograph with9300/60h. No adjacent232/215 suffix, non-chronograph calibre, supplier equivalence, production start/end or hardware-originality inference. Ignore dealer template Rolex footer.
Seven category entries/six distinct files accepted. Local validation and publication pending. Full inventory and real authenticated checks incomplete.
Local validation:159Node tests pass; preserved full workflow fixtures pass. Actual Chrome original-image loading/enlargement/source credits, exact suffix/family isolation, external-only/restored visibility and390px layout pass for both records.Full inventory and real authenticated refresh/RLS remain incomplete; publication pending.
PR83 verified: main2f952aa24fc1fd973c86d76ee539fd4da42c8853, tested treed6d92b40cbaf30a619f4960365c05f8b30242873, Pages39580294381success. All25 served application/data files byte-matched origin/main. Live Chrome verified all7 gallery category entries/six original images load/enlarge with source credit;424 movement empty and external-only keeps3;232 external-only shows front only and restores4; neighbouring suffix/family isolation and390px pass.159Node tests and preserved full workflow fixtures pass.1010verified photo category entries/25pending/10rejected;404reviewed source records/2206unreviewed. Rollback branch retained; no database changes or production modification. Overall goal remains active and incomplete; real authenticated refresh/RLS still outstanding.

## Next original Omega three-record review —2026-10-21T14:21:11.669Z
3578.51.00: Original BobsWatches SKU167370 identifies3578.51.00; all5 gallery images contact-inspected, full1/3 inspected. Front has black three-register dial with blue Snoopy at9, baton markers and black tachymeter bezel. Clasp in3 is Omega/SpeedmasterProfessional-signed, but the back is obscured. Original Christies lot6177371 supplies full closedback photograph2: blue Snoopy medallion, MoonWatch/SnoopyAward/LimitedEdition rim and numbered2829/5441; endlinks marked849. Both auction photographs pixel-inspected; no neighbouring lots used. These are different individual source specimens, not proof of user-watch originality or universal hardware codes. Auction lists signed manual1861 for its exact reference but no movement photograph; movement remains a reviewed gap. Dealer shortened3578.51 heading at Lecrin and full3578.51.00 descriptions support only this recorded shortened/full pair, not arbitrary suffixes. Base3578.51 photos are explicitly representative. Auction circa2006/warranty date and dealer2003 release are attributed specimen/history information, not a complete production period. No later Snoopy3861 inheritance, supplier equivalence, pressure-test transfer or individual authenticity verdict.
220.10.41.21.02.001: Original Grailzee auction page and product JSON explicitly identify220.10.41.21.02.001. Its one source-listed600x750 photograph was fully inspected: silver horizontal teak dial, blackened hands/indexes, orange seconds/Seamaster accents and date6. Reflections and use marks support an actual specimen image, not an accepted manufacturer render. Credit identifies the auction listing; photographer is not separately identified. No movement, back or complete bracelet/clasp photograph in this retrieved gallery; those categories remain reviewed gaps. Manufacturer exact product specifies41mm steel,8900 automatic MasterChronometer and60h; this is specification evidence, not a readable fitted-calibre observation. Auction papers2022 are seller-attributed and not manufacture proof or user warranty validation. No alternate dial,38mm size, neighbouring suffix, supplier calibre or generic8900 image inheritance. Current condition, pressure resistance, material assay, strap/hardware originality and full manufacture period remain unverified.
232.92.38.20.03.001: Original Zeitauktion2601501 exact-reference page explicitly attributes its specimen images to Zeitauktion and describes blue rubber with Omega folding clasp. All14 gallery files contact-inspected; full1/11/13 inspected. Blue dial/bezel, date3, white stitching on rubber and Omega-logo clasp visible. Through-glass image11 reads OmegaCoAxial8520, with Liquidmetal/Professional/PlanetOcean/600m2000ft rim legends and patterned strap underside. This is fitted through-glass evidence, not an opened inner-caseback inspection, universal strap code or individual originality proof. Movement and caseback share one original file; clasp13 also depicts movement and is suppressed in external-only work. Earlier exact-source2601599 was also inspected: replacement leather/no-name buckle, contradictory prose8200 and failed pressure test; its hardware/photos are not accepted here. The2601501 prose MasterChronometer claim is not accepted as METAS certification: documented8520 CoAxial chronometer remains distinct from later MasterChronometer calibres. Manufacturer titanium37.5mm execution retained; no neighbouring chronograph9300, supplier equivalence or full period inference. Seller purchase date unknown and specimen pressure claims do not transfer to the user watch. Ignore dealer template Rolex footer.
Seven verified category entries/six distinct files accepted; one visually inspected original Snoopy caseback withheld as pending after actual Chrome delivery failed for both original source URL forms. Watchfinder alternative403; no guessed gallery assets. Validation/publication pending. Full inventory and real authorized-session checks incomplete.
Local validation:163Node tests and preserved full workflow fixtures pass. Actual Chrome verifies7accepted category entries/six distinct files load/enlarge with credits, exact suffix/family isolation, external-only/restored visibility and390px layout. First Snoopy shortened base is explicitly representative; full3578.51.00 textual lookup supported. Original Christies caseback URLs both timed out20s/naturalWidth0 and remain pending; alternate Watchfinder page403. Aqua Terra historical regression now preserves identity/calibre/technology/size/reserve rather than freezing source notes and unproven production dates.1017verified category entries/26pending/10rejected;407reviewed source records/2203unreviewed. Full inventory and real authenticated refresh/RLS incomplete. Publication pending; no database or production changes.
PR84 verified: published main74535890d4d9ec29e9b0cb2100a4a5af337daa28, tested tree1364f01ce565957c76b0a664ea974b10a5ba42ec, Pages39617388071success. All26 served application/data files byte-matched origin/main. Live Chrome checked exact3578.51.00/1861,220.10.41.21.02.001/8900,232.92.38.20.03.001/8520 suggestions; all7accepted category entries/six distinct images load/enlarge with original credits; Snoopy pending caseback withheld; unsupported movement/back/hardware gaps empty; exact suffix/family boundaries, external-only/restored visibility and390px passed.163Node tests and full workflow fixtures pass. Rollback retained;1017verified entries/26pending/10rejected;407reviewed source records/2203unreviewed. No database or production changes. Overall goal remains active and incomplete; real authenticated refresh/RLS outstanding.

## Following original Omega three-record review —2026-10-21T14:44:16.578Z
215.30.44.21.01.002: Original Zeitauktion2505192 explicitly identifies215.30.44.21.01.002 and attributes actual images to Zeitauktion. All15 gallery files contact-inspected; full1/12/13 inspected. Black dial has orange12/9/6, date3 and orange initial bezel sector. Full fitted display back12 visibly reads OmegaMasterCoAxial8900; PlanetOcean/600m2000ft rim and stainless-steel legend visible. Through-glass image is not an opened inner-caseback examination or proof of individual originality. Omega-signed steel clasp13 has visible movement in background; movement/back/clasp images are suppressed in external-only work. Movement/back share one original file, distinct from category counts. Earlier Uhren2000 exact gallery8images contact-inspected/full2/6/8: actual plastic-stand photographs, but back/calibre substantially obscured, so not used instead of clearer source. Manufacturer/retailer exact-reference evidence supports43.5mm steel/8900/60h. Direct manufacturer PDF retrieval returned503 and was not read. Seller purchase5February2019 is not manufacture date. Source10bar test ticket is not a600m test or a user-watch pressure test. No adjacent215suffix/232reference, supplier equivalence, hardware-originality or complete production-period inference.
2255.80.00: Original BobsWatches SKU170837 identifies2255.80.00. All6 gallery files contact-inspected; full1/3 inspected. Actual front has electric-blue wave dial, sword hands, date3 and polished metal numbered dive bezel. Bracelet/clasp3 shows OmegaSeamasterProfessional signing. The closedback is substantially obscured by clasp/stand; it is not accepted as a caseback overview. No opened movement photograph or fitted1120 marking is supplied; movement remains a reviewed gap. Original PrestigeTime page explicitly lists model2255.80 and alternate2255.80.00/225580/22558000; only this recorded shortened/full pair is supported, with shortened photos representative. Bobs lists1120 automatic and41mm for this reference; this is attributed specification, not actual movement-image evidence. Its2003 dating is a dealer claim, not complete manufacture period. Prior44h reserve not verified in inspected exact-reference sources and is not asserted. No2265quartz/2254black-dial/nearby suffix, ETA/common-calibre equivalence, universal hardware code, current pressure resistance or individual authenticity inference.
2551.80.00: Original Zeitauktion2507264 exact2551.80.00 page attributes its actual images to Zeitauktion. All14 files contact-inspected; full1/11/13 inspected. Blue wave dial, skeleton hands/red-tip seconds, date3 and blue dive bezel visible. Full closedback11 has Seamaster hippocampus and wave relief; bracelet/clasp13 is OmegaSeamasterProfessional-signed. No opened movement or readable fitted1120 stamp in this gallery; movement remains a researched photograph gap. Dealer lists1120 automatic and approximately36mm, with unspecified purchase date. Direct manufacturer25518000 Korean product-sheet retrieval returned503 and was not read;36.25mm and prior44h reserve are not newly verified from that failed resource. No full production start/end,53xx/full-size2531,quartz2561,2551.80short alias, adjacentsuffix, supplier/common-calibre or generic1120 photograph inheritance. Source condition/pressure/refurbishment claims do not establish the user watch condition, current water resistance, material assay or component originality. Ignore dealer template Rolex footer.
Nine candidate category entries/eight distinct files; validation/publication pending. Full inventory and real authorized-session checks incomplete.
Local validation:166Node tests and preserved full workflow fixtures pass. All9accepted category entries/eight distinct source files load/enlarge in actual Chrome with credits, exact calibre suggestions, suffix/family isolation, external-only/restored visibility and390px layout.1026verified entries/26pending/10rejected;410reviewed source records/2200unreviewed. Manufacturer PDF retrieval503 is documented as unavailable, never treated as read/verified; unsupported reserve claims are not asserted. Publication pending. Full inventory and real authenticated refresh/RLS remain incomplete; no database or production changes.
PR85 verified: main17caebc16f647e7986739313326fea68503a5c23, tested treeda0ce7d7a3bff6861b7939367e739c9c97983cc2, Pages39620295673success. All27 served application/data files byte-matched origin/main. Live Chrome checked215.30.44.21.01.002/8900,2255.80.00/1120,2551.80.00/1120 suggestions and9accepted category entries/eight distinct original files loading/enlargement/credits, exact suffix/family isolation, external-only/restored visibility and390px layout. Unsupported1120 movement photographs and obscured2255caseback remain empty.166Node and preserved full workflow fixtures pass. Rollback retained;1026verified entries/26pending/10rejected;410reviewed source records/2200unreviewed. No database/production changes. Goal active and incomplete; real authenticated refresh/RLS outstanding.

## Current original Omega three-record review —2026-10-21T14:57:28.321Z
176.007: Original Antiquorum344 lot218 explicitly identifies176.007 as steel Seamaster chronograph with1040/22jewels and source-listed38mm. Its one original2048-square photograph fully inspected: actual steel tonneau case, blue dial, white tachymeter ring, contrasting lower register, date3, yellow central chronograph hand and steel bracelet, with fitted box behind. This is a readable watch-front view, not a tiny packaging substitute. It supports one representative steel/blue-dial specimen only; no plated/gold/dial-variant or universal1117/549 hardware inference. No opened movement, rear or clasp view exists in this gallery;1040 and bracelet codes remain attributed auction text, not newly read stamps or individual originality proof. Auction circa1970 is an estimate and does not establish manufacture date; prior1972–1976 full period is not asserted. Manufacturer ST176.0007 archive retrieval returned503 and was not read; no added zero/prefix alias or borrowed archive photograph. No adjacent176case/MarkIV, supplier/Lemania equivalence or user authenticity/pressure/condition verdict.
231.10.42.21.03.003: Original Zeitauktion2602528 exact-reference page attributes its actual photographs to Zeitauktion. All14 gallery files contact-inspected; full1/11/13 inspected. Front shows blue vertical teak dial, applied triangular markers, date3 and steel bracelet, with MasterCoAxialChronometer dial text. Fitted display back11 visibly reads OmegaCoAxial8500; AquaTerra/ANTI-MAGNETIC/>15000GAUSS/150m500ft rim visible. This is through-glass movement evidence, not an opened inner-caseback inspection, measured magnetism/pressure test or individual authenticity proof. Original Uhren2000 exact-reference listing specifies41.5mm/8500/approximately60h; dealer42mm rounded measurement is not a new authenticity threshold. MasterCoAxial wording is not treated as later METAS MasterChronometer certification or8900/8800 equivalence. Back and movement share one source file; clasp13 also exposes movement and is suppressed in external-only work. Source purchase23December2014 is not manufacture date or complete production period. Signing, material labels and dealer originality claims do not establish user-watch hardware originality/assay/condition. No neighbouring suffix, other AquaTerra size, supplier equivalence or generic8500 photograph inheritance. Ignore dealer Rolex template footer.
210.32.42.20.04.001: Original Zeitauktion2606335 exact-reference page/gallery identified directly from a verified original product link; no guessed adjacent filename. All15 files contact-inspected; full1/12/14 inspected. White wave dial, black bezel, black rubber and date6 visible. Full fitted display back12 visibly reads OmegaMasterCoAxial8800, with Diver300M/300m1000ft rim legends; this is through-glass evidence, not an opened case or physical authenticity verdict. Manufacturer exact product lists42mm/8800/55h and black rubber. Strap14 bears Omega/Seamaster signing and an Omega-logo pin buckle; full hardware codes/material assay/originality remain unverified. Movement/back share one original file; strap/buckle view also reveals movement and is suppressed for external-only work. Source purchase24September2026 and claimed warrantySeptember2031 are seller claims, not a manufacture date, complete period or validated user warranty. Source10bar pressure-ticket claim is not a300m test or user-watch test. No steel-bracelet retail suffix, adjacent210variant, non-date8806, supplier equivalence or generic8800 image inheritance. Ignore dealer template Rolex footer.
Nine candidate category entries/seven distinct source files; browser validation/publication pending. Full finite inventory and real authorized-session checks incomplete.
Local validation:169Node tests and preserved full workflow fixtures pass. All9accepted category entries/seven distinct actual files load/enlarge in Chrome with credits, exact1040/8500/8800 suggestions, representative/exact boundaries, external-only/restored visibility and390px layout.1035verified entries/26pending/10rejected;413reviewed source records/2197unreviewed. Vintage rear/movement/clasp gaps remain empty; manufacturer archive503 not treated as read and no zero/prefix/material alias added. Publication pending. Full inventory and real authenticated refresh/RLS remain incomplete; no database/production changes.

PR86 verified: published main196ef2578e3267c0be8bd60bc7fb6128a938c550, tested tree3e4cdf279089dd9e2e6348d634b3ab9ed7e72c37, Pages39622825181success. All28 served application/data files byte-matched origin/main. Live Chrome passed all9accepted category entries/seven distinct files, exact1040/8500/8800 suggestions, enlargement/credits, representative/exact boundaries, external-only/restored visibility and390px layout.169Node tests and preserved workflow fixtures pass.1035verified entries/26pending/10rejected;413reviewed source records/2197unreviewed. Vintage rear/movement/clasp researched gaps retained. Rollback branch retained; no database or production changes. Overall goal active and incomplete; real authenticated refresh/RLS outstanding.

## Original Omega2209.50.00 review —2026-10-21T15:13:23.930Z
Original Zeitauktion2601675 explicitly identifies2209.50.00 and attributes actual specimen photography to Zeitauktion. All15original gallery files contact-inspected; full1/11/13/14 inspected. Black dial with orange12/9/6, orange dive bezel, date3 and steel bracelet visible. Fitted closed hippocampus Seamaster/PlanetOcean caseback11 is separate from actual opened movement14; movement rotor visibly reads OMEGA2500 and bridge27JEWELS. This establishes the pictured configuration, not C/D execution, universal2500 compatibility, service history or user-watch originality. Clasp13 shows OmegaSeamasterPlanetOcean signing; rear endlinks show952, without proving every internal hardware code or component originality. Manufacturer exact-reference page confirms42mm steel/2500automatic/48h/20mm lugs and steel bracelet with folding dive-extension clasp; dimensions/reserve are specifications, not measured user-watch tests. Seller circa2005 is an estimate, not a complete production period. Source condition table explicitly says water-resistance test failed; dial600m/2000ft and manufacturer rating do not prove current water resistance. Exclude literature/pouch/register images6/9/10 and generic workshop collage15. No nearby orange PlanetOcean size, shortened alias, adjacent retail suffix, supplier/calibre-equivalence or material-assay/authenticity inference. Ignore dealer Rolex-template footer and manufacturer generic current-warranty banners as specimen evidence.
Four inspected category entries/four files; browser validation and publication pending. Full inventory and real authenticated refresh/RLS remain incomplete.

2209.50.00 local verification:170Node tests and preserved workflow fixtures pass. All4actual remote category files load/enlarge with source credits;2500suggestion/exact-reference isolation and390px pass. External-only hides opened movement and retains3closed-external views; restoration4. Browser harness selector corrected before successful run; initial harness-only timeout did not alter catalogue.1039verified entries/26pending/10rejected;414reviewed/2196unreviewed source records. Publication/live served-file verification pending. No database/production changes; real authenticated refresh/RLS remains outstanding.

## Original Omega145.012-67 review —2026-10-21T15:19:08.878Z
Original Sothebys2022FineWatches lot124 explicitly identifies145.012-67, steel black-dial manual chronograph, attributed321/17jewels and circa1968. Seven original c4fyb lot images identified in actual source HTML, contact-inspected; full1/2/6 inspected. Front1 shows black three-register SpeedmasterProfessional, applied Omega logo, aged-colour baton plots, TSWISSMADET and black tachymetre bezel. Closed rear6 shows hippocampus/Speedmaster engraving and516 endlink stamps. Source appearance is representative of this specimen only: original lume/hands/bezel/service history and hardware originality are not independently established. No actual opened321, inner-caseback suffix stamp or usable clasp overview exists among seven views; a partially obscured clasp behind front2 is not substituted. Movement number and321 remain catalogue text, not freshly read movement stamps. Source lists40mm diameter; original Antiquorum372lot546 exact145.012-67 lists42mm,321/17jewels,circa1967 and1039/516bracelet dated68. Measurement discrepancy is retained, not an authenticity threshold; no complete production period or universal bracelet code inferred. Antiquorum condition grade recommends overhaul, not current user-watch fitness. Sothebys condition report requires login and was not read. SP/Ultraman/orange-hand suffix variants and neighbouring145.012/145.022/105references are not inherited. No supplier/common321 movement photograph, material-assay, pressure resistance or individual authenticity inference. Exact refs list fixes compact punctuation-only lookup without adding a semantic alias. HTML-wide related/editorial images outside the seven c4fyb lot files are excluded.
Two candidate representative category entries/two files; browser validation and publication pending. Full inventory and real authenticated refresh/RLS remain incomplete.

Two-source local release validation:171Node tests and preserved full workflow fixtures pass. Actual Chrome verified all6new category entries/six distinct files across2209.50.00 and145.012-67, with loading/enlargement/credits,2500/321suggestions, exact suffix boundaries and390px. External-only retains3closed-external views for2209 and2for145, restores4/2respectively.1041verified entries/26pending/10rejected;415reviewed/2195unreviewed source records. Vintage movement/clasp gaps retained;40mm/42mm source discrepancy remains explicit. Publication/live hashes pending. No database/production changes; real authenticated refresh/RLS outstanding.

PR87 verified: published main03b42854d836ab5cd64cfd60bd5a184baca01e84, tested tree3239a2a8eac7c2728c8ca3764d9c89fe2f0727bd, Pages39625341880success. All30served application/data files byte-matched origin/main. Live Chrome verified all6newcategory entries/sixdistinct original files,2500/321suggestions, compact14501267lookup, enlargement/credits, exact suffix/representative boundaries, external-only3/2restored4/2 and390px.171Node tests and full workflow fixtures pass.1041verified/26pending/10rejected;415reviewed/2195unreviewed source records. Vintage movement/clasp gaps and40mm/42mm discrepancy retained. Rollback preserved; no database/production changes. Overall goal active and incomplete; real authenticated refresh/RLS outstanding.

## Original Omega2210.50.00 review —2026-10-21T15:28:32.263Z
Original Uhren2000 exact2210.50.00 aus2010 page supplies actual2016x1512 dealer-watermarked steel-bracelet front, full pixels inspected. Black dial, white12/9/6, three registers, datebetween4and5 and black dive bezel visible. Its separate aus2009 gallery has one480x640front only, not a clasp view. Zeitauktion2405199 explicitly identifies2210.50.00 and attributes actual specimen photographs to Zeitauktion; all14files contact-inspected, full4/9/13 inspected. Actual opened movement13 has readable3313bridge and Omega rotor; this supports pictured3313 configuration, not C execution, service history or universal supplier equivalence. Closed hippocampus Seamaster/PlanetOceanProfessional600m2000ft rear9 is visible with replacement leather strap; rear photograph is representative of that specimen only, not factory bracelet evidence. Source explicitly lists German-made calf leather/no-name buckle. Exclude that buckle/strap as genuine reference hardware and do not use generic workshop collage. Another exact Zeitauktion2503566 gallery14files contact-inspected: dealer3313Ctext but no opened movement, replacement leather/no-name buckle. Do not transfer its C claim to the photographed2405199 movement. Manufacturer exact product page confirms45.5mmsteel/steel bracelet/3313automaticCoAxial/52h. Collection introduction2005 and seller circa2010/circa2008 claims do not establish full reference production period; prior2007–2016 range not asserted. Manufacturer600m rating and seller60bar claim do not establish current user-watch water resistance, authenticity, material assay or component originality. No shortened2210.50alias, neighbouring2218/232chrono, orange-bezel suffix, common-calibre photograph or universal hardware-code inheritance. Grailzee candidate .js404 supplied no accepted asset; no guessed filenames. Factory clasp remains a researched photograph gap.
Three candidate category entries/three distinct files; browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

## Original Omega2221.80.00 review —2026-10-21T15:31:22.328Z
Original Zeitauktion2502403 exact2221.80.00 page supplies15actual specimen photographs; all contact-inspected, full1/11/13 inspected. Front has dark-blue wave dial, red Seamaster script, skeleton hands, red-tip seconds, date3, blue dive bezel and steel bracelet. Closed back11 shows Seamaster hippocampus and visible825 endlink marking. Clasp13 reads OmegaSeamasterProfessional; this does not establish full inner hardware codes or individual originality. Original Zeitauktion2302638 exact2221.80.00/196.1504 source supplies14actual files, all contact-inspected and full innerback13 inspected: detached back visibly reads196.1504 with OmegaWatchCo/FabSuisse/SwissMade/AcierInoxydable/HAD/GX marks. This documents the shown source specimen only; no196.1504lookup alias or universal case/retail interchangeability added. Neither gallery contains an actual movement view; quartz1538 remains manufacturer/source specification, not a freshly read fitted calibre or battery-health observation. Manufacturer exact product specifies41mmsteel/blue/1538quartz,20mm lugs, foldover dive-extension clasp and42month nominal battery life. Battery life is not measured remaining charge, actual battery replacement interval or mechanical power reserve. Source10bar ticket is not a300m test; manufacturer rating and dealer condition/warranty/originality claims do not verify user-watch pressure resistance, authenticity, assay or component originality. No full manufacture period established, shortened2221.80alias, automatic2220/2531, quartz2541 or common1538/ETA photograph equivalence. Generic workshop/literature/packaging/ticket images excluded; dealerRolexfooter ignored.
Four candidate category entries/four files; browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

Chronograph/quartz local release validation:173Node tests and preserved full workflow fixtures pass. Actual Chrome verified all7new category entries/seven distinct files across2210.50.00 and2221.80.00, with loading/enlargement/credits,3313/1538suggestions, exact suffix boundaries and390px. External-only2/restored3for2210;4/restored4for2221.1048verified entries/26pending/10rejected;417reviewed/2193unreviewed source records. Factory2210clasp and2221movement gaps retained; no3313C/196.1504semantic alias inferred. Publication/live hashes pending. No database/production changes; real authenticated refresh/RLS outstanding.

PR88 verified: published main1a40f50d50fbfd1c181ad260ebae84f3f81a1e37, tested treec3900a975fe1951871b1758c262e2b862614c23e, Pages39627153171success. All32served application/data files byte-matched origin/main. Live Chrome verified all7newcategory entries/seven distinct original files,3313/1538suggestions, enlargement/credits, exact reference/representative boundaries, external-only2/restored3for2210 and4/restored4for2221,390px and no page errors.173Node tests and preserved full workflow fixtures pass.1048verified/26pending/10rejected;417reviewed/2193unreviewed source records. Factory2210clasp and2221movement gaps retained; no3313C or196.1504semantic alias inferred. Rollback preserved; no database/production changes. Overall goal active and incomplete; real authenticated refresh/RLS outstanding.

## Original rubber AquaTerra review —2026-10-21T15:41:01.019Z
Original BobsWatches SKU185678 explicitly identifies220.12.41.21.03.002 and labels actual photography; all6original files contact-inspected, full1 inspected. Actual blue horizontal-teak dial, blue seconds/minute accents, date6 and grey stitched structured rubber with steel end inserts visible. Its rear3 is obscured by strap/stand, so not substituted for clear back evidence. Original WristWorks exact220.12.41.21.03.002 listing supplies10actual specimen images; all contact-inspected, full2/5 inspected. Fitted display back2 visibly reads OmegaMasterCoAxial8900, BarrelOne/BarrelTwo and39jewels, with AquaTerra/150m500ft rim. This is through-glass movement evidence, not an opened inner-caseback examination, physical pressure/magnetic test or originality verdict. Back and movement share one original file and are suppressed in external-only work. Rubber5 has Omega-logo folding clasp with stitched structured rubber, no visible movement; it remains externally visible. Full inner hardware codes/assay/originality are unverified. Both original sources specify41mm/8900/60h; Bobs describes grey structured rubber and WristWorks calls it OEM. Seller2018/2024 dating and warranty claims are attributed, not complete manufacture period or validated user warranty. Uhren2000 two480x640front/side cutouts inspected but not promoted without actual specimen-photo origin. No vertical-teak8500, 38mm8800, steel-bracelet220.10, leather220.13, adjacent rubber suffix, supplier/common8900 or universal hardware inheritance. Rating150m and source condition claims do not establish current user-watch water resistance or authenticity. Packaging/lifestyle views not substituted for component evidence.
Four candidate category entries/three distinct files; browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

Rubber AquaTerra local verification:174Node tests and preserved full workflow fixtures pass. Actual Chrome verified all4category entries/three distinct files,8900suggestion, exact suffix boundaries, enlargement/credits and390px. External-only2(front/clasp), restored4; shared movement/back file suppressed.1052verified entries/26pending/10rejected;418reviewed/2192unreviewed source records. Publication/live hashes pending. No database/production changes; real authenticated refresh/RLS outstanding.

## Original green AquaTerra and Professional family review —2026-10-21T15:45:00.018Z
Original Zeitauktion2506135 identifies exact220.10.41.21.10.001 and attributes actual specimen photographs to Zeitauktion. All14files contact-inspected; full1/11/13 inspected. Green horizontal-teak dial, applied triangular indices, date6, silver-colour hands/seconds and steel bracelet visible. Fitted display back11 visibly reads OmegaMasterCoAxial8900 with twin-barrel configuration and AquaTerra/150m500ft rim. This is through-glass evidence, not an opened inner-caseback examination or user-watch authenticity verdict. Bracelet13 shows Omega-logo clasp with exposed movement behind; rear/movement/clasp are suppressed in external-only work. VisibleSTZ006003/endlink marks document this source specimen, not universal hardware originality or interchangeability. Manufacturer exact Japanese product page confirms41mmsteel/green/8900automatic/60h and butterfly clasp. HK page timed out, not treated as read; no generic manufacturer calibre image substituted. Source purchase30December2021 is not manufacture date or a complete production period. Dealer15bar/condition/originality claims and manufacturer ratings do not verify current user-watch pressure/magnetic resistance, assay, service history or component originality. No rubber/blue220.12.41.21.03.002, other green size, vertical-teak8500, supplier/common8900 or adjacent retail suffix inheritance. Exact punctuation-only refs and escaped literal-dot pattern prevent wildcard-character matches; no semantic alias added. Packaging/literature/register/workshop views excluded; dealerRolexfooter ignored.
SeamasterProfessional is model-family wording, not an exact case reference. Original manufacturer2221.80.00 page explicitly describes1538quartz/41mm and source2405199 exact2210.50.00 describes3313automaticchronograph/45.5mm. Previously full-inspected original fronts in both exact galleries show Professional wording, with different dial/case/hardware and movement requirements. These actual source examples demonstrate why family text cannot select an exact photograph, calibre, material execution, period or hardware. All four family categories intentionally remain researched identity gaps until a complete reference is supplied; no image or technical specification inherited from either example. Existing REFERENCE REQUIRED/manual-review behavior retained.
Four candidate category entries/three distinct files; family remains4identity gaps. Browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

AquaTerra pair/family local release validation:176Node tests and preserved full workflow fixtures pass. Actual Chrome verified all8new category entries/six distinct files across exact rubber-blue and steel-green references,8900suggestions, exact suffix boundaries, enlargement/credits and390px. Rubber external-only2/restored4; green1/restored4. Professional family remains4researched identity gaps; no wildcard-character or family-reference photo inheritance.1056verified entries/26pending/10rejected;420reviewed/2190unreviewed source records. Publication/live hashes pending. No database/production changes; real authenticated refresh/RLS outstanding.

PR89 verified: published main9a33b9abf1005e73f91d02e8eca1e6e5b1cec704, tested tree684d36290b7b021188ca5dbdf4d407b4be185ba2, Pages39745258013success. All34served application/data files byte-matched origin/main. Live Chrome verified all8newcategory entries/six distinct original files,8900suggestions, enlargement/credits, exact suffix/wildcard-character/family isolation, external-only2/restored4forrubber and1/restored4forgreen,390px and no page errors.176Node tests and preserved full workflow fixtures pass.1056verified/26pending/10rejected;420reviewed/2190unreviewed source records. Professional family retains4identity gaps. Rollback preserved; no database/production changes. Overall goal active and incomplete; real authenticated refresh/RLS outstanding.

## Original2517.30.00 family/size correction —2026-10-22T08:11:21.168Z
Original Omega exact2517.30.00 product page identifies AquaTerraquartz39.2mm, silver dial, steel/steel,1538quartz and42month nominal battery specification. This corrects the stored unsupported SeamasterProfessional/41mm mapping. Dotted2517.30.00 and existingcompact25173000 are punctuation-only forms, not a new semantic alias. Manufacturer150m rating and nominal battery life do not establish user-watch pressure resistance, remaining charge or replacement interval. Original Zeitauktion2601440 identifies exact2517.30.00 and supplies15original specimen photographs; all contact-inspected, full1/13/14 inspected. Silver radial dial, triangular applied indices, date3, dark hands, smooth bezel and steel bracelet visible. Closed rear13 has AquaTerra/Seamaster hippocampus engraving and898 endlink stamps; clasp14 has Omega logo and steel links. These marks establish the photographed execution only, not universal hardware originality/interchangeability or assay. No actual opened movement/1538stamp or inner-caseback view in this gallery; movement remains a researched photograph gap. Source10bar ticket is not a150m/user-watch pressure test. Seller2008dating is attributed, not a complete manufacture period; old1990s–2000s range not asserted. Packaging/literature/register/ticket/workshop images excluded. No automatic2503, other2517dial suffix, shortened2517.30, supplier/common1538 or generic movement-image inheritance. Generic manufacturer current-warranty banners not specimen warranty evidence; dealerRolexfooter ignored.
Three candidate category entries/threefiles; browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

2517.30.00 local validation: 177 Node tests and preserved workflow browser fixtures pass. Actual Chrome loaded and enlarged all three original photographs with credits, exact-reference isolation, external-only 3/restored 3 and 390px layout without page errors. The restricted-network attempt could not load remote photos; the authorized network-enabled run passed. Coverage: 1059 verified entries, 26 pending, 10 rejected; 421 source records reviewed, 2189 unreviewed. Publication/live hashes pending; real authenticated refresh/RLS outstanding.

## Worldtimer family identification review — 2026-10-22T08:44:57.551Z
Original Omega 16 May 2023 announcement describes three titanium/steel Worldtimer models with calibre 8938. Original manufacturer exact 220.93.43.22.99.001 page instead specifies a platinum-gold case, leather strap/platinum-gold clasp and calibre 8939. Therefore the stored family name cannot establish 8938, material, hardware, full production period or an exact photograph. Both cited examples are 43 mm, which does not prove every family execution has that size. These pages were read for identification limits only; no new image pixels or gallery assets are claimed reviewed or accepted. All four family photograph categories remain identification gaps until the complete case reference and execution are established. No neighbouring reference, abbreviated alias or common-calibre image inherited. Manufacturer specifications do not authenticate a user watch.
Local regression validation pending. No photographs added; full inventory and authenticated refresh/RLS remain incomplete.

Worldtimer family validation: 178 Node tests and preserved workflow browser fixtures pass. Family lookup requests the complete reference, offers no established calibre, and inherits no gallery. No new photographs claimed. Generated inventory: 422 reviewed / 2188 unreviewed source records; 1059 verified photograph entries / 26 pending / 10 rejected. Local checkpoint only; publication and live authenticated refresh/RLS remain outstanding.

PR90 verified: published main 7ec873a8ce9dfbbc3dedcfd4707301a870f41ec0; tested tree 477aa17619e64a80b2d811a197b3fd50b228163d; Pages run 39750951467 succeeded. All 36 checked served application/data files byte-match origin/main. Live Chrome verified all three original 2517.30.00 photographs load/enlarge with credits, external-only 3/restored 3, exact suffix/family isolation, 390px and no page errors. 178 Node tests and preserved workflow fixtures pass. Worldtimer family retains four identification gaps; actual 2517.30.00 movement remains a photograph gap. 1059 verified / 26 pending / 10 rejected; 422 reviewed / 2188 unreviewed source records. Rollback preserved. No database or production changes in this research release. Goal remains incomplete; real authenticated refresh/RLS outstanding.

## Original329.30.44.51.04.001 review —2026-10-22T08:57:17.066Z
Original Omega exact329.30.44.51.04.001 page specifies44.25mmsteel/steel, white racing dial, black ceramic tachymeter bezel, date6,9900automaticchronograph and60h nominal reserve. Original Zeitauktion2601133 identifies that exact reference and supplies15original gallery files; all contact-inspected, full1/12/14 inspected. Front1 shows white racing track, two black-ring subdials, date6, orange Speedmaster and chronograph-hand tip. Rear12 shows fitted movement through sapphire with OMEGA MASTER CO-AXIAL9900 rotor, COLUMN WHEEL and FIFTY-FOUR(54)JEWELS bridge lettering, twin-barrel layout and steel case/bracelet. Seller990054 appears to concatenate9900 and54jewels; it is not accepted as a separate calibre or alias. No opened inner-caseback examination or universal originality conclusion. The same rear12 file serves movement and caseback categories, counted once as a distinct file. Clasp14 shows actual Omega-logo steel clasp but also the exposed movement behind; movement, caseback and clasp must all be suppressed in external-only work. Seller purchase3August2018 is not manufacture date or complete production period; old late2010s–2020s range withheld. Manufacturer ratings and seller5bar ticket do not verify current user-watch pressure resistance, assay, magnetic resistance, service history or component originality. Packaging, register, literature, test ticket and workshop images excluded. No329.33strap, grey/black dial suffix, smaller326, generic Speedmaster, supplier/common9900 or unverified short-reference inheritance. Manufacturer generic calibre image not substituted; dealerRolexfooter ignored.
4category entries/3distinct files; browser/publication pending. Full inventory and live authenticated refresh/RLS incomplete.

## DeepBlack family identification review —2026-10-22T08:58:53.812Z
Original Omega exact215.92.46.22.01.001 product page describes DeepBlack45.5mmblackceramic/rubber GMT with8906,60h and sapphire display back. Original Federation of the Swiss Watch Industry19October2023 announcement instead describes DeepBlackETNZ45.5mmblackceramic chronograph with9900, turquoise countdown indicator, team-logo back and black/turquoise rubber folding clasp. Thus PlanetOceanDeepBlack alone cannot establish8906, GMT function, exact hardware or a complete production period. Both examples being45.5mm does not prove every family execution has that size. Manufacturer ETNZ page direct fetch failed; cached search text was corroborative only, and no claim is made to having read its complete page. No image pixels newly inspected or photos accepted for this name-only record. All four categories are identification gaps pending full reference and actual execution. No generic calibre, neighbouring suffix or shortened-reference inheritance. Manufacturer ratings do not establish user-watch pressure resistance, authenticity or component originality.
Validation/publication pending. Full inventory and authenticated refresh/RLS incomplete.

Racing/DeepBlack local checkpoint:180Node tests pass. Actual Chrome verified4Racing entries/3distinct files,9900suggestion, enlargement/credits, external-only1/restored4,390px and exact suffix/family isolation without page errors. Preserved full workflow fixtures passed after Racing addition, before the DeepBlack family-only guidance change. DeepBlack new regression verifies no calibre/gallery inference.1063verified/26pending/10rejected;424reviewed/2186unreviewed source records. Publication/live verification pending; authenticated refresh/RLS outstanding.

Combined Racing/DeepBlack final local workflow validation: preserved full workflow browser fixtures passed after both changes. Accounts are mocked; real authenticated refresh/RLS remains outstanding. Ready for OLD-only publication with180Node tests and separately verified actual Racing image delivery.

PR91 verified: published main04760d0ee95f54d4b43bf60649b1c124edf5ff8d; tested treee7d04cd7710ab4488bb5bfe2eab5c3e5d4961cb7; Pages39753015817success. All38checked served application/data files byte-match origin/main. Live Chrome verified4Racing category entries/3distinct original files,9900suggestion,enlargement/credits,external-only1/restored4,390px and exact suffix/family isolation with no page errors.180Node tests and combined full workflow fixtures passed.1063verified/26pending/10rejected;424reviewed/2186unreviewed source records. DeepBlack family retains4identification gaps. Rollback preserved; no database/production changes. Overall goal remains incomplete; real authenticated refresh/RLS outstanding.

##2305.15 source conflict and photograph-access review —2026-10-22T09:12:37.477Z
Original CLOSER836082 listing labels2305.15 a36mmSeamaster120 automatic with gold-colour dial, diamond bezel/11markers and SS/YG case/bracelet. Original FS Fine Watches IT382349470 listing uses2305.15 for a31mmblue-dial diamond-bezel SS/YG specimen without calibre evidence. These incompatible source descriptions do not establish a universal execution, size,1438quartz mapping, automatic replacement calibre or complete1990speriod. Dealer labels and material descriptions remain attributed, not proof of factory configuration, diamond originality or assay. CLOSER page text read through web connector; direct page archive and linked original image downloads returned403, while web image fetches failed. Therefore no actual image pixels are claimed inspected and no photograph is accepted. FS page text offered no readable movement evidence. Complete case/manufacturer identification and physical movement examination remain required. All four categories are researched unresolved identity/photo-access gaps, not complete coverage. No guessed suffix, neighbouring reference, common-calibre photo or semantic alias introduced. Existing2305.15/230515 forms are punctuation-only; regex dots escaped so arbitrary letters cannot match. Dealer authentication, condition and warranty claims do not authenticate the user watch.
Validation/publication pending. Research and authenticated refresh/RLS incomplete.

2305.15 local validation:181Node tests and preserved workflow browser fixtures pass. Actual local Chrome confirms no established calibre/1438 suggestion,390px and no page errors. No new image delivery claimed because original pixels remained inaccessible.425reviewed/2185unreviewed source records;1063verified/26pending/10rejected photograph entries. This is a reviewed unresolved gap, not a resolved execution or completed photo coverage. Publication/live checks pending; real authenticated refresh/RLS outstanding.

## Original232.32.46.21.01.001 gallery review —2026-10-22T09:17:36.812Z
Original Kingsroad/Zetton used7977 page identifies exact232.32.46.21.01.001,45.5mmsteel, automatic, black dial and rubber strap. All three original640x640files inspected at native resolution: front1 orange bezel/strap, orange6/9/12, date3, broad-arrow hands and no chronograph counters; collage2 includes fitted display back/movement and folding clasp; packaging3 has reference23232462101001 and calibre8500 pictogram, warranty date2012.8.11. Packaging corroborates the seller reference/calibre but is not accepted as a gallery specimen or proof of manufacture date or authenticity. Movement image is a small through-glass panel in original multi-view collage; rotor wording/decoration and automatic layout visible, but fine stamp, escapement, balance-spring, service and opened inner-caseback examination remain unverified. No invented high-resolution detail or universal execution inference. The same actual collage2 is used for movement,caseback and clasp categories and counted once as a distinct file. Since the collage exposes movement, all three categories must be suppressed in external-only mode. Clasp shape and logo document this photographed assembly only; inner codes/material assay/originality/interchangeability remain unverified. Dealer chronograph wording conflicts with the visible three-hand/date execution and is not adopted. Indexed original Jomashop retail text corroborates8500/60h and describes orange aluminium ring; direct page open returned only a JavaScript prompt. This is indexed-text corroboration, not a full current-page inspection. Material description attributed, not proved from colour. Korean manufacturer page timed out and is not treated as read. Old2010sfull production range not asserted;2012warranty date attributed only. Dealer600m/refinishing/warranty claims and ratings do not establish current user-watch pressure resistance or authenticity. No232.30steel-bracelet,other dial/suffix,smaller case,genericPlanetOcean,common8500 or neighbouring-reference inheritance; original literal-dot regex escaped. No semantic alias added.
Four category entries/two files; browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

232.32.46.21.01.001 local validation:182Node tests and preserved full workflow fixtures pass. Actual Chrome verified4category entries/2distinct original files,8500suggestion,enlargement/credits,external-only1/restored4,390px and exact suffix/family isolation with no page errors. Small collage and manufacturer-access limits retained.1067verified/26pending/10rejected;426reviewed/2184unreviewed source records. Publication/live verification pending; real authenticated refresh/RLS outstanding.

## Original212.30.36.20.01.002 opened specimen review —2026-10-22T09:21:55.867Z
Original Omega exact212.30.36.20.01.002 page confirms36.25mmsteel/steel,blackdial/ceramicbezel,date3,2500automaticCoAxial,48h and foldoverclasp/diverextension. Original Zeitauktion2604787 identifies the exact case reference and supplies15actual gallery files; all contact-inspected, full1/11/13/14 inspected. Front1 shows smooth black dial,redSeamaster/seconds tip,skeleton hands,date3 and steel bracelet. Closed rear11 has hippocampus/Seamaster wave relief. Clasp13 has Omega-logo outer steel clasp and closed caseback behind, with no movement exposed. Opened rear14 shows fitted automatic movement with readable OMEGA2500 rotor,striped rotor/bridges and visible balance/jewel/gear configuration. No claim of universally correct subversion,full escapement validation,service history or inner-caseback stamp: neither generic2500 nor a neighbouring case image is substituted. Four categories use four distinct original files; only movement14 is suppressed in external-only work. Source rounded36mm is distinguished from manufacturer36.25mm; source purchase date unknown and old2010scompleteperiod not established. Dealer reports specimen failed watertightness test; manufacturer300m nominal specification does not override that report or establish current user-watch pressure resistance. Dealer authentication,hardware originality,material,condition and warranty claims remain attributed and do not authenticate the user watch. Inner clasp codes/interchangeability remain unverified. No larger41mm212.30.41,blue suffix,wave-dial predecessor,genericSeamaster,common2500 or semantic-alias inheritance. Packaging,literature,register and workshop media excluded; no PDF pixels claimed reviewed.
4category entries/4files;browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

212.30.36.20.01.002 local validation:183Node tests and preserved workflow fixtures pass. Actual Chrome verified4categories/4distinct files,2500suggestion,enlargement/credits,external-only3/restored4 and exact suffix/size boundaries.390px check initially exposed research-text min-content overflow; targeted panel min-width0 and watchInfo overflow wrapping corrected it. Original failing check then passed unchanged, mobile screenshot visually inspected and no page errors.1071verified/26pending/10rejected;427reviewed/2183unreviewed source records. Publication/live checks pending; real authenticated refresh/RLS outstanding.

Three-record release preparation: current remote main04760d0ee95f54d4b43bf60649b1c124edf5ff8d matches local baseline. After the mobile wrapping fix, actual Chrome reverified232.32.46gallery4/external1/restored4 and2305.15no-supported-calibre guidance at390px. Midsize gallery4/external3/restored4 and actual mobile screenshot previously passed on the same CSS.183Node tests and full workflow fixtures passed. OLD-only publication pending; unresolved2305.15 identity/access gaps and real authenticated refresh/RLS retained.

PR92 verified: published main99eca53405b8b02a5aac967a126a102611befbc6; tested treeecfb9602088bdffe391c331614e3a84b1792720e; Pages39756374882success. All41checked served application/data files byte-match origin/main. Live Chrome verified8newcategory entries/6distinct original files,2500/8500suggestions,enlargement/credits,exact suffix/size/family isolation,external-only3/restored4for midsize and1/restored4for orange,390px wrapping and no page errors. Live2305.15 lookup offers no established calibre/1438 suggestion; four identity/access gaps remain.183Node tests and full workflow fixtures pass; original mobile screenshot inspected.1071verified/26pending/10rejected;427reviewed/2183unreviewed source records. Rollback preserved; no database/production changes. Overall goal remains incomplete; real authenticated refresh/RLS outstanding.

## Speedmaster collection identification review —2026-10-22T13:09:35.630Z
Original Sothebys2022lot124 identifies145.012-67Speedmaster,321mechanical/17jewels,steel blackdial and circa1968; source40mmdiameter is retained as catalogue text, with the separately documented Antiquorum42mmdiscrepancy not erased. Original Omega exact329.30.44.51.04.001 page identifies44.25mmsteel/steel white Racing dial,9900automaticchronograph and60h. Both original pages read again for family identification limits. Their exact photographed specimens were previously separately inspected and published; no new image pixels or photographs accepted by this family review. The different cases/calibres/executions demonstrate why Speedmaster alone cannot establish a movement,size,material,complete period or exact gallery. Placeholder REFERENCE REQUIRED is guidance, not a calibre and must not appear as a selectable movement. Complete reference required; no321,9900,3861 or any other calibre inferred. All four family categories remain identification gaps with no borrowed photos. Exact numeric case mappings and their independent matching limits are preserved. Cataloguing and manufacturer specifications do not establish a user-watch authenticity,service state or component originality.
Validation/publication pending. Full inventory and authenticated refresh/RLS remain incomplete.

Speedmaster family local validation:184Node tests pass; full retained inspection-log-copy browser workflow passes including saved-note exact copy, filtered RMA, clipboard fallback, unchanged draft/count, refresh, save/next, safety, daily reset/progress and history. Actual local Chrome confirms name-only Speedmaster offers no supported/placeholder calibre,390px and no page errors. No new image pixels claimed or photographs assigned.428reviewed/2182unreviewed source records;1071verified/26pending/10rejected photo entries. Publication pending; overall research and real authenticated refresh/RLS remain incomplete.

## Exact324.23.38.50.02.002 actual specimen research —2026-10-22T13:14:52.604Z
Original Omega exact324.23.38.50.02.002 page confirms38mmsteel/Sedna-gold,cappuccino dial with horizontal brown oval subdials,date6,brown aluminium tachymeter ring,taupe-brown leather,closed Seahorse back,3330automatic and52h nominal reserve. Bob’s166296 page explicitly labels actual photography; all6original files contact-inspected,fullfront1 inspected: cream/cappuccino ground,brown oval registers,rose-colour indices/hands,pushers/crown and stitched brown leather. Its oblique rear3 is partly hidden by strap and not substituted for a clear back/clasp. Original GenevaWatchCo OWSWC9 identifies the same exact reference; all5files contact-inspected,full4 inspected: closed hippocampus Speedmaster back,100m/3330rim wording,brown Omega-stamped strap underside and open folding steel clasp. GWC rear4 supplies caseback and clasp categories from one file. Front and rear/clasp are different clearly attributed specimens,not a composite identity or universal hardware originality proof. No actual opened3330 or inner-caseback view in these inspected galleries; printed3330on exterior is not fitted-movement verification. Movement remains a researched gap; generic manufacturer3330 image withheld. Uhrinstinkt4catalogue files contact-inspected but provenance as actual specimen photography unestablished,so none accepted; no CGI/catalogue asset substituted. Manufacturer100m and GWC30m metadata disagreement retained,not converted to pressure evidence. Bob’s2017–2024date range,retailer2026year and MarkWorthingtonMay2018supply are attributed only; old2020sfull production period withheld. Sedna/material descriptions are manufacturer specifications,not colour-based assay; straps,clasp codes,service and originality/interchangeability unverified. No yellow-gold .02.001,diamond-bezel324.28,steel324.30,other size/common3330/family photograph or semantic-alias inheritance. Three categories use two distinct files; all retain closed-back external-only visibility. Packaging/lifestyle and related products excluded. Initial manufacturerZHfetch timed out; ENpage read successfully.
Three categories/two files;movement gap;browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

324.23.38.50.02.002 local validation:185Node tests and full inspection-log-copy workflow fixtures pass, including exact saved-note copying,filtered RMA,clipboard fallback,unchanged draft/count,refresh,save/next,safety,daily reset/progress/history. Actual Chrome loaded/enlarged3category entries/2distinct files with separate Bob/Geneva specimen credits,3330suggestion,external-only3/restored3,390px and exact suffix/family isolation without page errors. Movement remains researched gap;unproven retail catalogue images withheld.429reviewed/2181unreviewed source records;1074verified/26pending/10rejected. Publication/live checks pending;real authenticated refresh/RLS outstanding.

## Seamaster Cosmic 2000 — exact reference required identification review — 2026-10-22T13:18:10.479Z
Original Omega archive pages were read directly and archived successfully after the web connector timed out. ST 166.0132 is a 1972 collection entry with a steel press-in case, date function, automatic 1012 and Corfam strap. ST 366.0826 is a separate 1972 collection entry with a steel press-in case, day-date function, automatic 1022 and integrated steel bracelet. These examples establish why Cosmic 2000 alone cannot choose 1012, 1022, 1010, a case, strap or exact photograph. The previously offered generic calibre choices are withheld pending the complete case reference and physical movement identification. The archive collection year is not a complete production period. Original case construction is reference-specific; this family label does not authorize opening a watch. No new image pixels were inspected or photographs accepted in this identification review. All four family categories remain identification gaps, with no borrowed archive image or common-calibre photograph. Manufacturer materials and historic ratings do not authenticate a user watch or establish its current pressure resistance.
Four identification gaps; no photographs added. Validation/publication pending.

## Speedmaster Mark II — exact reference required identification review — 2026-10-22T13:18:10.479Z
Original Omega pages were read directly and archived successfully after web connector failures. The 1969 Mark II historical entry identifies ST 145.014, steel, 41.5 mm, mineral glass, bracelet 1162/173 and calibre 861; its account also describes other material and dial executions. The separate exact 327.10.43.50.01.001 product page identifies a later Mark II with automatic Co-Axial 3330, 52-hour nominal reserve and a different case specification. Thus Speedmaster MKII alone cannot establish the stored universal 861, manual winding, approximately 41.7 mm, 48 hours or 1969–1970s period. These specifications are withheld until the complete reference and actual execution are identified. The historical entry is not a universal hardware or production rule. No new image pixels inspected or photographs accepted by this family review; all four categories remain identification gaps. No old/new Mark II, dial, material, case or common-calibre photo inheritance. Historic and current catalogue specifications do not authenticate a user watch or prove its service state.
Four identification gaps; no photographs added. Validation/publication pending.

Cosmic2000/MarkII local validation:186Node tests and retained inspection-log-copy full workflow fixtures pass, including exact stored-note copy,filtered RMA,clipboard fallback,unchanged draft/count,refresh,save/next,safety,daily reset/progress/history. Actual Chrome confirms both family names request an exact reference with no supported default calibre or gallery,390px and no page errors. Four original Omega HTML pages successfully read and archived with status/hash receipts; no new image pixels or photographs claimed.431reviewed/2179unreviewed source records;1074verified/26pending/10rejected photo entries. Publication/live checks pending. Overall research and real authenticated refresh/RLS remain incomplete.

PR94 verified: published main86c5f1fb7f9b8f6cdc6275ba3933b371c5015e93; tested tree992fb85da6ce38ca7b4a13ffc6b0cd37c258eede; Pages39786513984success. All44checked served application/research files byte-match origin/main. Live Chrome verified3newcategory entries/2distinct original files,3330specification guidance,enlargement/credits with distinct Bob/Geneva specimens,external-only3/restored3,exact metal/dial/suffix/family isolation and390px without page errors. Live Speedmaster,Cosmic2000,SpeedmasterMKII names offer no default/placeholder calibre and no inherited gallery.186Node tests and full inspection-log-copy workflow fixtures pass.1074verified/26pending/10rejected;431reviewed/2179unreviewed source records. Actual fitted3330 remains photo gap;12family identification gaps retained. Original manufacturer pages archived with hashes. Rollback preserved; no database/production changes. Overall research and real authenticated refresh/RLS remain incomplete.

## Exact3513.53.00 opened specimen review —2026-10-22T13:29:49.402Z
Original Zeitauktion2304125 page and product JSON identify3513.53.00 alongside175.0083/375.0083,39mmsteel,1152automatic chronograph and attributed circa1995. All15original files contact-inspected; full4/9/11/13/14 inspected. Front4 shows textured black dial,large white Arabic numerals,red central chronograph hand/red counter accents,date3 and steel bracelet. Opened13 shows fitted OMEGA1152 rotor,striped automatic assembly,visible balance/regulator,jewels and gear configuration. Closed9 shows Speedmaster hippocampus medallion and850endlink marks. Separate inner11 visibly reads1750083/3750083 with Omega/acier inoxydable branding and service scratches; these photographed case marks do not establish new semantic aliases or applicability to every case with those numbers. Clasp14 has Omega-symbol folding steel clasp with closed back behind. Five category entries use five distinct original files,including two caseback views; only actual movement13 is suppressed in external-only work. Original Sothebys2018lot8029 independently catalogues exact3513.53.00,1152automatic/25jewels,39mmsteel and circa1998,with working-order-at-cataloguing condition but reserve/accuracy untested. Its screw-down closure wording is attributed catalogue text,not a confirmed opening method from this gallery. No universal opening instruction inferred. Dealer circa1995/circa1998 dates do not establish a full production period; old1990s–early2000s range withheld. No inspected source establishes a tested44h reserve,so the previous approximate reserve is not asserted. Source5bar result and seller hardware/originality/condition claims do not establish user-watch pressure resistance,service history,assay or interchangeability. No triple-calendar1151,modularReduced3220,other3513dial/suffix,genericSpeedmaster/common1152 photo or shortened semantic alias inheritance. Packaging/register/workshop media excluded. Web connector could not open Zeitauktion page; original HTML and product JSON were directly read and archived successfully.
Five entries/five files;browser/publication pending. Full inventory and real authenticated refresh/RLS incomplete.

3513.53.00 local validation:187Node tests and full inspection-log-copy workflow fixtures pass,including exact stored-note copying,filtered RMA,clipboard fallback,unchanged draft/count,refresh,save/next,safety,daily reset/progress/history. Actual Chrome verified5original entries/5distinct files,1152suggestion,enlargement/credits,external-only4/restored5,390px and case-mark/adjacent-reference/family isolation with no page errors.432reviewed/2178unreviewed source records;1079verified/26pending/10rejected photo entries. Publication/live verification pending;real authenticated refresh/RLS outstanding.

## Exact Tokyo2020 review — 2026-10-22T13:38:45.282Z
Original Omega exact522.30.42.30.06.001 page specifies42mm steel case/bracelet, sandblasted light-grey dial, rhodium-plated hands,18K white-gold applied indexes, red anodized aluminium tachymeter ring, embossed Tokyo2020 Olympic back, manual1861 and48h nominal reserve;2020-piece edition. Original Zeitauktion2600706 HTML/product JSON independently identifies exact reference, manual1861,steel and attributed circa2019; full production period not established. All16 original gallery files contact-inspected; full5/12/14/15 pixels inspected. Front5 shows light-grey three-register dial, red Speedmaster text and central-hand tip, red tachymeter ring and steel bracelet. Closed12 shows embossed Olympic rings/Tokyo2020 emblem, LIMITED EDITION205/2020 and endlink STZ006272/HJC11 marks. These are this specimen markings, not required serial/endlink values for every watch. Clasp14 shows Omega-branded brushed folding steel clasp, push-buttons and closed back behind. Opened15 shows rotorless manual chronograph architecture, visible balance, jewels, gears and lever layout, OMEGA/SWISS/EIGHTEEN18JEWELS bridge markings; fitted1861 attribution is supported by both original catalogues, not a separately readable1861 stamp in this photograph. Four categories/four distinct original files; only opened movement15 is suppressed in external-only work. Manufacturer page malformed thickness1.7mm is withheld rather than corrected by guess. Dealer circa2019 is attributed only;2020 edition name does not date each specimen. Nominal50m/5bar, dealer condition/function and current generic warranty banners do not establish user-watch water resistance, service, warranty or originality. No other Tokyo dial/metal/suffix, other Speedmaster or common1861 photo inheritance. Packaging/register/test slip/workshop media excluded. Web connector could not open dealer page; original HTML/product JSON directly read and archived.
Four entries/four files; browser/publication pending. Inventory and real authenticated refresh/RLS remain incomplete.

Tokyo2020 local validation:188 Node tests pass; retained inspection-log-copy full workflow browser fixture passes. Actual Chrome four original images load/enlarge/credit, external-only3/restored4,390px and other Tokyo variant isolation pass. No real authenticated session used.433/2610 source records reviewed;1083 verified photograph entries. Publication pending; goal remains incomplete.


## User priority change — 2026-10-22
Prioritise the live Missing-reference queue over sequential general inventory research. Current read-only live snapshot is archived privately in ../missing-queue-priority-20261022.json. Work from original requests and saved inspection evidence; resolve only after supported answers are published and verified on OLD, preserving history. Identity/calibre conflicts remain active. Existing unpublished Speedmaster research remains preserved for a future release.


## Missing-reference priority: three IWC requests — 2026-10-22
Original IWC exact sources and saved inspection details reviewed for IW327006/35111, IW388111/69385 and IW371605/69355. Source receipt research-queue-iwc-20261022-sources.json records limits. Saved C.69355 spelling remains unchanged and requires confirmation; clasp C21F not validated. No new image verification claimed for IWC.189Node tests, retained copy-note workflow browser fixture, three exact lookup/suggestions and390px browser checks pass. Queue resolution pending OLD publication/live verification. Previously tested exact3513.53.00 and522.30.42.30.06.001 image work is included without extending to neighbouring references. Real authenticated refresh/RLS remains outstanding.

