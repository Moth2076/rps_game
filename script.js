function getComputerChoice(){
    // get random number from 0 to 2
    let n = Math.floor(Math.random() * 3);
    if (n == 0) return "rock"
    else if (n == 1) return "paper"
    return "scissors"
}

function getHumanChoice(){
    return prompt("Your choice? ").toLowerCase();
}