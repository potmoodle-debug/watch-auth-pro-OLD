const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.BENCHAUTH_CHROMIUM||'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try {
 const page=await browser.newPage();const errors=[],writes=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('http://127.0.0.1:8765/**',route=>{const u=new URL(route.request().url());return route.fulfill({path:path.join(__dirname,'..',u.pathname==='/'?'index.html':decodeURIComponent(u.pathname))});});
 await page.route('https://lkxqqntexxwdqfljtvri.supabase.co/**',async route=>{
 const req=route.request(),u=new URL(req.url());
 if(u.pathname==='/auth/v1/token')return route.fulfill({json:{access_token:'fixture',refresh_token:'fixture',expires_in:3600}});
 if(u.pathname==='/auth/v1/user')return route.fulfill({json:{id:'fixture-admin',email:'admin@example.invalid'}});
 if(u.pathname==='/rest/v1/team_members'){
 if(req.method()==='POST'){writes.push(req.postDataJSON());assert.equal(req.headers().prefer,'return=minimal');return writes.length===1?route.fulfill({status:201,body:''}):route.fulfill({status:409,json:{message:'Membership already exists.'}});}
 return route.fulfill({json:[{email:'admin@example.invalid',role:'admin'}]});
 }
 if(u.pathname==='/rest/v1/rpc/daily_metrics')return route.fulfill({json:{completed:0,target:50,rmas:0}});
 return route.fulfill({json:[]});
 });
 await page.goto('http://127.0.0.1:8765');
 await page.locator('#accountButton').click();
 await page.locator('#email').fill('admin@example.invalid');await page.locator('#password').fill('fixture-password');
 await page.locator('#authForm button[type=submit]').click();
 await page.waitForFunction(()=>!document.querySelector('#accountDialog').open);
 await page.locator('#accountButton').click();await page.locator('#memberEmail').fill('colleague@example.invalid');await page.locator('#addMember').click();
 await page.waitForFunction(()=>document.querySelector('#authStatus').textContent.includes('Team access granted'));
 assert.deepEqual(writes,[{email:'colleague@example.invalid',role:'member'}]);assert.equal(await page.locator('#memberEmail').inputValue(),'');
 await page.locator('#memberEmail').fill('colleague@example.invalid');await page.locator('#addMember').click();
 await page.waitForFunction(()=>document.querySelector('#authStatus').textContent.includes('Membership already exists.'));
 assert.equal(await page.locator('#memberEmail').inputValue(),'colleague@example.invalid');assert.deepEqual(errors,[]);
 console.log('PASS team access: minimal response, member role, success, preserved error/input; fixtures only.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
