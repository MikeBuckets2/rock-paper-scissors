//Function name getComputerChoice
//  Generate a number between 0 and 1
//  If less than 0.33 return rock
//  Else if less than 0.66 return paper
//  Else return scissors

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
console.log(getComputerChoice());
