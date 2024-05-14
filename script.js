let humanScore, computerScore;
function getComputerChoice() {
  let random = Math.floor(Math.random() * 100);
  if (random >= 0 && random < 33) {
    return "rock";
  } else if (random >= 33 && random < 66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Please select "rock", "paper" or "scissor"');
  if (humanChoice === null) return;
  else if (
    humanChoice === "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissor"
  ) {
    return humanChoice;
  } else {
    getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Tie !");
    }
    if (computerChoice === "paper") {
      console.log("Computer wins !");
      computerScore++;
    }
    if (computerChoice === "scissor") {
      console.log("You win !");
      humanScore++;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win !");
      humanScore++;
    }
    if (computerChoice === "paper") {
      console.log("Tie !");
    }
    if (computerChoice === "scissor") {
      console.log("Computer wins !");
      computerScore++;
    }
  }

  if (humanChoice === "scissor") {
    if (computerChoice === "rock") {
      console.log("Computer wins !");
      computerScore++;
    }
    if (computerChoice === "paper") {
      console.log("You win !");
      humanScore++;
    }
    if (computerChoice === "scissor") {
      console.log("Tie !");
    }
  }
}

function playGame() {
  (humanScore = 0), (computerScore = 0);
  const totalGames = parseInt(prompt("How many games will you play?"));

  let computerSelection = "";

  let humanSelection = "";
  for (let i = 0; i < totalGames; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
  }

  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);

  console.log(`Final Player Score: ${humanScore}
                Final Computer Score: ${computerScore}`);
}

playGame();
