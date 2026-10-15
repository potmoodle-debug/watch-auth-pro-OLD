import * as cloud from './cloud.js?v=replica01';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const replicaLabel='Replica / user reported';
export function replicaWarningHTML(rows){
 return rows.filter(x=>x.status!=='rejected').map(x=>'<div class="notice stop"><strong>'+replicaLabel+' · '+esc(x.status)+'</strong><p>'+esc(x.indicators)+'</p><p>A report for this reference is a reason to investigate; it does not identify every watch with this reference as a replica.</p><button type="button" class="secondary" data-open-replica="'+esc(x.id)+'">View report &amp; replica photos</button></div>').join('');
}
export async function prepareReplicaImage(file){
 if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw new Error('Choose JPEG, PNG or WebP photographs.');
 if(file.size>10485760)throw new Error('Each original photo must be 10 MB or smaller.');
 const bitmap=await createImageBitmap(file);
 try{
 if(!bitmap.width||!bitmap.height||bitmap.width*bitmap.height>80000000)throw new Error('Image dimensions are too large.');
 const scale=Math.min(1,2400/Math.max(bitmap.width,bitmap.height)),canvas=document.createElement('canvas');
 canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);
 const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',0.9));
 if(!blob||blob.size>10485760)throw new Error('Could not prepare this photo. Choose a smaller image.');
 return blob;
 }finally{bitmap.close();}
}
export function setupReplicaGallery({getUser,getMember,requireTeam,refresh}){
 let generation=0,upload=null,jobs=[],busy=false;
 const dialog=document.createElement('dialog');dialog.id='replicaUploadDialog';
 dialog.innerHTML='<form id="replicaUploadForm"><div class="heading"><h2>Replica / user reported — add photos</h2><button type="button" id="replicaUploadClose" class="secondary">Close</button></div><p id="replicaUploadIdentity"></p><p>Team-only evidence, separate from genuine reference photographs. New photos start unreviewed. Select pictures or use your phone camera.</p><label>Photos (up to 12, JPEG / PNG / WebP, 10 MB each)<input id="replicaFiles" type="file" accept="image/jpeg,image/png,image/webp" multiple></label><label>Camera photo<input id="replicaCamera" type="file" accept="image/jpeg,image/png,image/webp" capture="environment"></label><label>Caption / observations (optional)<textarea id="replicaCaption" maxlength="500"></textarea></label><p id="replicaUploadStatus" role="status"></p><button id="replicaUploadSave" type="submit">Upload replica photos</button></form>';
 document.body.append(dialog);
 const $=id=>document.getElementById(id);
 const zoom=document.createElement('dialog');zoom.id='replicaPhotoDialog';zoom.className='photo-dialog';document.body.append(zoom);
 function clear(){generation++;jobs=[];upload=null;dialog.close();zoom.close();zoom.replaceChildren();document.querySelectorAll('[data-replica-gallery]').forEach(el=>el.replaceChildren());$('replicaFiles').value='';$('replicaCamera').value='';$('replicaCaption').value='';}
 function open(record){requireTeam();if(busy)throw new Error('Wait for the current photo upload.');upload=record;jobs=[];$('replicaFiles').value='';$('replicaCamera').value='';$('replicaCaption').value='';$('replicaUploadStatus').textContent='';$('replicaUploadIdentity').textContent=record.brand+' · '+record.reference;dialog.showModal();}
 $('replicaUploadClose').onclick=()=>dialog.close();
 dialog.addEventListener('cancel',e=>{if(busy)e.preventDefault();});
 $('replicaUploadForm').onsubmit=async e=>{
 e.preventDefault();if(busy)return;const owner=getUser()?.id,record=upload,epoch=generation;
 try{
 requireTeam();if(!record)throw new Error('Select a report first.');
 const files=[...$('replicaFiles').files,...$('replicaCamera').files];
 if(!jobs.length){if(!files.length||files.length>12)throw new Error('Choose between 1 and 12 photos.');jobs=files.map(file=>{const id=crypto.randomUUID();return {file,id,path:owner+'/'+record.id+'/'+id+'.jpg',uploaded:false,saved:false,caption:$('replicaCaption').value.trim()};});}
 busy=true;for(const id of ['replicaUploadSave','replicaUploadClose','replicaFiles','replicaCamera','replicaCaption'])$(id).disabled=true;
 for(const [index,job]of jobs.entries()){
 if(epoch!==generation||getUser()?.id!==owner)throw new Error('Session changed; reopen the report before uploading.');
 if(job.saved)continue;
 $('replicaUploadStatus').textContent='Uploading '+(index+1)+' of '+jobs.length+'…';
 if(!job.blob)job.blob=await prepareReplicaImage(job.file);
 if(!job.uploaded){try{await cloud.uploadReplica(job.path,job.blob);}catch(error){
 // A timed-out successful upload is detected by its unique path; never overwrite evidence.
 try{await cloud.replicaPhotoUrl(job.path);}catch{throw error;}
 }job.uploaded=true;}
 if(epoch!==generation||getUser()?.id!==owner)throw new Error('Session changed; upload stopped.');
 await cloud.insert('replica_photos',{id:job.id,register_id:record.id,author:owner,object_path:job.path,caption:job.caption},{query:'on_conflict=id',prefer:'resolution=ignore-duplicates,return=representation'});
 job.saved=true;
 }
 $('replicaUploadStatus').textContent='All photos saved as Replica / user reported · unreviewed.';jobs=[];
 $('replicaFiles').value='';$('replicaCamera').value='';await refresh();dialog.close();
 }catch(error){$('replicaUploadStatus').textContent=error.message+' Saved photos are retained. Retry to continue the remaining uploads.';}
 finally{busy=false;for(const id of ['replicaUploadSave','replicaUploadClose','replicaFiles','replicaCamera','replicaCaption'])$(id).disabled=false;}
 };
 async function render(container,record){
 const epoch=generation;container.textContent='Loading team-only replica photos…';
 try{
 const photos=await cloud.select('replica_photos',new URLSearchParams({register_id:'eq.'+record.id,order:'created_at.asc,id'}).toString());
 if(epoch!==generation||!container.isConnected)return;
 container.innerHTML='<p class="replica-label">'+replicaLabel+'</p><p class="muted">Report review: '+esc(record.status)+'. Photo review is shown separately; reviewed does not establish every watch with this reference as counterfeit.</p><div class="replica-grid"></div>';
 const grid=container.querySelector('.replica-grid');
 if(!photos.length)grid.textContent='No replica photos attached yet.';
 for(const photo of photos){
 const figure=document.createElement('figure');figure.innerHTML='<button type="button" class="replica-photo-open" disabled><span>Loading private photo…</span></button><figcaption><strong>'+replicaLabel+'</strong><p>Photo review: '+esc(photo.status)+'</p><p>'+esc(photo.caption)+'</p></figcaption>';
 grid.append(figure);const button=figure.querySelector('button');
 try{
 const url=await cloud.replicaPhotoUrl(photo.object_path);if(epoch!==generation||!container.isConnected)return;
 const img=document.createElement('img');img.src=url;img.alt=replicaLabel+' — '+record.brand+' '+record.reference+' — '+photo.caption;img.loading='lazy';img.referrerPolicy='no-referrer';
 img.onerror=()=>{button.disabled=true;button.textContent='Photo unavailable or link expired. Refresh the register to retry.';};
 button.replaceChildren(img);button.disabled=false;
 button.onclick=()=>{zoom.innerHTML='<div class="heading"><h2>'+replicaLabel+'</h2><button type="button" class="secondary">Close</button></div><p>'+esc(record.brand)+' · '+esc(record.reference)+' · Photo review: '+esc(photo.status)+'</p><div class="photo-zoom"></div><p>'+esc(photo.caption)+'</p>';zoom.querySelector('button').onclick=()=>{zoom.close();zoom.replaceChildren();};zoom.querySelector('.photo-zoom').append(img.cloneNode());zoom.showModal();};
 }catch{button.textContent='Photo could not be loaded. Refresh the register to retry.';}
 if(getMember()?.role==='admin')for(const [label,status]of [['Mark photo reviewed','reviewed'],['Reject photo','rejected'],['Reset photo review','unreviewed']]){
 const b=document.createElement('button');b.type='button';b.className='secondary';b.textContent=label;
 b.onclick=async()=>{b.disabled=true;try{requireTeam();await cloud.update('replica_photos',photo.id,{status});await refresh();}catch(error){b.textContent=error.message;b.disabled=false;}};
 figure.append(b);
 }
 }
 }catch(error){if(epoch===generation)container.textContent='Replica photos could not be loaded: '+error.message;}
 }
 return {open,render,clear};
}
