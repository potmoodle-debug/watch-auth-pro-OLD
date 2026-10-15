# Replica evidence gallery

Counterfeit register reports and photographs are team-only. Every card and enlarged
photo is labelled **Replica / user reported**. This classification records a team
report, not an automatic authentication verdict. Report review and photo review are
separate; new photos always start unreviewed. Only administrators can review/reject.
Rejected reports stay in the register but no longer warn on bench lookup.

Look up the brand/reference on the Bench, choose **Record counterfeit concern**,
save observations, then select photos or use the phone-camera input. Existing
reports have **Add replica photos / camera** for their author and administrators.
Other team members can view the report and pictures. A matching normalised reference
or serial warns during lookup and opens the relevant report.

JPEG, PNG and WebP inputs are limited to 12 per batch and 10 MB per original.
The browser creates JPEG display copies with a longest side of 2400 pixels,
removing original embedded metadata. Keep original evidence files separately.
Photos are stored in the private replica-evidence bucket, never in photographs.json,
GitHub Pages or the genuine reference gallery. Display links expire after five
minutes; refresh the register to renew them. Signing out clears displayed photos.

Uploads cannot overwrite previous evidence. A failed metadata save retains upload
progress while the dialog is open: retry continues without duplicating objects.
Closing/reopening discards that in-memory retry context; completed photos remain
saved. Interrupted uploads without metadata can remain private orphan objects for
administrator recovery. No client deletion capability is provided.

Applied only to BenchAuth Lab lkxqqntexxwdqfljtvri using replica-gallery-setup.sql.
Do not run this setup a second time. For fresh recovery, restore the base schema,
then this setup once. replica-gallery-rollback.sql disables new client access while
preserving evidence; the matching Git rollback branch preserves the previous app.
No production WatchAuthPro changes.

Verification includes transactional database-role tests and browser fixtures,
including the live served interface with mocked authentication/storage. These
do not establish real authenticated upload/refresh behavior: no test session was
available. No supplied Tudor photos were automatically uploaded by this release.
