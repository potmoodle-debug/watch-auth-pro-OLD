-- BenchAuth Lab incident rollback: disable new client access without deleting evidence.
-- Roll back the app to rollback/benchauth-before-replica-gallery-20261015 too.
begin;
revoke all on public.replica_photos from anon,authenticated;
drop policy if exists replica_storage_read on storage.objects;
drop policy if exists replica_storage_insert on storage.objects;
-- Keep the private bucket, metadata, review status and uploaded objects for recovery.
commit;
