console.log("Game is starting...");

// randomly return rock, paper, or scissors
function getComputerChoice(){
    let randomNumber = Math.random();
    // console.log(Math.random());
    if(randomNumber < 0.33){
        return 'rock';
    }else if(randomNumber > 0.66){
        return 'paper';
    }else{
        return 'scissors';
    }
}


function getHumanChoice(){
let humanChoice = prompt("Enter your choice!");
if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
    return humanChoice.toLowerCase();
}else{
    return 'invalid';
}
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'tie';
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        return 'win';
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        return 'win';
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        return 'win';
    }else{
        return 'lose';
    }
}

let humanScore = 0;
let computerScore = 0;
  
 for (let i=0;i<5;i++){
    let humanChoice =  getHumanChoice();
    let computerChoice = getComputerChoice();

   let result =  playRound(humanChoice,computerChoice);

   if(result=='win'){
    humanScore++;
   }else if(result == 'lose'){
    computerScore++;
   }
   console.log(`Human ${humanChoice}:${humanScore}` );
   console.log(`Computer ${computerChoice}:${computerScore}` );

 } 



  
