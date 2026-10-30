const {chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.BENCHAUTH_CHROMIUM||'/usr/bin/chromium',args:['--no-sandbox','--disable-crash-reporter']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));
  const root=path.join(__dirname,'..');
  await page.route('http://127.0.0.1:8765/**',r=>{const u=new URL(r.request().url());return r.fulfill({path:path.join(root,u.pathname==='/'?'index.html':decodeURIComponent(u.pathname))});});
  const catalogue=JSON.parse(fs.readFileSync(path.join(root,'photographs.json'),'utf8'));
  const ids=new Set(['panerai-pass2-pam00609-front','panerai-pass2-pam00609-movement','panerai-pass2-pam00609-caseback','omega-next-snoopy-20261021-caseback']);
  const fixture=catalogue.photographs.filter(p=>ids.has(p.id)).map(p=>({...p,review:{...p.review,status:'verified',loadedAt:new Date().toISOString(),browserDeliveryVerified:true}}));
  await page.route('**/photographs.json?*',r=>r.fulfill({json:{photographs:fixture}}));
  await page.route('https://potmoodle-debug.github.io/watch-auth-pro-OLD/assets/photographs/**',r=>{const name=path.basename(new URL(r.request().url()).pathname);return r.fulfill({path:path.join(root,'assets','photographs',name)});});
  await page.goto('http://127.0.0.1:8765');await page.waitForFunction(()=>document.querySelector('#referenceRows').textContent.includes('reference rules'));
  const lookup=async(brand,ref)=>{await page.locator('#brand').fill(brand);await page.locator('#reference').fill(ref);await page.locator('#lookup').click();await page.waitForFunction(()=>!document.querySelector('#watchInfo').hidden);};
  await lookup('Panerai','PAM00609');assert.deepEqual(await page.locator('.photo-category .heading small').allTextContents(),['1 verified','1 verified','1 verified','0 verified']);
  for(const img of await page.locator('#visuals img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.complete&&i.naturalWidth>0?true:new Promise((resolve,reject)=>{i.onload=()=>resolve(true);i.onerror=()=>reject(new Error('Image failed'));}));}
  assert.equal(await page.locator('#visuals img').count(),3);assert.match(await page.locator('#visuals').innerText(),/Christie's/);assert.match(await page.locator('#visuals').innerText(),/P\.5000/);
  await page.locator('[data-photo-id="panerai-pass2-pam00609-movement"]').click();assert.ok(await page.locator('#photographDialog').isVisible());assert.ok(await page.locator('#photographDialog img').evaluate(i=>i.complete&&i.naturalWidth===3200));await page.keyboard.press('Escape');
  await page.locator('#conditions input[value="External only"]').check();await page.locator('#lookup').click();assert.deepEqual(await page.locator('.photo-category .heading small').allTextContents(),['1 verified','0 verified','0 verified','0 verified']);assert.equal(await page.locator('#visuals img').count(),1);
  await page.locator('#conditions input[value="External only"]').uncheck();await page.locator('#lookup').click();assert.equal(await page.locator('#visuals img').count(),3);
  await lookup('Omega','3578.51.00');assert.equal(await page.locator('[data-category="caseback"] img').count(),1);const back=page.locator('[data-category="caseback"]');assert.match(await back.innerText(),/2829\/5441/);assert.match(await back.innerText(),/Christie's/);await back.locator('img').evaluate(i=>i.complete&&i.naturalWidth===3200);await back.locator('.photo-open').click();assert.ok(await page.locator('#photographDialog').isVisible());assert.ok(await page.locator('#photographDialog img').evaluate(i=>i.complete&&i.naturalWidth===3200));
  assert.deepEqual(errors,[]);console.log('PASS archived original images load in gallery and enlargement; exact PAM00609 and 3578.51.00 scope, Christie’s credit, category rendering and External movement suppression verified.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
