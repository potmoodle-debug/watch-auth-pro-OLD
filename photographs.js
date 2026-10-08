import {normalize} from './core.js?v=photos01';

export const photoCategories=[
 ['front','Watch front'],['movement','Movement'],
 ['caseback','Caseback'],['braceletClasp','Bracelet and clasp'],['detail','Other details']
];

// Photographs never inherit a regex/family intelligence match. Every alias and
// representative base reference must be recorded explicitly with source evidence.
export function photographMatch(photo,brand,reference){
 if(normalize(photo.brand)!==normalize(brand)||!normalize(reference))return null;
 const n=normalize(reference);
 // A source can identify the case reference while only illustrating one of
 // its dial/bracelet variants. Preserve that explicitly representative label.
 if((photo.representativeFor||[]).some(r=>normalize(r)===n))return 'representative variant';
 if((photo.references||[]).some(r=>normalize(r)===n))return 'documented reference / variant';
 return null;
}

export function verifiedPhotograph(photo){
 const r=photo.review;
 return photo.mediaKind==='photograph'&&r?.status==='verified'&&
  r.visualInspected===true&&r.referenceVerified===true&&r.executionVerified===true&&
  !!r.inspectedAt&&!!r.loadedAt&&!!r.evidence&&!!photo.credit&&!!photo.variant&&
  !!photo.caption&&!!photo.title&&photo.references?.length>0&&
  ['image','source'].every(k=>{try{return new URL(photo[k]).protocol==='https:';}catch{return false;}});
}

export function matchingPhotographs(catalogue,brand,reference,{externalOnly=false}={}){
 return catalogue.filter(p=>verifiedPhotograph(p)&&photographMatch(p,brand,reference)&&
  photoCategories.some(([key])=>key===p.category)&&(!externalOnly||p.category!=='movement'))
  .map(p=>({...p,matchScope:photographMatch(p,brand,reference)}));
}

// Shared rows may update textual facts; photographs always come from the public,
// independently reviewed catalogue above. Retain local facts absent from a refresh.
export function mergeReferenceRules(localRules,sharedRows){
 const shared=sharedRows.map(x=>({...x.data,benchStatus:x.status,benchSource:x.source,benchVerifiedAt:x.verified_at}));
 shared.sort((a,b)=>(a.benchStatus==='verified'?-1:0)-(b.benchStatus==='verified'?-1:0)||(a.importOrder||0)-(b.importOrder||0));
 const key=r=>JSON.stringify([normalize(r.brand),(r.refs||[]).map(normalize).sort(),normalize(r.baseReference),r.pattern?.source||'',r.pattern?.flags||'']);
 const sharedKeys=new Set(shared.map(key));
 return shared.concat(localRules.filter(r=>!sharedKeys.has(key(r))));
}
