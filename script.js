"use strict";
//variables
let characterName = "";
let healthPoints = 100;

//functions

//random number generator 
function randomNum() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 10) + 1;
    return randomNumber;
}

console.log(randomNum())

//jquery