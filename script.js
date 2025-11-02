let humanScore = 0;
let computerScore = 0;

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

//Function name playRound
//  Take human and computer choices as arguments
//  make human choice case insensitive
//  display a round winner
//  increment score for winner
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, rock beats scissors!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, paper beats rock!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, scissors beats paper!");
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

