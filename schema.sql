
create table public.team_members(email text primary key check(email=lower(email)), role text not null default 'member' check(role in ('admin','member')));
alter table public.team_members enable row level security;
create policy own_membership on public.team_members for select to authenticated using(email=lower((select auth.jwt()->>'email')));
grant select on public.team_members to authenticated;
insert into public.team_members values ('potmoodle@gmail.com','admin');

create table public.reference_facts(id uuid primary key default gen_random_uuid(), brand text not null, reference text not null, data jsonb not null, status text not null default 'imported' check(status in ('imported','verified')), source text not null, verified_at timestamptz, unique(brand,reference));
create table public.bench_notes(id uuid primary key, brand text not null, reference text not null, note text not null check(length(note) between 1 and 6000), author uuid not null references auth.users(id), created_at timestamptz not null default now());
create table public.research_queue(id uuid primary key default gen_random_uuid(), brand text not null, reference text not null, question text not null, author uuid not null references auth.users(id), status text not null default 'open' check(status in('open','researching','resolved')), created_at timestamptz not null default now(), unique(brand,reference));
create table public.counterfeit_register(id uuid primary key, brand text not null, reference text not null, serial text, indicators text not null check(length(indicators) between 1 and 6000), evidence_url text, author uuid not null references auth.users(id), status text not null default 'unreviewed' check(status in('unreviewed','reviewed','rejected')), created_at timestamptz not null default now());
create table public.inspections(id uuid primary key, author uuid not null references auth.users(id), workflow text not null check(workflow in('authentication','rma','recheck','correction')), brand text, reference text, serial text, details jsonb not null default '{}', note text not null default '', outcome text not null default 'recorded', contribution integer not null default 1, created_at timestamptz not null default now(), work_date date generated always as ((created_at at time zone 'Europe/London')::date) stored, check((workflow='correction' and contribution between -50 and 50 and contribution<>0 and length(note)>0) or(workflow<>'correction' and contribution=1)), check(workflow in('rma','correction') or(length(brand)>0 and length(reference)>0)));
create index inspections_author_date on public.inspections(author,work_date);
create index bench_notes_reference on public.bench_notes(brand,reference);
create index counterfeit_reference on public.counterfeit_register(brand,reference);
create table public.daily_targets(author uuid not null references auth.users(id), work_date date not null, target integer not null check(target between 1 and 500), primary key(author,work_date));

do $$
declare t text;
begin
foreach t in array array['reference_facts','bench_notes','research_queue','counterfeit_register','inspections','daily_targets'] loop
execute format('alter table public.%I enable row level security',t);
execute format('create policy team_read on public.%I for select to authenticated using (exists (select 1 from public.team_members where email=lower((select auth.jwt()->>''email''))))',t);
execute format('grant select on public.%I to authenticated',t);
if t<>'reference_facts' then
execute format('create policy team_insert on public.%I for insert to authenticated with check(author=(select auth.uid()) and exists(select 1 from public.team_members where email=lower((select auth.jwt()->>''email''))))',t);
execute format('grant insert on public.%I to authenticated',t);
end if;
end loop;
end $$;
create policy own_target_update on public.daily_targets for update to authenticated using(author=(select auth.uid())) with check(author=(select auth.uid()));
grant update on public.daily_targets to authenticated;

create function public.daily_metrics(day date) returns jsonb language sql stable security invoker set search_path = '' as $$
select jsonb_build_object('completed',coalesce(sum(contribution),0),'rmas',count(*) filter(where workflow='rma'),'authentications',count(*) filter(where workflow='authentication'),'rechecks',count(*) filter(where workflow='recheck'),'target',coalesce((select target from public.daily_targets where author=auth.uid() and work_date=day),50)) from public.inspections where author=auth.uid() and work_date=day;
$$;
revoke all on function public.daily_metrics(date) from public,anon;
grant execute on function public.daily_metrics(date) to authenticated;

create policy admin_add_member on public.team_members for insert to authenticated with check(exists(select 1 from public.team_members m where m.email=lower((select auth.jwt()->>'email')) and m.role='admin'));
create policy admin_update_research on public.research_queue for update to authenticated using(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin')) with check(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin'));
grant update(status) on public.research_queue to authenticated;
create policy admin_update_counterfeit on public.counterfeit_register for update to authenticated using(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin')) with check(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin'));
grant update(status) on public.counterfeit_register to authenticated;
create policy admin_insert_reference on public.reference_facts for insert to authenticated with check(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin'));
create policy admin_update_reference on public.reference_facts for update to authenticated using(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin')) with check(exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email')) and role='admin'));
grant insert,update(data,status,source,verified_at) on public.reference_facts to authenticated;

alter table public.inspections drop constraint inspections_check1;
alter table public.inspections add constraint inspections_identity_required check(workflow in('rma','correction') or(coalesce(length(brand),0)>0 and coalesce(length(reference),0)>0));
drop policy team_insert on public.research_queue;
create policy team_insert on public.research_queue for insert to authenticated with check(author=(select auth.uid()) and status='open' and exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email'))));
drop policy team_insert on public.counterfeit_register;
create policy team_insert on public.counterfeit_register for insert to authenticated with check(author=(select auth.uid()) and status='unreviewed' and exists(select 1 from public.team_members where email=lower((select auth.jwt()->>'email'))));
revoke all on public.team_members,public.reference_facts,public.bench_notes,public.research_queue,public.counterfeit_register,public.inspections,public.daily_targets from anon,authenticated;
grant select on public.team_members,public.reference_facts,public.bench_notes,public.research_queue,public.counterfeit_register,public.inspections,public.daily_targets to authenticated;
grant insert on public.team_members,public.reference_facts,public.bench_notes,public.research_queue,public.counterfeit_register,public.inspections,public.daily_targets to authenticated;
grant update(target) on public.daily_targets to authenticated;
grant update(status) on public.research_queue,public.counterfeit_register to authenticated;
grant update(data,status,source,verified_at) on public.reference_facts to authenticated;
select count(*) as imported_rules from public.reference_facts;

create index bench_notes_author on public.bench_notes(author);
create index counterfeit_author on public.counterfeit_register(author);
create index research_author on public.research_queue(author);
grant update(author,work_date,target) on public.daily_targets to authenticated;
grant update(brand,reference,data,status,source,verified_at) on public.reference_facts to authenticated;
do $$ declare p record; q text; begin
for p in select * from pg_policies where schemaname='public' loop
q := format('alter policy %I on public.%I',p.policyname,p.tablename);
if p.qual is not null then q:=q||' using ('||replace(p.qual,'( SELECT (auth.jwt() ->> ''email''::text))','((select auth.jwt()) ->> ''email''::text)')||')';end if;
if p.with_check is not null then q:=q||' with check ('||replace(p.with_check,'( SELECT (auth.jwt() ->> ''email''::text))','((select auth.jwt()) ->> ''email''::text)')||')';end if;
execute q;
end loop;
end $$;

