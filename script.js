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
        updateScore();
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            updateScore();
        } else {
            results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            updateScore();
        }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.className;
        playRound(userChoice, getComputerChoice());
    });
});

const results = document.querySelector(".results");
const score = document.querySelector(".score");

function updateScore() {
    score.textContent = `User: ${humanScore} | Computer: ${computerScore}`;
};

updateScore();
