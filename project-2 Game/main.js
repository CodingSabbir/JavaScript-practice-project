//  initializing some values
let totalAttempts=5;
let attempts=0;
let totalwons=0;
let totallosts=0;


 
const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const GuessingNumber=form.querySelector("#GuessingNumber");
const chekButton=form.querySelector("#chek");
const resultext=cardBody.querySelector(".resultext");
const totalwonsMessage=document.createElement("p");
const remaining=cardBody.querySelector(".remaining");

form.addEventListener("submit",function(event){
    event.preventDefault();
   checkResult(GuessingNumber.value)
   attempts++;
    if(attempts>5){
        GuessingNumber.disabled=true;
        chekButton.disabled=true;
    }else{
        checkResult(GuessingNumber.value);
        remaining.innerHTML=`Remaining: ${totalAttempts-attempts}`
    }
    GuessingNumber.value="";
});

function checkResult(GuessingNumber){
console.log(GuessingNumber)
const randomNumber=getrandomNumber(5);
if(GuessingNumber==randomNumber){
    resultext.innerHTML=`you have won`
    totalwons++;
}else{
    resultext.innerHTML=`you have lost; random number was:${randomNumber}` 
    totallosts++;
}
totalwonsMessage.innerHTML=`Won: ${totalwons}, Lost: ${totallosts}`
totalwonsMessage.classList.add("large-text")
cardBody.appendChild(totalwonsMessage);
}


function getrandomNumber(limit){
return Math.floor(Math.random()*limit)+1;
}
 
 
