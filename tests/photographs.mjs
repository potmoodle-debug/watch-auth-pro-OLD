import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {matchingPhotographs,photographMatch,verifiedPhotograph,mergeReferenceRules} from '../photographs.js';

test('photographed Rolex case stamps keep full variant and movement execution boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=ref=>matchingPhotographs(photos,'Rolex',ref).filter(p=>p.id.startsWith('bukowskis-case-'));
 for(const [base,full,count] of [['116619','116619LB',5],['116710','116710LN',5],['116713','116713LN',5],['6305','6305/1',2],['6611','6611B',4]]){
  assert.equal(get(base).length,count);assert.equal(get(full).length,count);
  assert.ok(get(base).every(p=>p.matchScope==='representative variant'));
  assert.equal(get(base+'-0001').length,0);
 }
 for(const ref of ['116619LN','116710BLNR','116713LB','6304','6612'])assert.equal(get(ref).length,0,ref);
 const steel=get('116710').find(p=>p.category==='movement'),twoTone=get('116713').find(p=>p.category==='movement');
 assert.ok(steel&&twoTone);assert.notEqual(steel.image,twoTone.image);
 assert.ok(get('6305').every(p=>!['movement','braceletClasp'].includes(p.category)));
 assert.ok(get('6611').find(p=>p.category==='braceletClasp').caption.includes('gold-plated'));
 assert.equal(matchingPhotographs(photos,'Tudor','116619').length,0);
 assert.ok(matchingPhotographs(photos,'Rolex','116619',{externalOnly:true}).every(p=>p.category!=='movement'));
});

// Metadata fixtures test the matcher; these are not watch photographs or catalogue assets.
const fixture=(overrides={})=>({id:'fixture',brand:'Tudor',references:['M25600TN-0001','25600TN-0001'],representativeFor:['25600TN','M25600TN'],variant:'25600TN-0001 black dial / titanium bracelet',category:'front',title:'Test metadata only',caption:'Representative variant',credit:'Test fixture',image:'https://example.invalid/front.jpg',source:'https://example.invalid/reference',mediaKind:'photograph',review:{status:'verified',visualInspected:true,referenceVerified:true,executionVerified:true,inspectedAt:'2026-10-08',loadedAt:'2026-10-08',evidence:'Test metadata only'},...overrides});
test('only explicit identifiers match, including normalized punctuation',()=>{
 const p=fixture();assert.equal(photographMatch(p,'tu dor','m25600tn 0001'),'documented reference / variant');
 assert.equal(photographMatch(p,'Tudor','25600TN'),'representative variant');
 for(const ref of ['25600TB','25600T','25600TN-0002','M25600TN-9999'])assert.equal(photographMatch(p,'Tudor',ref),null);
 assert.equal(photographMatch(p,'Rolex','25600TN'),null);assert.equal(photographMatch(p,'Tudor',''),null);
});
test('a documented case reference retains an explicit representative-variant label',()=>{
 const p=fixture({brand:'Breitling',references:['A32360'],representativeFor:['A32360']});
 assert.equal(photographMatch(p,'Breitling','A 32360'),'representative variant');
 assert.equal(photographMatch(p,'Breitling','A32360B4/C698'),null);
});
test('neighbouring Rolex/Breitling/Cartier/Omega/Panerai references cannot inherit images',()=>{
 for(const [brand,ref,near] of [['Rolex','126610LN','126610LV'],['Breitling','A32360','A32350'],['Cartier','WSSA0022','WSSA0023'],['Omega','2254.50','2255.50'],['Panerai','PAM00024','PAM00025']]){
  const p=fixture({brand,references:[ref],representativeFor:[]});assert.equal(matchingPhotographs([p],brand,ref).length,1);assert.equal(matchingPhotographs([p],brand,near).length,0);
 }
 const omega=fixture({brand:'Omega',references:['232.30.46.51.01.001'],representativeFor:[]});assert.equal(matchingPhotographs([omega],'Omega','23230465101001').length,1);
});
test('pending, rejected, uninspected, rendering and unproven movement assets are withheld',()=>{
 const p=fixture();assert.ok(verifiedPhotograph(p));
 for(const key of ['visualInspected','referenceVerified','executionVerified','inspectedAt','loadedAt','evidence'])assert.equal(verifiedPhotograph({...p,review:{...p.review,[key]:false}}),false);
 for(const status of ['pending','rejected'])assert.equal(matchingPhotographs([fixture({review:{...p.review,status}})],'Tudor','25600TN').length,0);
 assert.equal(verifiedPhotograph(fixture({mediaKind:'render'})),false);
 assert.equal(verifiedPhotograph(fixture({image:'javascript:alert(1)'})),false);
});
test('safety restrictions suppress movement images while preserving external photographs',()=>{
 const front=fixture(),movement=fixture({id:'movement',category:'movement',image:'https://example.invalid/movement.jpg'});
 assert.equal(matchingPhotographs([front,movement],'Tudor','25600TN').length,2);
 assert.deepEqual(matchingPhotographs([front,movement],'Tudor','25600TN',{externalOnly:true}).map(p=>p.category),['front']);
});
test('shared refreshes keep public photographs independent of rule visual arrays',()=>{
 const local=[{brand:'Tudor',refs:['25600TN'],visuals:[]}];
 const shared=[{data:{brand:'Tudor',refs:['25600TN'],visuals:[{type:'MOVEMENT',image:'https://example.invalid/wrong'}]},status:'verified'}];
 const baseline=matchingPhotographs([fixture()],'Tudor','25600TN');
 for(let i=0;i<3;i++){const merged=mergeReferenceRules(local,shared);assert.equal(merged.length,1);assert.equal(local.length,1);assert.deepEqual(matchingPhotographs([fixture()],'Tudor','25600TN'),baseline);}
 assert.equal(mergeReferenceRules(local.concat({brand:'Tudor',refs:['25600TB']}),shared).length,2);
 assert.equal(mergeReferenceRules(local,[]).length,1);
});
test('coverage never promotes textual research to verified photographs',()=>{
 const catalogue=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url)));
 const coverage=JSON.parse(fs.readFileSync(new URL('../photograph-coverage.json',import.meta.url)));
 assert.equal(coverage.counts.sourceInventoryRecords,coverage.sourceRecords.length);
 assert.equal(coverage.counts.storedIdentifierKeys,coverage.inventory.length);
 assert.equal(coverage.counts.verifiedAssets,catalogue.photographs.filter(verifiedPhotograph).length);
 assert.equal(new Set(catalogue.photographs.map(p=>p.id)).size,catalogue.photographs.length);
 assert.ok(catalogue.photographs.some(p=>p.review.status==='rejected'&&p.category==='movement'));
 assert.match(coverage.completion,/IN PROGRESS/);
});
test('accepted specimen photographs retain material, period and movement boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=(brand,reference)=>matchingPhotographs(photos,brand,reference);
 const gold=forRef('Rolex','16618');assert.ok(gold.some(p=>p.id==='bukowskis-16618-front'));
 assert.ok(!forRef('Rolex','16610').some(p=>p.id==='bukowskis-16618-front'));
 assert.ok(!forRef('Rolex','126300-0007').some(p=>p.id==='bukowskis-126300-front'));
 assert.ok(!forRef('Tudor','M25407N-0001').some(p=>p.id==='bukowskis-25407n-front'));
 const early=forRef('Tudor','79160').filter(p=>p.category==='movement');
 const later=forRef('Tudor','79170').filter(p=>p.category==='movement');
 assert.ok(early.length&&later.length);assert.ok(early.every(p=>!later.some(q=>q.id===p.id)));
 assert.ok(early.every(p=>/plain printed rotor/.test(p.variant)));
 assert.ok(later.every(p=>/striped printed rotor/.test(p.variant)));
 assert.ok(forRef('Tudor','7032/0').every(p=>p.category!=='movement'));
 for(const reference of ['16220','16233','279171','6605','1680'])assert.ok(forRef('Rolex',reference).every(p=>p.category!=='front'),reference);
 assert.ok(forRef('Tudor','79090').some(p=>p.category==='front'&&p.variant.includes('1993 blue')));
 assert.ok(forRef('Tudor','79190').filter(p=>p.category==='front').every(p=>!p.variant.includes('1993 blue')));
});
test('archive movements require specimen identity and retain case and calibre boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=(brand,reference)=>matchingPhotographs(photos,brand,reference);
 const wrongSerial=photos.find(p=>p.id==='rejected-bukowskis-655-115-movement');
 assert.equal(wrongSerial.review.status,'rejected');
 assert.equal(verifiedPhotograph(wrongSerial),false);
 assert.ok(forRef('Omega','311.30.42.30.01.005').every(p=>p.category!=='movement'));
 const display=forRef('Omega','310.30.42.50.01.002');
 assert.ok(display.some(p=>p.category==='movement'));
 assert.ok(forRef('Omega','310.30.42.50.01.001').every(p=>!display.some(q=>q.id===p.id)));
 assert.ok(forRef('Panerai','PAM01316').some(p=>p.category==='front'));
 assert.ok(forRef('Panerai','PAM01316').every(p=>p.category!=='movement'));
 assert.ok(forRef('Panerai','PAM01305').every(p=>!forRef('Panerai','PAM01316').some(q=>q.id===p.id)));
 const newer=forRef('IWC','IW371609').filter(p=>p.category==='movement');
 assert.ok(newer.length);
 assert.ok(forRef('IWC','IW371417').every(p=>!newer.some(q=>q.id===p.id)));
});
test('Rolex specimen movements and service parts do not cross reference boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=reference=>matchingPhotographs(photos,'Rolex',reference);
 for(const [reference,near,calibre] of [['16570','216570','3186'],['16528','116520','4030'],['126660','116660','3235'],['268621','126621','2236']]){
  const movement=forRef(reference).filter(p=>p.category==='movement');
  assert.ok(movement.length,reference);
  assert.ok(movement.every(p=>p.caption.includes(calibre)),reference);
  assert.ok(forRef(near).every(p=>!movement.some(q=>q.id===p.id)),near);
 }
 for(const reference of ['16800','16660','118238','69173','6265'])assert.ok(forRef(reference).every(p=>p.category!=='front'),reference);
 const serviceBack=forRef('6265').find(p=>p.category==='caseback');
 assert.match(serviceBack.caption,/service replacement/i);
 assert.ok(forRef('126000-0006').every(p=>!forRef('126000').some(q=>q.id===p.id)));
 assert.ok(forRef('116400GV').every(p=>!forRef('116400').some(q=>q.id===p.id)));
});
test('documented Tudor configurations match full keys without inheriting other FXD executions',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=reference=>matchingPhotographs(photos,'Tudor',reference);
 const full=forRef('m25407n 0001');
 assert.ok(full.some(p=>p.id==='fratello-tudor-p39-front-7'));
 assert.ok(full.some(p=>p.category==='caseback'));
 assert.ok(full.some(p=>p.category==='braceletClasp'));
 assert.ok(full.every(p=>p.category!=='movement'));
 assert.ok(forRef('25407N-0002').every(p=>!full.some(q=>q.id===p.id)));
 assert.ok(forRef('25407').some(p=>full.some(q=>q.id===p.id)&&p.matchScope==='representative variant'));
 assert.equal(forRef('25407-0002').length,0);
 const carbon=forRef('25707KN');
 assert.ok(carbon.some(p=>p.category==='front'));
 assert.ok(carbon.every(p=>p.category!=='movement'&&p.category!=='caseback'));
 assert.ok(forRef('25807KN').every(p=>!carbon.some(q=>q.id===p.id)));
 assert.ok(forRef('25717N').some(p=>p.id==='fratello-tudor-usn-front-13'));
 for(const reference of ['2542G257','2542G267NU'])assert.equal(forRef(reference).length,0);
});

test('Tudor GMT suffixes and silver movement execution retain documented boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=reference=>matchingPhotographs(photos,'Tudor',reference);
 const gmt=forRef('m7939g1a0nru 0001');
 assert.ok(gmt.some(p=>p.category==='front'));
 assert.ok(gmt.some(p=>p.category==='caseback'));
 assert.ok(forRef('M7939G1A0NRU-0002').every(p=>!gmt.some(q=>q.id===p.id)));
 assert.ok(forRef('7939G1A0').every(p=>!gmt.some(q=>q.id===p.id)));
 const silver=forRef('79010SG');
 assert.ok(silver.some(p=>p.category==='front'&&/aftermarket/.test(p.caption)));
 const movement=silver.filter(p=>p.category==='movement');
 assert.ok(movement.length);
 for(const reference of ['M79010SG-0001','79012M','79210CNU'])assert.ok(forRef(reference).every(p=>!movement.some(q=>q.id===p.id)),reference);
 assert.ok(forRef('M79360N-0013').every(p=>!p.id.startsWith('fratello-tudor-third-')));
 const originalChrono=forRef('79350');
 assert.ok(originalChrono.some(p=>p.category==='front'));
 assert.ok(originalChrono.every(p=>p.category!=='movement'));
 assert.ok(forRef('79360N').every(p=>!originalChrono.some(q=>q.id===p.id)));
 const greyBronze=forRef('M79250BA-0001');
 assert.ok(greyBronze.some(p=>p.category==='caseback'));
 assert.ok(forRef('M79250BA-0002').every(p=>!greyBronze.some(q=>q.id===p.id)));
 assert.ok(forRef('79012M').every(p=>!greyBronze.some(q=>q.id===p.id)));
 const north=forRef('91210N').filter(p=>p.category==='movement');
 assert.ok(north.length);
 assert.ok(north.every(p=>p.caption.includes('MT5621')));
 for(const reference of ['91210','M91210N-0002','79470'])assert.ok(forRef(reference).every(p=>!north.some(q=>q.id===p.id)),reference);
});

test('P01 prototype backs and current Ranger/Pelagos variants do not supply unsupported coverage',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=reference=>matchingPhotographs(photos,'Tudor',reference);
 const p01=forRef('70150');
 assert.ok(p01.some(p=>p.category==='front'));
 assert.ok(p01.some(p=>p.category==='braceletClasp'));
 assert.ok(p01.every(p=>p.category!=='caseback'&&p.category!=='movement'));
 const ultra=forRef('2543C1A7NU');
 assert.ok(ultra.some(p=>p.category==='front'));
 assert.ok(ultra.every(p=>p.category!=='movement'));
 assert.ok(forRef('25610TNL').every(p=>!ultra.some(q=>q.id===p.id)));
 const black=forRef('M79930-0001'),beige=forRef('M79930-0007');
 assert.ok(black.some(p=>p.id==='fratello-tudor-sixth-79930-front-3'));
 assert.ok(beige.some(p=>p.id==='fratello-tudor-sixth-79930-front-12'));
 assert.ok(black.every(p=>!beige.some(q=>q.id===p.id)));
 assert.ok(forRef('79930').some(p=>p.category==='caseback'));
 assert.ok(forRef('79930').every(p=>p.category!=='movement'));
 assert.ok(forRef('79950').every(p=>!black.some(q=>q.id===p.id)));
 assert.equal(forRef('79330').length,0);
 assert.ok(forRef('7939A1A0NU').some(p=>p.category==='front'));
 assert.ok(forRef('7939A1A0NU').every(p=>p.category!=='movement'));
});


test('new Tudor Black Bay configurations stay within documented suffixes and sample boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=reference=>matchingPhotographs(photos,'Tudor',reference);
 for(const [a,b] of [['M7939A1A0NU-0001','M7939A1A0NU-0003'],['M7943A1A0NU-0001','M7943A1A0NU-0002'],['M79000B-0001','M79000B-0002']]){
  const first=forRef(a),second=forRef(b);
  assert.ok(first.some(p=>p.category==='front'),a);
  assert.ok(second.some(p=>p.category==='front'),b);
  assert.ok(first.every(p=>!second.some(q=>p.id===q.id)),a+' versus '+b);
 }
 const burgundy=forRef('M7939A1A0RU-0002');
 assert.ok(burgundy.some(p=>p.category==='front'));
 assert.ok(forRef('M7939A1A0RU-0001').every(p=>!burgundy.some(q=>q.id===p.id)));
 const blue=forRef('79000B');
 assert.ok(blue.some(p=>p.category==='braceletClasp'));
 assert.ok(forRef('79000N').every(p=>!blue.some(q=>q.id===p.id)));
 const large=forRef('7943A1A0NU');
 assert.ok(large.some(p=>p.category==='front'));
 assert.ok(large.every(p=>p.category==='front'));
 assert.ok(forRef('7943A1A0').every(p=>!large.some(q=>q.id===p.id)));
 for(const ref of ['7939A1A0NU','7939A1A0RU','79000B'])assert.ok(forRef(ref).every(p=>p.category!=='movement'));
});

test('mixed Pelagos details and ETA/MT5602 Black Bays retain specimen boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=reference=>matchingPhotographs(photos,'Tudor',reference);
 const black=forRef('M25600TN-0001');
 assert.ok(black.some(p=>p.id==='fratello-seventh-25600tn-front-9'));
 assert.ok(black.every(p=>p.category==='front'));
 for(const ref of ['25600TB','25610TNL','2543C1A7NU'])assert.ok(forRef(ref).every(p=>!black.some(q=>p.id===q.id)));
 const eta=forRef('79220N').filter(p=>p.id.startsWith('bukowskis-643-31-'));
 assert.ok(eta.some(p=>p.category==='caseback'));
 assert.ok(eta.some(p=>p.category==='braceletClasp'));
 assert.ok(eta.every(p=>p.category!=='movement'));
 const manufacture=forRef('79230N');
 assert.ok(manufacture.some(p=>p.id==='monochrome-2016-79230n-front-5'));
 assert.ok(manufacture.every(p=>!eta.some(q=>p.id===q.id)));
 const qatar=forRef('79230R').filter(p=>p.id.startsWith('bukowskis-659-1106-'));
 assert.ok(qatar.some(p=>p.category==='front'&&p.variant.includes('State of Qatar')));
 assert.ok(qatar.every(p=>p.category!=='movement'));
 assert.ok(forRef('79220R').every(p=>!qatar.some(q=>p.id===q.id)));
 assert.equal(forRef('79230R/B/N').length,0);
});

test('paired physical case stamps retain representative labels and strict suffix boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const forRef=(reference,options)=>matchingPhotographs(photos,'Tudor',reference,options);
 for(const [stamp,full] of [['25407','25407N'],['25610T','25610TNL'],['79010S','79010SG'],['79733','79733N']]){
  const views=forRef(stamp);assert.ok(views.some(p=>p.category==='front'),stamp);
  assert.ok(views.every(p=>p.matchScope==='representative variant'&&p.caption.includes('case')),stamp);
  assert.ok(views.every(p=>forRef(full).some(q=>q.id===p.id)),stamp+' paired full reference');
  assert.equal(forRef(stamp+'-9999').length,0,stamp+' unobserved suffix');
 }
 assert.ok(forRef('79010S').some(p=>p.category==='movement'));
 assert.ok(forRef('79010S',{externalOnly:true}).every(p=>p.category!=='movement'));
 for(const ref of ['25600T','79012','25807K','MT5402','79360N-0013','M79360N-0013'])assert.equal(forRef(ref).length,0,ref+' unresolved or pending');
 assert.ok(forRef('25610T').every(p=>!forRef('25600TN').some(q=>p.id===q.id)));
 assert.ok(forRef('25807KN').every(p=>!forRef('25707KN').some(q=>p.id===q.id)));
 assert.equal(forRef('79733N-0005').length,0);
});


test('modern Rolex case aliases retain dial, generation and photographed execution boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Rolex',ref,options).filter(p=>p.id.startsWith('bukowskis-modern-'));
 for(const [base,full,n] of [['116610','116610LN',5],['116610','116610LV',5],['116500','116500LN',5],['116613','116613LN',5],['126610','126610LV',5],['126710','126710BLRO',5],['126613','126613LB',4]]){
  assert.equal(get(full).length,n,full);
  assert.ok(get(full).every(p=>get(base).some(q=>q.id===p.id)&&p.matchScope==='representative variant'));
  assert.equal(get(full+'-0001').length,0,full+' unsupported suffix');
 }
 assert.equal(get('116610').length,10);
 assert.ok(get('116610LN').every(p=>!get('116610LV').some(q=>q.id===p.id)));
 assert.ok(get('116610LV').every(p=>p.variant.includes('green dial')));
 assert.ok(get('126610LV').every(p=>p.variant.includes('black dial')));
 assert.ok(get('116610LV').every(p=>!get('126610LV').some(q=>q.id===p.id)));
 assert.ok(get('116500LN').find(p=>p.category==='movement').caption.includes('4130'));
 assert.equal(get('126500LN').length,3);
 assert.ok(get('126500LN').every(p=>p.category!=='movement'));
 assert.equal(get('126500').length,0);
 assert.ok(get('126613LB').every(p=>p.category!=='movement'));
 assert.ok(get('126710BLRO').find(p=>p.category==='movement').caption.includes('3285'));
 assert.ok(get('126710BLRO').every(p=>p.variant.includes('Jubilee')));
 for(const ref of ['126710BLNR','126610LN','116613LB','126613LN','116500LB'])assert.equal(get(ref).length,0,ref);
 assert.ok(get('126610LV',{externalOnly:true}).every(p=>p.category!=='movement'));
 assert.equal(matchingPhotographs(photos,'Tudor','116610').length,0);
});


test('specialist Rolex specimens keep explicit variants and photographed calibre evidence',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,opts)=>matchingPhotographs(photos,'Rolex',ref,opts).filter(p=>p.id.startsWith('rolex-specialist-'));
 assert.equal(get('116334').length,5);
 assert.ok(get('116334').find(p=>p.category==='movement').caption.includes('3136'));
 assert.equal(get('116334').find(p=>p.category==='movement').image,get('116334').find(p=>p.category==='caseback').image);
 for(const ref of ['116621','116655']){
  assert.equal(get(ref).length,2);
  assert.ok(get(ref).every(p=>!['movement','braceletClasp'].includes(p.category)));
 }
 assert.equal(get('116710BLNR').length,5);
 assert.ok(get('116710BLNR').every(p=>get('116710').some(q=>q.id===p.id)&&p.matchScope==='representative variant'));
 assert.ok(get('116710BLNR').find(p=>p.category==='movement').caption.includes('3186'));
 for(const ref of ['116710LN','126710BLNR','126621','126655','126334','116334-0001'])assert.equal(get(ref).length,0,ref);
 assert.ok(get('116334',{externalOnly:true}).every(p=>p.category!=='movement'));
 assert.equal(matchingPhotographs(photos,'Tudor','116334').length,0);
});

test('Loupe archive specimens retain documented suffix, case and calibre boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=ref=>matchingPhotographs(photos,'Rolex',ref).filter(p=>p.id.startsWith('loupe-archive-'));
 for(const ref of ['124060','134300','326934','224270','226570'])assert.equal(get(ref).length,3,ref);
 for(const [ref,suffix] of [['124060','0001'],['134300','0010'],['326934','0003'],['224270','0001'],['226570','0001']]){
  assert.equal(get(ref+'-'+suffix).length,3);assert.equal(get('M'+ref+'-'+suffix).length,3);
  assert.ok(get(ref).every(p=>p.matchScope==='representative variant'));
  assert.ok(get(ref).every(p=>p.category!=='movement'));
 }
 for(const ref of ['124060LN','134300-0001','134300-0004','326934-0004','214270','124270','226570-0002','M226570-0002','216570','6427','1002','18200'])assert.equal(get(ref).length,0,ref);
 assert.equal(get('18239').length,5);assert.match(get('18239').find(p=>p.category==='movement').caption,/3155/);
 assert.match(get('18239').find(p=>p.category==='movement').review.evidence,/incorrectly says 3055/);
 assert.equal(get('5500').length,5);assert.match(get('5500').find(p=>p.category==='movement').caption,/1520/);
 assert.match(get('5500').find(p=>p.category==='braceletClasp').caption,/later equipment/);
 assert.equal(get('6426').length,4);assert.ok(get('6426').every(p=>p.category!=='movement'));
 assert.ok(matchingPhotographs(photos,'Rolex','18239',{externalOnly:true}).every(p=>p.category!=='movement'));
 assert.equal(matchingPhotographs(photos,'Tudor','134300').length,0);
});

test('photographed Rolex configurations keep Jubilee, dial and numeric case boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=ref=>matchingPhotographs(photos,'Rolex',ref).filter(p=>p.id.startsWith('loupe-config-'));
 for(const [ref,n] of [['116000',5],['116900',3],['124200',3],['124300',3],['126200',3],['126600',3],['126710BLNR',3],['126711',4],['126711CHNR',4]])assert.equal(get(ref).length,n,ref);
 for(const [ref,suffix] of [['116900','0001'],['124300','0003'],['126200','0017'],['126710BLNR','0002']]){
  assert.equal(get(ref+'-'+suffix).length,3);assert.equal(get('M'+ref+'-'+suffix).length,3);
 }
 for(const ref of ['116000-0001','124200-0001','124300-0001','126200-0016','126600-0001','126710','126710BLRO','126710BLNR-0003','126711CHNR-0002','2080','116200','126900'])assert.equal(get(ref).length,0,ref);
 assert.match(get('116000').find(p=>p.category==='movement').caption,/3130/);
 for(const ref of ['116900','124200','124300','126200','126600','126710BLNR','126711'])assert.ok(get(ref).every(p=>p.category!=='movement'));
 assert.match(get('126710BLNR').find(p=>p.category==='braceletClasp').caption,/Jubilee/);
 assert.match(get('126200').find(p=>p.category==='front').variant,/Wimbledon.*Jubilee/);
 assert.match(get('116900').find(p=>p.category==='caseback').caption,/not a standard 116900 baseline/);
 assert.ok(matchingPhotographs(photos,'Rolex','116000',{externalOnly:true}).every(p=>p.category!=='movement'));
});


test('external-only lookups suppress opened photographs reused under other categories',()=>{
 const front=fixture(),movement=fixture({id:'movement-restricted',category:'movement',image:'https://example.invalid/opened.jpg',review:{...fixture().review,imageSha256:'same-file'}});
 const back=fixture({id:'back-restricted',category:'caseback',image:movement.image});
 const alternateUrl=fixture({id:'alternate-opened',category:'caseback',image:'https://example.invalid/another-url.jpg',review:{...fixture().review,imageSha256:'same-file'}});
 const unverifiedMovementBack=fixture({id:'unverified-movement-back',category:'caseback',depictsMovement:true,image:'https://example.invalid/unverified-opened.jpg'});
 const closed=fixture({id:'closed',category:'caseback',image:'https://example.invalid/closed.jpg'});
 const catalogue=[front,movement,back,alternateUrl,unverifiedMovementBack,closed];
 assert.equal(matchingPhotographs(catalogue,'Tudor','25600TN').length,6);
 assert.deepEqual(matchingPhotographs(catalogue,'Tudor','25600TN',{externalOnly:true}).map(p=>p.id),['fixture','closed']);
});

test('vintage physical case and calibre stamps override incorrect catalogue text',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=ref=>matchingPhotographs(photos,'Rolex',ref).filter(p=>p.id.startsWith('loupe-vintage-'));
 for(const [ref,n] of [['14010M',6],['14270',5],['15000',6],['16628',5],['18039',5],['1807',5],['6694',4],['6542',5]])assert.equal(get(ref).length,n,ref);
 for(const ref of ['14010','214270','1500','16620','18000','1803','6542-0001','6694-0001'])assert.equal(get(ref).length,0,ref);
 for(const [ref,cal] of [['14010M','3130'],['14270','3000'],['15000','3035'],['16628','3135'],['18039','3055'],['1807','1556'],['6694','1225'],['6542','1066']])assert.ok(get(ref).find(p=>p.category==='movement').caption.includes(cal));
 assert.match(get('6542').find(p=>p.category==='movement').caption,/listing says 1030 incorrectly/);
 assert.match(get('6542').find(p=>p.category==='braceletClasp').caption,/MADE IN ENGLAND/);
 for(const ref of ['14010M','14270','15000','16628','18039','1807','6694','6542']){
  const restricted=matchingPhotographs(photos,'Rolex',ref,{externalOnly:true});
  const opened=photos.filter(p=>p.category==='movement').map(p=>p.review.imageSha256||p.image);
  assert.ok(restricted.every(p=>!opened.includes(p.review.imageSha256||p.image)&&p.depictsMovement!==true));
  assert.ok(restricted.some(p=>p.category==='front'));
 }
 const uncertain=matchingPhotographs(photos,'Rolex','6426',{externalOnly:true});
 assert.ok(uncertain.every(p=>p.depictsMovement!==true));
});


test('service specimens retain exact case, calibre and replacement-part boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=ref=>matchingPhotographs(photos,'Rolex',ref).filter(p=>p.id.startsWith('loupe-service-'));
 for(const [ref,n] of [['126720VTNR',3],['226627',3],['228239',3],['268622',6],['278278',3],['5508',6],['6204',5],['6205',5],['6538',5]])assert.equal(get(ref).length,n,ref);
 for(const ref of ['126720','126720VTNR-0001','6536','6536/1','2470','5508-0001'])assert.equal(get(ref).length,0,ref);
 assert.match(get('268622').find(p=>p.category==='movement').caption,/2235 incorrectly.*2236/);
 assert.match(get('5508').find(p=>p.category==='braceletClasp').caption,/later Jubilee-coded replacement clasp/);
 assert.match(get('278278').find(p=>p.category==='braceletClasp').caption,/internal clasp marks are not photographed/);
 for(const ref of ['126720VTNR','226627','228239','278278','6204','6205'])assert.ok(get(ref).every(p=>p.category!=='movement'));
 assert.ok(get('6538').every(p=>p.category!=='braceletClasp'));
 for(const ref of ['268622','5508','6204','6205','6538'])assert.ok(matchingPhotographs(photos,'Rolex',ref,{externalOnly:true}).every(p=>!p.depictsMovement));
});
test('restored Omega variants retain exact suffixes and restricted display-back handling',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Omega',ref,options).filter(p=>p.id.startsWith('loupe-moonwatch-'));
 assert.equal(get('31030425001001').length,3);
 assert.ok(get('310.30.42.50.01.001').every(p=>p.category!=='movement'));
 assert.equal(get('310.30.42.50.04.001').length,4);
 assert.match(get('310.30.42.50.04.001').find(p=>p.category==='movement').caption,/3861/);
 const external=get('310.30.42.50.04.001',{externalOnly:true});
 assert.deepEqual(external.map(p=>p.category).sort(),['braceletClasp','front']);
 for(const ref of ['310.30.42.50.01.002','310.30.42.50.04.002','310.30.42.50','310'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Rolex','310.30.42.50.04.001').length,0);
});

test('restored Cartier case alias and Breitling specimen scope remain explicit',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=ref=>matchingPhotographs(photos,'Cartier',ref).filter(p=>p.id.startsWith('loupe-cartier-4763'));
 assert.equal(get('WSSA0039').length,4);assert.equal(get('4072').length,4);
 assert.ok(get('4072').every(p=>p.category!=='movement'));
 for(const ref of ['WSSA0039-0001','WSSA0018','4073'])assert.equal(get(ref).length,0);
 for(const ref of ['A13362','A59028'])assert.equal(matchingPhotographs(photos,'Breitling',ref).filter(p=>p.id.startsWith('breitling-audit-')).length,1);
 assert.equal(matchingPhotographs(photos,'Breitling','A13362-0001').filter(p=>p.id.startsWith('breitling-audit-')).length,0);
});
test('resumed Globemaster and Submersible research keeps unsupported movement and suffixes empty',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Omega',ref,options).filter(p=>p.id.startsWith('ewc-45681'));
 assert.equal(get('13030392103001').length,3);assert.ok(get('130.30.39.21.03.001').every(p=>p.category!=='movement'));
 assert.deepEqual(get('130.30.39.21.03.001',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);
 for(const ref of ['130.30.39.21.02.001','130.33.39.21.03.001','130.30.39.21'])assert.equal(get(ref).length,0,ref);
 const pan=matchingPhotographs(photos,'Panerai','PAM00024').filter(p=>p.id.startsWith('phillips-hk080216'));
 assert.deepEqual(pan.map(p=>p.category),['front']);
 assert.equal(matchingPhotographs(photos,'Panerai','PAM01024').filter(p=>p.id.startsWith('phillips-hk080216')).length,0);
});
test('Panerai specimen research preserves exact PAM, manual execution and absent views',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Panerai',ref,options).filter(p=>p.id.startsWith('panerai-pass-'));
 for(const ref of ['PAM00091','PAM00287','PAM00380','PAM00557'])assert.equal(get(ref).length,3,ref);
 for(const ref of ['PAM00091','PAM00287','PAM00380'])assert.ok(get(ref).every(p=>p.category!=='movement'));
 assert.match(get('PAM00557').find(p=>p.category==='movement').caption,/manual.*P\.3000.*two-screw/);
 assert.ok(get('PAM00557').every(p=>p.category!=='braceletClasp'));
 assert.deepEqual(get('PAM00557',{externalOnly:true}).map(p=>p.category),['front']);
 for(const ref of ['PAM00372','PAM00090','PAM00288','OP6558','OP6987','PAM00557-0001'])assert.equal(get(ref).length,0,ref);
 assert.ok(get('PAM00380').every(p=>p.caption.includes('490 px')));
});
test('second Panerai batch keeps photographed manual executions and masked identities scoped',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Panerai',ref,options).filter(p=>p.id.startsWith('panerai-pass2-'));
 assert.equal(get('PAM00574').length,4);
 assert.match(get('PAM00574').find(p=>p.category==='movement').caption,/manual.*21 JEWELS.*two-screw/);
 assert.equal(get('PAM00609').length,0);
 const pending=photos.filter(p=>p.id.startsWith('panerai-pass2-pam00609'));assert.equal(pending.length,3);assert.ok(pending.every(p=>p.review.status==='pending'));assert.match(pending.find(p=>p.category==='movement').caption,/P\.5000.*020836.*two-screw/);
 assert.ok(get('PAM00609').every(p=>p.category!=='braceletClasp'));
 for(const ref of ['PAM00574','PAM00609'])assert.ok(get(ref,{externalOnly:true}).every(p=>!['movement','caseback'].includes(p.category)));
 for(const ref of ['PAM01005','PAM01024']){assert.equal(get(ref).length,3);assert.ok(get(ref).every(p=>p.category!=='movement'));}
 for(const ref of ['PAM00024','PAM00575','PAM00610','PAM01000','PAM01024-0001','PAM24'])assert.equal(get(ref).length,0,ref);
});

test('PAM00915 closed-back specimen cannot inherit a photographed P.5000 or neighbouring reference',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;const get=ref=>matchingPhotographs(photos,'Panerai',ref).filter(p=>p.id.startsWith('panerai-pass3-'));assert.deepEqual(get('PAM00915').map(p=>p.category).sort(),['braceletClasp','caseback','front']);for(const ref of ['PAM00914','PAM00916','PAM00609','PAM915'])assert.equal(get(ref).length,0,ref);
});

test('PAM01271 white Quaranta retains full reference and closed-back evidence',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;const get=ref=>matchingPhotographs(photos,'Panerai',ref).filter(p=>p.id.startsWith('panerai-pass4-'));assert.deepEqual(get('PAM01271').map(p=>p.category).sort(),['braceletClasp','caseback','front']);assert.ok(get('PAM01271').every(p=>p.variant.includes('white')));for(const ref of ['PAM01372','PAM01272','PAM1271','PAM01271-0001'])assert.equal(get(ref).length,0,ref);
});

test('final stored Panerai keys preserve actual execution and external-only background suppression',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;const get=(ref,options)=>matchingPhotographs(photos,'Panerai',ref,options).filter(p=>p.id.startsWith('panerai-pass5-'));assert.equal(get('PAM01305').length,4);assert.match(get('PAM01305').find(p=>p.category==='movement').caption,/automatic.*31.*two-screw/);assert.deepEqual(get('PAM01305',{externalOnly:true}).map(p=>p.category),['front']);assert.deepEqual(get('PAM01572').map(p=>p.category).sort(),['braceletClasp','caseback','front']);for(const ref of ['PAM00305','PAM01305-0001','PAM01573','OP7607','PAM1572'])assert.equal(get(ref).length,0,ref);const p574=matchingPhotographs(photos,'Panerai','PAM00574',{externalOnly:true}).filter(p=>p.id.startsWith('panerai-pass2-'));assert.deepEqual(p574.map(p=>p.category),['front']);
});

test('Sinn 104 representative white execution cannot borrow U15 UX or ETA comparison evidence',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;const get=(ref,options)=>matchingPhotographs(photos,'Sinn',ref,options).filter(p=>p.id.startsWith('sinn-pass-'));assert.equal(get('104 St Sa I W').length,4);assert.ok(get('104 St Sa I W').every(p=>p.matchScope==='documented reference / variant'));for(const ref of ['104','Sinn 104'])assert.ok(get(ref).every(p=>p.matchScope==='representative variant'));assert.deepEqual(get('104',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);for(const ref of ['104 St Sa I','104 St Sa A','UX','U15','104 St Sa I B'])assert.equal(get(ref).length,0,ref);assert.ok(get('104').every(p=>!p.image.includes('U15')&&!p.image.includes('Sinn-UX')));assert.match(get('104').find(p=>p.category==='movement').caption,/SW220-1.*no legible physical calibre/);
});

test('U1 SDR specimen retains black-bezel scope and a genuine movement gap',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;const get=ref=>matchingPhotographs(photos,'Sinn',ref).filter(p=>p.id.startsWith('sinn-pass-u1sdr'));for(const ref of ['U1 SDR','Sinn U1 SDR'])assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);for(const ref of ['1010','U1','U1 SDR B','U1 S','1010.040'])assert.equal(get(ref).length,0,ref);assert.match(get('U1 SDR').find(p=>p.category==='caseback').caption,/Seller-blurred identity/);
});

test('Sinn Anniversary and Arktis specimens preserve display-back and model boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Sinn',ref,options).filter(p=>p.id.startsWith('sinn-three-'));
 assert.equal(get('358 Anniversary').length,4);
 assert.ok(get('358').every(p=>p.matchScope==='representative variant'));
 assert.deepEqual(get('358',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);
 assert.equal(get('206 Arktis II').length,4);
 assert.deepEqual(get('206 Arktis II',{externalOnly:true}).map(p=>p.category),['front']);
 for(const ref of ['358 DIAPAL','358 Sa Pilot','206','203 Arktis','140','142','Sinn 140 / 42'])assert.equal(get(ref).length,0,ref);
 const review=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url))).identifierReviews.find(x=>x.brand==='SINN'&&x.reference==='Sinn 140 / 42');
 assert.match(review.categories.front.evidence,/particular specimen as a 142/);
 assert.ok(photos.every(p=>!p.id.startsWith('sinn-three-140')));
});

test('U50 Hydro stays external with quartz attribution distinct from photographed evidence',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Sinn',ref,options).filter(p=>p.id.startsWith('sinn-three-u50'));
 for(const ref of ['U50 Hydro','Sinn U50 Hydro']){
  assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);
  assert.equal(get(ref,{externalOnly:true}).length,3);
 }
 for(const ref of ['U50','U50 SDR','U50 S','1051','1051.010'])assert.equal(get(ref).length,0,ref);
 assert.ok(get('U50 Hydro').every(p=>p.review.evidence.includes('No opened movement')));
});

test('early anOrdain Model 2 cannot inherit current automatic or porcelain execution',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'anOrdain',ref,options).filter(p=>p.id.startsWith('anordain-pass-'));
 for(const ref of ['Model 2','anOrdain Model 2']){
  assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);
  assert.ok(get(ref).every(p=>p.matchScope==='representative variant'));
  assert.equal(get(ref,{externalOnly:true}).length,3);
 }
 for(const ref of ['Model 1','Model 2 Porcelain','Model 2 Racing Green','Model 2 Large','Model 2 A1'])assert.equal(get(ref).length,0,ref);
 assert.ok(get('Model 2').every(p=>p.review.evidence.includes('unrelated prop')));
 assert.match(get('Model 2').find(p=>p.category==='caseback').caption,/specimen-specific/);
 assert.match(get('Model 2').find(p=>p.category==='braceletClasp').caption,/signature is not legible/);
});

test('Riviera case 65900 keeps documented coating variant and blurred movement gap',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Baume & Mercier',ref,options).filter(p=>p.id.startsWith('baume-pass-'));
 assert.deepEqual(get('65900').map(p=>p.category).sort(),['braceletClasp','caseback','front']);
 assert.ok(get('65900').every(p=>p.matchScope==='representative variant'));
 assert.ok(get('M0A10617').every(p=>p.matchScope==='documented reference / variant'));
 assert.deepEqual(get('65900',{externalOnly:true}).map(p=>p.category),['front']);
 for(const ref of ['M0A10616','65901','10617','M0A10617-001'])assert.equal(get(ref).length,0,ref);
 assert.match(get('65900').find(p=>p.category==='caseback').caption,/calibre cannot be physically read/);
 const base=JSON.parse(fs.readFileSync(new URL('../intelligence.json',import.meta.url)));
 const rule=base.rules.find(x=>x.brand==='Baume & Mercier'&&x.baseReference==='65900');
 assert.match(rule.family,/Riviera Baumatic/);assert.equal(rule.manualReview,true);
 assert.ok(rule.calibre.includes('BM13-1975A'));assert.ok(!rule.calibre.includes('BM12-1975A'));
});

test('Bell and Ross broad keys retain exact identity gaps and labelled steel specimen',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bell & Ross',ref,options).filter(p=>p.id.startsWith('bell-pass-'));
 for(const ref of ['BR03','BR03-92-S']){
  assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);
  assert.ok(get(ref).every(p=>p.matchScope==='representative variant'));
  assert.equal(get(ref,{externalOnly:true}).length,3);
 }
 for(const ref of ['BR03-92','BR03-92-S-20','BR03-92-D','BR03-94','BRBRV1-92-S','BRV192-BL-ST/SCA'])assert.equal(get(ref).length,0,ref);
 const reviews=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url)));
 const v1=reviews.identifierReviews.find(x=>x.brand==='BELLROSS'&&x.reference==='BRBRV1-92-S');
 assert.match(v1.categories.front.finding,/unresolved/);
 assert.match(get('BR03').find(p=>p.category==='caseback').caption,/DO NOT UNSCREW/);
});
test('Bremont ALT1-C blue specimen has strict suffix and external-only boundaries',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-alt1c-'));
 assert.deepEqual(get('ALT1-C').map(p=>p.category).sort(),['braceletClasp','caseback','front','movement']);
 assert.ok(get('ALT1-C').every(p=>p.matchScope==='representative variant'));
 assert.equal(get('ALT1-C/BL').length,4);
 assert.deepEqual(get('ALT1-C',{externalOnly:true}).map(p=>p.category),['front']);
 for(const ref of ['ALT1-C-CR','ALT1-C/CR','ALT1-C/BL/R','ALT1-C-RG','ALT1-P2','ALT1-ZT/51'])assert.equal(get(ref).length,0,ref);
 assert.match(get('ALT1-C').find(p=>p.category==='movement').caption,/No legible calibre stamp/);
});
test('Cream ALT1-C photographs retain separate suffix, generation and view gaps',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-cream-'));
 assert.deepEqual(get('ALT1-C-CR').map(p=>p.category).sort(),['braceletClasp','front']);
 assert.ok(get('ALT1-C-CR').every(p=>p.matchScope==='representative variant'));
 assert.equal(get('ALT1-C/CR-R-S').length,2);
 assert.deepEqual(get('ALT1-C-CR',{externalOnly:true}).map(p=>p.category),['front']);
 assert.ok(get('ALT1-C/CR').every(p=>p.matchScope==='representative variant'));
 assert.equal(get('ALT1-C-CR-R-S').length,2);
 for(const ref of ['ALT1-C','ALT1-C/BL','ALT1-C-CR-B','ALT1-C2-CR-SS-R-S'])assert.equal(get(ref).length,0,ref);
 const review=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url))).identifierReviews.find(x=>x.brand==='BREMONT'&&x.reference==='ALT1-C-CR');
 assert.match(review.categories.movement.finding,/No unobscured view/);
 assert.match(review.categories.caseback.finding,/No unobscured view/);
});
test('ALT1-B special-project specimen cannot stand for neighbouring GMT or civilian suffixes',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-alt1b-'));
 assert.equal(get('ALT1-B').length,4);
 assert.ok(get('ALT1-B').every(p=>p.matchScope==='representative variant'&&p.variant.includes('28 Squadron')));
 assert.deepEqual(get('ALT1-B',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);
 for(const ref of ['ALT1-B-BK','ALT1-B/BK','ALT1-ZT/51','ALT1-Z','ALT1-C','ALT1-B Apache'])assert.equal(get(ref).length,0,ref);
 assert.match(get('ALT1-B').find(p=>p.category==='movement').caption,/No legible calibre stamp/);
 assert.match(get('ALT1-B').find(p=>p.category==='caseback').caption,/seller-masked identity/);
});
test('ALT1-ZT/51 keeps photographed GMT execution and missing back/movement separate',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-zt51-'));
 assert.deepEqual(get('ALT1-ZT/51').map(p=>p.category).sort(),['braceletClasp','front']);
 assert.ok(get('ALT1-ZT/51').every(p=>p.matchScope==='representative variant'));
 assert.equal(get('ALT1-ZT/51',{externalOnly:true}).length,2);
 for(const ref of ['ALT1-ZT/BK','ALT1-ZDG','ALT1-B','P-51','ALT1-ZT-51-R-S','ALT1-ZT-51-B'])assert.equal(get(ref).length,0,ref);
 assert.match(get('ALT1-ZT/51').find(p=>p.category==='braceletClasp').caption,/No readable clasp signature/);
 const review=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url))).identifierReviews.find(x=>x.brand==='BREMONT'&&x.reference==='ALT1-ZT/51');
 assert.match(review.categories.movement.finding,/No unobscured view/);
});
test('Bremont ALT1-P2 JET photographs retain actual strap and calibre limits',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-p2-'));
 assert.equal(get('Bremont ALT1-P2').length,4);
 assert.ok(get('Bremont ALT1-P2').every(p=>p.matchScope==='representative variant'&&p.variant.includes('brown leather')));
 assert.equal(get('ALT1-P2-JET').length,4);
 assert.deepEqual(get('Bremont ALT1-P2',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);
 for(const ref of ['ALT1-P2','ALT1-P','ALT1-P2-BK','ALT1-P2-JET-R-S','ALT1-B'])assert.equal(get(ref).length,0,ref);
 assert.match(get('Bremont ALT1-P2').find(p=>p.category==='movement').caption,/no legible calibre stamp/i);
 assert.match(get('Bremont ALT1-P2').find(p=>p.category==='braceletClasp').caption,/another black sailcloth strap/);
});
test('Solo 43mm representative specimen retains missing full identity and obscured movement limits',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-solo-'));
 assert.equal(get('SOLO-43').length,4);
 assert.ok(get('SOLO-43').every(p=>p.matchScope==='representative variant'));
 assert.deepEqual(get('SOLO-43',{externalOnly:true}).map(p=>p.category),['front']);
 assert.equal(get('SOLO-WH').length,4);
 for(const ref of ['Bremont Solo','Solo','SOLO-37','SOLO-34','SOLO43-BK-R-S','SOLO-WH-R-S','NA'])assert.equal(get(ref).length,0,ref);
 assert.match(get('SOLO-43').find(p=>p.category==='front').caption,/Reference NA/);
 assert.match(get('SOLO-43').find(p=>p.category==='movement').caption,/partly obscured/);
 assert.match(get('SOLO-43').find(p=>p.category==='braceletClasp').caption,/Movement remains visible/);
});
test('S300 photographs retain closed-back movement gap and strict neighbour exclusions',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-s300-'));
 for(const ref of ['Supermarine S300','S300']){assert.equal(get(ref).length,3);assert.ok(get(ref).every(p=>p.matchScope==='representative variant'));assert.equal(get(ref,{externalOnly:true}).length,3);}
 for(const ref of ['S301','S302','S500','S502','S300-BK-R-S','Supermarine','Supermarine S502'])assert.equal(get(ref).length,0,ref);
 assert.match(get('S300').find(p=>p.category==='caseback').caption,/No movement shown/);
 const reviews=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url)));
 assert.match(reviews.identifierReviews.find(x=>x.brand==='BREMONT'&&x.reference==='Supermarine S300').categories.movement.finding,/No opened movement/);
 assert.ok(reviews.sourceRecordReviews.some(x=>x.id==='RULE:0655'));
});
test('S502 JET retains specimen size limits, separate stand hardware and missing interior views',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-s502-'));
 for(const ref of ['Supermarine S502','S502-JET-R-S']){
  assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','front']);
  assert.ok(get(ref).every(p=>p.matchScope==='representative variant'&&p.variant.includes('43mm')));
  assert.equal(get(ref,{externalOnly:true}).length,2);
 }
 for(const ref of ['S502','S502-JET','S502-BK-R-S','S502-DLC-BAMFORD-L-S','S300','S302','S500'])assert.equal(get(ref).length,0,ref);
 assert.match(get('Supermarine S502').find(p=>p.category==='braceletClasp').caption,/display-stand closure is not watch hardware/);
 const review=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url))).identifierReviews.find(x=>x.brand==='BREMONT'&&x.reference==='Supermarine S502');
 for(const category of ['movement','caseback'])assert.match(review.categories[category].finding,/No unobscured back\/movement/);
});
test('Airco exact white leather reference does not inherit family patterns or interior imagery into external-only lookup',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-airco-'));
 assert.equal(get('AIRCO-M1-WH-R-S').length,4);
 assert.ok(get('AIRCO-M1-WH-R-S').every(p=>p.matchScope==='documented reference / variant'));
 assert.deepEqual(get('AIRCO-M1-WH-R-S',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);
 for(const ref of ['AIRCO','AIRCO-M1','AIRCO-M1-BK-R-S','AIRCO-M1-WH-B','AIRCO-M2-WH-R-S','AIRCO-M3'])assert.equal(get(ref).length,0,ref);
 assert.match(get('AIRCO-M1-WH-R-S').find(p=>p.category==='movement').caption,/No legible physical calibre stamp/);
 const reviews=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url)));
 assert.deepEqual(reviews.sourceRecordReviews.find(x=>x.id==='RULE:0619').enumeratedReferences,['AIRCO-M1-WH-R-S']);
});
test('Kingsman steel rubber specimen retains edition uncertainty and strict family limits',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-kingsman-'));
 assert.equal(get('BKM-SS').length,4);
 assert.equal(get('Bremont Kingsman').length,4);
 assert.ok(get('Bremont Kingsman').every(p=>p.matchScope==='representative variant'&&p.variant.includes('black rubber')));
 assert.deepEqual(get('BKM-SS',{externalOnly:true}).map(p=>p.category).sort(),['braceletClasp','front']);
 for(const ref of ['Kingsman','KINGSMAN/RG','BKM-DLC','BKM-SS-R-S','ALT1-WT','ALT1-B','220/500'])assert.equal(get(ref).length,0,ref);
 assert.match(get('BKM-SS').find(p=>p.category==='movement').caption,/No legible physical calibre stamp/);
 assert.match(get('BKM-SS').find(p=>p.category==='caseback').caption,/No edition number inferred/);
 const reviews=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url)));
 assert.deepEqual(reviews.sourceRecordReviews.find(x=>x.id==='RULE:0423').enumeratedReferences,['BKM-SS']);
});
test('Broadsword Recon preserves closed-back gap and does not inherit bronze or DLC execution',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'Bremont',ref,options).filter(p=>p.id.startsWith('bremont-pass-broadsword-'));
 for(const ref of ['BROADSWORD','BROADSWORD RECON','BROADSWORD-RECON-R-S']){
  assert.equal(get(ref).length,3);assert.equal(get(ref,{externalOnly:true}).length,3);
 }
 assert.ok(get('BROADSWORD').every(p=>p.matchScope==='representative variant'&&p.variant.includes('Recon')));
 for(const ref of ['BROADSWORD BRONZE','BROADSWORD DLC','BROADSWORD STEEL','BROADSWORD-BK-R-S','BROADSWORD-RECON-B','Bremont Broadsword'])assert.equal(get(ref).length,0,ref);
 assert.match(get('BROADSWORD').find(p=>p.category==='caseback').caption,/No movement shown/);
 const reviews=JSON.parse(fs.readFileSync(new URL('../photograph-reviews.json',import.meta.url)));
 for(const id of ['RULE:0503','RULE:0715'])assert.match(reviews.sourceRecordReviews.find(x=>x.id===id).categories.movement,/No opened movement/);
});

test('queued W5000156 photos preserve exact brand/reference and closed-back limits',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(brand,ref,externalOnly=false)=>matchingPhotographs(photos,brand,ref,{externalOnly}).filter(p=>p.id.startsWith('queue-cartier-w5000156-'));
 assert.deepEqual(get('Cartier','W5000156').map(p=>p.category).sort(),['braceletClasp','braceletClasp','caseback','caseback','front','front']);
 assert.equal(get('Cartier','W5000156',true).length,6);
 for(const ref of ['W5000256','W5001456','1840','Tank Francaise','W5000156-001'])assert.equal(get('Cartier',ref).length,0,ref);
 assert.equal(get('Omega','W5000156').length,0);
 assert.equal(get('Cartier','W5000156').filter(p=>p.category==='movement').length,0);
 assert.ok(get('Cartier','W5000156').every(p=>p.references.length===1&&!p.representativeFor.length));
});

test('A32360 blue specimen does not inherit Colt, full-suffix or opened-movement coverage',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Breitling',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-breitling-a32360-'));
 assert.deepEqual(get('A32360').map(p=>p.category).sort(),['braceletClasp','caseback','front']);
 assert.equal(get('A32360',true).length,3);
 assert.ok(get('A32360').every(p=>p.matchScope==='representative variant'));
 for(const ref of ['A32350','A32370','A32360B4/C698','A326B05PFA','A32360-001'])assert.equal(get(ref).length,0,ref);
 assert.equal(get('A32360').filter(p=>p.category==='movement').length,0);
});

test('queued Omega exact specimen suppresses all display-movement views externally',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Omega',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-omega-25025000-'));
 for(const ref of ['2502.50.00','25025000'])assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front','movement']);
 assert.deepEqual(get('25025000',true).map(p=>p.category),['front']);
 for(const ref of ['2502.50','2503.50.00','2504.50.00','2512.50.00','2502.50.00-001'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Longines','25025000').filter(p=>p.id.startsWith('queue-omega-')).length,0);
 assert.match(get('25025000').find(p=>p.category==='movement').caption,/No legible A\/B\/C\/D/);
});

test('WAY2113 partial specimen does not supply full-suffix or movement coverage',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,options)=>matchingPhotographs(photos,'TAG Heuer',ref,options).filter(p=>p.id.startsWith('queue-tag-way2113-'));
 assert.deepEqual(get('WAY2113').map(p=>p.category).sort(),['braceletClasp','caseback','front']);
 assert.equal(get('WAY2113',{externalOnly:true}).length,3);
 assert.ok(get('WAY2113').every(p=>p.matchScope==='representative variant'));
 for(const ref of ['WAY2113.BA0928','WAY2113.BA0910','WAY2113-0','WAY2110','WBD2113'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Omega','WAY2113').filter(p=>p.id.startsWith('queue-tag-way2113-')).length,0);
 assert.match(get('WAY2113').find(p=>p.category==='braceletClasp').caption,/protective film/);
});

test('PAM00992 exact execution keeps adjacent references and external movement views out',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Panerai',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-panerai-pam00992-'));
 assert.deepEqual(get('PAM00992').map(p=>p.category).sort(),['braceletClasp','caseback','front','movement']);
 assert.deepEqual(get('PAM00992',true).map(p=>p.category),['front']);
 for(const ref of ['PAM00993','PAM01243','PAM00992-001','OP7250'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Omega','PAM00992').filter(p=>p.id.startsWith('queue-panerai-')).length,0);
 assert.match(get('PAM00992').find(p=>p.category==='movement').caption,/open gear cutout/);
});

test('L37884 green specimen retains partial scope and closed movement gap',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Longines',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-longines-l37884-'));
 assert.deepEqual(get('L37884').map(p=>p.category).sort(),['braceletClasp','caseback','front']);
 assert.equal(get('L37884',true).length,3);assert.ok(get('L37884').every(p=>p.matchScope==='representative variant'));
 for(const ref of ['L37884066','L37884566','L37884966','L37904','L38904'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Omega','L37884').filter(p=>p.id.startsWith('queue-longines-l37884-')).length,0);
});

test('Cartier83041488 photos retain service limits without adjacent or case-code inheritance',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Cartier',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-cartier-83041488-'));
 assert.deepEqual(get('83041488').map(p=>p.category).sort(),['braceletClasp','caseback','front']);assert.equal(get('83041488',true).length,3);
 for(const ref of ['83041489','8191','81912','Santos Vendome','83041488-001'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Omega','83041488').filter(p=>p.id.startsWith('queue-cartier-83041488-')).length,0);
 assert.match(get('83041488').find(p=>p.category==='front').caption,/replacements/);
});

test('WBY1112 exact blue specimen stays separate from Aquaracer and undocumented suffixes',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'TAG Heuer',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-tag-wby1112-'));
 for(const ref of ['WBY1112','WBY1112.BA0042']){assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);assert.equal(get(ref,true).length,3);}
 assert.ok(get('WBY1112').every(p=>p.matchScope==='representative variant'));
 for(const ref of ['WBP1112','WBP1112.FT6199','WBY1111.BA0042','WBY1112.FT0000'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Omega','WBY1112').filter(p=>p.id.startsWith('queue-tag-wby1112-')).length,0);
});

test('Legend Diver green bracelet photos do not supply other dial, strap or size variants',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Longines',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-longines-l37644-grand-'));
 for(const ref of ['L3.764.4','L3.764.4.06.6']){assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);assert.equal(get(ref,true).length,3);}
 assert.ok(get('L3.764.4').every(p=>p.matchScope==='representative variant'));
 for(const ref of ['L3.764.4.06.9','L3.764.4.50.0','L3.764.4.50.6','L3.764.4.50.7','L3.764.4.90.6','L3.764.4.90.7','L3.764.4.99.6','L3.764.4.96.6','L3.764.4.16.6','L3.774.4.06.6'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Omega','L3.764.4.06.6').filter(p=>p.id.startsWith('queue-longines-l37644-grand-')).length,0);
});

test('Omega007 NATO specimen does not supply mesh or neighbouring suffix coverage',()=>{
 const photos=JSON.parse(fs.readFileSync(new URL('../photographs.json',import.meta.url))).photographs;
 const get=(ref,externalOnly=false)=>matchingPhotographs(photos,'Omega',ref,{externalOnly}).filter(p=>p.id.startsWith('queue-omega-21092422001001-'));
 for(const ref of ['210.92.42.20.01.001','21092422001001']){assert.deepEqual(get(ref).map(p=>p.category).sort(),['braceletClasp','caseback','front']);assert.equal(get(ref,true).length,3);}
 for(const ref of ['21090422001001','21092422010001','21092422001002','Seamaster007'])assert.equal(get(ref).length,0,ref);
 assert.equal(matchingPhotographs(photos,'Tudor','21092422001001').filter(p=>p.id.startsWith('queue-omega-21092422001001-')).length,0);
 assert.match(get('21092422001001').find(p=>p.category==='caseback').caption,/do not prove military issue/);
});
