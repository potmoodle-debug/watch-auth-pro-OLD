import {PROJECT_URL,PUBLISHABLE_KEY} from './config.js?v=lab02';
let session=null;try{session=JSON.parse(localStorage.getItem('benchauth.session'));}catch{}
let refreshPromise=null;
export const getSession=()=>session;
export function setSession(s){session=s?.access_token?s:null;if(session)localStorage.setItem('benchauth.session',JSON.stringify(session));else localStorage.removeItem('benchauth.session');}
async function request(path,{method='GET',body,headers={},auth=true}={}){
 if(auth){if(!session)throw new Error('Sign in to use shared records.');if(session.expires_at<Date.now()/1000+60){if(!refreshPromise)refreshPromise=refresh().finally(()=>refreshPromise=null);await refreshPromise;}}
 const response=await fetch(PROJECT_URL+path,{method,headers:{apikey:PUBLISHABLE_KEY,...(auth?{Authorization:'Bearer '+session.access_token}:{}),...(body?{'Content-Type':'application/json'}:{}),...headers},...(body?{body:JSON.stringify(body)}:{})});
 const data=await response.json().catch(()=>null);
 if(!response.ok)throw new Error(data?.msg||data?.message||data?.error_description||data?.error||'Request failed ('+response.status+').');
 return data;
}
async function refresh(){try{const s=await request('/auth/v1/token?grant_type=refresh_token',{method:'POST',auth:false,body:{refresh_token:session.refresh_token}});setSession({...s,expires_at:Date.now()/1000+s.expires_in});}catch(e){setSession(null);throw e;}}
export async function signIn(email,password){const s=await request('/auth/v1/token?grant_type=password',{method:'POST',auth:false,body:{email,password}});setSession({...s,expires_at:Date.now()/1000+s.expires_in});return s;}
export async function signUp(email,password){return request('/auth/v1/signup?redirect_to='+encodeURIComponent(location.origin+location.pathname),{method:'POST',auth:false,body:{email,password}});}
export async function confirmLink(link){const u=new URL(link),token_hash=u.searchParams.get('token')||u.searchParams.get('token_hash'),type=u.searchParams.get('type');if(!token_hash||!['signup','email','magiclink'].includes(type))throw new Error('Paste the complete Supabase confirmation link from your email.');const s=await request('/auth/v1/verify',{method:'POST',auth:false,body:{token_hash,type}});setSession({...s,expires_at:Date.now()/1000+s.expires_in});}
export async function signOut(){try{await request('/auth/v1/logout',{method:'POST'});}finally{setSession(null);}}
export function callback(){const h=new URLSearchParams(location.hash.slice(1));if(h.get('access_token')){setSession({access_token:h.get('access_token'),refresh_token:h.get('refresh_token'),expires_at:Date.now()/1000+Number(h.get('expires_in')||3600)});history.replaceState(null,'',location.pathname+location.search);}}
export const select=(table,query='')=>request('/rest/v1/'+table+'?'+query);
export const insert=(table,body,options={})=>request('/rest/v1/'+table+(options.query?'?'+options.query:''),{method:'POST',body,headers:{Prefer:options.prefer||'return=representation'}});
export const rpc=(name,body)=>request('/rest/v1/rpc/'+name,{method:'POST',body});
export const update=(table,id,body)=>request('/rest/v1/'+table+'?id=eq.'+encodeURIComponent(id),{method:'PATCH',body,headers:{Prefer:'return=representation'}});
export const user=()=>request('/auth/v1/user');
