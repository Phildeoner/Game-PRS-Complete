let userScore = 0;
let computerScore = 0;
let round = 1;
const gameRound_span = document.getElementById("round");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const paperMove_div = document.getElementById("Paper");
const rockMove_div = document.getElementById("Rock");
const scissorsMove_div = document.getElementById("Scissors");
const yourMove_p = document.getElementById("instruction");

//Create a getComputerChoice function to get computer choice
function getComputerChoice(){
    const computerChoices = ["Paper", "Rock", "Scissors"];
    const choice = Math.floor(Math.random() * 3);
    return computerChoices[choice];
}

//Create a win function to update scores and round
function win(){
    userScore++;
    round++;
    gameRound_span.innerHTML = round;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

//Create a lose function to update scores and round
function lose(){
    computerScore++;
    round++;
    gameRound_span.innerHTML = round;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;    
}

//Create a tie function to update scores and round
function tie(){
    round++;
    gameRound_span.innerHTML = round;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;   
}

//Create a play Function to accept and process user and computer choices
function play(userChoice){
    const computerChoice = getComputerChoice();
    const userTag = "User".fontsize(3).sub();
    const computerTag = "Comp".fontsize(3).sub();
    switch (userChoice + computerChoice){
        case "PaperRock":
        case "RockScissors":
        case "ScissorsPaper":
            result_p.innerHTML = `${userChoice}${userTag} Beats ${computerTag}${computerChoice}.. You Won This Round!🏆🏆`;
            win();
            document.getElementById(userChoice).classList.add("greenGlow");
            setTimeout(function(){document.getElementById(userChoice).classList.remove("greenGlow")}, 400);
            break;

        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            result_p.innerHTML = `${computerChoice}.${computerTag} Beats ${userTag}${userChoice}. You Lose This Round!😒😒`;
            lose();
            document.getElementById(userChoice).classList.add("redGlow");
            setTimeout(function(){document.getElementById(userChoice).classList.remove("redGlow")}, 400);
            break;

        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            result_p.innerHTML = `${userChoice}${userTag} Equals ${computerTag}${computerChoice}..This Round is a Tie!😕😕`;
            tie();
            document.getElementById(userChoice).classList.add("yellowGlow");
            setTimeout(function(){document.getElementById(userChoice).classList.remove("yellowGlow")}, 300);
            break; 
    }
}

//Create a playGame function to accept and generate a user choice
function playGame(){
    paperMove_div.addEventListener("click", function(){
        play("Paper");
        yourMove_p.innerHTML = `Your Last Move Was Paper 🖐️`;
    })

    rockMove_div.addEventListener("click", function(){
        play("Rock");
        yourMove_p.innerHTML = `Your Last Move Was Rock ✊`;
    })

    scissorsMove_div.addEventListener("click", function(){
        play("Scissors");
        yourMove_p.innerHTML = `Your Last Move Was Scissors ✌️`;
    })
}

playGame();