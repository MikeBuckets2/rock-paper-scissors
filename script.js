// Function name getComputerChoice
// that generates randomly
// rock paper or scissors
// random number 0 to 1
// to assign to rock paper or scissors

function getComputerChoice () {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    } else if (choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

