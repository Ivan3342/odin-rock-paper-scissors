const computerChoices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    return computerChoices[choiceNumber];
}

function getHumanChoice() {
    const humanChoice = prompt('Enter your move: rock, paper, scissors?');

    if(humanChoice) {
        if(humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors') {
            return humanChoice.toLowerCase();
        }
        else {
            console.log('Error: Wrong input!');
        }
    }
    else {
        console.log('Error: User\'s choice is null!');
    }
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`Computer picked: ${computerChoice}`);

    if(humanChoice == computerChoice) {
        console.log("Draw!");
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log('Human wins!');
        console.log(`Current score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log('Human wins!');
        console.log(`Current score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('Human wins!');
        console.log(`Current score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
        console.log('Computer wins!');
        console.log(`Current score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        console.log('Computer wins!');
        console.log(`Current score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        console.log('Computer wins!');
        console.log(`Current score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`Final score: \nHuman: ${humanScore}\nComputer: ${computerScore}`);
    if(humanScore > computerScore) {
        console.log('Human WINS!!!');
    }
    else if (humanScore < computerScore){
        console.log('Computer WINS!!!');
    }
    else {
        console.log('It\'s a DRAW!!!');
    }
}

playGame();
