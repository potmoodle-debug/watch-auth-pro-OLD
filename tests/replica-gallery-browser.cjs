const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.BENCHAUTH_CHROMIUM||'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
 const page=await browser.newPage({viewport:{width:1280,height:950}}),errors=[],uploads=[],photos=[],signs=[];
 let failMetadata=true;
 const record={id:'11111111-1111-4111-8111-111111111111',brand:'TUDOR',reference:'94110',indicators:'User supplied replica specimen',author:'22222222-2222-4222-8222-222222222222',status:'unreviewed',created_at:'2026-10-15T12:00:00Z'};
 const pixel=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jR7kAAAAASUVORK5CYII=','base64');
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('http://127.0.0.1:8765/**',route=>{const u=new URL(route.request().url());return route.fulfill({path:path.join(__dirname,'..',u.pathname==='/'?'index.html':decodeURIComponent(u.pathname))});});
 await page.route('https://lkxqqntexxwdqfljtvri.supabase.co/**',async route=>{
 const req=route.request(),u=new URL(req.url());let result=[];
 if(u.pathname==='/auth/v1/token')result={access_token:'fixture',refresh_token:'fixture',expires_in:3600};
 else if(u.pathname==='/auth/v1/user')result={id:record.author,email:'fixture@example.invalid'};
 else if(u.pathname==='/rest/v1/team_members')result=[{email:'fixture@example.invalid',role:'admin'}];
 else if(u.pathname==='/rest/v1/rpc/daily_metrics')result={completed:0,target:50,rmas:0};
 else if(u.pathname==='/rest/v1/counterfeit_register'){
 if(req.method()==='PATCH')record.status=req.postDataJSON().status;
 result=[record];
 }else if(u.pathname==='/rest/v1/replica_photos'){
 if(req.method()==='POST'){
 if(failMetadata){failMetadata=false;return route.fulfill({status:503,json:{message:'Temporary metadata failure'}});}
 const p=req.postDataJSON();assert.equal(p.author,record.author);assert.equal(p.register_id,record.id);if(!photos.some(x=>x.id===p.id))photos.push({...p,status:'unreviewed'});
 }else if(req.method()==='PATCH'){const id=u.searchParams.get('id').slice(3);photos.find(p=>p.id===id).status=req.postDataJSON().status;}
 result=photos;
 }else if(u.pathname.startsWith('/storage/v1/object/sign/replica-evidence/')){
 if(req.method()==='POST'){assert.equal(req.postDataJSON().expiresIn,300);signs.push(u.pathname);result={signedURL:u.pathname.replace('/storage/v1','')+'?token=fixture'};}
 else return route.fulfill({contentType:'image/png',body:pixel});
 }else if(u.pathname.startsWith('/storage/v1/object/replica-evidence/')){
 assert.equal(req.method(),'POST');assert.equal(req.headers()['x-upsert'],'false');assert.equal(req.headers()['content-type'],'image/jpeg');
 const bytes=req.postDataBuffer();assert.equal(bytes[0],255);assert.equal(bytes[1],216);uploads.push(u.pathname);result={Key:u.pathname};
 }
 return route.fulfill({json:result});
 });
 await page.goto(process.env.BENCHAUTH_TEST_URL||'http://127.0.0.1:8765');
 await page.locator('#accountButton').click();await page.locator('#email').fill('fixture@example.invalid');await page.locator('#password').fill('fixture-password');await page.locator('#authForm button[type=submit]').click();await page.waitForFunction(()=>!document.querySelector('#accountDialog').open);
 await page.locator('#brand').fill('Tudor');await page.locator('#reference').fill('9411/0');await page.locator('#lookup').click();
 await page.locator('[data-open-replica]').waitFor();assert.match(await page.locator('#alerts').innerText(),/Replica \/ user reported.*unreviewed/s);assert.match(await page.locator('#alerts').innerText(),/does not identify every watch/);
 const genuineBefore=await page.locator('#visuals [data-photo-id]').count();
 await page.locator('[data-open-replica]').click();
 await page.locator('[data-replica-details] div').getByText('No replica photos attached yet.').waitFor();
 await page.locator('[data-add-replica]').click();
 const png=await page.evaluate(()=>{const c=document.createElement('canvas');c.width=20;c.height=30;c.getContext('2d').fillRect(0,0,20,30);return c.toDataURL('image/png').split(',')[1];});
 const files=[1,2].map(i=>({name:'replica-'+i+'.png',mimeType:'image/png',buffer:Buffer.from(png,'base64')}));
 await page.locator('#replicaFiles').setInputFiles(files);await page.locator('#replicaCaption').fill('Dial and movement observations');await page.locator('#replicaUploadSave').click();
 await page.waitForFunction(()=>document.querySelector('#replicaUploadStatus').textContent.includes('Temporary metadata failure'));
 assert.equal(uploads.length,1);assert.equal(photos.length,0);
 await page.locator('#replicaUploadSave').click();await page.waitForFunction(()=>!document.querySelector('#replicaUploadDialog').open);
 assert.equal(uploads.length,2);assert.equal(photos.length,2);assert.equal(new Set(uploads).size,2);
 await page.locator('[data-replica-details] summary').click();await page.locator('.replica-grid img').first().waitFor();
 assert.equal(await page.locator('.replica-grid img').count(),2);assert.match(await page.locator('.replica-grid').innerText(),/Photo review: unreviewed/);
 await page.locator('.replica-photo-open').first().click();assert.equal(await page.locator('#replicaPhotoDialog').isVisible(),true);assert.match(await page.locator('#replicaPhotoDialog h2').innerText(),/Replica \/ user reported/);await page.locator('#replicaPhotoDialog button').click();
 await page.getByRole('button',{name:'Mark photo reviewed',exact:true}).first().click();await page.waitForFunction(()=>!document.querySelector('[data-replica-details]').open);
 assert.equal(photos[0].status,'reviewed');assert.equal(record.status,'unreviewed');
 await page.getByRole('button',{name:'Reject report',exact:true}).click();await page.waitForFunction(()=>!document.querySelector('[data-open-replica]'));assert.equal(record.status,'rejected');
 assert.equal(await page.locator('#visuals [data-photo-id]').count(),genuineBefore);assert.equal(await page.locator('#visuals').getByText('Replica / user reported',{exact:true}).count(),0);
 await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.locator('#accountButton').click();await page.locator('#signout').click();await page.waitForFunction(()=>document.querySelector('#accountState').textContent.includes('Sign in to share'));
 assert.equal(await page.locator('.replica-grid img').count(),0);assert.equal(await page.locator('#replicaPhotoDialog img').count(),0);assert.ok(signs.length>=2);assert.deepEqual(errors,[]);
 console.log('PASS replica gallery: private JPEG upload, metadata-failure retry without duplicate objects, report warnings, separate photo review, rejected-report exclusion, enlarge, genuine-gallery separation, mobile and sign-out cleanup. Mock auth/storage only.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
