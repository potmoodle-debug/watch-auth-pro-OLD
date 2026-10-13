const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.BENCHAUTH_CHROMIUM,args:['--no-sandbox']});try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[],writes=[];
 const rows=[{id:'queue-a',brand:'OMEGA',reference:'25025000',question:'Mapping request',status:'open',created_at:'2026-10-13T08:00:00Z'},{id:'queue-b',brand:'TUDOR',reference:'7699',question:'Unresolved identity <script>throw Error("unsafe")</script>',status:'researching',created_at:'2026-10-13T09:00:00Z'},{id:'queue-c',brand:'PANERAI',reference:'PAM00992',question:'Published mapping',status:'resolved',created_at:'2026-10-13T10:00:00Z'}];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('http://127.0.0.1:8766/**',async route=>{const u=new URL(route.request().url());await route.fulfill({path:path.join(__dirname,'..',u.pathname==='/'?'index.html':decodeURIComponent(u.pathname))});});
 await page.route('**supabase.co/**',async route=>{const req=route.request(),u=new URL(req.url());let result=[];
 if(u.pathname==='/auth/v1/token')result={access_token:'fixture-token',refresh_token:'fixture-refresh',expires_in:3600};
 else if(u.pathname==='/auth/v1/user')result={id:'queue-fixture',email:'fixture@example.invalid'};
 else if(u.pathname==='/rest/v1/team_members')result=[{role:'admin'}];
 else if(u.pathname==='/rest/v1/rpc/daily_metrics')result={completed:4,target:60,rmas:1};
 else if(u.pathname==='/rest/v1/research_queue'){if(req.method()==='PATCH'){const id=u.searchParams.get('id').replace(/^eq\./,''),row=rows.find(x=>x.id===id),body=req.postDataJSON();assert.ok(row);assert.deepEqual(Object.keys(body),['status']);writes.push({id,...body});row.status=body.status;result=[row];}else{assert.equal(req.method(),'GET');result=rows;}}
 else if(req.method()!=='GET'&&u.pathname!=='/auth/v1/logout')assert.fail('Unexpected mutation '+u.pathname);
 await route.fulfill({json:result});});
 await page.goto('http://127.0.0.1:8766');await page.waitForFunction(()=>document.querySelector('#referenceRows').textContent.includes('reference rules'));
 await page.locator('#accountButton').click();await page.locator('#email').fill('fixture@example.invalid');await page.locator('#password').fill('fixture-password');await page.locator('#authForm button[type=submit]').click();await page.waitForFunction(()=>document.querySelector('#progressTitle').textContent==='4 / 60');
 await page.locator('#serial').fill('KEEP-DRAFT');await page.locator('[data-tab=research]').click();
 await page.waitForFunction(()=>document.querySelector('#researchSummary').textContent==='2 active · 1 resolved');assert.equal(await page.locator('#researchRows article').count(),2);assert.ok(!(await page.locator('#researchRows').textContent()).includes('PAM00992'));
 await page.locator('[data-id=queue-a][data-value=resolved]').click();await page.waitForFunction(()=>document.querySelector('#researchSummary').textContent==='1 active · 2 resolved');assert.equal(await page.locator('#researchRows article').count(),1);
 await page.locator('#showResolvedResearch').check();assert.equal(await page.locator('#researchRows article').count(),3);await page.locator('[data-id=queue-a][data-value=open]').click();await page.waitForFunction(()=>document.querySelector('#researchSummary').textContent==='2 active · 1 resolved');
 await page.locator('#showResolvedResearch').uncheck();assert.equal(await page.locator('#researchRows article').count(),2);assert.equal(writes.length,2);assert.deepEqual(writes,[{id:'queue-a',status:'resolved'},{id:'queue-a',status:'open'}]);assert.equal(rows.length,3);
 await page.locator('[data-refresh=research]').click();assert.equal(await page.locator('#researchRows article').count(),2);assert.equal(await page.locator('#serial').inputValue(),'KEEP-DRAFT');assert.equal(await page.locator('#progressTitle').textContent(),'4 / 60');
 await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await page.locator('#showResolvedResearch').check();await page.locator('#accountButton').click();await page.locator('#signout').click();await page.waitForFunction(()=>document.querySelector('#researchRows').textContent==='');assert.equal(await page.locator('#showResolvedResearch').isChecked(),false);assert.equal(await page.locator('#researchSummary').textContent(),'');assert.deepEqual(errors,[]);
 console.log('Queue fixture: active-only list, counts, resolve/history/reopen, refresh, escaped questions, retained rows/draft/count, mobile and signout clear passed. No live database writes.');
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
