let buttons=document.querySelector(".buttons");
let title=document.querySelector(".title");
let questions=document.querySelector(".questions");
let images=document.querySelector(".images");
let result=document.querySelector(".result");
let button11=document.querySelector(".button1-1");
let button12=document.querySelector(".button1-2");
let button21=document.querySelector(".button2-1");
let button22=document.querySelector(".button2-2");
let image2=document.querySelector(".image2");
let image1=document.querySelector(".image1");
let header1=document.querySelector(".header1");
let header2=document.querySelector(".header2");
let questionbuttonvalue=0;
let questionbuttonvalue2=0;
let submit=document.querySelector(".submit");

image2.style.display="none";
result.style.display="none";
button22.style.display="none";
button21.style.display="none";
header2.style.display="none";

button11.addEventListener("click", function(){
    button11.style.display="none";
    button12.style.display="none";
    image2.style.display="block";
    image1.style.display="none";
    button21.style.display="block";
    button22.style.display="block";
    header1.style.display="none";
    header2.style.display="block";
    questionbuttonvalue=1;
    console.log(questionbuttonvalue)
});
button12.addEventListener("click", function(){
    button11.style.display="none";
    button12.style.display="none";
    image2.style.display="block";
    image1.style.display="none";
    button21.style.display="block";
    button22.style.display="block";
    header1.style.display="none";
    header2.style.display="block";
    questionbuttonvalue=0;
    console.log(questionbuttonvalue)
});
button21.addEventListener("click", function(){
    button21.style.display="none";
    button22.style.display="none";
    image2.style.display="none";
    image1.style.display="none";
    header1.style.display="none";
    header2.style.display="none";
    result.style.display="block";
    questions.style.display="none";
    questionbuttonvalue2=1
    console.log(questionbuttonvalue2)
});
button22.addEventListener("click", function(){
    button21.style.display="none";
    button22.style.display="none";
    image2.style.display="none";
    image1.style.display="none";
    header1.style.display="none";
    header2.style.display="none";
    result.style.display="block";
    questions.style.display="none";
    questionbuttonvalue2=0
    console.log(questionbuttonvalue2)
});
submit.addEventListener("click", function(){
    if(questionbuttonvalue===1 && questionbuttonvalue2 ===1){
        result.innerHTML="You like Chicken Nuggets because every young person likes chicken nuggets, and who doesnt like having a chicken nugget while chilling";
    }else if(questionbuttonvalue ===1 && questionbuttonvalue2===0){
        result.innerHTML="You like cake, because you are young and energetic and every hyper kid loves cake";
    }else if(questionbuttonvalue===0 && questionbuttonvalue2===0){
        result.innerHTML="You are Ice cream because you like sugary foods, and poeple of older ages usually like stuff that is basic like Ice cream";
    }else if(questionbuttonvalue===0 && questionbuttonvalue2===1){
        result.innerHTML="You like salad, because people of ages older care about their health, and salad is a chill food.";
    }
});
















