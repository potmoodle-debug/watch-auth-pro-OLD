import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {resetCorrections} from '../performance.js';
const source=fs.readFileSync(new URL('../bench.js',import.meta.url),'utf8');const handlers={},cache=new Map(),records=new Map(),nodes={};let fail=true,serial=0;
const context=vm.createContext({resetCorrections,bind:(id,fn)=>handlers[id]=fn,requireTeam(){},user:{id:'USER'},daily:{completed:126,target:60},londonDay:()=> '2026-10-08',crypto:{randomUUID:()=>String(++serial)},localStorage:{getItem:k=>cache.get(k)||null,setItem:(k,v)=>cache.set(k,v),removeItem:k=>cache.delete(k)},$:id=>nodes[id]??(nodes[id]={showModal(){},close(){}}),status(){},URLSearchParams,cloud:{async insert(table,rows){for(const row of rows)records.set(row.id,row);if(fail){fail=false;throw new Error('Response lost');}},async select(){return [...records.values()];}}});
context.updatePerformance=async()=>{context.daily={completed:126+[...records.values()].reduce((n,r)=>n+r.contribution,0),target:60};};
vm.runInContext(source.slice(source.indexOf('let dayResetJob=null;')),context);
await handlers.startNewDay();await assert.rejects(handlers.dayResetConfirm(),/Response lost/);assert.equal(records.size,3);assert.ok(cache.get('benchauth.day-reset'));
await handlers.dayResetConfirm();assert.equal(records.size,3);assert.equal(context.daily.completed,0);assert.equal(context.daily.target,60);assert.equal(cache.has('benchauth.day-reset'),false);
console.log('Reset response-loss retry retains IDs, resets once and preserves target.');
