import {normalize} from './core.js?v=helpers01';
  const RULES = [
    {
      brands: ['TAG Heuer', 'Heuer', 'Breitling', 'Hamilton'],
      aliases: [/^(?:CAL(?:IBRE)?\s*)?11$/i, /^(?:CAL(?:IBRE)?\s*)?12$/i, /^(?:CAL(?:IBRE)?\s*)?14$/i, /^(?:CAL(?:IBRE)?\s*)?15$/i],
      expected: 'automatic',
      label: 'Chronomatic Calibre 11/12/14/15',
      note: 'This family is AUTOMATIC, not manual-wind. Calibre 11 uses a micro-rotor automatic base movement.',
      confirm: true
    },
    {
      brands: ['Zenith'],
      aliases: [/^3019\s*PHC$/i, /^EL\s*PRIMERO$/i, /^ELPRIMERO$/i],
      expected: 'automatic',
      label: 'Zenith El Primero / 3019 PHC',
      note: 'The original El Primero is an AUTOMATIC integrated chronograph movement.',
      confirm: true
    },
    {
      brands: ['Seiko'],
      aliases: [/^6138(?:[-\s].*)?$/i, /^6139(?:[-\s].*)?$/i],
      expected: 'automatic',
      label: 'Seiko 6138 / 6139',
      note: 'These vintage Seiko chronograph calibres are AUTOMATIC, not manual-wind.',
      confirm: true
    },
    {
      brands: null,
      aliases: [/^(?:VALJOUX\s*)?7750$/i, /^(?:VALJOUX\s*)?7751$/i],
      expected: 'automatic',
      label: 'Valjoux 7750 / 7751',
      note: 'Valjoux 7750-family chronographs are AUTOMATIC.',
      confirm: false
    },
    {
      brands: null,
      aliases: [/^(?:LEMANIA\s*)?5100$/i],
      expected: 'automatic',
      label: 'Lemania 5100',
      note: 'Lemania 5100 is an AUTOMATIC chronograph calibre.',
      confirm: true
    },
    {
      brands: ['Omega'],
      aliases: [/^(?:CAL(?:IBRE)?\s*)?1040$/i, /^(?:CAL(?:IBRE)?\s*)?1041$/i, /^(?:CAL(?:IBRE)?\s*)?1045$/i],
      expected: 'automatic',
      label: 'Omega 1040 / 1041 / 1045',
      note: 'These Omega chronograph calibres are AUTOMATIC.',
      confirm: true
    },
    {
      brands: ['Omega'],
      aliases: [/^(?:CAL(?:IBRE)?\s*)?321$/i, /^(?:CAL(?:IBRE)?\s*)?861$/i, /^(?:CAL(?:IBRE)?\s*)?1861$/i, /^(?:CAL(?:IBRE)?\s*)?1863$/i, /^(?:CAL(?:IBRE)?\s*)?3861$/i],
      expected: 'manual',
      label: 'Omega 321 / 861 / 1861 / 1863 / 3861',
      note: 'These Speedmaster-family calibres are MANUAL-WIND, not automatic.',
      confirm: true
    },
    {
      brands: null,
      aliases: [/^(?:VALJOUX\s*)?72$/i, /^(?:VALJOUX\s*)?7730$/i, /^(?:VALJOUX\s*)?7733$/i, /^(?:VALJOUX\s*)?7734$/i, /^(?:VALJOUX\s*)?7736$/i],
      expected: 'manual',
      label: 'Valjoux 72 / 7730 / 7733 / 7734 / 7736',
      note: 'These classic Valjoux chronograph calibres are MANUAL-WIND.',
      confirm: true
    },
    {
      brands: null,
      aliases: [/^(?:LEMANIA\s*)?2310$/i, /^(?:LEMANIA\s*)?1873$/i],
      expected: 'manual',
      label: 'Lemania 2310 / 1873',
      note: 'These Lemania chronograph calibres are MANUAL-WIND.',
      confirm: true
    },
    {
      brands: null,
      aliases: [/^(?:VENUS\s*)?175$/i, /^(?:VENUS\s*)?178$/i],
      expected: 'manual',
      label: 'Venus 175 / 178',
      note: 'These vintage Venus chronograph calibres are MANUAL-WIND.',
      confirm: true
    }
  ];
export function technologyReminder(brand,calibre,type){const c=String(calibre||'').trim().toUpperCase().replace(/\bCALIBRE\b|\bCAL\.?\b/g,'CAL ').replace(/[^A-Z0-9-]+/g,' ').replace(/\s+/g,' ').trim();const r=RULES.find(r=>(!r.brands||r.brands.some(b=>normalize(b)===normalize(brand)))&&r.aliases.some(x=>x.test(c)));if(!r||/not opened/i.test(type))return null;const selected=/manual|hand.?wind/i.test(type)?'manual':/automatic|self.?wind/i.test(type)?'automatic':/quartz|battery/i.test(type)?'quartz':'';return {level:selected&&selected!==r.expected?'caution':selected?'match':'notice',text:r.label+': '+r.note+(selected&&selected!==r.expected?' Selected technology conflicts — recheck it.':!selected?' Select the movement technology after examining the watch.':'')};}

