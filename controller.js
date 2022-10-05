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
	let choice = prompt("Choose either Rock, Paper or Scissors")
	
	if (choice == "paper") {
		return 1
	} else if (choice == "rock") {
		return 2
	} else {
		return 3
	}
}


function playRound(getPlayerChoice, getComputerChoice)
{
	
}

