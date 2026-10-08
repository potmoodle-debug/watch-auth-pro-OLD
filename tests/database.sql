
begin;
insert into auth.users(id,email) values
('10000000-0000-0000-0000-000000000001','benchauth-a@example.invalid'),
('10000000-0000-0000-0000-000000000002','benchauth-b@example.invalid'),
('10000000-0000-0000-0000-000000000003','benchauth-outsider@example.invalid');
insert into public.team_members(email,role) values('benchauth-a@example.invalid','member'),('benchauth-b@example.invalid','member');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"10000000-0000-0000-0000-000000000001","email":"benchauth-a@example.invalid","role":"authenticated"}',true);
insert into public.inspections(id,author,workflow,brand,reference,contribution) values ('20000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','authentication','TEST','TEST',1);
insert into public.inspections(id,author,workflow,note,contribution) values ('20000000-0000-0000-0000-000000000002','10000000-0000-0000-0000-000000000001','rma','RMA test',1);
insert into public.inspections(id,author,workflow,note,contribution) values ('20000000-0000-0000-0000-000000000002','10000000-0000-0000-0000-000000000001','rma','RMA test',1) on conflict(id) do nothing;
insert into public.bench_notes(id,author,brand,reference,note) values ('30000000-0000-0000-0000-000000000001','10000000-0000-0000-0000-000000000001','TEST','TEST','Shared cross-user note');
insert into public.daily_targets(author,work_date,target) values ('10000000-0000-0000-0000-000000000001',(now() at time zone 'Europe/London')::date,50);
insert into public.daily_targets(author,work_date,target) values ('10000000-0000-0000-0000-000000000001',(now() at time zone 'Europe/London')::date,60) on conflict(author,work_date) do update set target=excluded.target;
do $$ begin
if (public.daily_metrics((now() at time zone 'Europe/London')::date)->>'completed')::int<>2 then raise exception 'Duplicate save / RMA count failed';end if;
if (public.daily_metrics((now() at time zone 'Europe/London')::date)->>'rmas')::int<>1 then raise exception 'RMA count failed';end if;
if (public.daily_metrics((now() at time zone 'Europe/London')::date)->>'target')::int<>60 then raise exception 'Target edit failed';end if;
begin
insert into public.reference_facts(brand,reference,data,source,status) values('TEST','TEST','{}','test','verified');
raise exception 'Member was allowed to verify reference data';
exception when insufficient_privilege then null;end;
begin
insert into public.research_queue(brand,reference,question,author,status) values('TEST','TEST','test','10000000-0000-0000-0000-000000000001','resolved');
raise exception 'Member was allowed to pre-resolve research';
exception when insufficient_privilege then null;end;
end $$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-0000-0000-000000000002","email":"benchauth-b@example.invalid","role":"authenticated"}',true);
do $$ begin
if not exists(select 1 from public.bench_notes where id='30000000-0000-0000-0000-000000000001') then raise exception 'Team note not visible to second user';end if;
if (public.daily_metrics((now() at time zone 'Europe/London')::date)->>'completed')::int<>0 then raise exception 'Counter leaks another user total';end if;
begin
insert into public.inspections(id,author,workflow,note) values(gen_random_uuid(),'10000000-0000-0000-0000-000000000001','rma','spoofed');
raise exception 'Author spoof was allowed';
exception when insufficient_privilege then null;end;
end $$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-0000-0000-000000000003","email":"benchauth-outsider@example.invalid","role":"authenticated"}',true);
do $$ begin
if exists(select 1 from public.reference_facts) or exists(select 1 from public.bench_notes) or exists(select 1 from public.inspections) then raise exception 'Unapproved account can read team data';end if;
begin
insert into public.bench_notes(id,author,brand,reference,note) values(gen_random_uuid(),'10000000-0000-0000-0000-000000000003','TEST','TEST','not allowed');
raise exception 'Unapproved account can write team data';
exception when insufficient_privilege then null;end;
end $$;
reset role;
rollback;
select 'PASS: RMA totals, idempotent saves, target edit, cross-user knowledge, private daily totals, member review restrictions, author spoof and outsider isolation' as test_result;

