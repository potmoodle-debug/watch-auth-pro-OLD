import assert from 'node:assert/strict';
import {performanceStats,resetCorrections} from '../performance.js';
let stats=performanceStats(7,60,new Date('2026-10-08T14:00:00+01:00'));
assert.equal(stats.expected,36);assert.equal(stats.difference,-29);assert.equal(stats.rate.toFixed(1),'1.6');assert.ok(stats.late);
assert.equal(performanceStats(7,60,new Date('2026-10-08T14:15:00+01:00')).expected,stats.expected);
assert.equal(performanceStats(0,60,new Date('2026-10-08T09:00:00+01:00')).finish,'—');
assert.equal(performanceStats(60,60,new Date('2026-10-08T14:00:00+01:00')).finish,'Target reached');
assert.equal(performanceStats(30,60,new Date('2026-10-08T12:30:00+01:00')).finish,'16:30');
assert.equal(performanceStats(0,60,new Date('2026-10-08T08:00:00+01:00')).against,'Before shift');
let id=0;const makeId=()=>String(++id);
for(const total of [0,7,50,51,126,-3]){const rows=resetCorrections(total,'USER','2026-10-08',makeId);assert.equal(total+rows.reduce((sum,r)=>sum+r.contribution,0),0);assert.ok(rows.every(r=>r.workflow==='correction'&&r.author==='USER'&&r.contribution!==0&&Math.abs(r.contribution)<=50&&r.details.dayReset));assert.equal(new Set(rows.map(r=>r.id)).size,rows.length);}
assert.throws(()=>resetCorrections(NaN,'USER','DAY',makeId));
console.log('London breaks, pace, finish forecast and history-preserving reset correction batches passed.');
