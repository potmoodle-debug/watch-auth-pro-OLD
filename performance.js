// Productive working minutes: London 09:00–17:00, excluding scheduled breaks.
const blocks=[[540,600],[615,750],[780,840],[855,1020]];
export function performanceStats(completed,target,date=new Date()){
 const [h,m]=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date).split(':').map(Number);
 const now=h*60+m,total=blocks.reduce((n,[s,e])=>n+e-s,0),elapsed=blocks.reduce((n,[s,e])=>n+Math.max(0,Math.min(e,now)-s),0);
 const expected=Math.floor(target*elapsed/total),difference=completed-expected,rate=elapsed>0?Math.max(0,completed)*60/elapsed:0;
 let finish='—',late=false;
 if(completed>=target)finish='Target reached';
 else if(rate>0){let remaining=(target-completed)*60/rate,at=Math.max(540,now);for(const [s,e] of blocks){const start=Math.max(at,s);if(start>=e)continue;const available=e-start;if(remaining<=available){at=start+remaining;remaining=0;break;}remaining-=available;at=e;}if(remaining>0)at=Math.max(1020,now)+remaining;const minutes=Math.ceil(at);late=minutes>1020;finish=late?`${Math.floor((minutes-1020)/60)}:${String((minutes-1020)%60).padStart(2,'0')} late`:`${Math.floor(minutes/60)}:${String(minutes%60).padStart(2,'0')}`;}
 return {expected,difference,rate,finish,late,against:now<540?'Before shift':difference<0?`${-difference} behind`:difference>0?`${difference} ahead`:'On target'};
}
export function resetCorrections(completed,author,workDate,makeId){
 if(!Number.isInteger(completed))throw new Error('Daily total is unavailable. Refresh before resetting.');
 const rows=[];let remaining=-completed;
 while(remaining){const contribution=Math.max(-50,Math.min(50,remaining));rows.push({id:makeId(),author,workflow:'correction',contribution,note:`Start new day: reset displayed count from ${completed} to zero. Previous inspections retained. Work date ${workDate}.`,details:{dayReset:true,previousTotal:completed,workDate}});remaining-=contribution;}
 return rows;
}
