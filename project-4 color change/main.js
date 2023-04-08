// const selectFontsize= document.getElementById("selectFontsize");
// const selectBgcolor= document.getElementById("selectBgcolor");
// const resetBtn= document.getElementById("resetBtn");
// const mainElement= document.querySelector("main");



// const setValues=(fontSize,BgColor)=>{
//     selectFontsize.value.fontSize
//     selectBgcolor.value.BgColor
//     mainElement.style.fontSize=fontSize;
//     mainElement.style.backgroundColor=BgColor;
// }



// // Localstroge Value
// const initialSetup=()=>{
//     const fontSize=localStorage.getItem("fontSize");
//     const BgColor=localStorage.getItem("bgColor");

//         if(fontSize && BgColor){
//             setValues(fontSize,BgColor)
//         }

//         if(!fontSize && !BgColor){
//             setValues("16px","aqua")
//         }

//         if(!BgColor && fontSize){
//             setValues(fontSize,"aqua")
//         }
//         if(BgColor && !fontSize){
//             setValues("16px",BgColor)
//         }
//     }



// // changeFontSize
// const changeFontSize=(event)=>{
// const selectFontsize=(event.target.value)
// mainElement.style.fontSize=selectFontsize;
// localStorage.setItem("fontSize",selectFontsize)
// };


// // changeBgcolor
// const changeBgcolor=(event)=>{
// const backgroundColor=(event.target.value)
// mainElement.style.backgroundColor=backgroundColor;
// localStorage.setItem("bgColor",backgroundColor)
// };

// // clearLocalstroge
// const clearLocalstroge=()=>{
//     localStorage.removeItem("fontSize");
//     localStorage.removeItem("bgColor");
//     setValues("16px","aqua")
// }


// // add event lisinner
// selectFontsize.addEventListener("change",changeFontSize);
// selectBgcolor.addEventListener("change",changeBgcolor);
// resetBtn.addEventListener("click",clearLocalstroge);
 
// initialSetup()



const selectFontsize=document.getElementById("selectFontsize");
const selectBgcolor=document.getElementById("selectBgcolor");
const resetBtn=document.getElementById("resetBtn");
const main=document.querySelector("main");

// fontSize change
const changeFontSize=(event)=>{
const  selectFontsize= (event.target.value);  
main.style.fontSize=selectFontsize;
localStorage.setItem("fontSize",selectFontsize);
}

// Color Change
  const changeBgColor=(event)=>{
    const selectBgcolor=(event.target.value);
    main.style.backgroundColor=selectBgcolor;
    localStorage.setItem("BgColor",selectBgcolor);
  }  




const setValues=(fontSize,BgColor)=>{
    selectFontsize.value=fontSize;
    selectBgcolor.value=BgColor
    main.style.fontSize=fontSize;
    main.style.backgroundColor=BgColor;
}



  // clearlocalStorage
  const clearlocalStorage=()=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("BgColor");
    setValues("16px","aqua")
  }  

const initialSetup=()=>{
const fontSize=localStorage.getItem("fontSize");
const BgColor=localStorage.getItem("BgColor"); 

if(fontSize && BgColor){
    setValues(fontSize,BgColor)
}
if(!fontSize && !BgColor){
    setValues("16px","aqua")
}
if(!BgColor && fontSize){
    setValues(fontSize,"aqua")
}
if(BgColor && !fontSize){
    setValues(BgColor,"16px")
}

}


// addEventListener
selectFontsize.addEventListener("change",changeFontSize);
selectBgcolor.addEventListener("change",changeBgColor);
resetBtn.addEventListener("click",clearlocalStorage);

initialSetup();