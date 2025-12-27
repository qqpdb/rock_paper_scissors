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



function playGame() {

    let compScore = 0;
    let humanScore = 0;

    while (compScore < 5 && humanScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        if (result === 'Computer Wins!') {
            compScore++;
            alert(`You Lose!\nYou: ${humanSelection}\nCPU: ${computerSelection}\nScore: ${humanScore} to ${compScore}`);
        } else if (result === 'Human Wins!') {
            humanScore++;
            alert(`You Win!\nYou: ${humanSelection}\nCPU: ${computerSelection}\nScore: ${humanScore} to ${compScore}`);
        } else if (result === 'Draw') {
            alert(`Draw!\nYou: ${humanSelection}\nCPU: ${computerSelection}\nScore: ${humanScore} to ${compScore}`);
        }
    }
    
    if (compScore === 5) {
        alert('OMG YOU LOST TO A BOT');
    } else {
        alert('YOU WIN!!!!');
    }

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