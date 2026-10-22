import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {matchingRule} from '../core.js';
import {matchingPhotographs} from '../photographs.js';
const rules=JSON.parse(fs.readFileSync(new URL('../intelligence.json',import.meta.url))).rules;
const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
test('Worldtimer family cannot establish calibre or inherit an exact-reference gallery',()=>{
 for(const reference of ['Aqua Terra Worldtimer','AQUATERRAWORLDTIMER']){
  const rule=matchingRule(rules,'Omega',reference);
  assert.ok(rule.manualReview&&rule.collectionOnly&&rule.exactReferenceOnly);
  assert.deepEqual(rule.calibre,[]);
  assert.match(rule.calibreDisplay,/complete case reference/);
  assert.equal(matchingPhotographs(photos,'Omega',reference).length,0);
 }
 assert.equal(matchingRule(rules,'Omega','2517.30.00').calibreDisplay,'1538');
});
