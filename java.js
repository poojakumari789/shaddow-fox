const menuBtn=document.querySelector("#menubtn");
const menu=document.querySelector(".nav-links");
const header=document.querySelector("header");
const ul=document.querySelector("ul");
menuBtn.addEventListener('click',()=>{
    if(menu.style.left==="0px"&&
       ul.style.left==="0px"
    ){
        menu.style.left="-100%";
        ul.style.left="-100%";
    }else{
        menu.style.left="0";
        ul.style.left="0";
    }
});

