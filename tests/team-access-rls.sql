-- Simulated authenticated claims test database authorization, not real login/refresh.
-- All probe memberships roll back. Run on BenchAuth Lab only.
begin;
select md5(coalesce(jsonb_agg(to_jsonb(t) order by email)::text,'')) as before_digest from public.team_members t;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"00000000-0000-0000-0000-000000000001","email":"potmoodle@gmail.com","role":"authenticated"}',true);
do $test$ begin
 if (select count(*) from public.team_members)<>1 then raise exception 'admin own read failed'; end if;
 insert into public.team_members(email,role) values ('benchauth-policy-probe@example.invalid','member');
 begin insert into public.team_members(email,role) values ('benchauth-policy-admin-probe@example.invalid','admin'); raise exception 'admin escalation accepted'; exception when insufficient_privilege then null; end;
end $test$;
select set_config('request.jwt.claims','{"sub":"00000000-0000-0000-0000-000000000002","email":"benchauth-policy-probe@example.invalid","role":"authenticated"}',true);
do $test$ begin
 if (select count(*) from public.team_members)<>1 then raise exception 'member read isolation failed'; end if;
 begin insert into public.team_members(email,role) values ('benchauth-policy-denied@example.invalid','member'); raise exception 'member insert accepted'; exception when insufficient_privilege then null; end;
end $test$;
select set_config('request.jwt.claims','{"sub":"00000000-0000-0000-0000-000000000003","email":"benchauth-policy-outsider@example.invalid","role":"authenticated"}',true);
do $test$ begin
 if exists(select 1 from public.team_members) then raise exception 'outsider read leaked'; end if;
 begin insert into public.team_members(email,role) values ('benchauth-policy-denied@example.invalid','member'); raise exception 'outsider insert accepted'; exception when insufficient_privilege then null; end;
end $test$;
set local role anon;
do $test$ begin
 begin perform 1 from public.team_members; raise exception 'anon read accepted'; exception when insufficient_privilege then null; end;
 begin insert into public.team_members(email,role) values ('benchauth-policy-denied@example.invalid','member'); raise exception 'anon insert accepted'; exception when insufficient_privilege then null; end;
end $test$;
rollback;
select 'admin insert; own-only reads; member/outsider/anonymous denied; admin-role escalation denied; all probes rolled back' as verified,md5(coalesce(jsonb_agg(to_jsonb(t) order by email)::text,'')) as after_digest from public.team_members t;
