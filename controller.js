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
		return console.log("Wrong Entry");
		
	}
}

function playRound(getPlayerChoice, getComputerChoice)
{	
		if (getPlayerChoice == getComputerChoice){
			console.log("Player:", getPlayerChoice)
			console.log("Player:", getComputerChoice)
			return console.log("Tie");
			
		}	
	    else if (getPlayerChoice == "PAPER" && getComputerChoice == "ROCK" || getPlayerChoice == "ROCK" && getComputerChoice == "SCISSORS"
				   || getPlayerChoice == "SCISSORS" && getComputerChoice == "PAPER"){
			console.log("Player:", getPlayerChoice)
			console.log("Player:", getComputerChoice)
			return console.log("Player Wins");
			
		} else {
			console.log("Player:", getPlayerChoice)
			console.log("Player:", getComputerChoice)
			return console.log("Computer Wins");
		}	
}	

function game()
{
	for (let i = 0; i < 5; i++){
		let playerChoice = getPlayerChoice();
		let computerChoice = getComputerChoice();
		playRound(playerChoice, computerChoice);
	}
		
}

game();