function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function roundPlay(playerSelection, computerSelection) {
    switch (playerSelection + "-" + computerSelection) {
        case "rock-rock":
            return "Tie!";

        case "paper-rock":
            return "Win!";

        case "scissors-rock":
            return "Lose!";
        
        case "rock-paper":
            return "Lose!";

        case "paper-paper":
            return "Tie!";

        case "scissors-paper":
            return "Win!";

        case "rock-scissors":
            return "Win!";

        case "paper-scissors":
            return "Lose";
        
        case "scissors-scissors":
            return "Tie!";
    }
}
