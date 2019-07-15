
// ___________________VARIABLES___________________//

var crystal1Number = 0;
var crystal2Number = 0;
var crystal3Number = 0;
var crystal4Number = 0;
var userScore = 0;
var goalNumber = 0;
var userWins = 0;
var userLoss = 0;


// ___________________FUNCTIONS___________________//
//randomly generated number between 1-12
function targetNumber(min, max) {
  min = Math.ceil(19);
  max = Math.floor(120);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
} 
// targetNumber(19,120);
// console.log(targetNumber());


// randomly generate a number between 12-120
function crystalNumber(min, max) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}  
// crystalNumber(1,12)
// console.log(crystalNumber);


// update text on screen when user wins/loses
$("#user-wins").append(userWins);
$("#user-losses").append(userLoss);


// ___________________ON CLICK EVENTS___________________//
// target all crystals
// then function... target id's with if statement

$(".allCrystals").on("click", "button", function(event) {
  var clickedCrystal = $(this).attr("id")

if (clickedCrystal === "crystal-1") {
  userScore += crystal1Number
  checkWin();
} else if (clickedCrystal === "crystal-2"){
  userScore += crystal2Number
  checkWin();
  
} else if (clickedCrystal === "crystal-3"){
    userScore += crystal3Number
    checkWin();
} else if (clickedCrystal === "crystal-4"){  
    userScore += crystal4Number
    checkWin();
}    
$("#user-score").text(userScore);
})

function checkWin () {
  // console.log(userScore);
  // console.log(event.target);
  if (userScore === goalNumber) {
    userWins++;
    $("#user-wins").text(userWins);
    resetGame();
  
    // console.log(userWins);
    // alert("You win!")
  }    
  else if (userScore > goalNumber) {
    userLoss++;
  
    $("#user-losses").text(userLoss);
    resetGame();        
    // console.log(userLoss);
    // alert("You lose")  
  }
}

//inside reset, put all things that write to the dom, and anything that I want to reset.
function resetGame () {
  goalNumber =targetNumber();
  console.log("new goal number:", goalNumber);
  $("#target-number").text(goalNumber); 
  
  userScore=0
  console.log(userScore);

  crystal1Number = crystalNumber(1,12); //expecting random number between 1-12
  crystal2Number = crystalNumber(1,12); //expecting random number between 1-12
  crystal3Number = crystalNumber(1,12); //expecting random number between 1-12
  crystal4Number = crystalNumber(1,12); //expecting random number between 1-12
  console.log("Random crystal1 number-", crystal1Number);
  console.log("Random crystal2 number-", crystal2Number);
  console.log("Random crystal3 number-", crystal3Number);
  console.log("Random crystal4 number-", crystal4Number);
  }  
resetGame();





// generate random number between 19 & 120, attatch it to targetNumber variable
//attach randomly generated value to each crystal number
// attatch values to the crystal images

// on click crystal1 = add value to userscore and check if scores match
// on click crystal2 = add value to userscore and check if scores match
// on click crystal3 = add value to userscore and check if scores match
// on click crystal4 = add value to userscore and check if scores match


// 
// Add crystal values to the user score://
// $("#crystal-1").on("click", function() {
  //   var newScore = ""
  //  newScore = newScore + crystal1Number;
  //  $("#user-score").text(newScore);
  //  console.log("newScore:",newScore);
  // })
  
  
  // onscreenload resetGame()

// console.log("reset game function: ", resetGame());
//  set 'your total score' to 0;
// generate new random number b/t 19 and 120
// log that number to the screen

// for each crystal, generate random number bt 1-12

// }
