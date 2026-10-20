import {normalize} from './core.js?v=strictcase01';

export function researchPack(requests,inspections=[],{includeInspections=false,generatedAt=new Date().toISOString()}={}){
 const active=requests.filter(x=>x.status!=='resolved'),key=x=>normalize(x.brand)+'|'+normalize(x.reference);
 const grouped=new Map();if(includeInspections)for(const row of inspections){const k=key(row);if(!grouped.has(k))grouped.set(k,[]);grouped.get(k).push(row);}
 return {format:'benchauth-research-queue',version:1,repository:'potmoodle-debug/watch-auth-pro-OLD',generatedAt,scope:'Active shared research requests only; exported status is a snapshot.',includesSavedInspections:includeInspections,requestCount:active.length,requests:active.map(row=>({requestId:row.id,brand:row.brand,reference:row.reference,status:row.status,createdAt:row.created_at,question:row.question,...(includeInspections?{savedInspections:(grouped.get(key(row))||[]).map(x=>({inspectionId:x.id,createdAt:x.created_at,fromOriginalRequester:x.author===row.author,workflow:x.workflow,serial:x.serial,details:x.details,note:x.note,outcome:x.outcome}))}:{})})),resolutionPolicy:'Exporting does not change request status. A request is resolved only after research answers its original question, the supported change is published and verified on OLD, and the live queue is rechecked. Identity or calibre conflicts stay open; resolved history is preserved.'};
}

function downloadResearchPack(pack){
 const blob=new Blob([JSON.stringify(pack,null,2)+'\n'],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='benchauth-missing-references-'+pack.generatedAt.slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
}

export function showResearchPack(pack){
 const old=document.getElementById('researchExportDialog');if(old)old.remove();
 const dialog=document.createElement('dialog');dialog.id='researchExportDialog';dialog.setAttribute('aria-labelledby','researchExportTitle');const title=document.createElement('h2');title.id='researchExportTitle';title.textContent='Research queue export';const help=document.createElement('p');help.textContent=pack.requestCount+' active requests. Download and attach the JSON file here, or copy this export and paste it into our chat. Request statuses are unchanged.';const field=document.createElement('textarea');field.id='researchExportText';field.readOnly=true;field.rows=12;field.setAttribute('aria-label','Research queue JSON');field.value=JSON.stringify(pack,null,2);const state=document.createElement('p');state.setAttribute('role','status');const actions=document.createElement('div');actions.className='actions';
 for(const [label,fn]of [['Download JSON',()=>{downloadResearchPack(pack);state.textContent='Download requested. If your browser blocks it, use Copy export.';}],['Copy export',async()=>{try{await navigator.clipboard.writeText(field.value);state.textContent='Copied. Paste the export in our chat.';}catch{field.focus();field.select();state.textContent=document.execCommand('copy')?'Copied. Paste the export in our chat.':'Export selected. Press Ctrl+C to copy, then paste in our chat.';}}],['Close',()=>dialog.close()]]){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=fn;actions.append(b);}
 dialog.append(title,help,field,actions,state);dialog.addEventListener('close',()=>dialog.remove());document.body.append(dialog);dialog.showModal();
}
export function clearResearchExport(){const d=document.getElementById('researchExportDialog');if(d){d.close();d.remove();}}
