var typeLine = document.getElementById("type-scr");
var Numb7 = document.getElementById("btn7");
var Numb8 = document.getElementById("btn8");
var Numb9 = document.getElementById("btn9");
// var Numplus = documnet.getElementById("btnPlus")

var newNum = "";
var numCount = 0;
var Clac1 = "";
var Clac2 = "";

Numb7.addEventListener("click" , addNumb7);
Numb8.addEventListener("click" , addNumb8);
Numb9.addEventListener("click" , addNumb9);
// Numplus.addEventListener("click" , addNums)

function addNumb7(){
    if(numCount == 0){
        newNum = "7";
        typeLine.textContent = newNum;
        numCount++;
        newNum = "";
    }
    else{

    } 
}

function addNumb8(){
    if(numCount == 0){
        newNum = "8";
        typeLine.textContent = newNum;
        numCount++;
        newNum = "";
    }
    else{

    } 
}

function addNumb9(){
    if(numCount == 0){
        newNum = "9";
        typeLine.textContent = newNum;
        numCount++;
        newNum = "";
    }
    else{

    } 
}

