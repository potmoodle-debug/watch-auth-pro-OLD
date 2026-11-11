import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {rolexLecGuidance} from '../rolex-lec.js';
import {rolexLecData} from '../rolex-lec-data.js';
import {normalize} from '../core.js';
const read=file=>JSON.parse(fs.readFileSync(new URL('../'+file,import.meta.url)));

test('LEC expectation distinguishes original vintage crystals, modern crystals and uncertain eras',()=>{
 assert.equal(rolexLecGuidance('Rolex','1601').value,'No');
 assert.equal(rolexLecGuidance('Rolex','126610LN').value,'Yes');
 assert.equal(rolexLecGuidance('Rolex','M126334-0003').value,'Yes');
 assert.equal(rolexLecGuidance('Rolex','116400GV').value,'No');
 assert.equal(rolexLecGuidance('Rolex','116400').value,'Depends on crystal');
 for(const ref of ['16610','16710','116520','118238','14000M','15223']){
  assert.equal(rolexLecGuidance('Rolex',ref).value,'Depends on year',ref);
 }
 assert.equal(rolexLecGuidance('Rolex','69173').value,'Check production period');
 assert.equal(rolexLecGuidance('Rolex','126').value,'Not researched');
 assert.equal(rolexLecGuidance('Rolex','126610FAKE').value,'Not researched');
 assert.equal(rolexLecGuidance('Tudor','1601'),null);
 assert.equal(rolexLecGuidance('Rolex',''),null);
});

test('LEC inventory covers every published Rolex entry and preserves sourced decisions',()=>{
 const refs=new Set(read('photograph-coverage.json').inventory.filter(x=>normalize(x.brand)==='ROLEX').map(x=>x.reference));
 for(const p of read('photographs.json').photographs.filter(x=>normalize(x.brand)==='ROLEX')){
  for(const ref of [...p.references,...(p.representativeFor||[])])refs.add(ref);
 }
 for(const ref of refs)assert.notEqual(rolexLecGuidance('Rolex',ref).value,'Not researched',ref);
 const seen=new Map();
 for(const group of rolexLecData.groups){
  assert.ok(group.basis);
  for(const source of group.sources)assert.ok(new URL(rolexLecData.sources[source].url).protocol==='https:');
  for(const ref of group.references){
   const key=normalize(ref);
   assert.ok(!seen.has(key)||seen.get(key)===group.value,'Conflicting LEC entry '+ref);
   seen.set(key,group.value);
  }
 }
});
