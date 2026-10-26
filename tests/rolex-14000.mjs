import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {matchingRule,movementResult} from '../core.js';
import {matchingPhotographs} from '../photographs.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const rules=read('research-updates-20261008.json').filter(r=>r.brand==='ROLEX'&&r.baseReference==='14000');
const photos=read('photographs.json').photographs;
test('14000 mapping keeps neighbouring M reference and movement execution separate',()=>{
 assert.equal(rules.length,1);
 assert.equal(movementResult(matchingRule(rules,'Rolex','14000'),'3000').level,'match');
 assert.equal(movementResult(matchingRule(rules,'Rolex','14000'),'3130').level,'caution');
 for(const ref of ['14000M','14010','14000X'])assert.equal(matchingRule(rules,'Rolex',ref),null);
});
test('14000 four specimen categories retain variant limits and external-only suppression',()=>{
 const a=matchingPhotographs(photos,'Rolex','14000').filter(x=>x.id.startsWith('rolex-14000-20261026-'));
 assert.equal(a.length,4);assert.equal(new Set(a.map(x=>x.category)).size,4);
 assert.ok(a.every(x=>x.matchScope==='representative variant'&&x.review.imageSha256&&x.credit));
 const ext=matchingPhotographs(a,'Rolex','14000',{externalOnly:true});
 assert.equal(ext.length,3);assert.ok(ext.every(x=>!x.depictsMovement));
 assert.equal(matchingPhotographs(a,'Rolex','14000M').length,0);
});
