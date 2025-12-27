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
    let humanHand = prompt("Rock, Paper, or Scissors?", "");
    return humanHand;
}

function playRound(humanChoice, computerChoice) {
    // makes the humanChoice case insensitive
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.toLowerCase().slice(1);

    if (humanChoice === 'Rock' && computerChoice === 'Rock') {
        return 'Draw';
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        compScore++;
        return 'Computer Wins!';
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        return 'Human Wins!';
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        return 'Human Wins!';
    } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
        return 'Draw'
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        compScore++;
        return 'Computer Wins!';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        compScore++;
        return 'Computer Wins!';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        return 'Human Wins!';
    } else {
        return 'Tie';
    }



    console.log(humanChoice);
    console.log(computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound('Paper', 'Rock'));
console.log(humanScore);
console.log(compScore);