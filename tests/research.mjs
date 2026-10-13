import fs from 'node:fs';
import assert from 'node:assert/strict';
import {matchingRule,movementResult,safetyRule} from '../core.js';
const base=JSON.parse(fs.readFileSync(new URL('../intelligence.json',import.meta.url)));
const reviewed=JSON.parse(fs.readFileSync(new URL('../research-updates-20261008.json',import.meta.url)));
const rules=reviewed.concat(base.rules);
for(const r of reviewed){assert.equal(matchingRule(rules,r.brand,r.baseReference),r);if(r.calibre.length){assert.equal(movementResult(r,r.calibre[0]).level,'match');assert.equal(movementResult(r,'UNLISTED9999').level,'caution');}else assert.equal(movementResult(r,'UNLISTED9999'),null);assert.ok(r.sourceUrl.startsWith('https://'));for(const v of r.visuals||[])assert.ok(!v.image.endsWith(':'));}
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

for(const ref of ['WAY2113','WAY2113.BA0928']){
 const r=matchingRule(rules,'TAG Heuer',ref);assert.ok(r.manualReview);assert.equal(movementResult(r,'Calibre5').level,'match');
 for(const c of ['ETA2824-2','SW200-1'])assert.equal(movementResult(r,c).level,'caution');
}
assert.ok(matchingRule(rules,'TAG Heuer','WAY2113').collectionOnly);
assert.equal(matchingRule(rules,'TAG Heuer','WAY2113.BA0910'),null);
assert.equal(matchingRule(rules,'TAG Heuer','WAY2113-9999'),null);
assert.equal(matchingRule(rules,'Omega','WAY2113'),null);

for(const ref of ['L37884','L3.788.4.06.6','L3.788.4.56.6','L3.788.4.96.6']){
 const r=matchingRule(rules,'Longines',ref);assert.ok(r.manualReview);assert.equal(movementResult(r,'L888.5').level,'match');
 for(const c of ['L888','L888.2','L844.5'])assert.equal(movementResult(r,c).level,'caution');
}
assert.ok(matchingRule(rules,'Longines','L37884').collectionOnly);
assert.equal(matchingRule(rules,'Longines','L37884969'),null);
assert.equal(matchingRule(rules,'Omega','L37884966'),null);

for(const ref of ['L37884706','L37884906','L37884986','L37884996']){
 const r=matchingRule(rules,'Longines',ref);assert.ok(r.manualReview);assert.equal(movementResult(r,'L888.5').level,'match');assert.equal(movementResult(r,'L888').level,'caution');
}
assert.equal(matchingRule(rules,'Longines','L37884999'),null);
assert.match(matchingRule(rules,'Longines','L37884986').notes,/exclusive edition/);

const queuedA37320=matchingRule(rules,'Breitling','A37320');assert.ok(queuedA37320.manualReview);assert.equal(movementResult(queuedA37320,'Breitling37').level,'match');assert.equal(movementResult(queuedA37320,'ETA2895-2').level,'caution');assert.match(queuedA37320.calibreDisplay,/seller attribution/);assert.equal(matchingRule(rules,'Breitling','A37320264'),null);assert.equal(matchingRule(rules,'Omega','A37320'),null);
const queuedCartier830=matchingRule(rules,'Cartier','83041488');assert.ok(queuedCartier830.manualReview);assert.deepEqual(queuedCartier830.calibre,[]);assert.equal(movementResult(queuedCartier830,'87'),null);assert.match(queuedCartier830.notes,/replacement/);assert.equal(matchingRule(rules,'Omega','83041488'),null);

for(const ref of ['WBY1112','WBY1112.BA0042']){
 const r=matchingRule(rules,'TAG Heuer',ref);assert.ok(r.manualReview);assert.equal(movementResult(r,'TH50-00').level,'match');assert.equal(movementResult(r,'Eco-Drive').level,'caution');assert.match(r.technology,/Solar quartz/);
}
assert.equal(matchingRule(rules,'TAG Heuer','WBY1112.FT0000'),null);
assert.equal(matchingRule(rules,'Omega','WBY1112'),null);

const queuedOmega21092=matchingRule(rules,'Omega','21092422001001');assert.ok(queuedOmega21092.manualReview);assert.equal(movementResult(queuedOmega21092,'8806').level,'match');assert.equal(movementResult(queuedOmega21092,'8800').level,'caution');assert.equal(movementResult(queuedOmega21092,'ETA2892').level,'caution');assert.match(queuedOmega21092.caseDetails,/12.99mm/);assert.equal(matchingRule(rules,'Tudor','21092422001001'),null);

for(const ref of ['L37644','L37644066','L37644500','L37644507','L37644907','L37644996','L37644966','L37644166','L37644509','L37644909','L37644069']){
 const r=matchingRule(rules,'Longines',ref);assert.ok(r.manualReview);assert.equal(movementResult(r,'L888.6').level,'match');assert.equal(movementResult(r,'L888').level,'caution');assert.equal(movementResult(r,'L888.5').level,'caution');
}
assert.equal(matchingRule(rules,'Longines','L37644506'),null);assert.equal(matchingRule(rules,'Longines','L37644906'),null);assert.equal(matchingRule(rules,'Omega','L37644066'),null);assert.notEqual(matchingRule(rules,'Longines','L37644500').variant,matchingRule(rules,'Longines','L37644509').variant);

const queuedPiaget=matchingRule(rules,'Piaget','90802');assert.ok(queuedPiaget.manualReview);assert.equal(movementResult(queuedPiaget,'9P2').level,'match');assert.equal(movementResult(queuedPiaget,'9P').level,'caution');assert.equal(movementResult(queuedPiaget,'9PS').level,'caution');assert.equal(matchingRule(rules,'Piaget','90802G1'),null);assert.equal(matchingRule(rules,'Cartier','90802'),null);

const queuedRolex179174=matchingRule(rules,'Rolex','179174');assert.ok(queuedRolex179174.manualReview);assert.equal(movementResult(queuedRolex179174,'2235').level,'match');assert.equal(movementResult(queuedRolex179174,'2236').level,'caution');assert.equal(movementResult(queuedRolex179174,'2135').level,'caution');assert.match(queuedRolex179174.caseDetails,/26mm/);assert.match(queuedRolex179174.notes,/generic28mm/);assert.equal(matchingRule(rules,'Tudor','179174'),null);

for(const ref of ['Bremont Solo','SOLO32-AJ-WH-R-S']){const r=matchingRule(rules,'Bremont',ref);assert.ok(r.manualReview);assert.deepEqual(r.calibre,[]);assert.equal(movementResult(r,'SW1000'),null);assert.equal(movementResult(r,'SW220-1'),null);}assert.ok(matchingRule(rules,'Bremont','Bremont Solo').collectionOnly);assert.notEqual(matchingRule(rules,'Bremont','Bremont Solo').size,'43 mm');

const queuedOmega2252=matchingRule(rules,'Omega','22525000');assert.ok(queuedOmega2252.manualReview);assert.equal(movementResult(queuedOmega2252,'1120').level,'match');assert.equal(movementResult(queuedOmega2252,'ETA2892').level,'caution');assert.equal(movementResult(queuedOmega2252,'2500').level,'caution');assert.match(queuedOmega2252.caseDetails,/36.25mm/);assert.match(queuedOmega2252.notes,/not a pass\/fail threshold/);assert.equal(matchingRule(rules,'Rolex','22525000'),null);
