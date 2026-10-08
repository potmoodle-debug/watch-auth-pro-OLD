import {normalize} from './core.js?v=qol01';
export function claspMatches(value,records){
 const clean=String(value||'').toUpperCase().normalize('NFKC'),compact=normalize(clean),canon=x=>normalize(x).replace(/O/g,'0'),tokens=clean.split(/[^A-Z0-9]+/).filter(Boolean).map(canon);
 return records.filter(r=>(r.clasps||[]).some(c=>{const code=canon(c),input=canon(compact);return code&&(input===code||tokens.includes(code)||(input.length>code.length&&(input.startsWith(code)||input.endsWith(code))));}));
}
export function needsResearch(rule,workflow){return workflow==='authentication'&&(!rule||!!rule.manualReview||!!rule.collectionOnly);}
export function serialHints(data,brand,serial,clasp,series,rule){
 const b=normalize(brand),s=normalize(serial),lines=[];
 if(b==='ROLEX'){
 if(/^\d{4,7}$/.test(s)){const v=Number(s),hit=(data.ROLEX_NUMERIC_SERIAL_MILESTONES||[]).find(([n])=>v>=n);lines.push('Historical numeric serial: '+(hit?.[1]||(v>=23000?'overlapping pre-1954 / 1954–1963 sequences':'early sequence; no precise year'))+'. Independent approximate benchmark; confirm against reference and movement.');}
 const c=normalize(clasp),m=c.match(/^([A-Z]{1,2})(\d{1,2})?$/),year=m&&data.ROLEX_CLASP_YEARS?.[m[1]];
 if(year&&(!m[2]||Number(m[2])>=1&&Number(m[2])<=12))lines.push('Historical clasp chart: '+year+(m[2]?' · month '+Number(m[2]):'')+'. Clasp/component estimate, not the watch production date; replacement clasps are possible.');
 else if(c)lines.push('No production date is inferred from this modern/unmapped clasp code.');
 }else if(b==='TUDOR'&&s){const t=estimateTudorSerial(s,data);if(t)lines.push((t.estimate?'Approximate Tudor benchmark: '+t.estimate+'. ':'')+t.note);}
 else if(b==='OMEGA'&&s){const speed=series==='speedmaster'||series==='auto'&&/speedmaster/i.test(rule?.family||rule?.model||'');const chart=speed?'speedmaster':'standard';const v=Number(s),hit=/^\d{7,8}$/.test(s)&&(data.OMEGA_SERIAL_RANGES?.[chart]||[]).find(([lo,hi])=>v>=lo&&(hi==null||v<=hi));lines.push(hit?'Approximate Omega '+chart+' chart: '+hit[2]+'. Independent chart, not an official archive date.':'No supported date in the selected Omega '+chart+' chart.');if(speed&&v>=70000000)lines.push('Modern Speedmaster serial sequences are not reliably year-datable from a generic chart; cross-check the exact reference generation.');}
 return lines;
}
        function nearestTudorBenchmark(value, benchmarks) {
            if (!Number.isFinite(value) || !benchmarks || !benchmarks.length) return null;
            return benchmarks.reduce((best, current) => {
                const distance = Math.abs(value - current[0]);
                return !best || distance < best.distance ? { serial: current[0], year: current[1], distance } : best;
            }, null);
        }

        function estimateTudorSerial(serial, data) {
            const clean = String(serial || '').trim().toUpperCase().replace(/[\s-]+/g, '');
            if (!clean) return null;

            if (/^\d{5,7}$/.test(clean)) {
                const value = Number(clean);
                const early = nearestTudorBenchmark(value, data.TUDOR_NUMERIC_SERIAL_BENCHMARKS||[]);
                const reset = nearestTudorBenchmark(value, data.TUDOR_RESET_SERIAL_BENCHMARKS||[]);
                const inResetBand = value >= 140000 && value <= 260000;
                const overlapsEarlyTable = value >= 240000 && value <= 260000;

                if (inResetBand) {
                    const alternatives = [];
                    if (reset) alternatives.push(`${reset.year} (nearest reset-era benchmark ${reset.serial})`);
                    if (overlapsEarlyTable && early) alternatives.push(`${early.year} (nearest early sequential benchmark ${early.serial})`);
                    return {
                        format: 'numeric',
                        estimate: alternatives.join(' or '),
                        ambiguous: true,
                        note: 'Tudor restarted its numeric sequence in the mid-1980s, so this range can overlap earlier serials. The case reference, dial, movement and construction must determine the correct era.'
                    };
                }

                if (early && value >= 240000 && value <= 999999) {
                    return {
                        format: 'numeric',
                        estimate: `${early.year} (nearest published benchmark ${early.serial})`,
                        ambiguous: false,
                        note: 'This is an estimated period from a published serial benchmark rather than an official Tudor archive result.'
                    };
                }

                return {
                    format: 'numeric',
                    estimate: null,
                    ambiguous: false,
                    note: 'The numeric value falls outside the embedded 1956–1989 benchmark table. Verify it against the exact reference and period-specific records.'
                };
            }

            const alphaMatch = clean.match(/^([A-Z])(\d{5,7})$/);
            if (alphaMatch) {
                const prefix = alphaMatch[1];
                const value = Number(alphaMatch[2]);
                const benchmarks = data.TUDOR_ALPHANUMERIC_SERIAL_BENCHMARKS?.[prefix];
                if (benchmarks) {
                    const nearest = nearestTudorBenchmark(value, benchmarks);
                    return {
                        format: 'alphanumeric',
                        estimate: nearest ? `${nearest.year} (nearest ${prefix}-series benchmark ${prefix}${nearest.serial})` : null,
                        ambiguous: false,
                        note: 'B- and H-prefix dates are collector-compiled estimates. Tudor does not publish a complete official modern serial chronology.'
                    };
                }
                return {
                    format: 'alphanumeric',
                    estimate: null,
                    ambiguous: false,
                    note: `The ${prefix}-prefix is not covered by the embedded 1990–2002 B/H benchmark table. Treat the format as modern or transitional guidance only.`
                };
            }

            if (/^[A-Z0-9]{5,12}$/.test(clean)) {
                return {
                    format: 'modern/unmapped',
                    estimate: null,
                    ambiguous: false,
                    unmapped: true,
                    note: 'The serial is a plausible Tudor alphanumeric structure, but it is not covered by the limited historical benchmark table. Record it exactly and assess it alongside the case reference, calibre, engraving and apparent age.'
                };
            }

            return {
                format: 'requires recheck',
                estimate: null,
                ambiguous: false,
                malformed: true,
                note: 'The entry contains an unexpected length or character. Recheck the engraving and confirm that the serial—not the model reference, bracelet code or another case marking—has been entered.'
            };
        }


export function replicaSignals(data,brand,serial,clasp,reference){
 if(normalize(brand)!=='ROLEX')return null;
 const records=data.REP_DATABASE||[],s=normalize(serial).replace(/O/g,'0'),cm=claspMatches(clasp,records);
 const pattern=(v,p)=>new RegExp('^'+p.replace(/O/g,'0').split('*').map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('[A-Z0-9]')+'$').test(v);
 const sm=s?records.filter(r=>(r.patterns||[]).some(p=>pattern(s,p))):[];
 const fragment=s?([...(data.BACKUP_RED_FLAGS?.prefixes||[]).filter(x=>s.startsWith(x)),...(data.BACKUP_RED_FLAGS?.suffixes||[]).filter(x=>s.endsWith(x))]):[];
 const known=s&&Object.hasOwn(data.KNOWN_FAKE_SERIAL_INTELLIGENCE||{},s);
 const combined=sm.filter(r=>cm.includes(r));
 return {serial:sm,clasp:cm,combined,fragment,known,reference:records.filter(r=>normalize(r.ref)===normalize(reference)),risk:!!(sm.length||cm.length||fragment.length||known)};
}
