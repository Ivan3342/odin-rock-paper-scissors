const display = document.querySelector("#display");

let choice;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function() {
    choice = "rock";
    console.log(choice);
} )
paper.addEventListener("click", function() {
    choice = "paper";
    console.log(choice);
} )
scissors.addEventListener("click", function() {
    choice = "scissors";
    console.log(choice);
} )

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    display.appendChild(document.createElement("h1").textContent = computerChoice);
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        playerScore++;
    } else if (humanSelection == "rock" && computerSelection == "paper") {
        computerScore++;
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        computerScore++;
    }
}

function getResults(humanScore, computerScore) {
    if (computerScore > humanScore) { /*Winner: Human! */
        return "Winner: Computer!";
    } else if (computerScore < humanScore) {
        return "Winner: Human!";
    } else {
        return "Draw!";
    }
}

function displayResults(results) {
    const winner = document.createElement("h1");
    winner.textContent = results;
    display.appendChild(winner);
}

for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    let results = getResults(humanScore, computerScore);
    displayResults(results);
}