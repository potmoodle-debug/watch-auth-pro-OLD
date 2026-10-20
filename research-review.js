import {normalize} from './core.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function brandChoices(records,excluded=[]){
 const skip=new Set(excluded.map(normalize)),brands=new Map();
 for(const r of records){const label=String(r.brand||'').trim(),key=normalize(label);if(!key||skip.has(key))continue;const old=brands.get(key);if(!old||old===old.toUpperCase()&&label!==label.toUpperCase())brands.set(key,label);}
 return [...brands.values()].sort((a,b)=>a.localeCompare(b));
}
export function splitResearchRecords(rows){
 return {rules:rows.filter(x=>x.data?.recordType!=='research-review'),reviews:rows.map(x=>x.data?.researchReview).filter(x=>x&&['answered','needs_evidence'].includes(x.decision))};
}
export function researchOutcomeHTML(reviews,request){
 const r=reviews.filter(x=>x.requestId===request.id&&normalize(x.brand)===normalize(request.brand)&&normalize(x.reference)===normalize(request.reference)).sort((a,b)=>String(b.reviewedAt).localeCompare(String(a.reviewedAt)))[0];
 if(!r)return '';
 const links=(r.sources||[]).flatMap(v=>{try{const u=new URL(v);return u.protocol==='https:'?['<a target="_blank" rel="noopener noreferrer" href="'+esc(u.href)+'">Source</a>']:[];}catch{return [];}}).join(' · ');
 return '<details class="research-result"'+(r.decision==='needs_evidence'?' open':'')+'><summary>Research '+(r.decision==='answered'?'answered':'reviewed — evidence needed')+'</summary><p>'+esc(r.conclusion)+'</p>'+(links?'<p>'+links+'</p>':'')+'<small>Codex research review · '+esc(r.reviewedAt)+'</small></details>';
}
