"use strict";
//variables
let characterName = "";
let healthPoints = 100;
let turnCounter = 0;
let damageMultiplier = 1;
let runCount = 0;
//functions

//random number generators 
function randomNum() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 20) + 1;
    return randomNumber;
}

function battleDamage() {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 15) + 1;
  return randomNumber;
}

// switch statement to give scenario based on random number
function scenarios(randomNum){
    switch(randomNum) {
        case 1:
          $("#scenarioNum").text(1);
          
        break;
        case 2:
          $("#scenarioNum").text(2);
            console.log("2")
        break;
        case 3:
          $("#scenarioNum").text(3);
          console.log("3")  
        break;
        case 4:
          $("#scenarioNum").text(4);
          console.log("4")  
        break;
        case 5:
          $("#scenarioNum").text(5);
          console.log("5")  
        break;
        case 6:
          $("#scenarioNum").text(6);
          console.log("6")  
        break;
        case 7:
          $("#scenarioNum").text(7);
          console.log("7")  
        break;
        case 8:
          $("#scenarioNum").text(8);
          console.log("8")  
        break;
        case 9:
          $("#scenarioNum").text(9);
          console.log("9")  
        break;
        case 10:
          $("#scenarioNum").text(10);
          console.log("10")  
        break;
        case 11:
          $("#scenarioNum").text(11);
          console.log("11")  
        break;
        case 12:
          $("#scenarioNum").text(12);
          console.log("12")  
        break;
        case 13:
          $("#scenarioNum").text(13);
          console.log("13")  
        break;
        case 14:
          $("#scenarioNum").text(14);
          console.log("14")  
        break;
        case 15:
          $("#scenarioNum").text(15);
          console.log("15")  
        break;
        case 16:
          $("#scenarioNum").text(16);
          console.log("16")  
        break;
        case 17:
          $("#scenarioNum").text(17);
          console.log("17")  
        break;
        case 18:
          $("#scenarioNum").text(18);
          console.log("18")  
        break;
        case 19:
          $("#scenarioNum").text(19);
          console.log("19")  
        break;
        case 20:
          $("#scenarioNum").text(20);
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
$("#scenarios").hide();

$(function(){
  $("#playnow").click(function(){
    scenarios(randomNum());
    $("#playnow").hide();
    $("#fight").show();
    $("#run").show();
    $("#playerStatus").show();
    $("#scenarios").show();
    
    turnCounter++;
    })
  });

  // $(function(){
  //   $("#Continue").click(function(){
  //     scenarios(randomNum());
  //     turnCounter++;
  //     // end game when turns reach zero
  //     if (turnCounter === 10 || healthPoints === 0){
  //       $("#Continue").hide();
  //       $("#fight").hide();
  //       $("#run").hide();
  //     };  
  //   })
  //   });

    $(function(){
      $("#fight").click(function(){
        scenarios(randomNum());
        healthPoints -= damageMultiplier * battleDamage();
        $("#healthText").text(healthPoints);
        turnCounter++;
        if (turnCounter === 10 || healthPoints <= 0){
          $("#Continue").hide();
          $("#fight").hide();
          $("#run").hide();
          $("#scenarios").hide();
        };
        if(runCount === 4){
          $("#run").hide();
        } 
        })
      });

      $(function(){
        $("#run").click(function(){
          scenarios(randomNum());
          damageMultiplier *= 2;
          turnCounter++;
          runCount++;
        if (turnCounter === 10 || healthPoints <= 0){
          $("#Continue").hide();
          $("#fight").hide();
          $("#run").hide();
          $("#scenarios").hide();
        }; 
        if(runCount === 4){
          $("#run").hide();
        };
          })
        });


