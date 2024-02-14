"use strict";
//variables
let characterName = "";
let healthPoints = 100;
let turnCounter = 0;
let damageMultiplier = 1;

//functions

//random number generators 
function randomNum() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 20) + 1;
    return randomNumber;
}

function battleDamage() {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 11) + 1;
  return randomNumber;
}

// switch statement to give scenario based on random number
function scenarios(randomNum){
    switch(randomNum) {
        case 1:
          scenario()
          console.log("1")
        break;
        case 2:
          scenario()
            console.log("2")
        break;
        case 3:
          scenario()
          console.log("3")  
        break;
        case 4:
          scenario()
          console.log("4")  
        break;
        case 5:
          scenario()
          console.log("5")  
        break;
        case 6:
          scenario()
          console.log("6")  
        break;
        case 7:
          scenario()
          console.log("7")  
        break;
        case 8:
          scenario()
          console.log("8")  
        break;
        case 9:
          scenario()
          console.log("9")  
        break;
        case 10:
          scenario()
          console.log("10")  
        break;
        case 11:
          scenario()
          console.log("11")  
        break;
        case 12:
          scenario()
          console.log("12")  
        break;
        case 13:
          scenario()
          console.log("13")  
        break;
        case 14:
          scenario()
          console.log("14")  
        break;
        case 15:
          scenario()
          console.log("15")  
        break;
        case 16:
          scenario()
          console.log("16")  
        break;
        case 17:
          scenario()
          console.log("17")  
        break;
        case 18:
          scenario()
          console.log("18")  
        break;
        case 19:
          scenario()
          console.log("19")  
        break;
        case 20:
          scenario()
          console.log("20")  
        break;
        default:
          console.log("default")
      }
      
}

//jquery
$("#Continue").hide();
$("#fight").hide();
$("#run").hide();
$("#playerStatus").hide();

function scenario(){
  $("#fight").show();
$("#run").show();
$("#Continue").hide();
}

$(function(){
  $("#playnow").click(function(){
    scenarios(randomNum());
    
    $("#playnow").hide();
    turnCounter++;
    })
  });

  $(function(){
    $("#Continue").click(function(){
      scenarios(randomNum());
      turnCounter++;
      // end game when turns reach zero
      if (turnCounter === 10 || healthPoints === 0){
        $("#Continue").hide();
        $("#fight").hide();
        $("#run").hide();
      };  
    })
    });

    $(function(){
      $("#fight").click(function(){
        scenarios(randomNum());
        $("#Continue").show();
        $("#fight").hide;
        $("#run").hide;
        healthPoints -= battleDamage();
        console.log(healthPoints)
        if (turnCounter === 10 || healthPoints === 0){
          $("#Continue").hide();
          $("#fight").hide();
          $("#run").hide();
        };  
        })
      });

      $(function(){
        $("#run").click(function(){
          scenarios(randomNum());
          $("#Continue").show();
          $("#fight").hide;
          $("#run").hide;
          
          })
        });


