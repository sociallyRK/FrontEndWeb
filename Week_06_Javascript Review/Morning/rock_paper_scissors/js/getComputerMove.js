function getComputerMove() {
	return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRock()
	{
	var computerMove = getComputerMove();
	var result =  ((computerMove == "rock") ? document.getElementById("status").innerHTML = "The Game Tied." : ((computerMove == "paper") ?  document.getElementById("status").innerHTML = "Computer won." : document.getElementById("status").innerHTML = "You won."));
	
	}

function playScissors()
	{
	var computerMove = getComputerMove();
	var result =  ((computerMove == "scissors") ? document.getElementById("status").innerHTML = "The Game Tied." : ((computerMove == "paper") ?  document.getElementById("status").innerHTML = "Computer won." : document.getElementById("status").innerHTML = "You won."));
	}

function playPaper()
	{
	var computerMove = getComputerMove();
	var result =  ((computerMove == "paper") ? document.getElementById("status").innerHTML = "The Game Tied." : ((computerMove == "scissors") ?  document.getElementById("status").innerHTML = "Computer won." : document.getElementById("status").innerHTML = "You won."));
	}

