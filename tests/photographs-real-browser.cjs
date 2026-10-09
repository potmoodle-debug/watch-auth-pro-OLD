// Loads the actual accepted catalogue from the local app. No image or database
// responses are mocked, and no account is authenticated or mutated.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');

(async()=>{
 const {matchingPhotographs,verifiedPhotograph}=await import('../photographs.js');
 const catalogue=JSON.parse(fs.readFileSync(new URL('../photographs.json','file://'+__filename))).photographs;
 const accepted=catalogue.filter(verifiedPhotograph),references=new Map(),loaded=new Set();
 for(const p of accepted)for(const reference of [...p.references,...p.representativeFor])references.set(p.brand+'|'+reference,{brand:p.brand,reference});
 const proxy=process.env.HTTPS_PROXY||process.env.HTTP_PROXY;
 const browser=await chromium.launch({headless:true,executablePath:process.env.BENCHAUTH_CHROMIUM||'/usr/bin/chromium',args:['--no-sandbox','--disable-crash-reporter'],...(proxy?{proxy:{server:proxy,bypass:'127.0.0.1,localhost'}}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto('http://127.0.0.1:8765');
  await page.waitForFunction(()=>document.querySelector('#referenceRows').textContent.includes('reference rules'));
  for(const {brand,reference} of references.values()){
   const expected=matchingPhotographs(catalogue,brand,reference);
   await page.locator('#brand').fill(brand);await page.locator('#reference').fill(reference);await page.locator('#lookup').click();
   await page.waitForFunction(()=>!document.querySelector('#watchInfo').hidden);
   assert.equal(await page.locator('#visuals img').count(),expected.length,brand+' '+reference);
   for(const p of expected){
    const button=page.locator('[data-photo-id="'+p.id+'"]');
    assert.ok((await button.locator('..').textContent()).includes(p.matchScope),p.id+' match scope');
    assert.ok((await button.locator('..').textContent()).includes(p.variant),p.id+' variant');
    const img=button.locator('img');await img.scrollIntoViewIfNeeded();
    await page.waitForFunction(id=>{const image=document.querySelector('[data-photo-id="'+id+'"] img');return image?.complete&&image.naturalWidth>0;},p.id,{timeout:30000});
    await button.click();assert.ok(await page.locator('#photographDialog').isVisible());
    await page.waitForFunction(()=>{const image=document.querySelector('#photographDialog img');return image?.complete&&image.naturalWidth>0;});
    assert.ok((await page.locator('#photographDialog').textContent()).includes(p.credit));
    await page.keyboard.press('Escape');loaded.add(p.id);
   }
  }
  assert.equal(loaded.size,accepted.length);
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:'/tmp/benchauth-real-photographs-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:'/tmp/benchauth-real-photographs-mobile.png',fullPage:true});
  assert.deepEqual(errors,[]);
  console.log('Actual catalogue: '+loaded.size+' accepted gallery entries ('+new Set(accepted.map(p=>p.review.imageSha256||p.image)).size+' distinct inspected files) loaded and enlarged across '+references.size+' explicit reference keys; credits, representative labels and mobile overflow checked. Live authenticated refresh/RLS remains separate.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
