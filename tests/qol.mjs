import {replicaSignals,claspMatches,serialHints,needsResearch} from '../qol.js';
import fs from 'node:fs';import assert from 'node:assert/strict';
const d=JSON.parse(fs.readFileSync(new URL('../intelligence.json',import.meta.url))).serial;
let checked=0;
for(const r of d.REP_DATABASE){for(const c of r.clasps||[])if(/^[A-Z0-9]{2,8}$/.test(c)){assert.ok(claspMatches('STEELINOX '+c,[r]).length);checked++;}for(const p of r.patterns||[])if(/^[A-Z0-9*]+$/.test(p)){assert.ok(replicaSignals(d,'Rolex',p.replaceAll('*','1'),'','').risk,p);checked++;}}
const r=d.REP_DATABASE[0];assert.ok(replicaSignals(d,'Rolex',r.patterns[0].replaceAll('*','1'),r.clasps[0],r.ref).combined.length);
assert.equal(replicaSignals(d,'Rolex','','','126505').risk,false);
assert.equal(replicaSignals(d,'Omega','T11Y1111','U7T',''),null);
assert.ok(replicaSignals(d,'Rolex','ER6J1111','','').risk);
assert.ok(serialHints(d,'Tudor','B330000','','auto',{}).some(s=>s.includes('1990')));
assert.ok(serialHints(d,'Tudor','Q411285','','auto',{}).every(s=>!s.includes('Approximate Tudor benchmark')));
assert.ok(serialHints(d,'Rolex','9400000','A1','auto',{}).some(s=>s.includes('1987')));
assert.ok(serialHints(d,'Rolex','','A1','auto',{}).some(s=>s.includes('1976')));
assert.ok(serialHints(d,'Rolex','','7GJ','auto',{}).some(s=>s.includes('No production date')));
assert.ok(serialHints(d,'Omega','84000000','','speedmaster',{}).some(s=>s.includes('not reliably year-datable')));
assert.equal(needsResearch(null,'rma'),false);assert.equal(needsResearch(null,'authentication'),true);assert.equal(needsResearch({manualReview:true},'authentication'),true);assert.equal(needsResearch({calibre:['4131']},'authentication'),false);
console.log(checked+' concrete replica codes/patterns, serial limitations and research routing checks passed.');
