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

    playerSelection = playerSelection.toLowerCase();

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
            return "Lose!";
        
        case "scissors-scissors":
            return "Tie!";
    }
}

function game() {
    let wins = 0;
    let loses = 0;
    for (let i = 0; i < 5; i++) {
        let player_choice = prompt("Your choice:");
        let round_result = roundPlay(player_choice, getComputerChoice());
        if (round_result === "Win!") {
            wins++;
        }
        else if (round_result === "Lose!") {
            loses++;
        }
        else {
            continue;
        }
    }

    if (wins > loses) {
        alert("You won!");
    }
    else if (wins < loses) {
        alert("You lost!");
    }
    else {
        alert("You lost!");
    }
}

game();

