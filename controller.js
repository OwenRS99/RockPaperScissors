function getComputerChoice()
{
	let choice = Math.floor(Math.random() * 3);
	
	if (choice < 1) {
		return ("paper");
	} else if (choice == 2) {
		return ("rock");
	} else {
		return ("scissors");
	}
}

function getPlayerChoice() {
	let choice = prompt("Choose either Rock, Paper or Scissors").toUpperCase();
	if (choice == "paper") {
		return 1;
	} else if (choice == "rock") {
		return 2;
	} else {
		return 3;
	}
}


function playRound(getPlayerChoice, getComputerChoice)
{	
		let paper = 1;
		let rock = 2;
		let scissors = 3;
		if (getPlayerChoice == getComputerChoice){
			return console.log("Tie");
		} else if (getPlayerChoice == 1 && getComputerChoice == 2 || getPlayerChoice == 2 && getComputerChoice == 3
				   || getPlayerChoice == 3 && getComputerChoice == 1){
			return console.log("Player Wins")
		} else {
			return console.log("Computer Wins");
		}
		
}	

function game()
{
	for(let i = 0; i < 5; i++) {
		if (getPlayerChoice())
		{
			playRound(getPlayerChoice, getComputerChoice);
			
			
		}
	}
}


game();