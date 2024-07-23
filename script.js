function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter a choice: Rock, Paper or Scissors?").toLowerCase();
    let running = true;
    while (running) {
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
            running = 1;
        }
        else {
            choice = prompt("Invalid choice. Try again!");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection == "rock" && computerSelection == "scissors") {
        humanScore++;
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        humanScore++;
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        humanScore++;
    } else if (humanSelection == "rock" && computerSelection == "paper") {
        computerScore++;
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
    } else if (humanSelection == "paper" && computerSelection == "rock") {
        computerScore++;
    }
}


for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human Choice: " + humanSelection);
    console.log("Human Score: " + humanScore);
    console.log("Computer Choice: " + computerSelection);
    console.log("Computer Score: " + computerScore);
}

const hOne = document.getElementById('title');

if (computerScore > humanScore) { /*Winner: Human! */
    console.log("Winner: Computer!")
} else if (computerScore < humanScore) {
    console.log("Winner: Human!");
} else {
    console.log("Draw");
}