import {normalize} from './core.js?v=photos01';
import {verifiedPhotograph,photoCategories} from './photographs.js?v=photos01';
import {renderPhotoGallery} from './photo-gallery.js?v=search01';

// Discovery never adds aliases or changes an inspection's reference match.
export function searchPhotographs(catalogue,query,{category='',externalOnly=false}={}){
 const terms=String(query||'').trim().split(/\s+/).map(normalize).filter(Boolean);
 if(!terms.length)return [];
 const validCategories=new Set(photoCategories.map(([key])=>key));
 if(category&&!validCategories.has(category))return [];
 const interior=externalOnly?new Set(catalogue.filter(p=>verifiedPhotograph(p)&&p.category==='movement').flatMap(p=>[p.image,p.review?.imageSha256].filter(Boolean))):null;
 return catalogue.filter(p=>verifiedPhotograph(p)&&validCategories.has(p.category)&&(!category||p.category===category)&&
  (!externalOnly||(p.category!=='movement'&&p.depictsMovement!==true&&!interior.has(p.image)&&!interior.has(p.review?.imageSha256)))&&
  terms.every(term=>normalize([p.brand,...p.references,...(p.representativeFor||[]),p.title,p.variant,p.caption,p.credit].join(' ')).includes(term)))
  .map(p=>({...p,matchScope:'Catalogue search result — confirm reference and variant'}));
}

export function webImageSearchUrl(query,category='',{externalOnly=false}={}){
 const text=String(query||'').trim();if(!text)return '';
 if(externalOnly&&category==='movement')return '';
 const label=photoCategories.find(([key])=>key===category)?.[1]||'';
 const url=new URL('https://www.google.com/search');
 url.searchParams.set('tbm','isch');url.searchParams.set('q',[text,label,externalOnly?'watch exterior photographs -movement':'watch photographs'].filter(Boolean).join(' '));
 return url.href;
}

export function setupPhotoSearch({getPhotographs,getContext}){
 const dialog=document.createElement('dialog');dialog.id='photoSearchDialog';dialog.className='photo-dialog photo-search-dialog';dialog.setAttribute('aria-labelledby','photoSearchTitle');
 dialog.innerHTML='<div class="heading"><h2 id="photoSearchTitle">Search images</h2><button type="button" class="secondary" id="closePhotoSearch">Close</button></div>'+ 
  '<form id="photoSearchForm"><div class="fields two"><label>Brand, reference or photo details<input id="photoSearchQuery" type="search" placeholder="e.g. Bremont Kingsman or Tudor clasp" autocomplete="off"></label><label>Category<select id="photoSearchCategory"><option value="">All categories</option>'+photoCategories.map(([key,label])=>'<option value="'+key+'">'+label+'</option>').join('')+'</select></label></div><div class="actions"><button type="submit">Search catalogue</button><a id="webImageSearch" target="_blank" rel="noopener noreferrer" hidden>Search web images ↗</a></div></form>'+ 
  '<p class="muted">Catalogue results are source checked. Confirm the pictured reference and variant. Web results are unverified and may show other variants or renders.</p><p id="photoSearchRestriction" class="notice" hidden>External inspection only — movement images and views showing movements are withheld.</p>'+ 
  '<p id="photoSearchStatus" role="status" aria-live="polite"></p><div id="photoSearchResults"></div><button id="morePhotoSearch" type="button" class="secondary" hidden>Show more photographs</button>';
 document.body.append(dialog);
 const $=id=>dialog.querySelector('#'+id);let limit=20,timer;
 function render(){
  clearTimeout(timer);const {externalOnly=false}=getContext(),query=$('photoSearchQuery').value,category=$('photoSearchCategory').value;
  const photos=searchPhotographs(getPhotographs(),query,{category,externalOnly});
  const url=webImageSearchUrl(query,category,{externalOnly});$('webImageSearch').hidden=!url;if(url)$('webImageSearch').href=url;else $('webImageSearch').removeAttribute('href');
  $('photoSearchRestriction').hidden=!externalOnly;
  $('photoSearchStatus').textContent=!query.trim()?'Enter a brand, reference or photo details.':!photos.length?'No verified catalogue photographs match this search. Try fewer terms or search web images.':'Showing '+Math.min(limit,photos.length)+' of '+photos.length+' verified gallery entries.';
  $('photoSearchResults').hidden=!photos.length;$('morePhotoSearch').hidden=photos.length<=limit;
  renderPhotoGallery($('photoSearchResults'),photos.slice(0,limit),{externalOnly,searchResults:true});
 }
 const search=()=>{limit=20;render();};
 $('photoSearchForm').addEventListener('submit',e=>{e.preventDefault();search();});
 $('photoSearchQuery').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(search,150);});
 $('photoSearchCategory').addEventListener('change',search);
 $('morePhotoSearch').addEventListener('click',()=>{limit+=20;render();});
 $('closePhotoSearch').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>clearTimeout(timer));
 document.getElementById('searchImages').addEventListener('click',()=>{
  const context=getContext();$('photoSearchQuery').value=[context.brand,context.reference].filter(Boolean).join(' ');$('photoSearchCategory').value='';search();dialog.showModal();$('photoSearchQuery').focus();
 });
}
