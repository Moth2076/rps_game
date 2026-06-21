function getComputerChoice(){
    // get random number from 0 to 2
    let n = Math.floor(Math.random() * 3);
    if (n == 0) return "Rock"
    else if (n == 1) return "Paper"
    return "Scissors"
}