

function getComputerChoice() {
    const choice = randInt(3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";

    }
}

function getHumanChoice() {
    const choice = prompt(`Enter your choice:
        0-Rock
        1-Paper
        2-Scissors`);
    return parseInt(choice)
}


function randInt(highBound, lowBound = 0) {
    return Math.floor(Math.random() * (highBound - lowBound)) + lowBound;
}