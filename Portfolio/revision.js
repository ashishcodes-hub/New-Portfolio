
function toggleMenu(){
  const nav=document.getElementById("navLinks");
  if(nav) nav.classList.toggle("open");
}
document.querySelectorAll(".reveal").forEach((el,i)=>{
  setTimeout(()=>el.classList.add("show"),80+i*45);
});
document.querySelectorAll("[data-count]").forEach(el=>{
  const target=Number(el.dataset.count), duration=1000, start=performance.now();
  function tick(now){
    const p=Math.min((now-start)/duration,1);
    const value=Math.floor((1-Math.pow(1-p,3))*target);
    el.textContent=value;
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
const form=document.getElementById("contactForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=document.getElementById("firstName").value+" "+document.getElementById("lastName").value;
    const email=document.getElementById("email").value;
    const service=document.getElementById("service").value;
    const message=document.getElementById("message").value;
    const subject=encodeURIComponent("Portfolio enquiry - "+service);
    const body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\nService: "+service+"\n\n"+message);
    window.location.href=`mailto:ashishyadav852897@gmail.com?subject=${subject}&body=${body}`;
  });
}
