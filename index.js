function getComputerChoice() {
  return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const rules = {
    rock: { win: "scissors", lose: "paper" },
    paper: { win: "rock", lose: "scissors" },
    scissors: { win: "paper", lose: "rock" },
  };

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (rules[playerSelection].win === computerSelection) {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
  } else {
    return `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
  }
}

function game(playerSelection) {
  let games = [];
  const computerSelection = getComputerChoice();
  games.push(playRound(playerSelection, computerSelection));
  // for (let i = 0; i < 5; i++) {
  //   const computerSelection = getComputerChoice();
  //   games.push(playRound(playerSelection, computerSelection));
  // }
  return games;
}

function handleButtonClick(e) {
  const playerChoice = e.target.dataset.key;
  const computerChoice = getComputerChoice();
  const paragraph = document.querySelector("p");
  console.log(game(playerChoice, computerChoice));
  paragraph.innerText = game(playerChoice, computerChoice);
}

const button = document.querySelectorAll("button");
button.forEach((button) => button.addEventListener("click", handleButtonClick));
