let humanScore, computerScore;
function getComputerChoice() {
  let random = Math.floor(Math.random() * 100);
  if (random >= 0 && random < 33) {
    console.log("Computer pick: rock");
    return "rock";
  } else if (random >= 33 && random < 66) {
    console.log("Computer pick: paper");
    return "paper";
  } else {
    console.log("Computer pick: scissor");
    return "scissor";
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Please select "rock", "paper" or "scissor"');
  if (typeof humanChoice !== "string") {
    return getComputerChoice();
  }
  if (humanChoice === null || undefined) return console.log("Game Interrupted");
  else if (
    humanChoice === "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissor"
  ) {
    console.log("Human pick: " + humanChoice);
    return humanChoice;
  } else {
    return getHumanChoice();
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
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`
  Total games played: ${totalGames}
  Final Player Score: ${humanScore}
  Final Computer Score: ${computerScore}`);
}

playGame();
