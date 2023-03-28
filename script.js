//We need to create a Rock Paper Scissors game

let result;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let selectionOne;
let selectionTwo;
//Declare the computer choice function

function getComputerChoice(){

// Create a number generator and assign number to RPS outcome
   let num = Math.floor(Math.random() * 3);
    let choice = 'scissors'

    if (num == 0) {
     choice = 'Rock';
     return choice;

    } else if (num == 1) {
     choice = 'Paper';
     return choice;

    } else {

     choice = 'Scissors';
     return choice;
    }
}



// create a function that will accept player choice


function getPlayerChoice(playerChoice){ 



  if (playerChoice === null){
    alert("Make a valid enrty.");

  }else if (playerChoice == 'rock') {
    result = 'Rock';
    return result;

  } else if (playerChoice == 'paper') {
     result = 'Paper';
     return result;

  } else if( playerChoice == 'scissors') {
    result = 'Scissors';
    return result;
 } else{
  alert("Make a valid entry.");
 }
}





//create a function that plays a round of rock paper scissors

function playRound(selectionOne, selectionTwo){

  playerChoice = prompt("Please type rock, paper, or scissors.");
   selectionOne = getPlayerChoice(playerChoice);
   selectionTwo = getComputerChoice(); 

  if ((selectionOne == 'Rock' && selectionTwo == 'Scissors') || (selectionOne == 'Paper' && selectionTwo == 'Rock') || (selectionOne == 'Scissors' && selectionTwo == 'Paper')){
    alert("You win this round!");
    playerScore = playerScore + 1; 
    return playerScore;

  } else if((selectionOne =='Rock' && selectionTwo == 'Rock')||(selectionOne =='Paper' && selectionTwo == 'Paper') || (selectionOne == 'Scissors' && selectionTwo == 'Scissors')){ 
    alert("This is a tie!")
    playerScore = playerScore + 1;
    computerScore = computerScore + 1;

    return playerScore && computerScore;

  } else{
    alert("You lose this round");
    computerScore = computerScore + 1;

    return computerScore;
  }
  
}

//console.log(getComputerChoice)

//playerChoice = prompt("Please type rock, paper, or scissors.");
//const selectionOne = getPlayerChoice(playerChoice);
//const selectionTwo = getComputerChoice();
//console.log(playRound(selectionOne, selectionTwo));

//Create a function called 'game'

function game(){
    
   playRound(selectionOne, selectionTwo);

   playRound(selectionOne, selectionTwo);

    playRound(selectionOne, selectionTwo);

    playRound(selectionOne, selectionTwo);

    playRound(selectionOne, selectionTwo);

    if(playerScore == computerScore){
      alert("Game is ends in a tie!");

    } else if( playerScore > computerScore){
      alert("You win the game!")
    } else {
      alert("You lose the game!")
    }

  //console.log(playRound(selectionOne, selectionTwo));

}


console.log(game());
