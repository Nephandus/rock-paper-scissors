let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');

const display = document.createElement('div');
display.setAttribute('id', "display");
display.style.whiteSpace = "pre";
display.style.backgroundColor = 'black';
display.style.color = 'white';
display.style.textAlign = 'center';
display.textContent = "Rock, Paper, or Scissors?";
container.appendChild(display);

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.addEventListener('click', () => game("rock"));
const paper = document.createElement('button');
paper.textContent = "Paper";
paper.addEventListener('click', () => game("paper"));
const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.addEventListener('click', () => game("scissors"));
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

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
        display.textContent = "You Lose! Paper beats Rock\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "paper") && (computerSelection == "Scissors")) {
        computerScore++;
        display.textContent = "You Lose! Scissors beats Paper\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "Rock")) {
        computerScore++;
        display.textContent = "You Lose! Rock beats Scissors\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "rock") && (computerSelection == "Scissors")) {
        playerScore++;
        display.textContent = "You Win! Rock beats Scissors\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "paper") && (computerSelection == "Rock")) {
        playerScore++;
        display.textContent = "You Win! Paper beats Rock\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "Paper")) {
        playerScore++;
        display.textContent = "You Win! Scissors beats Paper\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "rock") && (computerSelection == "Rock")) {
        display.textContent = "Y'all Tie with Rock!\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "paper") && (computerSelection == "Paper")) {
        display.textContent = "Y'all Tie with Paper!\r\n"+ playerScore +" to "+ computerScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "Scissors")) {
        display.textContent = "Y'all Tie with Scissors!\r\n"+ playerScore +" to "+ computerScore;
    }
}

function game(whichButton) {
    playerSelection = whichButton;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    if (playerScore == 5) {
        display.textContent = "You Win the Round!\r\n"+ playerScore +" to "+ computerScore +"\r\nPlay Again?";
        playerScore = computerScore = 0;
    } else if (computerScore == 5) {
        display.textContent = "You Lose the Round...\r\n"+ playerScore +" to "+ computerScore +"\r\nPlay Again?";
        playerScore = computerScore = 0;
    }
}