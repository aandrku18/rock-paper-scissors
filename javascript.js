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
    let rock_button = document.querySelector('#rock')
    let paper_button = document.querySelector('#paper')
    let scissors_button = document.querySelector('#scissors')
    let wins = 0;
    let loses = 0;

    function addPoint(result) {
        if (result === 'Win!') {
            wins = wins + 1;
            document.querySelector('.wins').textContent = wins;
            if (wins == 5) {
                alert('You won!');
                document.querySelector('.wins').textContent = 0;
                document.querySelector('.loses').textContent = 0;
                wins = 0
                loses = 0
            }
        }
        else if (result === 'Lose!') {
            loses = loses + 1;
            document.querySelector('.loses').textContent = loses;
            if (loses == 5) {
                alert('You lost!');
                document.querySelector('.wins').textContent = 0;
                document.querySelector('.loses').textContent = 0;
                wins = 0
                loses = 0
            }
            
        }
    }

    rock_button.addEventListener('click', function(e) {
        let result = roundPlay(this.value, getComputerChoice());
        addPoint(result);
    })

    paper_button.addEventListener('click', function(e) {
        let result = roundPlay(this.value, getComputerChoice());
        addPoint(result);
    })

    scissors_button.addEventListener('click', function(e) {
        let result = roundPlay(this.value, getComputerChoice());
        addPoint(result);
    }) 
    
}

game();





