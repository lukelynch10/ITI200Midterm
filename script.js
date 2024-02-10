"use strict";
//variables
let characterName = "";
let healthPoints = 100;

//functions

//random number generator 
function randomNum() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 20) + 1;
    return randomNumber;
}

function scenarios(randomNum){
    switch(randomNum) {
        case 1:
          console.log("1")
        break;
        case 2:
            console.log("2")
        break;
        case 3:
          console.log("3")  
        break;
        case 4:
          console.log("4")  
        break;
        case 5:
          console.log("5")  
        break;
        case 6:
          console.log("6")  
        break;
        case 7:
          console.log("7")  
        break;
        case 8:
          console.log("8")  
        break;
        case 9:
          console.log("9")  
        break;
        case 10:
          console.log("10")  
        break;
        case 11:
          console.log("11")  
        break;
        case 12:
          console.log("12")  
        break;
        case 13:
          console.log("13")  
        break;
        case 14:
          console.log("14")  
        break;
        case 15:
          console.log("15")  
        break;
        case 16:
          console.log("16")  
        break;
        case 17:
          console.log("17")  
        break;
        case 18:
          console.log("18")  
        break;
        case 19:
          console.log("19")  
        break;
        case 20:
          console.log("20")  
        break;
        default:
          console.log("default")
      }
}

// debugging/ testing
scenarios(randomNum())

//jquery