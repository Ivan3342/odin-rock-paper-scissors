const computerChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    console.log(choiceNumber);

    return computerChoices[choiceNumber];
}

console.log(getComputerChoice());