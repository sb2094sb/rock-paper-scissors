let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
   let randomChoice = Math.floor(Math.random() * 3 + 1); // generates a random number between 1-3;
   if(randomChoice === 1){
    return "Rock";
   }
   else if(randomChoice ===2){
    return "Paper";
   }
   else{
    return "Scissors";
   }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(computerSelection){
        case "rock":
            if(playerSelection == "rock"){
                return "Draw! You both selected Rock!";
            }
            else if(playerSelection == "scissors"){
                computerScore++;
                return "You lose! Rock beats Scissors";
            }
            else if(playerSelection == "paper"){
                playerScore++;
                return "You win! Paper beats Rock!";
            }
            else{
                return "Please make a valid selection!";
            }
        case "paper":
            if(playerSelection == "paper"){
                return "Draw! You both selected Paper!";
            }
            else if(playerSelection == "scissors"){
                playerScore++;
                return "You win! Scissors beats Paper!";
            }
            else if(playerSelection == "rock"){
                computerScore++;
                return "You lose! Paper beats Rock!";
            }
            else{
                return "Please make a valid selection!";
            }

        case "scissors":
            if(playerSelection == "scissors"){
                return "Draw! You both selected Scissors!";
            }
            else if(playerSelection == "paper"){
                computerScore++;
                return "You lose! Scissors beats Paper!";
            }
            else if(playerSelection == "rock"){
                playerScore++;
                return "You win! Rock beats Scissors!";
            }
            else{
                return "Please make a valid selection!";
            }
        default:
            return "Error... computer did not select a valid choice";
    }
}

function game(){
    for(let i=0; i<5; i++){
        const playerSelection = prompt("Enter Rock, Paper, or Scissors!")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    let result = playerScore>computerScore ? "win" : playerScore < computerScore ? "lose" : "tie";  
    console.log(`Game Over: You ${result}, you won ${playerScore} game(s) and the computer won ${computerScore} game(s)!`);
}

game();