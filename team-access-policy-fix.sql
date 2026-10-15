-- Applied only to BenchAuth Lab (lkxqqntexxwdqfljtvri), 2026-10-15.
-- Private, fixed-purpose lookup breaks self-referential INSERT-policy recursion.
-- No arbitrary identity argument; RLS stays enabled and SELECT stays own-only.
create schema benchauth_private;
revoke all on schema benchauth_private from public,anon,authenticated;
grant usage on schema benchauth_private to authenticated;
create function benchauth_private.current_user_is_admin() returns boolean
language sql stable security definer set search_path = ''
as $fn$
 select auth.uid() is not null and exists (
 select 1 from public.team_members m
 where m.email=lower(auth.jwt()->>'email') and m.role='admin'
 )
$fn$;
revoke all on function benchauth_private.current_user_is_admin() from public,anon,authenticated;
grant execute on function benchauth_private.current_user_is_admin() to authenticated;
alter policy admin_add_member on public.team_members
 with check ((select benchauth_private.current_user_is_admin()) and role='member');
