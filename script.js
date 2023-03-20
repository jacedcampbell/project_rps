//We need to create a Rock Paper Scissors game

//Declare the computer choice function

function getComputerChoice(){

// Create a number generator and assign number to RPS outcome
    let num = Math.floor(Math.random() * 3);
    let choice = 'scissors'

    if (num == 0) {
     choice = 'rock';

    } else if (num == 1) {
     choice = 'paper';

    } else {

     choice = 'scissors';
    }
return choice;

}

console.log(getComputerChoice())