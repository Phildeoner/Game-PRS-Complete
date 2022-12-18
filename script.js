let userScore = 0;
let computerScore = 0;
let round = 1;
const gameRound_span = document.getElementById("round");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const round_span = document.getElementById("round");
const result_p = document.getElementById("result");
const paperMove_div = document.getElementById("paper");
const rockMove_div = document.getElementById("rock");
const scissorsMove_div = document.getElementById("scissors");
const yourMove_p = document.getElementById("instruction");

//Create a getComputerChoice function to get computer choice
function getComputerChoice(){
    const computerChoices = ["paper", "rock", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return computerChoices[choice];
}