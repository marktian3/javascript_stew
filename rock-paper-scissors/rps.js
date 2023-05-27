function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let random_index = Math.floor(Math.random() *3); 
  document.getElementById("c-choice").innerHTML = "Computer chose: " + choices[random_index];
  return choices[random_index];
}

function playRound(playerChoice, computerChoice) {
  console.log("Playing a round");
  if (playerChoice == computerChoice) {
    tie();
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    win();
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    win();
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    win();
  } else {
    lose();
  }
}

function tie() {
  document.getElementById("result").innerHTML = "It is a tie";
}

function win() {
  document.getElementById("result").innerHTML = "You win!";
  document.getElementById("player-win-count").innerHTML++;
  if (document.getElementById("player-win-count").innerHTML == 5) {
    document.getElementById("result").innerHTML = "You have reached 5 first! You are a winner!!";
    showRestartGameButton();
  }
}

function lose() {
  document.getElementById("result").innerHTML = "You lose";
  document.getElementById("computer-win-count").innerHTML++;
  if (document.getElementById("computer-win-count").innerHTML == 5) {
    document.getElementById("result").innerHTML = "Your opponent has reached 5 first! You are a loser";
    showRestartGameButton();
  }
}

function showRestartGameButton() {
  document.getElementById("restart").style.display = "";
}

function restartGame() {
  document.getElementById("player-win-count").innerHTML = 0;
  document.getElementById("computer-win-count").innerHTML = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("restart").style.display = "none";
  document.getElementById("c-choice").innerHTML = "";
}

const rock_button = document.getElementById("selection-rock");
const paper_button = document.getElementById("selection-paper");
const scissors_button = document.getElementById("selection-scissors");
rock_button.addEventListener("click", () => { playRound("rock", getComputerChoice()) });
paper_button.addEventListener("click", () => { playRound("paper", getComputerChoice()) });
scissors_button.addEventListener("click", () => { playRound("scissors", getComputerChoice()) });

const restart_button = document.getElementById("restart");
restart_button.addEventListener("click", restartGame);