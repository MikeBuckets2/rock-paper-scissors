let humanScore = 0;
let computerScore = 0;

// Function name getComputerChoice
// that generates randomly
// rock paper or scissors
// random number 0 to 1
// to assign to rock paper or scissors

function getComputerChoice () {
    const choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    } else if (choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// Function name getHumanChoice
// Ask user for input on rock paper scissors

function getHumanChoice() {
    return prompt("rock paper or scissors?");
}
console.log(getHumanChoice());
