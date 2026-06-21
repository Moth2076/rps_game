function getComputerChoice(){
    // get random number from 0 to 2
    let n = Math.floor(Math.random() * 3);
    if (n == 0) return "rock";
    else if (n == 1) return "paper";
    return "scissors";
}

function getHumanChoice(){
    return prompt("Your choice? ").toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(){
    const human = getHumanChoice();
    const computer = getComputerChoice();

    // human win conditions
    if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")){
        humanScore++;
        console.log(human + " beats " + computer);
    }
    else if ((computer === "rock" && human === "scissors") || (computer === "paper" && human === "rock") || (computer === "scissors" && human === "paper")){
        computerScore++;
        console.log(computer + " beats " + human);
    }
    else console.log("Draw!");
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
    }
    console.log("Final result: ");
    if (humanScore > computerScore) console.log("You won! Score: " + humanScore + " / 5");
    else if (computerScore > humanScore) console.log("You lost! Score: " + humanScore + " / 5");
    else console.log("Its a draw");
}