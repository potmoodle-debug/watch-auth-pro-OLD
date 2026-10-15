-- BenchAuth Lab only. New bucket is private; existing data/workflows untouched.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('replica-evidence','replica-evidence',false,10485760,array['image/jpeg']);
create table public.replica_photos(
 id uuid primary key, register_id uuid not null references public.counterfeit_register(id),
 author uuid not null references auth.users(id), object_path text not null unique,
 caption text not null default '' check(length(caption)<=500),
 status text not null default 'unreviewed' check(status in ('unreviewed','reviewed','rejected')),
 created_at timestamptz not null default now(),
 check(object_path=author::text||'/'||register_id::text||'/'||id::text||'.jpg')
);
create index replica_photos_register on public.replica_photos(register_id);
create index replica_photos_author on public.replica_photos(author);
alter table public.replica_photos enable row level security;
revoke all on public.replica_photos from public,anon,authenticated;
grant select,insert on public.replica_photos to authenticated;
grant update(status) on public.replica_photos to authenticated;
create policy replica_team_read on public.replica_photos for select to authenticated using (
 auth.uid() is not null and exists(select 1 from public.team_members where email=lower(auth.jwt()->>'email')));
create policy replica_author_insert on public.replica_photos for insert to authenticated with check (
 author=auth.uid() and status='unreviewed' and
 exists(select 1 from public.team_members where email=lower(auth.jwt()->>'email')) and
 exists(select 1 from public.counterfeit_register c where c.id=register_id and (c.author=auth.uid() or (select benchauth_private.current_user_is_admin()))));
create policy replica_admin_review on public.replica_photos for update to authenticated
 using ((select benchauth_private.current_user_is_admin()))
 with check ((select benchauth_private.current_user_is_admin()));
create policy replica_storage_read on storage.objects for select to authenticated using (
 bucket_id='replica-evidence' and auth.uid() is not null and
 exists(select 1 from public.team_members where email=lower(auth.jwt()->>'email')));
create policy replica_storage_insert on storage.objects for insert to authenticated with check (
 bucket_id='replica-evidence' and (storage.foldername(name))[1]=auth.uid()::text and
 storage.extension(name)='jpg' and array_length(storage.foldername(name),1)=2 and
 exists(select 1 from public.team_members where email=lower(auth.jwt()->>'email')) and
 exists(select 1 from public.counterfeit_register c where c.id::text=(storage.foldername(name))[2] and (c.author=auth.uid() or (select benchauth_private.current_user_is_admin()))));
-- No client UPDATE/DELETE on objects: evidence cannot silently be replaced.

