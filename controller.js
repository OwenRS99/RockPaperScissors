function getComputerChoice()
{
	let choice = Math.floor(Math.random() * 3);
	
	if (choice == 1) {
		return ("PAPER");
	} else if (choice == 2) {
		return ("ROCK");
	} else {
		return ("SCISSORS");
	}
}

function getPlayerChoice() {
	let choice = prompt("Choose either Rock, Paper or Scissors").toUpperCase();
	
	if (choice == "PAPER") {
		return "PAPER";
		
	} else if (choice == "ROCK") {
		return "ROCK";
		
	} else if (choice == "SCISSORS"){
		return "SCISSORS";
		
	}
	
	if (choice != "PAPER" || "SCISSORS" || "ROCK")
	{
		console.log("Wrong Entry");
		choice;
	}
}

function playRound(getPlayerChoice, getComputerChoice)
{	for (let i = 0; i < 5; i++) 
	{
		if (getPlayerChoice == getComputerChoice){
			return console.log("Tie");
		}	
	    else if (getPlayerChoice == "PAPER" && getComputerChoice == "ROCK" || getPlayerChoice == "ROCK" && getComputerChoice == "SCISSORS"
				   || getPlayerChoice == "SCISSORS" && getComputerChoice == "PAPER"){
			return console.log("Player Wins");
			
		} else {
			return console.log("Computer Wins");
		}	
	}
		
}	

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

function game()
{
	for (let i = 0; i < 5; i++)
	{
		getPlayerChoice();
		getComputerChoice();
		playRound(playerChoice, computerChoice)
	}
	
}

game();