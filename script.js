// header state
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('solid',scrollY>60),{passive:true});

// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.up').forEach(el=>io.observe(el));

// before/after
const rv=document.getElementById('rv'),hd=document.getElementById('hd');
let drag=false;
const set=x=>{const r=rv.getBoundingClientRect();let p=(x-r.left)/r.width*100;p=Math.max(0,Math.min(100,p));rv.style.setProperty('--x',p+'%');hd.style.left=p+'%'};
const start=e=>{drag=true;set((e.touches?e.touches[0]:e).clientX)};
const move=e=>{if(drag)set((e.touches?e.touches[0]:e).clientX)};
rv.addEventListener('mousedown',start);rv.addEventListener('touchstart',start,{passive:true});
addEventListener('mousemove',move);addEventListener('touchmove',move,{passive:true});
addEventListener('mouseup',()=>drag=false);addEventListener('touchend',()=>drag=false);
rv.style.setProperty('--x','50%');
