function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter a choice: Rock, Paper or Scissors?");
    if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        return choice;
    }
    else {
        prompt("Invalid choice.");
    }
}


console.log(getComputerChoice());