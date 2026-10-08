import * as cloud from './cloud.js?v=mc01';
import {normalize,londonDay,matchingRule,safetyRule,movementResult,finalNote,pace} from './core.js?v=mc01';
const $=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=v=>{try{const u=new URL(v);return ['https:','http:'].includes(u.protocol)?u.href:'';}catch{return '';}};
const link=(url,label)=>safeUrl(url)?'<a target="_blank" rel="noopener" href="'+esc(safeUrl(url))+'">'+esc(label)+'</a>':esc(label);
let intelligence={rules:[],safety:[],serial:{}},samples={},identity=null,rule=null,user=null,member=null,lookupVersion=0;
let inspectionId=crypto.randomUUID(),pending=null,saved=false,noteDirty=false,logs=[],counterfeits=[],entryAction=null,entryId=null,lastDay=londonDay(),daily=null,serialTimer=null;
const inputIds=['brand','reference','serial','movementType','calibre','clasp','overall','comments','issue','outcome','workflow','battery'];
const conditionNames=['Clean','Dirty','Rusted','Damaged','Modified','Aged','External only'];
const componentNames=['Clasp','Bracelet / strap','Case','Crown','Pushers','Crystal','Dial','Hands','Movement'];
function status(text,error=false){$('status').textContent=text;$('status').className=error?'error':'';}
function authStatus(text,error=false){$('authStatus').textContent=text;$('authStatus').className=error?'error':'';}
function requireTeam(){if(!user||!member){$('accountDialog').showModal();throw new Error('Sign in with an approved team account to save shared records.');}}
async function action(button,fn){const was=button.disabled;button.disabled=true;try{await fn();}catch(e){status(e.message,true);}finally{button.disabled=was||saved&&button.id==='complete';}}
function bind(id,fn){$(id).addEventListener('click',()=>action($(id),fn));}
const carePages={
 CARTIER:{name:'Cartier Care',url:'https://cartiercare.cartier.com/en-gb/register/manual'},
 PANERAI:{name:'PAM.Guard',url:'https://services.panerai.com/en/register/manual'},
 IWC:{name:'My IWC',url:'https://myiwc.iwc.com/en/register/manual'},
 JAEGERLECOULTRE:{name:'Jaeger-LeCoultre Care',url:'https://services.jaeger-lecoultre.com/en/register/manual'},
 BREITLING:{name:'Breitling digital passport',url:'https://www.breitling.com/gb-en/service/digital-passport/'},
 VACHERONCONSTANTIN:{name:'Vacheron Constantin warranty & digital passport',url:'https://www.vacheron-constantin.com/gb/en/services/warranty-digital-passport.html'}
};
function updateBrandCare(){
 const care=carePages[normalize($('brand').value)];$('brandCare').hidden=!care;
 if(!care)return;
 $('brandCareTitle').textContent=care.name;$('brandCareLink').href=care.url;
 $('copySerialCare').disabled=!$('serial').value.trim();
 $('brandCareStatus').textContent=$('serial').value.trim()?'Copy and paste the serial into the care page.':'Enter a serial to copy it into the care page.';
}
$('serial').addEventListener('input',updateBrandCare);
$('copySerialCare').addEventListener('click',async()=>{
 const care=carePages[normalize($('brand').value)],serial=$('serial').value.trim();if(!care||!serial)return;
 // Open during the click gesture so popup blockers do not interrupt clipboard copying.
 window.open(care.url,'_blank','noopener,noreferrer');
 try{await navigator.clipboard.writeText(serial);$('brandCareStatus').textContent='Serial copied — paste into '+care.name+' with Ctrl+V.';}
 catch{$('serial').focus();$('serial').select();$('brandCareStatus').textContent='Clipboard unavailable. Press Ctrl+C here, then paste into the care page.';}
});
function syncClaspField(){
 const rolex=normalize($('brand').value)==='ROLEX';
 $('rolexClasp').hidden=!rolex;
 (rolex?$('rolexClasp'):$('claspHome')).appendChild($('claspField'));
 $('claspLabel').textContent=rolex?'Rolex clasp code':'Clasp / bracelet reference';
 $('clasp').placeholder=rolex?'Enter the code stamped inside the clasp':'Optional';
 $('claspHelp').textContent=rolex?'Record the clasp code before finishing or moving to the next watch.':'';
}
function confirmMissingClasp(){
 if(normalize($('brand').value)!=='ROLEX'||$('clasp').value.trim())return true;
 if(confirm('Rolex clasp code has not been entered. Press Cancel to enter it, or OK to continue without a clasp code.'))return true;
 $('clasp').focus();return false;
}
function syncBrandButtons(){updateBrandCare();syncClaspField();document.querySelectorAll('[data-brand-choice]').forEach(b=>b.setAttribute('aria-pressed',String(normalize(b.dataset.brandChoice)===normalize($('brand').value))));}
function identityKey(){return {brand:normalize($('brand').value),reference:normalize($('reference').value)};}
function selectedConditions(){return [...document.querySelectorAll('#conditions input:checked')].map(x=>x.value);}
function collect(){
 const details={movementType:$('movementType').value,calibre:$('calibre').value.trim(),clasp:$('clasp').value.trim(),overall:$('overall').value.trim(),comments:$('comments').value.trim(),issue:$('issue').value.trim(),conditions:selectedConditions(),battery:$('batteryField').hidden?'':$('battery').value,components:Object.fromEntries(componentNames.map((x,i)=>[x,$('component'+i).value]))};
 details.externalOnly=details.conditions.includes('External only');
 return {id:inspectionId,author:user?.id,workflow:$('workflow').value,...identityKey(),serial:$('serial').value.trim(),details,outcome:$('outcome').value,contribution:1};
}
function generate(force=false){if(noteDirty&&!force)return;$('note').value=finalNote(collect());noteDirty=false;}
function autosave(){if(saved)return;try{localStorage.setItem('benchauth.draft',JSON.stringify({inspectionId,values:Object.fromEntries(inputIds.map(x=>[x,$(x).value])),conditions:selectedConditions(),components:componentNames.map((_,i)=>$('component'+i).value),note:$('note').value,noteDirty,pending}));}catch{status('Draft recovery is unavailable in this browser. Save the inspection before closing.',true);}}
function lockBench(lock){document.querySelectorAll('#bench input,#bench select,#bench textarea,#lookup,#regenerate,.sample,[data-brand-choice]').forEach(el=>el.disabled=lock);$('saveTeamNote').disabled=lock;$('queueReference').disabled=lock;$('registerCounterfeit').disabled=lock;}
function reset(){
 if(!confirmMissingClasp())return false;
 if(!saved&&(pending||$('comments').value||$('calibre').value||selectedConditions().length||noteDirty)&&!confirm('Start the next watch and discard this unsaved draft?'))return false;
 inputIds.forEach(id=>$(id).value=id==='workflow'?'authentication':id==='outcome'?'recorded':'');
 document.querySelectorAll('#conditions input').forEach(x=>x.checked=false);componentNames.forEach((_,i)=>$('component'+i).value='');
 identity=null;rule=null;lookupVersion++;inspectionId=crypto.randomUUID();pending=null;saved=false;noteDirty=false;$('note').value='';$('teamNote').value='';$('watchInfo').hidden=true;$('movementCheck').hidden=true;$('batteryField').hidden=true;$('saveState').textContent='Not saved';$('complete').disabled=false;$('complete').textContent='Complete & save inspection';lockBench(false);localStorage.removeItem('benchauth.draft');status('Ready for the next watch.');syncBrandButtons();$('brand').focus();return true;
}
function enforceSafety(){
 const s=safetyRule(intelligence.safety,$('brand').value,$('reference').value,rule?.family||rule?.model||'');
 const external=document.querySelector('#conditions input[value="External only"]');
 if(s){external.checked=true;document.querySelectorAll('#conditions input').forEach(x=>{if(x!==external){x.checked=false;x.disabled=true;}});$('calibre').value='';$('movementType').value='Unknown — Case not opened';$('battery').value='';}
 else if(!pending&&!saved)document.querySelectorAll('#conditions input').forEach(x=>x.disabled=false);
 const only=s||external.checked;
 $('calibre').disabled=!!only||!!pending||saved;
 if(only){document.querySelectorAll('#conditions input').forEach(x=>{if(x!==external){x.checked=false;x.disabled=true;}});$('calibre').value='';$('movementType').value='Unknown — Case not opened';}
 $('movementType').disabled=!!s||!!pending||saved;
 $('batteryField').hidden=!!only||!(/quartz|kinetic|electronic|electro-mechanical/i.test($('movementType').value));
 if($('batteryField').hidden)$('battery').value='';
 return s;
}
function serialGuidance(){
 const b=normalize($('brand').value),serial=normalize($('serial').value),data=intelligence.serial;
 const lines=[];
 if(!serial)lines.push('Enter a serial only when useful. No date is inferred from an empty field.');
 else {
  if(data.KNOWN_FAKE_SERIAL_INTELLIGENCE?.[serial])lines.push('ALERT: this serial appears in the imported known-fake serial intelligence. Recheck the identifier and corroborating physical evidence; a reused serial alone is not a verdict.');
  if(b==='ROLEX'){
   const replicaMatches=(data.REP_DATABASE||[]).filter(x=>(x.patterns||[]).some(p=>new RegExp('^'+p.split('*').map(part=>part.replace(/[.*+?^\$()|[\]{}]/g,'\\$&')).join('[A-Z0-9]')+'$').test(serial))||((x.clasps||[]).includes(normalize($('clasp').value))));
   if(replicaMatches.length)lines.push('ALERT: identifier matches an imported replica serial pattern or clasp indicator. Corroborate against the watch in hand.');
   if(/^[A-Z0-9]{8}$/.test(serial))lines.push('An eight-character serial can be from the random-serial era. Do not assign a production year from it.');
   else if(/^[A-Z]\d{6}$/.test(serial)&&data.ROLEX_PREFIX_YEARS?.[serial[0]])lines.push('Historical prefix guidance: '+data.ROLEX_PREFIX_YEARS[serial[0]]+'. Approximate production guidance only; confirm the reference period.');
   else lines.push('No supported production date is inferred from this serial.');
  } else lines.push('No automatic production-date estimate is assigned here. Use the sourced reference production period where available.');
 }
 $('serialGuidance').innerHTML=lines.map(x=>'<p>'+esc(x)+'</p>').join('');
 return lines.filter(x=>x.startsWith('ALERT:'));
}
function renderInfo(){
 const s=enforceSafety(),sample=samples[normalize($('brand').value)+'|'+normalize($('reference').value)];
 $('watchInfo').hidden=false;$('model').textContent=rule?.family||rule?.model||sample?.model||'Reference not mapped';
 $('mapping').textContent=rule?(rule.collectionOnly||rule.manualReview?'FAMILY / MANUAL REVIEW':'REFERENCE GUIDANCE'):'NO RESEARCHED MAPPING';
 $('sourceBadge').textContent=rule?.benchStatus==='verified'?'VERIFIED DATA':rule?'IMPORTED RESEARCH':'RESEARCH AVAILABLE ON REQUEST';
 $('safety').className='notice'+(s?' stop':'');
 $('safety').innerHTML=s?'<strong>'+esc(s.action)+'</strong>'+esc(s.reason):'<strong>No special opening restriction found in the loaded rules</strong>This is not clearance to open. Confirm the watch construction and apply your normal bench procedure.';
 const facts=rule?[['Movement',rule.calibreDisplay||(rule.calibre||[]).join(' / ')],['Case / size',rule.caseDetails||rule.size],['Technology',rule.technology||rule.feature],['Production period',rule.production||rule.periodNote],['Power reserve',rule.reserve],['Functions',rule.functions]].filter(x=>x[1]):[];
 $('facts').innerHTML=facts.map(([k,v])=>'<div class="fact"><small>'+esc(k)+'</small><strong>'+esc(v)+'</strong></div>').join('');
 $('mappingNotes').textContent=rule?[rule.lookupScope,rule.notes].filter(Boolean).join(' · '):'No reference-specific intelligence is loaded. No extra inspection fields are required.';
 $('provenance').innerHTML=rule?'<p>'+esc(rule.source||'Imported WatchAuthPro mapping')+'</p><p>'+link(rule.sourceUrl,'Open original source')+'</p><p class="muted">'+esc(rule.confidence||'Original confidence not specified')+' · '+esc(rule.benchStatus==='verified'?'Reviewed in shared reference database':'Imported from existing WatchAuthPro research; not newly verified')+'</p>':'No source attached to an exact reference record.';
 $('calibreOptions').innerHTML=(rule?.calibre||[]).map(x=>'<option value="'+esc(x)+'"></option>').join('');
 const visuals=sample?.visuals||[];$('images').hidden=false;$('visuals').innerHTML=visuals.filter(x=>!s||x.type!=='MOVEMENT').map(x=>'<article><img loading="lazy" src="'+esc(safeUrl(x.image))+'" alt="'+esc(x.title)+'"><h3>'+esc(x.title)+'</h3><p class="muted">'+esc(x.caption)+'</p>'+link(x.image,'Enlarge photograph')+' · '+link(x.source,'Source')+'</article>').join('')||'<p class="muted">No sourced photograph is attached to this reference yet.</p>';
 $('visuals').querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{const p=document.createElement('p');p.className='notice';p.textContent='Photograph unavailable from the source host. Use the source link.';img.replaceWith(p);}));
 const warnings=serialGuidance();$('alerts').innerHTML=warnings.map(x=>'<div class="notice stop">'+esc(x)+'</div>').join('');
 compare();generate();
}
function compare(){const result=movementResult(rule,$('calibre').value);$('movementCheck').hidden=!result;if(result){$('movementCheck').className='notice '+result.level;$('movementCheck').textContent=result.text;}}
async function lookup(){
 const b=$('brand').value.trim(),r=$('reference').value.trim();if(!b||!r)throw new Error('Enter a brand and case reference or model.');
 identity=identityKey();const version=++lookupVersion;rule=matchingRule(intelligence.rules,b,r);renderInfo();$('teamNotes').textContent=user&&member?'Loading team knowledge…':'Sign in to view and add shared team knowledge.';
 if(user&&member){
  const query=new URLSearchParams({brand:'eq.'+identity.brand,reference:'eq.'+identity.reference,order:'created_at.desc'});
  const [notes,concerns]=await Promise.allSettled([cloud.select('bench_notes',query.toString()),cloud.select('counterfeit_register',new URLSearchParams({brand:'eq.'+identity.brand,or:'(reference.eq.'+identity.reference+($('serial').value?',serial.eq.'+normalize($('serial').value):'')+')',order:'created_at.desc'}).toString())]);
  if(version!==lookupVersion)return;
  $('teamNotes').innerHTML=notes.status==='fulfilled'?(notes.value.length?notes.value.map(x=>'<div class="row"><span class="pill">TEAM NOTE · UNVERIFIED</span><p>'+esc(x.note)+'</p><small>'+esc(new Date(x.created_at).toLocaleString('en-GB'))+'</small></div>').join(''):'<p class="muted">No shared observations recorded for this reference yet.</p>'):'<p class="notice">Team notes could not be loaded. '+esc(notes.reason.message)+'</p>';
  if(concerns.status==='fulfilled')$('alerts').innerHTML+=concerns.value.filter(x=>x.status!=='rejected').map(x=>'<div class="notice stop"><strong>Counterfeit-register concern · '+esc(x.status)+'</strong>'+esc(x.indicators)+'</div>').join('');
  else status('Reference shown, but counterfeit register could not be checked: '+concerns.reason.message,true);
 }
 autosave();
}
async function connect(){
 user=null;member=null;if(cloud.getSession()){
  user=await cloud.user();const membership=await cloud.select('team_members');member=membership[0]||null;
 }
 $('accountButton').textContent=user?'Account':'Team sign in';$('accountState').textContent=user?(member?'Signed in as '+user.email:'Account signed in, but team access has not been granted.'):'Sign in to share knowledge and save inspections.';
 $('authFields').hidden=!!user;$('signedInFields').hidden=!user;$('adminFields').hidden=member?.role!=='admin';$('reviewReference').hidden=member?.role!=='admin';
 if(member){await loadSharedRules();await updatePerformance();if(identity)await lookup();}
 else{$('progressTitle').textContent='Sign in for your daily total';$('progressMeta').textContent='Saved inspections and RMAs count together';$('progress').value=0;$('pace').textContent='';}
}
async function loadSharedRules(){
 let rows=[];for(let offset=0;;offset+=500){const batch=await cloud.select('reference_facts','select=data,status,source,verified_at&order=id&limit=500&offset='+offset);rows.push(...batch);if(batch.length<500)break;}
 if(rows.length)intelligence.rules=rows.map(x=>({...x.data,benchStatus:x.status,benchSource:x.source,benchVerifiedAt:x.verified_at})).sort((a,b)=>(a.benchStatus==='verified'?-1:0)-(b.benchStatus==='verified'?-1:0)||(a.importOrder||0)-(b.importOrder||0));renderReferences();
}
async function updatePerformance(){
 requireTeam();lastDay=londonDay();daily=await cloud.rpc('daily_metrics',{day:lastDay});
 $('progressTitle').textContent=daily.completed+' / '+daily.target+' completed';const percent=Math.max(0,Math.round(daily.completed/daily.target*100));
 $('progressMeta').textContent=percent+'% · '+Math.max(0,daily.target-daily.completed)+' remaining · '+daily.rmas+' RMAs';
 $('progress').value=Math.min(100,percent);$('pace').textContent=pace(daily.completed,daily.target);
 $('performanceDetail').innerHTML='<div class="metric-grid">'+[['Completed',daily.completed],['Target',daily.target],['RMAs',daily.rmas],['Remaining',Math.max(0,daily.target-daily.completed)]].map(([k,v])=>'<div><strong>'+v+'</strong><span>'+k+'</span></div>').join('')+'</div>';
 const rows=await cloud.select('inspections',new URLSearchParams({author:'eq.'+user.id,work_date:'eq.'+lastDay,order:'created_at.desc',limit:'1000'}).toString());$('todayRows').innerHTML=rows.map(x=>'<div class="row">'+esc(x.workflow)+' · '+esc(x.reference||x.note)+' <b>'+esc(x.contribution>0?'+'+x.contribution:x.contribution)+'</b></div>').join('')||'<p class="muted">No completed work recorded today.</p>';
}
async function complete(){
 requireTeam();if(saved)return;if(!pending){
  if(!confirmMissingClasp())return;
  enforceSafety();const record=collect();if(!record.brand||!record.reference)throw new Error('Enter the watch brand and reference before completing an inspection. For an unrecorded RMA use + RMA.');
  generate();pending={...record,note:$('note').value};lockBench(true);autosave();
 }
 try{await cloud.insert('inspections',pending,{query:'on_conflict=id',prefer:'resolution=ignore-duplicates,return=representation'});const check=await cloud.select('inspections','id=eq.'+pending.id);if(!check.length)throw new Error('Save could not be confirmed. Retry this same inspection.');}
 catch(e){$('complete').textContent='Retry saving this inspection';$('saveState').textContent='Not confirmed — draft retained';throw e;}
 saved=true;pending=null;$('saveState').textContent='Saved to shared inspection log';$('complete').disabled=true;$('complete').textContent='Inspection saved';localStorage.removeItem('benchauth.draft');status('Inspection saved once. Choose Next watch when ready.');
 try{await updatePerformance();}catch(e){status('Inspection saved, but the progress refresh failed. Use Performance → Refresh.',true);}
}
function showEntry(title,help,fn,initial='',evidence=false){requireTeam();entryAction=fn;entryId=crypto.randomUUID();$('entryTitle').textContent=title;$('entryHelp').textContent=help;$('entryValue').value=initial;$('entryEvidence').value='';$('entryEvidenceLabel').hidden=!evidence;$('entryStatus').textContent='';$('entryDialog').showModal();}
function renderReferences(){
 const q=normalize($('referenceSearch').value);const filtered=intelligence.rules.filter(x=>!q||normalize([x.brand,x.family,x.model,x.baseReference,(x.refs||[]).join(' '),x.calibreDisplay,(x.calibre||[]).join(' ')].join(' ')).includes(q));
 $('referenceRows').innerHTML='<p class="muted">'+filtered.length+' reference rules · showing first 60 matches</p>'+filtered.slice(0,60).map(x=>'<article class="row"><div class="heading"><strong>'+esc(x.brand)+' · '+esc(x.family||x.model||'Reference guidance')+'</strong><span class="pill">'+esc(x.benchStatus==='verified'?'VERIFIED':'IMPORTED')+'</span></div><p>'+esc(x.baseReference||(x.refs||[]).join(' / ')||x.pattern?.source||'')+'</p><p>'+esc(x.calibreDisplay||(x.calibre||[]).join(' / '))+' · '+esc(x.production||'')+'</p><details><summary>Bench detail and source</summary><p>'+esc(x.notes||x.periodNote||'')+'</p><p>'+esc(x.source||'WatchAuthPro research')+'</p>'+link(x.sourceUrl,'Source')+'</details></article>').join('');
}
function renderLogs(){
 const q=normalize($('logSearch').value);$('inspectionRows').innerHTML=logs.filter(x=>!q||normalize([x.brand,x.reference,x.serial,x.note].join(' ')).includes(q)).map(x=>'<article class="row"><div class="heading"><strong>'+esc(x.brand||x.workflow)+' · '+esc(x.reference||'')+'</strong><span class="pill">'+esc(x.workflow)+' · '+esc(x.work_date)+'</span></div><p>'+esc(x.serial||'')+' · '+esc(x.outcome)+' · '+esc(new Date(x.created_at).toLocaleString('en-GB'))+'</p><details><summary>Saved note and verification details</summary><pre>'+esc(x.note)+'</pre><p>'+esc(JSON.stringify(x.details,null,2))+'</p></details></article>').join('')||'<p class="muted">No matching saved inspections in the loaded history.</p>';
}
function renderCounterfeits(){
 const q=normalize($('counterfeitSearch').value);$('counterfeitRows').innerHTML=counterfeits.filter(x=>!q||normalize([x.brand,x.reference,x.serial,x.indicators].join(' ')).includes(q)).map(x=>'<article class="row"><div class="heading"><strong>'+esc(x.brand)+' · '+esc(x.reference)+'</strong><span class="pill">'+esc(x.status)+'</span></div><p>'+esc(x.serial||'')+'</p><p>'+esc(x.indicators)+'</p>'+link(x.evidence_url,'Evidence/source')+'<p>'+esc(new Date(x.created_at).toLocaleString('en-GB'))+'</p></article>').join('')||'<p class="muted">No matching register entries.</p>';
}
async function allRows(table){let rows=[];for(let offset=0;;offset+=500){const batch=await cloud.select(table,'order=created_at.desc,id&limit=500&offset='+offset);rows.push(...batch);if(batch.length<500)break;}return rows;}
async function refreshTab(tab,more=false){
 if(tab==='references'){renderReferences();return;}if(tab==='bench')return;requireTeam();
 if(tab==='performance'){await updatePerformance();return;}
 if(tab==='inspections'){if(!more)logs=[];const batch=await cloud.select('inspections','order=created_at.desc,id&limit=100&offset='+logs.length);logs.push(...batch);$('moreInspections').hidden=batch.length<100;renderLogs();}
 if(tab==='research'){const rows=await allRows('research_queue');$('researchRows').innerHTML=rows.map(x=>'<article class="row"><div class="heading"><strong>'+esc(x.brand)+' · '+esc(x.reference)+'</strong><span class="pill">'+esc(x.status)+'</span></div><p>'+esc(x.question)+'</p><small>'+esc(new Date(x.created_at).toLocaleString('en-GB'))+'</small>'+(member.role==='admin'?'<div class="actions"><button class="secondary" data-review-table="research_queue" data-id="'+x.id+'" data-value="researching">Researching</button><button class="secondary" data-review-table="research_queue" data-id="'+x.id+'" data-value="resolved">Mark resolved</button></div>':'')+'</article>').join('')||'<p class="muted">No reference research requests yet.</p>';}
 if(tab==='counterfeit'){counterfeits=await allRows('counterfeit_register');renderCounterfeits();if(member.role==='admin')$('counterfeitRows').querySelectorAll('article').forEach((el,i)=>{const x=counterfeits.filter(x=>!normalize($('counterfeitSearch').value)||normalize([x.brand,x.reference,x.serial,x.indicators].join(' ')).includes(normalize($('counterfeitSearch').value)))[i];const div=document.createElement('div');div.className='actions';div.innerHTML='<button class="secondary" data-review-table="counterfeit_register" data-id="'+x.id+'" data-value="reviewed">Mark reviewed</button><button class="secondary" data-review-table="counterfeit_register" data-id="'+x.id+'" data-value="rejected">Reject concern</button>';el.append(div);});}
}
function downloadCsv(rows){const keys=['id','work_date','workflow','brand','reference','serial','outcome','note'];const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';const text=[keys,...rows.map(r=>keys.map(k=>r[k]))].map(r=>r.map(cell).join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([text],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='benchauth-inspections-'+londonDay()+'.csv';a.click();URL.revokeObjectURL(url);}

const reviewButton=document.createElement('button');reviewButton.id='reviewReference';reviewButton.className='secondary';reviewButton.textContent='Add reviewed mapping';reviewButton.hidden=true;$('references').querySelector('.panel').prepend(reviewButton);
$('conditions').innerHTML=conditionNames.map((name,i)=>'<label><input type="checkbox" value="'+esc(name)+'">'+esc(name)+' <small>MC'+(i+1)+'</small></label>').join('');
$('componentChecks').innerHTML=componentNames.map((x,i)=>'<label>'+esc(x)+'<select id="component'+i+'"><option value="">Not recorded</option><option>Checked</option><option>Concern</option><option>Not applicable</option></select></label>').join('');
$('brand').addEventListener('input',syncBrandButtons);
$('identifyPanel').addEventListener('click',e=>{const b=e.target.closest('[data-brand-choice]');if(!b||pending||saved)return;$('brand').value=b.dataset.brandChoice;$('brand').dispatchEvent(new Event('input',{bubbles:true}));$('reference').focus();});
inputIds.forEach(id=>$(id).addEventListener('input',()=>{if(pending||saved)return;if(['brand','reference'].includes(id)){identity=null;rule=null;lookupVersion++;$('watchInfo').hidden=true;$('teamNotes').textContent='';}const s=enforceSafety();if(s&&$('watchInfo').hidden)renderInfo();compare();if(!noteDirty)generate();autosave();if(['serial','clasp'].includes(id)&&identity){clearTimeout(serialTimer);serialTimer=setTimeout(()=>lookup().catch(e=>status(e.message,true)),400);}}));
document.querySelectorAll('#conditions input').forEach(x=>x.addEventListener('change',()=>{enforceSafety();compare();generate();autosave();}));
document.querySelectorAll('#componentChecks select').forEach(x=>x.addEventListener('change',autosave));
$('note').addEventListener('input',()=>{noteDirty=true;autosave();});
bind('lookup',lookup);$('reference').addEventListener('keydown',e=>{if(e.key==='Enter')action($('lookup'),lookup);});
document.querySelectorAll('.sample').forEach(b=>b.addEventListener('click',()=>action(b,async()=>{if(!reset())return;$('brand').value=b.dataset.brand;$('reference').value=b.dataset.ref;syncBrandButtons();await lookup();})));
bind('newWatch',()=>{if(reset()){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});$('brand').focus({preventScroll:true});}});bind('regenerate',()=>{generate(true);autosave();});bind('complete',complete);
bind('copyNote',async()=>{generate();try{await navigator.clipboard.writeText($('note').value);status('Note copied.');}catch{$('note').focus();$('note').select();status('Select the note and press Ctrl+C.',true);}});
bind('saveTeamNote',async()=>{requireTeam();if(!identity)throw new Error('Load the current reference first.');const note=$('teamNote').value.trim();if(!note)throw new Error('Enter one useful observation.');const key=JSON.stringify({...identity,note});let cached;try{cached=JSON.parse(localStorage.getItem('benchauth.pending-note'));}catch{}const id=cached?.key===key?cached.id:crypto.randomUUID();localStorage.setItem('benchauth.pending-note',JSON.stringify({key,id}));await cloud.insert('bench_notes',{id,...identity,note,author:user.id},{query:'on_conflict=id',prefer:'resolution=ignore-duplicates,return=representation'});localStorage.removeItem('benchauth.pending-note');$('teamNote').value='';await lookup();status('Observation saved for the team, labelled unverified.');});
bind('queueReference',()=>{if(!identity)throw new Error('Load the current reference first.');showEntry('Research this reference','Describe what is missing or needs checking.',async(text)=>{await cloud.insert('research_queue',{...identity,question:text,author:user.id},{query:'on_conflict=brand,reference',prefer:'resolution=ignore-duplicates,return=representation'});status('Reference is in the shared research queue.');},'Missing or uncertain reference / movement information.');});
bind('registerCounterfeit',()=>{if(!identity)throw new Error('Load the current reference first.');showEntry('Record a counterfeit concern','Record the physical indicators. This remains an unreviewed team observation.',async(text,evidence)=>{await cloud.insert('counterfeit_register',{id:entryId,...identity,serial:normalize($('serial').value),indicators:text,evidence_url:evidence||null,author:user.id},{query:'on_conflict=id',prefer:'resolution=ignore-duplicates,return=representation'});await lookup();status('Concern saved to the shared register as unreviewed.');},$('issue').value,true);});
bind('addRma',()=>showEntry('Add completed RMA','This adds one RMA to your saved work records and the same daily progress total.',async(text)=>{await cloud.insert('inspections',{id:entryId,author:user.id,workflow:'rma',note:text,contribution:1},{query:'on_conflict=id',prefer:'resolution=ignore-duplicates,return=representation'});await updatePerformance();status('RMA saved; daily progress updated.');},'RMA completed.'));
bind('targetButton',()=>showEntry('Daily target','Enter a target between 1 and 500 for today.',async(text)=>{const target=Number(text);if(!Number.isInteger(target)||target<1||target>500)throw new Error('Enter a whole number from 1 to 500.');await cloud.insert('daily_targets',{author:user.id,work_date:londonDay(),target},{query:'on_conflict=author,work_date',prefer:'resolution=merge-duplicates,return=representation'});await updatePerformance();status('Daily target updated.');},String(daily?.target||50)));
bind('correction',()=>showEntry('Correct today’s count','Enter a signed number and a reason, for example: -1 | RMA counted twice. The correction is retained in the work log.',async(text)=>{const m=text.match(/^([+-]?\d+)\s*\|\s*(.+)$/s);if(!m||!Number(m[1])||Math.abs(Number(m[1]))>50)throw new Error('Use a signed count from -50 to +50 followed by | and a reason.');await cloud.insert('inspections',{id:entryId,author:user.id,workflow:'correction',note:m[2].trim(),contribution:Number(m[1])},{query:'on_conflict=id',prefer:'resolution=ignore-duplicates,return=representation'});await updatePerformance();status('Count correction saved with its reason.');}));
bind('performanceRefresh',updatePerformance);bind('moreInspections',()=>refreshTab('inspections',true));bind('exportLogs',()=>{requireTeam();downloadCsv(logs);status('Loaded inspection history exported.');});
for(const [id,fn] of [['referenceSearch',renderReferences],['logSearch',renderLogs],['counterfeitSearch',renderCounterfeits]])$(id).addEventListener('input',fn);
document.querySelectorAll('[data-refresh]').forEach(b=>b.addEventListener('click',()=>action(b,()=>refreshTab(b.dataset.refresh))));
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>action(b,async()=>{$('workspaceSelect').value=b.dataset.tab;document.querySelectorAll('.tab').forEach(t=>t.hidden=t.id!==b.dataset.tab);document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));await refreshTab(b.dataset.tab);})));
$('workspaceSelect').addEventListener('change',()=>document.querySelector('[data-tab="'+$('workspaceSelect').value+'"]').click());
$('accountButton').addEventListener('click',()=>{authStatus('');$('accountDialog').showModal();});$('closeAccount').addEventListener('click',()=>{$('accountDialog').close();$('password').value='';});
$('authForm').addEventListener('submit',async e=>{e.preventDefault();await action(e.submitter,async()=>{try{await cloud.signIn($('email').value.trim(),$('password').value);$('password').value='';await connect();authStatus(member?'Signed in.':'Your account needs team access from an administrator.',!member);if(member){status('');$('accountDialog').close();}}catch(e){authStatus(e.message,true);}});});
bind('signup',async()=>{try{if(!$('email').checkValidity()||!$('password').checkValidity())throw new Error('Enter a valid email and a password of at least eight characters.');const result=await cloud.signUp($('email').value.trim(),$('password').value);$('password').value='';if(result.access_token){cloud.setSession({...result,expires_at:Date.now()/1000+result.expires_in});await connect();}authStatus('Account request submitted. Confirm the email, then sign in. If its link redirects to localhost, paste the original confirmation link in the section below.');}catch(e){authStatus(e.message,true);}});
bind('confirmAccount',async()=>{try{await cloud.confirmLink($('confirmLink').value);$('confirmLink').value='';await connect();authStatus('Email confirmed.');if(member){status('');$('accountDialog').close();}}catch(e){authStatus(e.message,true);}});
bind('signout',async()=>{await cloud.signOut();logs=[];counterfeits=[];['inspectionRows','counterfeitRows','researchRows','teamNotes','todayRows','performanceDetail'].forEach(id=>$(id).replaceChildren());await connect();status('Signed out.');});
bind('addMember',async()=>{try{const email=$('memberEmail').value.trim().toLowerCase();if(!email||!$('memberEmail').checkValidity())throw new Error('Enter a valid account email.');await cloud.insert('team_members',{email,role:'member'});$('memberEmail').value='';authStatus('Team access granted. They can create their own account here.');}catch(e){authStatus(e.message,true);}});
$('entryCancel').addEventListener('click',()=>$('entryDialog').close());
$('entryForm').addEventListener('submit',async e=>{e.preventDefault();const btn=e.submitter;btn.disabled=true;try{const text=$('entryValue').value.trim();if(!text)throw new Error('Enter the requested information.');await entryAction(text,$('entryEvidence').value.trim());$('entryDialog').close();}catch(e){$('entryStatus').textContent=e.message;}finally{btn.disabled=false;}});
window.addEventListener('beforeunload',()=>autosave());
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&member)updatePerformance().catch(e=>status(e.message,true));});
setInterval(()=>{if(member){if(lastDay!==londonDay())updatePerformance().catch(e=>status(e.message,true));else if(daily)$('pace').textContent=pace(daily.completed,daily.target);}},60000);
async function init(){
 try{const [data,pictures,types]=await Promise.all([fetch('intelligence.json?v=mc01').then(r=>{if(!r.ok)throw new Error('Reference database unavailable.');return r.json();}),fetch('samples.json?v=mc01').then(r=>r.json()),fetch('movement-types.json?v=mc01').then(r=>r.json())]);intelligence=data;samples=pictures;types.forEach(x=>{const opt=document.createElement('option');opt.value=x;opt.textContent=x;$('movementType').appendChild(opt);});
 const brands=[...new Set(intelligence.rules.map(r=>r.brand).concat(intelligence.safety.map(r=>r.brand)))].sort();$('otherBrandButtons').innerHTML=brands.filter(x=>!['TUDOR','ROLEX','OMEGA','BREITLING','CARTIER','TAGHEUER'].includes(normalize(x))).map(x=>'<button type="button" data-brand-choice="'+esc(x)+'" aria-pressed="false">'+esc(x)+'</button>').join('');renderReferences();
 let draft;try{draft=JSON.parse(localStorage.getItem('benchauth.draft'));}catch{}
 if(draft){inspectionId=draft.inspectionId||inspectionId;for(const [k,v]of Object.entries(draft.values||{}))if($(k))$(k).value=v;document.querySelectorAll('#conditions input').forEach(x=>x.checked=draft.conditions?.includes(x.value));(draft.components||[]).forEach((v,i)=>$('component'+i).value=v);$('note').value=draft.note||'';noteDirty=!!draft.noteDirty;pending=draft.pending||null;enforceSafety();if(pending){lockBench(true);$('complete').textContent='Retry saving this inspection';}status('Previous unsaved inspection draft restored.');}
 syncBrandButtons();cloud.callback();await connect();if($('brand').value&&$('reference').value)await lookup();
 }catch(e){status(e.message,true);}
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-review-table]');if(b)action(b,async()=>{requireTeam();await cloud.update(b.dataset.reviewTable,b.dataset.id,{status:b.dataset.value});await refreshTab(b.dataset.reviewTable==='research_queue'?'research':'counterfeit');status('Review status saved.');});});
bind('reviewReference',()=>{requireTeam();$('reviewBrand').value=$('brand').value;$('reviewRef').value=$('reference').value;$('reviewStatus').textContent='';$('reviewDialog').showModal();});
$('reviewCancel').addEventListener('click',()=>$('reviewDialog').close());
$('reviewForm').addEventListener('submit',async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{requireTeam();if(member.role!=='admin')throw new Error('Reviewer access required.');const brand=$('reviewBrand').value.trim(),reference=normalize($('reviewRef').value),calibre=$('reviewCalibres').value.split(',').map(x=>x.trim()).filter(Boolean);const data={brand,refs:[reference],family:$('reviewModel').value.trim(),calibre,calibreDisplay:calibre.join(' / '),production:$('reviewPeriod').value.trim(),notes:$('reviewNotes').value.trim(),source:$('reviewSource').value.trim(),sourceUrl:$('reviewUrl').value,confidence:'Reviewed source-backed mapping',reviewer:user.id};await cloud.insert('reference_facts',{brand:normalize(brand),reference,data,status:'verified',source:data.source,verified_at:new Date().toISOString()},{query:'on_conflict=brand,reference',prefer:'resolution=merge-duplicates,return=representation'});await loadSharedRules();if(identity)await lookup();$('reviewDialog').close();status('Reviewed reference intelligence saved for the team.');}catch(e){$('reviewStatus').textContent=e.message;}finally{b.disabled=false;}});
await init();
