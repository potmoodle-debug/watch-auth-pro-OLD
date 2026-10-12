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
console.log(reviewed.length+' reviewed model mappings, movement mismatch checks, variant scope, image URLs and retained safety data passed.');

assert.equal(matchingRule(rules,'Breitling','X83310D41B1S1').calibreDisplay,'Breitling 83');
assert.equal(matchingRule(rules,'Breitling','X823109A1K1S1').calibreDisplay,'Breitling 82');
assert.equal(movementResult(matchingRule(rules,'Breitling','AB2030'),'MT5612').level,'caution');
assert.equal(movementResult(matchingRule(rules,'Breitling','A17328'),'SW200-1').level,'caution');
assert.match(matchingRule(rules,'Breitling','EB7010').technology,/analogue.digital/);
assert.equal(matchingRule(rules,'Breitling','A17366').technicalDetail.waterRating,'500 m when new');
assert.ok(!matchingRule(rules,'Breitling','AB0139211G1A1').manualReview);
assert.notEqual(matchingRule(rules,'Breitling','AB0139ZZZZ').benchStatus,'verified');

assert.match(matchingRule(rules,'IWC','IW328106').family,/Mojave/);
assert.equal(matchingRule(rules,'IWC','IW328106').calibreDisplay,'IWC 32112');
assert.match(matchingRule(rules,'IWC','IW370601').family,/Pilot/);
assert.equal(matchingRule(rules,'IWC','IW370601').manualReview,true);
assert.equal(movementResult(matchingRule(rules,'IWC','IW388113'),'7750').level,'caution');
assert.equal(matchingRule(rules,'IWC','IW328206').reserve,'120 hours');

const queuedCartier=matchingRule(rules,'Cartier','W5000156');
assert.ok(queuedCartier.manualReview);
assert.equal(movementResult(queuedCartier,'120').level,'match');
assert.match(movementResult(queuedCartier,'120').text,/confirm the exact execution/);
assert.equal(movementResult(queuedCartier,'ETA 2000-1').level,'caution');
assert.equal(matchingRule(rules,'Omega','W5000156'),null);
assert.equal(matchingRule(rules,'Cartier','W5000156-001'),null);
assert.match(queuedCartier.technicalDetail.movement,/dealer attribution/);

for(const ref of ['L3.790.4','L37904','L3.790.4.96.6','L3.790.4.06.6','L3.790.4.56.6','L3.790.4.66.6','L3.790.4.96.9','L3.790.4.56.9']){
 const r=matchingRule(rules,'Longines',ref);assert.ok(r,ref);assert.ok(r.manualReview);assert.equal(movementResult(r,'L844.5').level,'match');assert.equal(movementResult(r,'L844').level,'caution');assert.equal(movementResult(r,'ETA A31').level,'caution');
}
assert.ok(matchingRule(rules,'Longines','L37904').collectionOnly);
assert.equal(matchingRule(rules,'Longines','L37904966').variant,'Sunray blue / Steel bracelet');
assert.equal(matchingRule(rules,'Longines','L37904969').variant,'Sunray blue / Blue rubber strap');
for(const ref of ['L37904567','L38904966','L37904-9999'])assert.equal(matchingRule(rules,'Longines',ref),null,ref);
assert.equal(matchingRule(rules,'Omega','L37904966'),null);

const queuedOmega=matchingRule(rules,'Omega','25025000');
assert.ok(queuedOmega.manualReview);
assert.equal(movementResult(queuedOmega,'2500').level,'match');
for(const c of ['2500A','2500B','2500C','2500D','ETA2892-A2'])assert.equal(movementResult(queuedOmega,c).level,'caution',c);
assert.equal(matchingRule(rules,'Omega','2502.50'),null);
assert.equal(matchingRule(rules,'Omega','25025000-001'),null);
assert.equal(matchingRule(rules,'Longines','25025000'),null);
