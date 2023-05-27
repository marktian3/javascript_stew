function getComputerChoice() {
  choices = ['rock', 'paper', 'scissors'];
  random_index = Math.floor(Math.random() *3);
  return choices[random_index];
}

function playRound(playerChoice, computerChoice) {

  if (playerChoice == computerChoice) {
    return "It is a tie";
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    return "You win! Rock beats scissors";
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    return "You win! Paper beats scissors";
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    return "You win!, Scissors beats paper";
  } else {
    return "You lose! " + playerChoice + " loses to " + computerChoice;
  }

}

// function playGame(rounds) {

//   for (let i = 0; i < rounds; i++){
//     let playerChoice = prompt("Please enter your selection: (rock, paper, or scissors)");
//     playerChoice = playerChoice.toLowerCase();
//     let computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
//   }
// }

function startGame() {
  document.getElementById("start-button").remove();
  document.getElementById("rps-game").style.display = "";
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);
element.addEventListener("click", startGame);


// playGame(5);
