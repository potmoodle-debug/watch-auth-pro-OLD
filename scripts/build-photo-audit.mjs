import fs from 'node:fs';
import {normalize} from '../core.js';
import {matchingPhotographs,photographMatch,photoCategories,verifiedPhotograph} from '../photographs.js';

const root=new URL('../',import.meta.url);
const read=name=>JSON.parse(fs.readFileSync(new URL(name,root)));
const base=read('intelligence.json'),updates=read('research-updates-20261008.json');
const photos=read('photographs.json').photographs;
const reviews=read('photograph-reviews.json');
const sharedSummary=read('shared-inventory-counts.json');
function csvRows(text){
 const rows=[];let row=[],cell='',quote=false;
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(c==='"'){if(quote&&text[i+1]==='"'){cell+='"';i++;}else quote=!quote;}
  else if(c===','&&!quote){row.push(cell);cell='';}
  else if(c==='\n'&&!quote){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell='';}
  else cell+=c;
 }
 if(cell||row.length){row.push(cell);rows.push(row);}
 const keys=rows.shift();return rows.map(r=>Object.fromEntries(keys.map((k,i)=>[k,r[i]])));
}
const prior=csvRows(fs.readFileSync(new URL('reference-research-audit.csv',root),'utf8'));
const sourceRecords=base.rules.concat(updates).map((r,i)=>({id:i<base.rules.length?'RULE:'+String(i).padStart(4,'0'):'UPDATE:'+normalize(r.brand)+'|'+normalize(r.baseReference||(r.refs||[])[0]),brand:r.brand,key:r.baseReference||(r.refs||[]).join(' / ')||r.pattern?.source,scope:r.pattern&&!r.baseReference&&!r.refs?'pattern requires enumeration':'reference rule',status:'unreviewed for photographs'}));
sourceRecords.push(...prior.filter(r=>r.scope==='catalogue variant').map(r=>({id:r.id,brand:r.brand,key:r.key,scope:r.scope,status:'unreviewed for photographs'})));
const entries=new Map();
function add(brand,reference,origin,source=''){
 if(!reference)return;
 const b=normalize(brand),n=normalize(reference),key=b+'|'+n;
 if(!entries.has(key))entries.set(key,{brand,reference,aliases:[],origins:[],sources:[]});
 const row=entries.get(key);
 if(!row.aliases.includes(reference))row.aliases.push(reference);
 if(!row.origins.includes(origin))row.origins.push(origin);
 if(source&&!row.sources.includes(source))row.sources.push(source);
}
// Enumerate stored literal identifiers, not guesses expanded from regex ranges.
for(const [label,rules] of [['rules',base.rules],['research updates',updates]]){
 for(const r of rules){
  for(const ref of r.refs||[])add(r.brand,ref,label,r.sourceUrl);
  if(r.baseReference&&/\d/.test(r.baseReference)&&!/[\^$*+?|(){}\[\]\\]/.test(r.baseReference))add(r.brand,r.baseReference,label,r.sourceUrl);
 }
}
for(const r of prior.filter(r=>r.scope==='catalogue variant'))add(r.brand,r.key,'imported catalogue',r.source);
const categories=photoCategories.filter(([k])=>k!=='detail').map(([k])=>k);
const validReview=r=>!!r?.reviewedAt&&!!r?.evidence;
for(const record of sourceRecords){
 const review=reviews.sourceRecordReviews.find(r=>r.id===record.id&&validReview(r));
 if(review)record.status='reviewed for photographs';
}
const priority=['TUDOR','ROLEX','BREITLING','CARTIER','OMEGA','PANERAI'];
const inventory=[...entries.values()].sort((a,b)=>(priority.indexOf(normalize(a.brand))+1||99)-(priority.indexOf(normalize(b.brand))+1||99)||a.brand.localeCompare(b.brand)||a.reference.localeCompare(b.reference));
for(const row of inventory){
 const verified=matchingPhotographs(photos,row.brand,row.reference);
 const review=reviews.identifierReviews.find(r=>normalize(r.brand)===normalize(row.brand)&&normalize(r.reference)===normalize(row.reference));
 row.reviewStatus=categories.every(c=>validReview(review?.categories?.[c]))?'reviewed':'unreviewed';
 row.categories=Object.fromEntries(categories.map(c=>{
  const found=verified.filter(p=>p.category===c);
  const candidates=photos.filter(p=>p.category===c&&p.review.status!=='rejected'&&photographMatch(p,row.brand,row.reference));
  const categoryReview=review?.categories?.[c];
  return [c,{status:found.length?'verified':validReview(categoryReview)?'reviewed gap — '+categoryReview.finding:candidates.length?'awaiting visual/source inspection':'unresolved — no verified source',photographIds:found.map(p=>p.id),candidateIds:candidates.map(p=>p.id),...(validReview(categoryReview)?{review:categoryReview}:{})}];
 }));
}
const byBrand={};
for(const row of inventory){
 const b=normalize(row.brand);byBrand[b]??={storedIdentifierKeys:0,unreviewed:0,verifiedByCategory:Object.fromEntries(categories.map(c=>[c,0]))};
 byBrand[b].storedIdentifierKeys++;byBrand[b].unreviewed+=row.reviewStatus==='unreviewed'?1:0;
 for(const c of categories)byBrand[b].verifiedByCategory[c]+=row.categories[c].status==='verified'?1:0;
}
const counts={repositoryRuleRecords:base.rules.length,repositoryResearchUpdates:updates.length,sourceRuleRecords:base.rules.length+updates.length,sharedReferenceFactRows:sharedSummary.referenceFactRows,sharedVerifiedTextRows:sharedSummary.verifiedTextRows,importedCatalogueVariantRecords:sourceRecords.length-base.rules.length-updates.length,sourceInventoryRecords:sourceRecords.length,storedIdentifierKeys:inventory.length,sourceRecordsUnreviewed:sourceRecords.filter(r=>r.status==='unreviewed for photographs').length,identifierKeysUnreviewed:inventory.filter(r=>r.reviewStatus==='unreviewed').length,identifierKeysReviewed:inventory.filter(r=>r.reviewStatus==='reviewed').length,sourceRecordsReviewed:sourceRecords.filter(r=>r.status==='reviewed for photographs').length,reviewedIdentifierCategoryPairs:inventory.reduce((n,r)=>n+categories.filter(c=>!!r.categories[c].review).length,0),catalogueAssets:photos.length,legacyAssets:photos.filter(p=>p.id.startsWith('legacy-')).length,verifiedAssets:photos.filter(verifiedPhotograph).length,verifiedImageUrls:new Set(photos.filter(verifiedPhotograph).map(p=>p.image)).size,verifiedImageFiles:new Set(photos.filter(verifiedPhotograph).map(p=>p.review.imageSha256||p.image)).size,pendingAssets:photos.filter(p=>p.review.status==='pending').length,rejectedAssets:photos.filter(p=>p.review.status==='rejected').length,verifiedIdentifierKeysByCategory:Object.fromEntries(categories.map(c=>[c,inventory.filter(r=>r.categories[c].status==='verified').length])),byBrand};
const result={version:1,completion:'IN PROGRESS — photograph inventory has not been fully reviewed',counting:'Stored identifier keys deduplicate punctuation/case only; documented M-prefixed aliases and base/catalogue identifiers remain separate lookup keys. Patterns are source records, never claimed as enumerated exact references. Textual model research is not photograph verification. verifiedAssets counts category/gallery entries; verifiedImageUrls counts distinct stored URLs; verifiedImageFiles deduplicates inspected file hashes (falling back to URL when unavailable).',counts,sourceRecords,inventory};
// One line per inventory entry keeps the generated audit diff reviewable.
const header={...result};delete header.sourceRecords;delete header.inventory;
const json=JSON.stringify(header,null,2).slice(0,-2)+',\n  "sourceRecords": [\n'+sourceRecords.map(r=>'    '+JSON.stringify(r)).join(',\n')+'\n  ],\n  "inventory": [\n'+inventory.map(r=>'    '+JSON.stringify(r)).join(',\n')+'\n  ]\n}\n';
fs.writeFileSync(new URL('photograph-coverage.json',root),json);
const fields=['brand','reference','reviewStatus',...categories,'sources','origins'];
const cell=v=>'"'+String(v??'').replaceAll('"','""')+'"';
const lines=[fields,...inventory.map(r=>[r.brand,r.reference,r.reviewStatus,...categories.map(c=>r.categories[c].status),r.sources.join(' | '),r.origins.join(' | ')])];
fs.writeFileSync(new URL('photograph-coverage.csv',root),lines.map(r=>r.map(cell).join(',')).join('\r\n')+'\r\n');
console.log(JSON.stringify(counts,null,2));
