const {chromium}=require('playwright'),assert=require('node:assert/strict');
const fs=require('node:fs');

(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.BENCHAUTH_CHROMIUM||'/usr/bin/chromium',args:['--no-sandbox','--disable-crash-reporter']});
 const context=await browser.newContext({viewport:{width:1440,height:1000},permissions:['clipboard-read','clipboard-write']});
 const page=await context.newPage(),errors=[],records=new Map();page.setDefaultTimeout(15000);
 page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept());
 // Only test fixtures are routed; no real remote account or database is mutated.
 const fixture=(brand,reference,category,id)=>({id,brand,references:[reference],representativeFor:[],variant:reference+' TEST FIXTURE',category,title:'Browser test fixture',caption:'Non-watch pixel fixture used only in automated tests.',credit:'Test fixture',image:'https://photo-fixture.invalid/'+id+'.png',source:'https://photo-fixture.invalid/source',mediaKind:'photograph',review:{status:'verified',visualInspected:true,referenceVerified:true,executionVerified:true,inspectedAt:'2026-10-08',loadedAt:'2026-10-08',evidence:'Test metadata'}});
 const photos=[fixture('Tudor','25600TN','front','front'),fixture('Tudor','25600TN','movement','movement'),fixture('Sinn','UX','front','sinn-front'),fixture('Sinn','UX','movement','sinn-movement'),fixture('Rolex','126000','front','broken')];
 await page.route('**/photographs.json?*',r=>r.fulfill({json:{photographs:photos}}));
 await page.route('https://photo-fixture.invalid/**',r=>r.request().url().includes('broken')?r.fulfill({status:404}):r.fulfill({contentType:'image/png',body:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jR7kAAAAASUVORK5CYII=','base64')}));
 let sharedReads=0;
 await page.route('https://lkxqqntexxwdqfljtvri.supabase.co/**',async route=>{
  const req=route.request(),url=new URL(req.url()),body=req.postDataJSON();let result=[];
  if(url.pathname==='/auth/v1/token')result={access_token:'fixture-token',refresh_token:'fixture-refresh',expires_in:3600};
  else if(url.pathname==='/auth/v1/user')result={id:'fixture-user',email:'fixture@example.invalid'};
  else if(url.pathname==='/rest/v1/team_members')result=[{email:'fixture@example.invalid',role:'admin'}];
  else if(url.pathname==='/rest/v1/reference_facts'){
   sharedReads++;result=[{data:{brand:'Tudor',refs:['25600TN'],family:'Shared text fixture',calibre:['MT5612'],visuals:[{type:'WATCH',image:'https://photo-fixture.invalid/WRONG.png'}]},status:'verified'}];
  }else if(url.pathname==='/rest/v1/rpc/daily_metrics')result={completed:[...records.values()].reduce((n,r)=>n+r.contribution,0),target:50,rmas:[...records.values()].filter(r=>r.workflow==='rma').length};
  else if(url.pathname==='/rest/v1/inspections'){
   if(req.method()==='POST')for(const r of Array.isArray(body)?body:[body])if(!records.has(r.id))records.set(r.id,{...r,created_at:new Date().toISOString(),work_date:'2026-10-08'});
   result=[...records.values()];if(url.searchParams.has('id')){const filter=url.searchParams.get('id');result=result.filter(r=>filter.startsWith('eq.')?r.id===filter.slice(3):filter.slice(4,-1).split(',').includes(r.id));}
  }
  await route.fulfill({json:result});
 });
 await page.goto('http://127.0.0.1:8765');
 await page.waitForFunction(()=>document.querySelector('#referenceRows').textContent.includes('reference rules'));
 const lookup=async(brand,reference)=>{await page.locator('#brand').fill(brand);await page.locator('#reference').fill(reference);await page.locator('#lookup').click();await page.waitForFunction(()=>!document.querySelector('#watchInfo').hidden);};
 await lookup('Tudor','25600 TN');
 assert.equal(await page.locator('#visuals img').count(),2);
 for(const img of await page.locator('#visuals img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.complete&&i.naturalWidth>0?true:new Promise((resolve,reject)=>{i.onload=()=>resolve(true);i.onerror=()=>reject(new Error('Fixture failed to load'));}));}
 assert.match(await page.locator('[data-category="caseback"]').textContent(),/No verified photograph/);
 await page.locator('[data-photo-id="front"]').click();assert.ok(await page.locator('#photographDialog').isVisible());
 await page.keyboard.press('Escape');assert.equal(await page.locator('#photographDialog').isVisible(),false);
 await page.locator('#lookup').click();assert.equal(await page.locator('#intelligenceContent').isVisible(),false);
 await page.locator('#lookup').click();assert.ok(await page.locator('#visuals').isVisible());
 await page.locator('#accountButton').click();await page.locator('#email').fill('fixture@example.invalid');await page.locator('#password').fill('fixture-password');await page.locator('#authForm button[type="submit"]').click();
 await page.waitForFunction(()=>document.querySelector('#accountButton').textContent==='Account');
 await page.waitForFunction(()=>!document.querySelector('#accountDialog').open);
 assert.equal(await page.locator('#visuals img').count(),2);assert.equal(await page.locator('#model').textContent(),'Shared text fixture');
 await page.reload();await page.waitForFunction(()=>document.querySelector('#model').textContent==='Shared text fixture');assert.ok(sharedReads>=2);
 await page.locator('[data-tab="bench"]').click();assert.equal(await page.locator('#visuals img').count(),2);
 await lookup('Tudor','M25600TN-9999');assert.equal(await page.locator('#visuals img').count(),0);
 await lookup('Tudor','25600TB');assert.equal(await page.locator('#visuals img').count(),0);
 await lookup('Sinn','UX');assert.match(await page.locator('#safety').textContent(),/DO NOT OPEN/);assert.equal(await page.locator('[data-category="movement"] img').count(),0);
 assert.equal(await page.locator('#calibre').isDisabled(),true);assert.ok(await page.locator('#conditions input[value="External only"]').isChecked());
 await lookup('Rolex','126000');await page.locator('#serial').fill('T11Y1111');await page.locator('#clasp').fill('U7T');
 assert.ok(await page.locator('#replicaFlags').isVisible());assert.ok(await page.locator('#rolexClasp').isVisible());
 await page.locator('#visuals').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('#visuals').textContent.includes('Photograph unavailable'));
 await page.locator('#clasp').fill('');await page.locator('#copyNote').click();assert.ok(await page.locator('#claspReminder').isVisible());
 await page.locator('#claspEnter').click();assert.equal(await page.locator('#clasp').evaluate(e=>document.activeElement===e),true);
 await page.locator('#clasp').fill('U7T');await page.locator('#comments').fill('Browser fixture finding');await page.locator('#copyNote').click();assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/Browser fixture finding/);
 await page.locator('#complete').click();await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Ready for the next watch'));
 assert.equal(await page.locator('#reference').inputValue(),'');assert.equal(records.size,1);
 await page.locator('#addRma').click();await page.locator('#rmaNote').fill('Browser fixture RMA');await page.locator('#rmaSave').click();await page.waitForFunction(()=>document.querySelector('#rmaStatus').textContent.includes('saved and counted once'));await page.locator('#rmaClose').click();assert.equal(records.size,2);
 assert.match(await page.locator('#progressTitle').textContent(),/2 \/ 50/);
 await page.locator('#startNewDay').click();await page.locator('#dayResetConfirm').click();await page.waitForFunction(()=>document.querySelector('#progressTitle').textContent==='0 / 50');
 assert.ok([...records.values()].some(r=>r.workflow==='rma'));assert.ok([...records.values()].some(r=>r.reference==='126000'));
 await page.locator('[data-tab="inspections"]').click();await page.waitForFunction(()=>document.querySelector('#inspectionRows').textContent.includes('Browser fixture RMA'));assert.match(await page.locator('#inspectionRows').textContent(),/Browser fixture RMA/);
 await page.locator('[data-tab="bench"]').click();await lookup('Tudor','25600TN');
 await page.locator('#accountButton').click();await page.locator('#signout').click();if(await page.locator('#accountDialog').isVisible())await page.locator('#closeAccount').click();
 assert.equal(await page.locator('#visuals img').count(),2);assert.notEqual(await page.locator('#model').textContent(),'Shared text fixture');
 await page.screenshot({path:'/tmp/benchauth-photos-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:'/tmp/benchauth-photos-mobile.png',fullPage:true});
 assert.deepEqual(errors,[]);await browser.close();console.log('Browser fixtures passed: normalized matching, variants, gallery, image failures, sign-in/out and refresh, safety, Rolex flags and clasp reminder, clipboard, save/next, RMA, daily reset/progress and history. Real-source image loading remains unverified.');
})().catch(e=>{console.error(e);process.exit(1);});
