

// const bgNavbar=document.getElementById("bg-navbar");

// window.onscroll=function(){
//  const scrollBar=window.scrollY;
//  if(scrollBar>100){
//     bgNavbar.classList.add("after-scroll-navbar")
//  }else{
//     bgNavbar.classList.remove("after-scroll-navbar") 
//  }
// }


// var bgNavbar=document.getElementById("bg-navbar");

// window.onscroll=function(){
// var scroll=window.scrollY;
// if(scroll>100){
//     bgNavbar.classList.add("after-scroll-navbar");  
// }else{
//     bgNavbar.classList.remove("after-scroll-navbar");   
// }
// }

const bgNavbar=document.getElementById("bg-navbar");

window.onscroll=function(){
const changeScroll=window.scrollY;
if(changeScroll>400){
    bgNavbar.classList.add("after-scroll-navbar") 
}else{
    bgNavbar.classList.remove("after-scroll-navbar")  
}
}