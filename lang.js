var arbic = document.getElementById("arbic");
var english = document.getElementById("english");
var logo = document.getElementById("logo-titel");
arbic.onclick=()=>{
maz("arbic");
localStorage.setItem("lang",arbic);
};
english.onclick=()=>{
maz("english");
localStorage.setItem("lang",english);
};


onload= ()=>{
maz(localStorage.getItem("lang"));
}




function maz(zam){
if(zam==="arbic"){
 logo.innerHTML="مازن الشريف" ;  
 text.innerHTML="مرحب بك في صفحتي";
 contact.innerHTML="للتواصل معنا";
 mzz.innerHTML="2023حقوق النشر";
 
}else if(zam==="english"){
    logo.innerHTML="mazin alshrif" ;
    text.innerHTML="welcome in my web";
    contact.innerHTML="contact us";
    mzz.innerHTML="2023 Copyright";
   
}
}