import {photoCategories} from './photographs.js?v=photos01';

const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sourceLink=p=>'<a href="'+esc(p.source)+'" target="_blank" rel="noopener">Source and credit</a>';

export function renderPhotoGallery(container,photos,{externalOnly=false}={}){
 const categories=photoCategories.filter(([k])=>k!=='detail'||photos.some(p=>p.category===k));
 container.innerHTML=categories.map(([key,label])=>{
  const rows=photos.filter(p=>p.category===key);
  const restricted=externalOnly&&key==='movement';
  return '<section class="photo-category" data-category="'+key+'"><div class="heading"><h3>'+label+'</h3><small>'+rows.length+' verified</small></div>'+
   (restricted?'<p class="photo-gap">External inspection only — movement photographs withheld.</p>':!rows.length?'<p class="photo-gap">No verified photograph attached. Source review remains unresolved.</p>':'<div class="photo-grid">'+rows.map(p=>'<figure><button type="button" class="photo-open" data-photo-id="'+esc(p.id)+'" aria-label="Enlarge '+esc(p.title)+'"><img loading="lazy" decoding="async" referrerpolicy="no-referrer" src="'+esc(p.image)+'" alt="'+esc(p.title+' — '+p.variant)+'"><span>Click to enlarge</span></button><figcaption><strong>'+esc(p.title)+'</strong><p class="photo-scope">'+esc(p.matchScope)+' · '+esc(p.variant)+'</p><p>'+esc(p.caption)+'</p><small>'+esc(p.credit)+'</small><p>'+sourceLink(p)+'</p></figcaption></figure>').join('')+'</div>')+'</section>';
 }).join('');
 container.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{
  const button=img.closest('button');button.disabled=true;
  button.innerHTML='<span class="notice">Photograph unavailable. Open the source below; image loading is unresolved.</span>';
 }));
 container.onclick=e=>{
  const button=e.target.closest('[data-photo-id]');if(!button||button.disabled)return;
  const photo=photos.find(p=>p.id===button.dataset.photoId);if(photo)openPhotograph(photo);
 };
}

function openPhotograph(photo){
 let dialog=document.getElementById('photographDialog');
 if(!dialog){
  dialog=document.createElement('dialog');dialog.id='photographDialog';dialog.className='photo-dialog';
  dialog.setAttribute('aria-labelledby','photographTitle');document.body.append(dialog);
 }
 dialog.innerHTML='<div class="heading"><h2 id="photographTitle">'+esc(photo.title)+'</h2><button type="button" class="secondary photo-close">Close</button></div><p class="photo-scope">'+esc(photo.matchScope)+' · '+esc(photo.variant)+'</p><div class="photo-zoom"><img src="'+esc(photo.image)+'" alt="'+esc(photo.title)+'" referrerpolicy="no-referrer"></div><p>'+esc(photo.caption)+'</p><small>'+esc(photo.credit)+'</small><p>'+sourceLink(photo)+'</p><p class="muted">Scroll to examine details. A representative photograph does not establish an individual watch’s configuration or authenticity.</p>';
 dialog.querySelector('.photo-close').onclick=()=>dialog.close();
 dialog.querySelector('img').onerror=e=>{e.target.replaceWith(Object.assign(document.createElement('p'),{className:'notice',textContent:'Photograph unavailable. Use the source link.'}));};
 dialog.showModal();
}
