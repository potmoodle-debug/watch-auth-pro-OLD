import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {sourceReviewScope} from '../scripts/photo-review-scope.mjs';
const read=name=>JSON.parse(fs.readFileSync(new URL('../'+name,import.meta.url)));
test('textual findings never count as photograph reviews, including legacy disclaimers',()=>{
 for(const evidence of ['No photo verification claimed.','No photograph verification claimed.','No image-pixel/category verification claimed.']){
  assert.equal(sourceReviewScope({reviewedAt:'2026-11-16',evidence}),'text');
  assert.equal(sourceReviewScope({reviewedAt:'2026-11-16',evidence,scope:'photographs'}),'text');
 }
 assert.equal(sourceReviewScope({reviewedAt:'2026-11-16',evidence:'Manufacturer calibre mapping.',scope:'text'}),'text');
 assert.equal(sourceReviewScope({evidence:'All images inspected.'}),'unreviewed');
 assert.equal(sourceReviewScope({reviewedAt:'2026-11-16',evidence:'All images inspected.',scope:'unknown'}),'unreviewed');
 assert.equal(sourceReviewScope({reviewedAt:'2026-11-16',evidence:'All original gallery images inspected; no opened movement exists.'}),'photographs');
});
test('generated source tally preserves text research without claiming photograph completion',()=>{
 const reviews=read('photograph-reviews.json').sourceRecordReviews;
 const coverage=read('photograph-coverage.json');
 for(const r of reviews.filter(x=>sourceReviewScope(x)==='text')){
  assert.equal(r.scope,'text',r.id);
  const record=coverage.sourceRecords.find(x=>x.id===r.id);
  if(!record)continue;
  assert.equal(record.status,'unreviewed for photographs',r.id);
  assert.match(record.textReviewStatus,/text only/,r.id);
 }
 assert.equal(coverage.sourceRecords.find(x=>x.id==='UPDATE:BREITLING|A13370').status,'reviewed for photographs');
 assert.equal(coverage.counts.sourceRecordsReviewed,coverage.sourceRecords.filter(x=>x.status==='reviewed for photographs').length);
 assert.equal(coverage.counts.sourceRecordsReviewed+coverage.counts.sourceRecordsUnreviewed,coverage.counts.sourceInventoryRecords);
 assert.equal(coverage.counts.sourceRecordsTextOnly,coverage.sourceRecords.filter(x=>x.textReviewStatus).length);
 assert.equal(coverage.counts.verifiedAssets,read('photographs.json').photographs.filter(x=>x.review.status==='verified').length);
});
