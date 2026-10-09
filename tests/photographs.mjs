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
 const front=fixture(),movement=fixture({id:'movement',category:'movement'});
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
