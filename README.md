# BenchAuth Lab

Experimental authentication workstation in watch-auth-pro-OLD. Production WatchAuthPro is unchanged.

## Bench flow

Identify the watch, read the useful known intelligence, record movement technology/calibre and condition, add relevant comments, copy the editable note and complete the inspection. No compulsory expected-versus-observed form. Empty reference fields are omitted.

The seven movement-condition options preserve MC1–MC7: Clean, Dirty, Rusted, Damaged, Modified, Aged and External only. Optional component checks, bracelet/clasp information, overall condition, battery change, serial and outcome are stored with the same inspection.

Special-construction rules are evaluated independently of reference matching. Gas-filled Sinn T1, unresolved Sinn EZM and HYDRO families interrupt internal inspection. No missing warning is presented as clearance to open.

## Shared records

Supabase project: lkxqqntexxwdqfljtvri (BenchAuth Lab, London).

Only the browser-safe publishable key is included. Team access requires a confirmed Supabase email account whose email is in team_members. potmoodle@gmail.com is initially allowed as administrator. In Team access, administrators can allow colleagues' account emails without sending invitations.

Use Create account once, confirm the email and sign in. If the initial Supabase redirect is still localhost, the account panel supports pasting the original confirmation-button link and verifies its token directly. The project owner can optionally set the Auth Site URL and allowed redirect to the Pages URL.

Inspections and RMAs are immutable insert-only records for members. Retrying a save reuses the same UUID. Pending saves retain their original payload and lock editing until retry or explicit discard. The daily target and progress bar use one database aggregation of contributions, per user and London work date. Count corrections are separate signed audit records. Rechecks count once, as do authentications and RMAs.

Shared bench observations are unverified; they do not become reference facts automatically. Research requests deduplicate by normalized brand/reference. Counterfeit concerns remain unreviewed. Administrator controls can update research/counterfeit review status and save a source-backed reviewed reference mapping.

Imported intelligence contains 935 reference rules across the existing WatchAuthPro data files through v2.90, seven special-construction safety rules, and historical serial/replica indicators. Original scope, manual-review flags, aliases and source text are retained. Imported research is labelled imported, not independently reverified. Rule order is preserved. Rolex suffixes and Tudor catalogue suffixes resolve only as explicitly labelled base/family guidance when an exact rule is unavailable.

Existing browser-only production inspection history/counterfeit records are not automatically migrated. No access to those user-browser records is assumed. Photograph matching uses the independent public photographs.json catalogue, with explicit identifiers and labelled representative variants. Uninspected legacy assets remain withheld. See PHOTO_RESEARCH.md and photograph-coverage.csv for current coverage, pending source review and publication blockers.

## Validation

Run node --test tests/*.mjs for scope, movement comparison, factual note wording, gas/oil safety, daily counting and London-day boundaries. tests/database.sql exercises actual authenticated RLS, cross-user sharing, forbidden writes, target editing and duplicate-save counting inside a rolled-back transaction.

Run python -m http.server 8765 and node tests/photographs-browser.cjs with Playwright and system Chromium for browser workflow checks. These use mocked account/database responses and non-watch image fixtures; real photographs, live RLS and deployment require separate verification.

The account/session client uses Supabase REST endpoints, refreshes expiring access tokens and preserves errors without reporting unsaved writes as completed. Draft/session storage is browser-local; completed records and team knowledge are central.
