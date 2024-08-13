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
    if (playerScore >= 5 || computerScore >= 5) {
        stop;
    }
    else {
        let computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        if(winner === "Player") {
            playerScore++;
            playerScoreBox.textContent = "Your Score: " + playerScore;
        }
        else if (winner === "Computer") {
            computerScore++;
            computerScoreBox.textContent = "Computer Score: " + computerScore;
        }
        winnerbox.textContent = winner;
    }
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
    return computerChoice;
}

function getWinner(choice1, choice2) {
    if (
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice1 === "scissors" && choice2 === "paper") ||
    (choice1 === "paper" && choice2 === "rock")    
    ) {
        return "Player";
    }
    else if (choice1 == choice2) {
        return "Draw";
    }
    else {
        return "Computer";
    }
    
}
startbtn.style.visibility = "hidden";
startGame();
startbtn.addEventListener("click", function() {
    startbtn.textContent = "PLAY AGAIN?";
    playerScore = 0;
    playerScoreBox.textContent = "Your Score: 0";
    playerbox.textContent = "";
    computerScore = 0;
    computerScoreBox.textContent = "Computer Score: 0";
    computerbox.textContent = "";
    winnerbox.textContent = "";
}
)
startbtn.style.visibility = "shown";