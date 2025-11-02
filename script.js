function getComputerChoice() {
    let randomNum = Math.random(); 
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("rock paper or scissors?");
    return userChoice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
