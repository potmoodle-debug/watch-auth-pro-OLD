export const defaultWorkday={start:'09:00',end:'17:00',breaks:[{start:'10:00',end:'10:15'},{start:'12:30',end:'13:00'},{start:'14:00',end:'14:15'}]};
export function workdayBlocks(plan=defaultWorkday){
 const minute=v=>{if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(v||''))throw new Error('Enter valid workday and break times.');const [h,m]=v.split(':').map(Number);return h*60+m;};
 const start=minute(plan.start),end=minute(plan.end);if(end<=start)throw new Error('Finish must be after start on the same day.');
 if(!Array.isArray(plan.breaks))throw new Error('Enter your breaks.');
 const pauses=plan.breaks.map(b=>[minute(b.start),minute(b.end)]).sort((a,b)=>a[0]-b[0]);let at=start;const blocks=[];
 for(const [s,e]of pauses){if(e<=s||s<start||e>end)throw new Error('Each break must be within the workday and finish after it starts.');if(s<at)throw new Error('Breaks must not overlap.');if(s>at)blocks.push([at,s]);at=e;}
 if(at<end)blocks.push([at,end]);if(!blocks.length)throw new Error('Leave some working time outside your breaks.');return blocks;
}
export function performanceStats(completed,target,date=new Date(),plan=defaultWorkday){
 const blocks=workdayBlocks(plan),shiftStart=blocks[0][0],shiftEnd=Number(plan.end.slice(0,2))*60+Number(plan.end.slice(3));
 const [h,m]=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date).split(':').map(Number);
 const now=h*60+m,total=blocks.reduce((n,[s,e])=>n+e-s,0),elapsed=blocks.reduce((n,[s,e])=>n+Math.max(0,Math.min(e,now)-s),0);
 const expected=Math.floor(target*elapsed/total),difference=completed-expected,rate=elapsed>0?Math.max(0,completed)*60/elapsed:0;
 let finish='—',late=false;
 if(completed>=target)finish='Target reached';
 else if(rate>0){let remaining=(target-completed)*60/rate,at=Math.max(shiftStart,now);for(const [s,e] of blocks){const start=Math.max(at,s);if(start>=e)continue;const available=e-start;if(remaining<=available){at=start+remaining;remaining=0;break;}remaining-=available;at=e;}if(remaining>0)at=Math.max(shiftEnd,now)+remaining;const minutes=Math.ceil(at);late=minutes>shiftEnd;finish=late?`${Math.floor((minutes-shiftEnd)/60)}:${String((minutes-shiftEnd)%60).padStart(2,'0')} late`:`${Math.floor(minutes/60)}:${String(minutes%60).padStart(2,'0')}`;}
 return {expected,difference,rate,finish,late,against:now<shiftStart?'Before shift':difference<0?`${-difference} behind`:difference>0?`${difference} ahead`:'On target'};
}
export function resetCorrections(completed,author,workDate,makeId){
 if(!Number.isInteger(completed))throw new Error('Daily total is unavailable. Refresh before resetting.');
 const rows=[];let remaining=-completed;
 while(remaining){const contribution=Math.max(-50,Math.min(50,remaining));rows.push({id:makeId(),author,workflow:'correction',contribution,note:`Start new day: reset displayed count from ${completed} to zero. Previous inspections retained. Work date ${workDate}.`,details:{dayReset:true,previousTotal:completed,workDate}});remaining-=contribution;}
 return rows;
}
