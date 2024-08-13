const playerbox = document.querySelector(".playerbox");
const computerbox = document.querySelector(".computerbox");
const startbtn = document.querySelector(".start");
const winnerbox = document.querySelector(".winnertxt");
const playerScoreBox = document.querySelector(".playerscore");
const computerScoreBox = document.querySelector(".computerscore");


let playerChoice;
let playerScore = 0;

let computerChoice;
let computerScore = 0;

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    if(winner === "Player") {
        playerScore++;
    }
    else if (winner === "Computer") {
        computerScore++;
    }
    winnerbox.textContent = winner;
    playerScoreBox.textContent = "Your Score: " + playerScore;
    computerScoreBox.textContent = "Computer Score: " + computerScore;
}

function startGame() {
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => 
        btn.addEventListener("click", () => {
            if (btn.id) {
                playRound(btn.id);
                playerbox.textContent = btn.id;
            }
        })
    );
}

function getComputerChoice() {
    const possibleChoices = ["rock", "paper", "scissors"];
    computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    computerbox.textContent = computerChoice;
}

function getWinner(humanSelection, computerSelection) {
    if (humanSelection == "rock" && computerSelection == "scissors" || humanSelection == "scissors" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "rock") {
        return "Player";
    } 
    else if (humanSelection == "rock" && computerSelection == "paper" || humanSelection == "paper" && computerSelection == "scissors" || humanSelection == "paper" && computerSelection == "rock") {
        return "Computer";
    }
    else {
        return "Draw";
    }
}

startbtn.addEventListener("click", function() {
    startGame();
    startbtn.textContent = "RESET";
})