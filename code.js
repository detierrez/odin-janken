let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const divResult = document.querySelector("#result");
const divScore = document.querySelector("#score");
const divEnd = document.querySelector("#end");

updateScore();

const controller = new AbortController();
for (const button of buttons) {
  button.addEventListener(
    "click",
    () => {
      const humanChoice = button.getAttribute("choice");
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    },
    { signal: controller.signal }
  );
}

function playRound(humanChoice, computerChoice) {
  const result = getRpsResult(humanChoice, computerChoice);
  let msg = "";
  switch (result) {
    case 0:
      msg = `Both chose ${humanChoice}! It's a tie!`;
      break;
    case 1:
      humanScore++;
      msg = `You win! ${humanChoice} beats ${computerChoice}!`;
      break;
    case 2:
      computerScore++;
      msg = `You lose! ${computerChoice} beats ${humanChoice}!`;
      break;
  }

  divResult.textContent = msg;
  updateScore();
}

function updateScore() {
  divScore.textContent = `Score: ${humanScore} - ${computerScore}`;
  if (humanScore >= 5 || computerScore >= 5) {
    controller.abort();
    divEnd.textContent = "Game ended!";
  }
}

function getRpsResult(choice1, choice2) {
  const choices = ["rock", "paper", "scissors"];
  const index1 = choices.indexOf(choice1);
  const index2 = choices.indexOf(choice2);
  const gap = Math.abs(index1 - index2);
  if (index1 === index2) return 0;
  if ((index1 > index2 && gap === 1) || (index1 < index2 && gap === 2)) {
    return 1;
  }
  return 2;
}

function getHumanChoice() {
  const choice = prompt(`Enter your choice:
        - Rock
        - Paper
        - Scissors`).toLowerCase();
  return choice;
}

function getComputerChoice() {
  const choice = randInt(3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function randInt(highBound, lowBound = 0) {
  return Math.floor(Math.random() * (highBound - lowBound)) + lowBound;
}
