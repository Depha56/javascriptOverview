 
 /*let user;
 document.getElementById("mybutton").onclick = function(){
    user = document.getElementById("mytext").value;
    console.log(user);
    document.getElementById("mylabel").innerHTML =  "welcome" + user;
}*/

//type conversion
/*let age = window.prompt("enter your age dear");
console.log(typeof age);

age = Number(age);
console.log(typeof age);
age += 1;*/

//.Math as build in function 

/*exercises find hyponuse of triangle 
let a;
let b;
let c;
document.getElementById("mybutton").onclick = function(){
    a = document.getElementById("atextbox").value;
    a = Number(a);
    b = document.getElementById("btextbox").value;
    b = Number(b);

     c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "SIDE C IS " + c ;
}*/

/*COUNTER PROGRAM------------------------------------------------------------
let count = 0;
document.getElementById("debutton").onclick = function(){
    count -= 1;
    document.getElementById("counterlabel").innerHTML = count;
}
document.getElementById("rebutton").onclick = function(){
    count = 0;
    document.getElementById("counterlabel").innerHTML = count;
}
document.getElementById("increbutton").onclick = function(){
    count += 1;
    document.getElementById("counterlabel").innerHTML = count;
}*/
/*how to generate random number
document.getElementById("rollbutton").onclick = function(){
    let x =Math.ceil((Math.random()* 6)+1);
    let y =Math.floor((Math.random()* 6)+1);

    let z =Math.floor((Math.random()* 6)+1);
    document.getElementById("roll1").innerHTML = x;
    document.getElementById("roll2").innerHTML = y;
    document.getElementById("roll3").innerHTML = z;


}*/

/*checked property in JAVASCRIPT-------------------------------------------------------------------------------------------------
document.getElementById("mybutton").onclick = function(){
    let sub = document.getElementById("mycheckbox");
    let visa = document.getElementById("visa");
    let master = document.getElementById("master");
    let pay = document.getElementById("pay");


    if( sub.checked){
        console.log("you have been subscribed");
    }
    else{
        console.log("you are not subscribed");
    }
    
     if( visa.checked){
        console.log("you have payed with visa");
    }
    
     else if( master.checked){
        console.log("you have payed with mastercard");
    }
    

    else{
        console.log("you have to select payment method");
    }

    
}*/
/*nested for loop-----------------------------------------------------------------------------------
let symbol = window.prompt("enter symbol to be used");
let rows = window.prompt("enter number of rows");
let columns = window.prompt("enter number of columns");
for (let i = 1 ; i<= rows ; i++){
        for(let j = 1; j <= columns; j++){
            document.getElementById("mylabel").innerHTML +=symbol;
        }
        document.getElementById("mylabel").innerHTML += "<br>";


}*/
/*AREA OF TRIANGLE ===================================================================================
let area;
let width;
let height;
width = window.prompt("enter width");
height = window.prompt("enter height");
 function getArea(width,height){
 area= width* height;
 return area;
 }
 getArea(width,height);
 console.log( "THE AREA IS "+ area);*/
 //TERNARY OPERATOR: condition ? exprIfTrue : exprIfFalse mostly applied on boolean values.
 //template literals : allows to embedded variables and expressions.
/*toLocaleString():return a string with a language sensitive representation of this number 
EG:let num = 100;
num = num.toLocaleString("en-us", {style:"currency",currency: "USD"});
console.log(num);*/



/*guessing gameeee JAVASCRIPT
const answer = Math.floor(Math.random() * 10 + 1);
document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("guessedNumber").value;
    if(guess == answer){
        alert(`this is number ${guess} you guessed meet the right one`);
    }
    else if (guess > answer){
        alert(`this is number ${guess} you guessed greater than the right one`);
 
    }
    else if (guess < answer){
        alert(`this is number ${guess} you guessed less than the right one`);
 
    }
}*/

// program to convert temperature using some HTML elements
 
let temp;
document.getElementById("submitbutton").onclick = function(){
    let cresult;
    temp = document.getElementById("mytextbox").value;
    temp = Number(temp);
    if(document.getElementById("cbutton").checked){
        cresult = (temp - 32) *(5/9);
        document.getElementById("mylabel").innerHTML = cresult + " celcius";
    }
    else if(document.getElementById("fbutton").checked){
        cresult = temp * 9 / 5 + 32;
        document.getElementById("mylabel").innerHTML = cresult + " fahrenheit";

    }
    else{
        document.getElementById("mylabel").innerHTML = " enter the value to be converted or choose the unit.";
  
    }

}


