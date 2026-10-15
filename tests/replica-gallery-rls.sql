begin;
select set_config('test.replica_uid',(select id::text from auth.users where lower(email)='potmoodle@gmail.com' limit 1),true);
select set_config('test.replica_report',gen_random_uuid()::text,true);
select set_config('test.replica_photo',gen_random_uuid()::text,true);
insert into public.counterfeit_register(id,brand,reference,indicators,author)
 values(current_setting('test.replica_report')::uuid,'TEST','REPLICA-PROBE','Transactional policy test',current_setting('test.replica_uid')::uuid);
set local role authenticated;
select set_config('request.jwt.claims',jsonb_build_object('sub',current_setting('test.replica_uid'),'email','potmoodle@gmail.com','role','authenticated')::text,true);
do $t$ declare p text:=current_setting('test.replica_uid')||'/'||current_setting('test.replica_report')||'/'||current_setting('test.replica_photo')||'.jpg'; begin
 insert into storage.objects(bucket_id,name) values('replica-evidence',p);
 insert into public.replica_photos(id,register_id,author,object_path,caption) values(current_setting('test.replica_photo')::uuid,current_setting('test.replica_report')::uuid,current_setting('test.replica_uid')::uuid,p,'Test only');
 update public.replica_photos set status='reviewed' where id=current_setting('test.replica_photo')::uuid;
 if not exists(select 1 from public.replica_photos where id=current_setting('test.replica_photo')::uuid and status='reviewed') then raise exception 'Admin review failed'; end if;
 begin update public.replica_photos set caption='tampered' where id=current_setting('test.replica_photo')::uuid; raise exception 'Caption edit accepted'; exception when insufficient_privilege then null; end;
 begin update storage.objects set name='overwrite.jpg' where name=p; if found then raise exception 'Object replacement accepted';end if; exception when insufficient_privilege then null; end;
end $t$;
reset role;
insert into public.team_members(email,role) values('replica-policy-member@example.invalid','member');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"00000000-0000-0000-0000-000000000003","email":"replica-policy-member@example.invalid","role":"authenticated"}',true);
do $t$ begin
 if not exists(select 1 from public.replica_photos where id=current_setting('test.replica_photo')::uuid) then raise exception 'Member photo read failed'; end if;
 if not exists(select 1 from storage.objects where bucket_id='replica-evidence' and name like '%'||current_setting('test.replica_photo')||'.jpg') then raise exception 'Member storage read failed'; end if;
 update public.replica_photos set status='rejected' where id=current_setting('test.replica_photo')::uuid;
 if found then raise exception 'Member review accepted'; end if;
 begin insert into storage.objects(bucket_id,name) values('replica-evidence','00000000-0000-0000-0000-000000000003/'||current_setting('test.replica_report')||'/'||gen_random_uuid()||'.jpg');raise exception 'Other author upload accepted'; exception when insufficient_privilege then null; end;
 begin insert into public.replica_photos(id,register_id,author,object_path) values(gen_random_uuid(),current_setting('test.replica_report')::uuid,'00000000-0000-0000-0000-000000000003','invalid');raise exception 'Other author metadata accepted'; exception when insufficient_privilege or check_violation then null; end;
end $t$;
-- Same author identity, non-admin membership: own-report upload allowed, pre-review denied.
select set_config('request.jwt.claims',jsonb_build_object('sub',current_setting('test.replica_uid'),'email','replica-policy-member@example.invalid','role','authenticated')::text,true);
do $t$ declare pid uuid:=gen_random_uuid(); p text; begin
 p:=current_setting('test.replica_uid')||'/'||current_setting('test.replica_report')||'/'||pid||'.jpg';
 insert into storage.objects(bucket_id,name) values('replica-evidence',p);
 insert into public.replica_photos(id,register_id,author,object_path) values(pid,current_setting('test.replica_report')::uuid,current_setting('test.replica_uid')::uuid,p);
 pid:=gen_random_uuid();p:=current_setting('test.replica_uid')||'/'||current_setting('test.replica_report')||'/'||pid||'.jpg';
 begin insert into public.replica_photos(id,register_id,author,object_path,status) values(pid,current_setting('test.replica_report')::uuid,current_setting('test.replica_uid')::uuid,p,'reviewed');raise exception 'Pre-reviewed upload accepted'; exception when insufficient_privilege then null;end;
end $t$;
select set_config('request.jwt.claims','{"sub":"00000000-0000-0000-0000-000000000004","email":"replica-policy-outsider@example.invalid","role":"authenticated"}',true);
do $t$ begin
 if exists(select 1 from public.replica_photos) then raise exception 'Outsider metadata leak'; end if;
 if exists(select 1 from storage.objects where bucket_id='replica-evidence') then raise exception 'Outsider storage leak'; end if;
 begin insert into storage.objects(bucket_id,name) values('replica-evidence','00000000-0000-0000-0000-000000000004/'||current_setting('test.replica_report')||'/'||gen_random_uuid()||'.jpg');raise exception 'Outsider upload accepted'; exception when insufficient_privilege then null; end;
end $t$;
set local role anon;
do $t$ begin
 begin perform 1 from public.replica_photos; raise exception 'Anon metadata access accepted';exception when insufficient_privilege then null;end;
 if exists(select 1 from storage.objects where bucket_id='replica-evidence') then raise exception 'Anon storage leak';end if;
end $t$;
rollback;
select 'PASS replica RLS admin upload/review, member read, cross-author upload/review denied, outsider and anonymous isolation, immutable object/metadata; probes rolled back' as result;
