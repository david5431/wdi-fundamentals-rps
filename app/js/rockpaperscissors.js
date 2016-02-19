////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    var input = prompt("Please choose rock, paper or scissors.");
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    //return prompt();
    console.log('Player played ' + input);
    return input;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
      console.log('Computer played rock');
        return "rock";
    } else if (randomNumber < 0.66) {
      console.log('Computer played paper')
        return "paper";
    } else {
      console.log('Computer played scissors')
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
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ((playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "scissors" && computerMove === "paper") ||
      (playerMove === "paper" && computerMove === "rock")) {
      return "player";
    } else if ((playerMove === "rock" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "paper")) {
      return "tie";
    } else {
      return "computer";
    }
}

var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  var whoWon;
  while (playerWins < 5 && computerWins < 5) {
    whoWon = getWinner(getPlayerMove(), getComputerMove());
    if (whoWon == "player") {
      playerWins++;
      console.log("Player Won!");
      console.log("Player has won " + playerWins + ", the Computer has won " + computerWins + ".");
    } else if (whoWon == "computer") {
      computerWins++;
      console.log("Computer Won!");
      console.log("Player has won " + playerWins + ", the Computer has won " + computerWins + ".");
    } else {
    console.log("tie");
    }
  }
  return [playerWins, computerWins];
}

playToFive();
