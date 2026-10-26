import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {matchingRule,movementResult} from '../core.js';import {matchingPhotographs} from '../photographs.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const rules=read('research-updates-20261008.json').filter(x=>['126710BLRO','M126334-0003','AB0136'].includes(x.baseReference));const photos=read('photographs.json').photographs.filter(x=>/^(rolex-126710blro|breitling-ab0136)-20261026-/.test(x.id));
test('Three researched mappings preserve exact suffix, brand and calibre boundaries',()=>{
 assert.equal(rules.length,3);
 for(const [brand,ref,cal]of [['Rolex','126710BLRO','3285'],['Rolex','M1263340003','3235'],['Breitling','AB0136','B01'],['Breitling','AB0136161C1A1','Breitling 01']])assert.equal(movementResult(matchingRule(rules,brand,ref),cal).level,'match');
 for(const [brand,ref]of [['Rolex','126710BLNR'],['Rolex','116710BLRO'],['Rolex','M1263340004'],['Rolex','1263340003'],['Breitling','AB0136161C1S1'],['Breitling','RB0136']])assert.equal(matchingRule(rules,brand,ref),null);
 assert.equal(movementResult(matchingRule(rules,'Breitling','AB0136'),'B04').level,'caution');
 assert.ok(matchingRule(rules,'Breitling','AB0136').manualReview);
});
test('Representative specimen photos do not fill unsupported categories or leak rear movement',()=>{
 const rolex=matchingPhotographs(photos,'Rolex','126710BLRO');assert.equal(rolex.length,3);assert.ok(rolex.every(p=>p.category!=='movement'&&p.matchScope==='representative variant'));
 const breitling=matchingPhotographs(photos,'Breitling','AB0136');assert.equal(breitling.length,3);assert.equal(new Set(breitling.map(x=>x.image)).size,2);
 assert.deepEqual(matchingPhotographs(photos,'Breitling','AB0136',{externalOnly:true}).map(x=>x.category),['front']);
 for(const ref of ['AB0136161C1A1','AB0136161C1S1','RB0136'])assert.equal(matchingPhotographs(photos,'Breitling',ref).length,0);
 assert.equal(matchingPhotographs(photos,'Rolex','M1263340003').length,0);
});
