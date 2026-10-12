import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {searchPhotographs,webImageSearchUrl} from '../photo-search.js';
import {matchingPhotographs} from '../photographs.js';
const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;

test('photo discovery finds partial details without assigning reference aliases or accepting pending images',()=>{
 const found=searchPhotographs(photos,'Bremont Kingsman');
 assert.equal(found.filter(p=>p.id.startsWith('bremont-pass-kingsman-')).length,4);
 assert.ok(found.every(p=>p.matchScope==='Catalogue search result — confirm reference and variant'));
 assert.ok(found.every(p=>p.review.status==='verified'));
 assert.equal(searchPhotographs(photos,'').length,0);
 assert.equal(searchPhotographs(photos,'Bremont',{category:'invalid'}).length,0);
 assert.ok(searchPhotographs(photos,'bkm ss',{category:'front'}).some(p=>p.id==='bremont-pass-kingsman-front'));
 assert.equal(matchingPhotographs(photos,'Bremont','Kingsman').filter(p=>p.id.startsWith('bremont-pass-kingsman-')).length,0);
 const pending={...photos.find(p=>p.id==='bremont-pass-kingsman-front'),id:'unverified-search-fixture',review:{status:'pending'}};
 assert.equal(searchPhotographs([pending],'Kingsman').length,0);
});

test('external-only discovery suppresses movements, shared back images and hash-identical alternate URLs',()=>{
 const interior=photos.find(p=>p.id==='bremont-pass-kingsman-movement');
 const duplicate={...photos.find(p=>p.id==='bremont-pass-kingsman-front'),id:'interior-disguised',image:'https://example.com/alternate.jpg',review:{...interior.review}};
 const catalogue=photos.concat(duplicate);
 const found=searchPhotographs(catalogue,'Bremont Kingsman',{externalOnly:true});
 assert.ok(found.some(p=>p.id==='bremont-pass-kingsman-front'));
 assert.ok(found.some(p=>p.id==='bremont-pass-kingsman-braceletClasp'));
 for(const id of ['bremont-pass-kingsman-movement','bremont-pass-kingsman-caseback','interior-disguised'])assert.ok(!found.some(p=>p.id===id),id);
 assert.equal(searchPhotographs(catalogue,'Kingsman',{category:'movement',externalOnly:true}).length,0);
});

test('web search encodes only the provided query, with separate category and exterior restrictions',()=>{
 const query='Bremont BKM-SS & white + dial';const url=new URL(webImageSearchUrl(query,'caseback'));
 assert.equal(url.origin,'https://www.google.com');assert.equal(url.searchParams.get('tbm'),'isch');
 assert.equal(url.searchParams.get('q'),query+' Caseback watch photographs');
 assert.equal(webImageSearchUrl(''),'');
 assert.equal(webImageSearchUrl(query,'movement',{externalOnly:true}),'');
 assert.match(new URL(webImageSearchUrl(query,'front',{externalOnly:true})).searchParams.get('q'),/exterior photographs -movement/);
});
