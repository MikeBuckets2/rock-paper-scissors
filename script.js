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

// function name getHumanChoice
// get user choice
// return choice 
function getHumanChoice() {
    let userChoice = prompt("rock paper or scissors?");
    return userChoice;
}
console.log(getHumanChoice());
