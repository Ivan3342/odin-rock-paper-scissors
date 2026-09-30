const computerChoices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    console.log(choiceNumber);

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

getHumanChoice();