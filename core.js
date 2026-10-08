export const normalize=v=>String(v||'').trim().toUpperCase().replace(/[^A-Z0-9]/g,'');
export function londonDay(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);}
export function metrics(rows,target=50){const completed=rows.reduce((sum,r)=>sum+r.contribution,0);return {completed,target,remaining:Math.max(0,target-completed),percent:Math.max(0,Math.min(100,Math.round(completed/target*100))),rmas:rows.filter(r=>r.workflow==='rma').length};}
export function matchingRule(rules,brand,reference){
 const b=normalize(brand),raw=String(reference).trim().toUpperCase(),n=normalize(reference);
 const candidates=rules.filter(r=>normalize(r.brand)===b);
 const exact=candidates.find(r=>(r.refs||[]).some(x=>normalize(x)===n));
 if(exact)return exact;
 const patternMatch=candidates.find(r=>{if(!r.pattern)return false;const re=new RegExp(r.pattern.source,r.pattern.flags.replace('g',''));return [raw,n].some(x=>re.test(x));});
 if(patternMatch)return patternMatch;
 const base=b==='TUDOR'?raw.replace(/^M/,'').replace(/-\d{4}$/,''):b==='ROLEX'?raw.replace(/^([0-9]{4,6})[A-Z]{1,6}$/,'$1'):null;
 if(base&&base!==raw){const found=matchingRule(rules,brand,base);if(found)return {...found,manualReview:true,lookupScope:'Base-reference / family guidance; full variant remains unassessed'};}
 return null;
}
export function safetyRule(rules,brand,reference,model=''){
 return rules.find(r=>normalize(r.brand)===normalize(brand)&&((r.refs||[]).some(x=>normalize(x)===normalize(reference))||(r.ref&&new RegExp(r.ref.source,r.ref.flags).test(reference))||(r.names&&new RegExp(r.names.source,r.names.flags).test(reference+' '+model))))||null;
}
export function movementResult(rule,observed){
 if(!rule||!observed||!(rule.calibre||[]).length)return null;
 const n=normalize(observed).replace(/^(CALIBRE|CAL)/,'');
 const match=rule.calibre.some(v=>normalize(v).replace(/^(CALIBRE|CAL)/,'')===n);
 const limited=rule.manualReview||rule.collectionOnly||rule.calibre.length>3;
 return match?{level:'match',text:limited?'Observed calibre is listed in this family; confirm the exact execution.':'Observed calibre agrees with the available mapping.'}:{level:'caution',text:limited?'Calibre not listed in this partial mapping. Review the exact reference and movement.':'Calibre differs from the available mapping. Recheck movement marking, reference and replacement history.'};
}
export function finalNote(record){
 const lines=[[record.brand,record.reference?'Ref. '+record.reference:''].filter(Boolean).join(' — ')];
 if(record.serial)lines.push('Serial: '+record.serial);
 const d=record.details||{};
 for(const [key,label] of [['movementType','Movement technology'],['calibre','Observed calibre'],['clasp','Clasp / bracelet'],['overall','Overall condition'],['battery','Battery changed']])if(d[key])lines.push(label+': '+d[key]);
 if(d.conditions?.length)lines.push('Movement condition: '+d.conditions.join(', '));
 if(d.comments)lines.push('Observations: '+d.comments);
 if(d.issue)lines.push('Issue recorded: '+d.issue);
 if(d.externalOnly)lines.push('External inspection only; case not opened.');
 if(record.outcome&&record.outcome!=='recorded')lines.push('Authenticator decision: '+record.outcome);
 return lines.join('\n');
}
export function pace(completed,target,date=new Date()){
 const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date).split(':').map(Number);
 const now=parts[0]*60+parts[1],blocks=[[540,600],[615,750],[780,840],[855,1020]];
 const total=blocks.reduce((n,[s,e])=>n+e-s,0),elapsed=blocks.reduce((n,[s,e])=>n+Math.max(0,Math.min(e,now)-s),0),expected=target*elapsed/total;
 return now<540?'Before shift':now>=1020?(completed>=target?'Target reached':'Shift ended'):(completed>=target?'Target reached':completed>=expected+2?'Ahead':completed<expected-2?'Behind':'On target');
}
