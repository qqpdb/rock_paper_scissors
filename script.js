// declare score keeping variables
let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
    //create variable to store random number
    let roll;
    //create variable to store string
    let compHand;
    //generate random number and store it into variable
    roll = Math.random();
    //if the number is less than or equal to .33, assign rock to string variable
    //if the number is greater than or equal to .34, AND less than or equal to .66, assign paper to string variable
    //if the number is greater than or equal to .67, assign scissors to string variable
    if (roll <= .33) {
        compHand = "Rock";
    } else if (roll >= .34 && roll <= .66) {
        compHand = "Paper";
    } else {
        compHand = "Scissors";
    }
    return compHand;
}

function getHumanChoice() {
    humanHand = prompt("Rock, Paper, or Scissors?", "");
    return humanHand;
}

console.log(getHumanChoice());
console.log(getComputerChoice());