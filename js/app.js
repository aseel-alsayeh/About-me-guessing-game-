'use strict'
let Name = prompt(" hello user, enter your name please ");
alert ( "Welcome " + Name );
// console.log("welcome  "+ Name);
alert(" Be ready for Y/N questions :) " );

function Q1(){
let q1 = prompt(" Can we mix the oil with water or vice versa ? ( yes or no ) ").toLowerCase();
switch (q1) {
    case 'yes':
    //console.log("correct answer , yes we can by adding an emulsifier");    
    alert("correct answer , yes we can by adding an emulsifier" );
    break;
    case 'no':
    alert(" Incorrect answer, yes we can by adding an emulsifier");
    //console.log("Incorrect answer, yes we can by adding an emulsifier");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no");
    break;
    return;
}
Q1();

function Q2(){
let q2 = prompt(" Are charcoal and diamond the same element in terms of chemical composition? ( yes or no ) ").toLowerCase();
switch (q2) {
    case 'yes':
    //console.log("correct answer , yes the same in chemical composition just.");    
    alert("correct answer , yes the same in chemical composition just." );
    break;
    case 'no':
    alert(" Incorrect answer, yes the same in chemical composition just.");
    //console.log("Incorrect answer, yes the same in chemical composition just.");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no")
    break;
    return;
} }
Q2();

function Q3(){
let q3 = prompt(" Does the benzene that we filled in our car consist of Benzene element ? ( yes or no ) ").toLowerCase();
switch (q3) {
    case 'yes':
    //console.log("correct answer , yes there is a small amount of benzene ring,(0-2.5%) ");    
    alert("correct answer , yes there is a small amount of benzene ring,(0-2.5%)." );
    break;
    case 'no':
    alert(" Incorrect answer, yes there is a small amount of benzene ring,(0-2.5%).");
    //console.log("Incorrect answer, there is a small amount of benzene ring,(0-2.5%).");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no")
    break;
return;
} }
Q3();



function Q4(){
let q4 = prompt(" Can we convert Lead into Gold ? ( yes or no ) ").toLowerCase();
switch (q3) {
    case 'yes':
    //console.log("correct answer , yes but it is impractical) ");    
    alert("correct answer , yes but it is impractical." );
    break;
    case 'no':
    alert(" Incorrect answer, yes but it is impractical");
    //console.log("Incorrect answer, yes but it is impractical");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no")
    break;
return; } }
Q4();


function Q5(){
let q5 = prompt(" if we add salt to complete cup of water , does the amount increase and overfolowing  ? ( yes or no ) ").toLowerCase();
switch (q3) {
    case 'yes':
    //console.log(" Incorrect answer , No it will not overflow ");    
    alert("Incorrect answer , No it will not overflow ." );
    break;
    case 'no':
    alert(" correct answer, No it will not overflow");
    //console.log("correct answer, No it will not overflow");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no")
    break; }
alert( " thank you " + Name + " hope you enjoy with us :) ");  
return; }
Q5();



function Q6(){
   for (let i = 1; i < 5 ; i++){
    let q6 = Number(prompt( " guess a number (enter the number belwo) "));
    if (q6 ===7) {
        alert("you are lucky ! correct answer");
        break;
        break;
    } else if (q6 > 7){
        alert( "the number is too high");
    } else if (q6<7){
        alert("the number is too low ");

    }
    alert("all attempts have been exausted , the correct answer is 7 ");
}
return; }
Q6();

         
function Q7(){
let k = 0;
var j = 0;
let i = 0;
let color = ['red' , 'yellow' , 'orange'];
let q7 = prompt("what is my fav color? ");
while (j < 5){
  
    if ( q7 === color[0] || q7 === color[1] || q7===[2]){
    alert("correct answer :) ");break;}
  
   if ( q7 !== color[0] || q7 === color[1] || q7===color[2]){
      q7 = prompt('try again');
      alert(" not the correct answer, please try again");
      j++;
    }
     
  }
  alert ('the all correct answer are yellow , orange and red') ; }
  return; }
  Q7();