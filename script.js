let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
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

const results = document.querySelector(".results");
const score = document.querySelector(".score");

