function getComputerChoice() {
    // varaible to store random number into
    let roll;
    let computerHand;
    //generate random number and store it into variable
    roll = Math.random();
    // randomly selects rock, paper, or scissors, by splitting the output of
    // Math.random() into threes: 0-33, 34-66, 67-100
    if (roll <= .33) {
        computerHand = "Rock";
    } else if (roll >= .34 && roll <= .66) {
        computerHand = "Paper";
    } else {
        computerHand = "Scissors";
    }
    return computerHand;
}

// prompts user for rock paper scissors and stores it
function getHumanChoice() {
    let humanHand = prompt("Rock, Paper, or Scissors?", "");
    return humanHand;
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    // this loop calls the playRound() function and continues until one of the
    // score counters reaches 5, it also alerts the user of the score and
    // whether they won the round
    while (computerScore < 5 && humanScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        if (result === 'Computer Wins!') {
            computerScore++;
            alert('You Lose!\nYou: ' +
                    humanSelection +
                    '\nCPU: ' +
                    computerSelection +
                    '\nScore: ' +
                    humanScore +
                    ' to ' +
                    computerScore);
        } else if (result === 'Human Wins!') {
            humanScore++;
            alert('You Win!\nYou: ' +
                    humanSelection +
                    '\nCPU: ' +
                    computerSelection +
                    '\nScore: ' +
                    humanScore +
                    ' to ' +
                    computerScore);
        } else if (result === 'Draw') {
            alert('Draw!\nYou: ' +
                    humanSelection +
                    '\nCPU: ' +
                    computerSelection +
                    '\nScore: ' +
                    humanScore +
                    ' to ' +
                    computerScore);
        }
    }
    
    // end of game alert
    if (computerScore === 5) {
        alert('OMG YOU LOST TO A BOT');
    } else {
        alert('YOU WIN!!!!');
    }

    // logic for a single round of rock paper scissors, returns the winner
    function playRound(humanChoice, computerChoice) {
        // makes the humanChoice case insensitive
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.toLowerCase().slice(1);
        if (humanChoice === 'Rock' && computerChoice === 'Rock') {
            return 'Draw';
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            return 'Computer Wins!';
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            return 'Human Wins!';
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            return 'Human Wins!';
        } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
            return 'Draw'
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            return 'Computer Wins!';
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            return 'Computer Wins!';
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            return 'Human Wins!';
        } else {
            return 'Draw';
            //only other possible outcome is Scissors and Scissors
        }
    }
}

playGame();