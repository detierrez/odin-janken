let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    for (let i = 1; i <= 5; i++) { 
        console.log(`Round ${i}!`)
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log(`Both chose ${humanChoice}! It's a tie!`)
    }

    const isWin = ((humanChoice === "rock") && (computerChoice === "scissors")) ||
        ((humanChoice === "paper") && (computerChoice === "rock")) ||
        ((humanChoice === "scissors") && (computerChoice === "paper"))
    if (isWin) {
        return console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    }

    return console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
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