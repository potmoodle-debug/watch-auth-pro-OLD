import {normalize} from './core.js?v=photos01';
import {rolexLecData} from './rolex-lec-data.js?v=lec-research01';

const results=new Map();
for(const group of rolexLecData.groups){
 for(const reference of group.references){
  results.set(normalize(reference),group);
 }
}

export function rolexLecGuidance(brand,reference){
 if(normalize(brand)!=='ROLEX'||!normalize(reference))return null;
 const result=results.get(normalize(reference));
 if(!result)return {value:'Not researched',basis:'No LEC research is recorded for this exact reference.',sources:[]};
 return {
  value:result.value,
  basis:result.basis,
  sources:result.sources.map(id=>rolexLecData.sources[id]),
  reviewedAt:rolexLecData.reviewedAt
 };
}
