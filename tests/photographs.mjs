import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {matchingPhotographs,photographMatch,verifiedPhotograph,mergeReferenceRules} from '../photographs.js';

// Metadata fixtures test the matcher; these are not watch photographs or catalogue assets.
const fixture=(overrides={})=>({id:'fixture',brand:'Tudor',references:['M25600TN-0001','25600TN-0001'],representativeFor:['25600TN','M25600TN'],variant:'25600TN-0001 black dial / titanium bracelet',category:'front',title:'Test metadata only',caption:'Representative variant',credit:'Test fixture',image:'https://example.invalid/front.jpg',source:'https://example.invalid/reference',mediaKind:'photograph',review:{status:'verified',visualInspected:true,referenceVerified:true,executionVerified:true,inspectedAt:'2026-10-08',loadedAt:'2026-10-08',evidence:'Test metadata only'},...overrides});
test('only explicit identifiers match, including normalized punctuation',()=>{
 const p=fixture();assert.equal(photographMatch(p,'tu dor','m25600tn 0001'),'documented reference / variant');
 assert.equal(photographMatch(p,'Tudor','25600TN'),'representative variant');
 for(const ref of ['25600TB','25600T','25600TN-0002','M25600TN-9999'])assert.equal(photographMatch(p,'Tudor',ref),null);
 assert.equal(photographMatch(p,'Rolex','25600TN'),null);assert.equal(photographMatch(p,'Tudor',''),null);
});
test('neighbouring Rolex/Breitling/Cartier/Omega/Panerai references cannot inherit images',()=>{
 for(const [brand,ref,near] of [['Rolex','126610LN','126610LV'],['Breitling','A32360','A32350'],['Cartier','WSSA0022','WSSA0023'],['Omega','2254.50','2255.50'],['Panerai','PAM00024','PAM00025']]){
  const p=fixture({brand,references:[ref],representativeFor:[]});assert.equal(matchingPhotographs([p],brand,ref).length,1);assert.equal(matchingPhotographs([p],brand,near).length,0);
 }
 const omega=fixture({brand:'Omega',references:['232.30.46.51.01.001'],representativeFor:[]});assert.equal(matchingPhotographs([omega],'Omega','23230465101001').length,1);
});
test('pending, rejected, uninspected, rendering and unproven movement assets are withheld',()=>{
 const p=fixture();assert.ok(verifiedPhotograph(p));
 for(const key of ['visualInspected','referenceVerified','executionVerified','inspectedAt','loadedAt','evidence'])assert.equal(verifiedPhotograph({...p,review:{...p.review,[key]:false}}),false);
 for(const status of ['pending','rejected'])assert.equal(matchingPhotographs([fixture({review:{...p.review,status}})],'Tudor','25600TN').length,0);
 assert.equal(verifiedPhotograph(fixture({mediaKind:'render'})),false);
 assert.equal(verifiedPhotograph(fixture({image:'javascript:alert(1)'})),false);
});
test('safety restrictions suppress movement images while preserving external photographs',()=>{
 const front=fixture(),movement=fixture({id:'movement',category:'movement'});
 assert.equal(matchingPhotographs([front,movement],'Tudor','25600TN').length,2);
 assert.deepEqual(matchingPhotographs([front,movement],'Tudor','25600TN',{externalOnly:true}).map(p=>p.category),['front']);
});
test('shared refreshes keep public photographs independent of rule visual arrays',()=>{
 const local=[{brand:'Tudor',refs:['25600TN'],visuals:[]}];
 const shared=[{data:{brand:'Tudor',refs:['25600TN'],visuals:[{type:'MOVEMENT',image:'https://example.invalid/wrong'}]},status:'verified'}];
 const baseline=matchingPhotographs([fixture()],'Tudor','25600TN');
 for(let i=0;i<3;i++){const merged=mergeReferenceRules(local,shared);assert.equal(merged.length,1);assert.equal(local.length,1);assert.deepEqual(matchingPhotographs([fixture()],'Tudor','25600TN'),baseline);}
 assert.equal(mergeReferenceRules(local.concat({brand:'Tudor',refs:['25600TB']}),shared).length,2);
 assert.equal(mergeReferenceRules(local,[]).length,1);
});
test('coverage never promotes textual research to verified photographs',()=>{
 const catalogue=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url)));
 const coverage=JSON.parse(fs.readFileSync(new URL('../photograph-coverage.json',import.meta.url)));
 assert.equal(coverage.counts.sourceInventoryRecords,coverage.sourceRecords.length);
 assert.equal(coverage.counts.storedIdentifierKeys,coverage.inventory.length);
 assert.equal(coverage.counts.verifiedAssets,catalogue.photographs.filter(verifiedPhotograph).length);
 assert.equal(new Set(catalogue.photographs.map(p=>p.id)).size,catalogue.photographs.length);
 assert.ok(catalogue.photographs.some(p=>p.review.status==='rejected'&&p.category==='movement'));
 assert.match(coverage.completion,/IN PROGRESS/);
});
