 'use strict'
let Name = prompt(" hello user, enter your name please ");
alert ( "Welcome " + Name );
// console.log("welcome  "+ Name);
alert(" Be ready for Y/N questions :) " );

let score = 0;

function Q1(){
let q1 = prompt(" Can we mix the oil with water or vice versa ? ( yes or no ) ").toLowerCase();
switch (q1) {
    case 'yes':
    //console.log("correct answer , yes we can by adding an emulsifier");    
    alert("correct answer , yes we can by adding an emulsifier" );
    score++;
    break;
    case 'no':
    alert(" Incorrect answer, yes we can by adding an emulsifier");
    //console.log("Incorrect answer, yes we can by adding an emulsifier");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no");
    break;
    
}}
Q1();

function Q2(){
let q2 = prompt(" Are charcoal and diamond the same element in terms of chemical composition? ( yes or no ) ").toLowerCase();
switch (q2) {
    case 'yes':
    //console.log("correct answer , yes the same in chemical composition just.");    
    alert("correct answer , yes the same in chemical composition just." );
    score++;
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
    score++;
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
switch (q4) {
    case 'yes':
    //console.log("correct answer , yes but it is impractical) ");    
    alert("correct answer , yes but it is impractical." );
    score++;
    break;
    case 'no':
    alert(" Incorrect answer, yes but it is impractical");
    //console.log("Incorrect answer, yes but it is impractical");
    break; 
    default:
    //console.log('dear '+ Name + ' please answer yes or no');    
    alert('dear '+ Name + " please answer yes or no")
    break;
 } }
Q4();


function Q5(){
let q5 = prompt(" if we add salt to complete cup of water , does the amount increase and overfolowing  ? ( yes or no ) ").toLowerCase();
switch (q5) {
    case 'yes':
    //console.log(" Incorrect answer , No it will not overflow ");    
    alert("Incorrect answer , No it will not overflow ." );
    break;
    case 'no':
    alert(" correct answer, No it will not overflow");
    score++;
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
        score++;
        break;
        break;
    } else if (q6 > 7){
        alert( "the number is too high");
    } else if (q6<7){
        alert("the number is too low ");

    }
}
alert("all attempts have been exausted , the correct answer is 7 ");
return; }
Q6();

function Q7(){
    let color = ['red' , 'yellow' , 'orange'];
    let flag = false;
    for(let j=1 ; j<= 6; j++) {
      let q7 = prompt("what is my fav color? ");// blue
        for(let a = 0; a < color.length ; a++)
        if ( q7 === color[a]) {
        alert("correct answer :) ");
        score++;
        flag = true;
        break;}
    
        if (flag === true){
            break; }
    
        
        }
         
      
      alert ('the all correct answer are yellow , orange and red') ; }
      
      Q7(); 

      document.write(" Your score is " + score);