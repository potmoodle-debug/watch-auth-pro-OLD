-- Restores the previous (recursive) policy; incident rollback only.
begin;
alter policy admin_add_member on public.team_members with check(exists(select 1 from public.team_members m where m.email=lower((select auth.jwt()->>'email')) and m.role='admin'));
drop function benchauth_private.current_user_is_admin();
drop schema benchauth_private;
commit;

