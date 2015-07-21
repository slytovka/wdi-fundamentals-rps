////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move=getInput();
    return move||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move=randomPlay();
    return move||randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    playerMove=getPlayerMove();
    computerMove=getComputerMove();
    if (playerMove===computerMove) {
       winner="tie";
       } else if (((playerMove==="rock")&&(computerMove==="scissors"))||((playerMove==="scissors")&&(computerMove==="paper"))||((playerMove==="paper")&&(computerMove==="rock"))) {
       winner="player";
       } else {
       winner="computer";
       }
        console.log('Player choose '+ playerMove +' while Computer choose '+ computerMove);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var count = 0;
    while ((playerWins<5)&&(computerWins<5)) {
        count=getWinner();
        if (count==="player") {
            playerWins+=1;
            count=0;
        } else if (count==="computer") {
            computerWins+=1;
            count=0;
        } else count=0;
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

