import fs from 'node:fs';
import assert from 'node:assert/strict';
import {matchingRule,movementResult,safetyRule} from '../core.js';
const base=JSON.parse(fs.readFileSync(new URL('../intelligence.json',import.meta.url)));
const reviewed=JSON.parse(fs.readFileSync(new URL('../research-updates-20261008.json',import.meta.url)));
const rules=reviewed.concat(base.rules);
for(const r of reviewed){assert.equal(matchingRule(rules,r.brand,r.baseReference),r);assert.equal(movementResult(r,r.calibre[0]).level,'match');assert.equal(movementResult(r,'UNLISTED9999').level,'caution');assert.ok(r.sourceUrl.startsWith('https://'));for(const v of r.visuals||[])assert.ok(!v.image.endsWith(':'));}
assert.match(matchingRule(rules,'Tudor','7924').caseDetails,/37 mm/);
assert.match(matchingRule(rules,'Tudor','7031/0').technology,/manual/);
assert.equal(matchingRule(rules,'Tudor','M79360N-0013').calibreDisplay,'MT5813');
assert.equal(matchingRule(rules,'Tudor','M79360N-9999').manualReview,true);
assert.ok(safetyRule(base.safety,'Sinn','UX'));
assert.equal(matchingRule(rules,'Rolex','126610LN').calibreDisplay,'Rolex 3235');
assert.ok(base.serial.REP_DATABASE.length);
console.log('All 23 reviewed model mappings, movement mismatch checks, variant scope, image URLs and retained safety data passed.');
