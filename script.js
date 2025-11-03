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

// Function name getHumanChoice
// Ask user for input on rock paper scissors

function getHumanChoice() {
    return prompt("rock paper or scissors?");
}

// Function name playRound
// humanChoice and computerChoice parameters 
// use function humanChoice and computerChoice as arguments
// humanChoice case insensitive 
// Display a round winner 
// increase winner score by 1

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
}

// Function name playGame
// Move playRound inside playGame
// Move score inside playGame
// loop score until 5

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanAnswer = getHumanChoice();
        const computerAnswer = getComputerChoice();
        playRound(humanAnswer, computerAnswer);
        console.log(`Score is Human: ${humanScore} Computer: ${computerScore} after Round ${i}`);
    }
    if (humanScore > computerScore) {
        console.log("Chicken chicken winner dinner"); 
    } else if (computerScore > humanScore) {
        console.log("Sorry, you have lost");
    } else {
        console.log("No one likes a tie but this is one");
    }
 }

    playGame();