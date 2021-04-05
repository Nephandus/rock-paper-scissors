function computerPlay() {
   switch (Math.floor(Math.random()*3+1)){
        case 1: {
            return "Rock";
        }
        case 2: {
            return "Paper";
        }
        case 3: {
            return "Scissors";
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "Paper")) {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if ((playerSelection == "paper") && (computerSelection == "Scissors")) {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if ((playerSelection == "scissors") && (computerSelection == "Rock")) {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if ((playerSelection == "rock") && (computerSelection == "Scissors")) {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if ((playerSelection == "paper") && (computerSelection == "Rock")) {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if ((playerSelection == "scissors") && (computerSelection == "Paper")) {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if ((playerSelection == "rock") && (computerSelection == "Rock")) {
        return "Y'all Tie with Rock!";
    } else if ((playerSelection == "paper") && (computerSelection == "Paper")) {
        return "Y'all Tie with Paper!";
    } else if ((playerSelection == "scissors") && (computerSelection == "Scissors")) {
        return "Y'all Tie with Scissors!";
    }
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


function game() {
    while ( (playerScore !== 5) && (computerScore !== 5) ) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("You Win! "+playerScore+" to "+computerScore);
    } else {
        console.log("You Lose! "+playerScore+" to "+computerScore);
    }
}

game();