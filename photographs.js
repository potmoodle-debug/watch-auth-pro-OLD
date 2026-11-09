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

function selectPhotographs(catalogue,match,{externalOnly=false}={}){
 const movementImages=externalOnly?new Set(catalogue.filter(p=>verifiedPhotograph(p)&&p.category==='movement')
  .flatMap(p=>[p.image,p.review?.imageSha256].filter(Boolean))):null;
 return catalogue.filter(p=>verifiedPhotograph(p)&&match(p)&&
  photoCategories.some(([key])=>key===p.category)&&(!externalOnly||
   (p.category!=='movement'&&p.depictsMovement!==true&&!movementImages.has(p.image)&&
    !(p.review?.imageSha256&&movementImages.has(p.review.imageSha256)))))
  .map(p=>({...p,matchScope:match(p)}));
}

export function matchingPhotographs(catalogue,brand,reference,options){
 return selectPhotographs(catalogue,p=>photographMatch(p,brand,reference),options);
}

export function potentialPhotographs(catalogue,brand,reference,options){
 const prefix=normalize(reference),brandKey=normalize(brand);
 if(!brandKey||prefix.length<3)return [];
 return selectPhotographs(catalogue,p=>{
  if(normalize(p.brand)!==brandKey||photographMatch(p,brand,reference))return null;
  const hasPrefix=[...(p.references||[]),...(p.representativeFor||[])].some(ref=>normalize(ref).startsWith(prefix));
  return hasPrefix?'Potential match — confirm full reference and variant':null;
 },options);
}

// Shared rows may update textual facts; photographs always come from the public,
// independently reviewed catalogue above. Retain local facts absent from a refresh.
export function mergeReferenceRules(localRules,sharedRows){
 const shared=sharedRows.map(x=>({...x.data,benchStatus:x.status,benchSource:x.source,benchVerifiedAt:x.verified_at}));
 shared.sort((a,b)=>(a.benchStatus==='verified'?-1:0)-(b.benchStatus==='verified'?-1:0)||(a.importOrder||0)-(b.importOrder||0));
 const key=r=>JSON.stringify([normalize(r.brand),(r.refs||[]).map(normalize).sort(),normalize(r.baseReference),r.pattern?.source||'',r.pattern?.flags||'']);
 const ordered=shared.filter(r=>r.benchStatus==='verified').concat(localRules.filter(r=>r.researchReviewedAt),shared.filter(r=>r.benchStatus!=='verified'),localRules.filter(r=>!r.researchReviewedAt));
 const seen=new Set();return ordered.filter(r=>{const k=key(r);if(seen.has(k))return false;seen.add(k);return true;});
}
