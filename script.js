let humanScore = 0,
  computerScore = 0;

// logic for computer choice
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

// logic for player choice
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

//Logic for playing a round
function playRound(humanChoice, computerChoice) {
  const board = document.querySelector(".board");
  board.textContent = "";
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Tie !");
      board.textContent += "Tie !";
    }
    if (computerChoice === "paper") {
      console.log("Computer wins !");
      board.textContent += "Computer wins !";
      computerScore++;
    }
    if (computerChoice === "scissor") {
      console.log("You win !");
      board.textContent += "You win!";
      humanScore++;
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win !");
      board.textContent += "You win!";
      humanScore++;
    }
    if (computerChoice === "paper") {
      console.log("Tie !");
      board.textContent += "Tie !";
    }
    if (computerChoice === "scissor") {
      console.log("Computer wins !");
      board.textContent += "Computer wins !";
      computerScore++;
    }
  }

  if (humanChoice === "scissor") {
    if (computerChoice === "rock") {
      console.log("Computer wins !");
      board.textContent += "Computer wins !";
      computerScore++;
    }
    if (computerChoice === "paper") {
      console.log("You win !");
      board.textContent += "You win!";
      humanScore++;
    }
    if (computerChoice === "scissor") {
      console.log("Tie !");
      board.textContent += "Tie !";
    }
  }
  console.log(`
  Human Score: ${humanScore}
  Computer Score: ${computerScore}
  `);
}

// logic for displaying game score
function displayScore() {
  let score = document.querySelector(".score");
  //Allow text wrapping for template litteral
  score.style["white-space"] = "pre-wrap";

  score.textContent = `
  Human Score: ${humanScore} 
  Computer Score: ${computerScore}
  `;
  if (humanScore === 5) {
    score.textContent += `
  Human WIN
  `;
  } else if (computerScore === 5) {
    score.textContent += `
  COMPUTER WIN
  `;
  }
}

// function playGame() {
//   (humanScore = 0), (computerScore = 0);
//   const totalGames = parseInt(prompt("How many games will you play?"));

//   let computerSelection = "";

//   let humanSelection = "";
//   for (let i = 0; i < totalGames; i++) {
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   console.log(`
//   Total games played: ${totalGames}
//   Final Player Score: ${humanScore}
//   Final Computer Score: ${computerScore}`);
// }

function restartGame() {
  const board = document.querySelector(".board");
  const restart = document.querySelector(".restart");
  restart.addEventListener("click", (e) => {
    console.log("fwg");
    humanScore = 0;
    computerScore = 0;
    board.textContent = "";
    displayScore();
  });
}

let buttons = [...document.querySelectorAll(".button")];

buttons.forEach((item) => {
  // STOP GAME IF SCORE = 5
  item.addEventListener("click", (event) => {
    if (humanScore === 5 || computerScore === 5) {
      return 0;
    }
    playRound(event.target.textContent.toLowerCase(), getComputerChoice());
    displayScore();
  });
});
//Initial score display
displayScore();
// restart the game
restartGame();
