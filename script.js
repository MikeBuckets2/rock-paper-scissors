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


// Function name playRound
// humanChoice and computerChoice parameters 
// use function humanChoice and computerChoice as arguments
// humanChoice case insensitive 
// Display a round winner 
// increase winner score by 1

function playRound(humanChoice, computerChoice) {
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

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    return playRound("rock", getComputerChoice());
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    return playRound("paper", getComputerChoice());
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    return playRound("scissors", getComputerChoice());
});


