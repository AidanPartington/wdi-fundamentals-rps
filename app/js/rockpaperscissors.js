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
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;
    switch (playerMove) {
        case 'rock': 
            if (computerMove == 'rock') {
                winner = 'draw'
            }   else if (computerMove == 'paper') {
                winner = 'computer'
            }   else {
                winner = 'player'
            }
        break;
        case 'paper': 
            if (computerMove == 'rock') {
                winner = 'player'
            }   else if (computerMove == 'paper') {
                winner = 'draw'
            }   else {
                winner = 'computer'
            }
        break;
        case 'scissor': 
            if (computerMove == 'rock') {
                winner = 'computer'
            }   else if (computerMove == 'paper') {
                winner = 'player'
            }   else {
                winner = 'draw'
            }
        break;
        default:
        result ='Player move is invalid';
   }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    var = overallWinner 
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    switch (winner) {
        case 'player': 
            playerWins += 1;
            console.log('Player wins round');
        break;
        case 'computer': 
            computerWins += 1;
            console.log('Player wins round');
        break;
        case 'draw': 
            console.log('The round is a draw');
        break;
        default:
    }
    if ((playerWins >= 5) || (computerWins >= 5)) {
        if (playerWins > computerWins) {
            overallWinner = 'Player is the overall Winner'
        }
        else {
            overallWinner = 'Computer is the overall Winner' 
        }
    } else {
        console.log('The score is currently, Player wins:' + playerWins + ' to Computer wins: ' + computerWins + '\n');
        console.log('We are playing first to 5 wins, play again')
        function getPlayerMove(move)
    }
    return overallWinner;
}

