const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{
  const open=nav.style.display==="flex";
  nav.style.display=open?"none":"flex";
  if(!open){
    nav.style.position="absolute";
    nav.style.top="78px";
    nav.style.left="0";
    nav.style.right="0";
    nav.style.padding="20px 28px";
    nav.style.background="#09090b";
    nav.style.flexDirection="column";
  }
});
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",()=>{
    if(window.innerWidth<=800) nav.style.display="none";
  });
});
