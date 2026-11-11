import {normalize} from './core.js?v=photos01';

const modernReferences=new Set([
 '124060','126610','126613','126618','126619',
 '126710','126711','126715','126718','126719','126720',
 '124270','124273','224270','226570',
 '126000','124200','124300','126200','126234','126300','126334',
 '126500','126503','126505','126506','126508','126509',
 '126600','126603','136660','126660','126067'
]);
const source='https://www.watchfinder.com/articles/feature-3-things-rolex';

export function rolexLecGuidance(brand,reference){
 if(normalize(brand)!=='ROLEX')return null;
 const ref=normalize(reference);
 const guidance={
  title:'LEC — confirm production period and crystal',
  text:'Check whether a laser-etched crown is appropriate for the exact reference, production period and fitted crystal. Rolex introduced it progressively in the early 2000s. Earlier watches and references spanning the change need individual review.',
  source
 };
 if(ref==='116400GV'){
  guidance.title='LEC — green-crystal Milgauss exception';
  guidance.text='The original green crystal on the Milgauss 116400GV normally has no laser-etched crown. Confirm that the fitted crystal is the correct green execution.';
 }else if(ref==='116400'){
  guidance.title='LEC — confirm the Milgauss crystal variant';
  guidance.text='Confirm whether this is the green-crystal GV execution. The original green crystal normally has no laser-etched crown. The clear-crystal version generally has one.';
 }else if(modernReferences.has(ref.replace(/[A-Z]+$/,''))&&/^\d{6}[A-Z]*$/.test(ref)){
  guidance.title='LEC — generally expected';
  guidance.text='For this modern reference family, a laser-etched crown is generally expected in the appropriate original sapphire crystal, usually near 6 o’clock. Confirm the exact crystal execution and service history.';
 }
 guidance.check='Use magnification and angled light. Record what you actually observe in Comments / supporting observations. Crystal replacement can affect the marking. Presence or absence alone does not establish authenticity.';
 return guidance;
}
