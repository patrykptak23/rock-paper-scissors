let choices=['rock','paper','scissors'];
let selection=prompt('rock, paper or scissors?');
let playerSelection=selection.toLowerCase();

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)];
}


function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
    return 'we got a draw';
    }else if(playerSelection=='rock' && computerSelection=='scissors'){
        return'player win';
    }else if(playerSelection=='rock' && computerSelection=='paper'){
        return'computer win';
    }else if(playerSelection=='paper' && computerSelection=='scissors'){
        return'computer win';
    }else if(playerSelection=='paper' && computerSelection=='rock'){
        return'player win'; 
    }else if(playerSelection=='scissors' && computerSelection=='rock'){
        return'computer win';
    }else if(playerSelection=='scissors' && computerSelection=='paper'){
        return'player win';
    }else{
        return'something went wrong m8';
    }
}



function game(){
    let playerScore=0;
    let computerScore=0;
    for (i=0;i<5;i++){
        let playerSelection=prompt(`Turn ${i+1}: rock, paper or scissors?`);
        let computerSelection=computerPlay();
        let result=playRound(playerSelection,computerSelection);
        if(result=='player win'){
            playerScore++;
            console.log(`You win this turn ${playerSelection} beats ${computerSelection}.`);
        }else if(result=='computer win'){
            computerScore++;
            console.log(`You lose this turn ${computerSelection} beats ${playerSelection}.`);
        }else{
            console.log('DRAW');
        }
    }
    console.log(playerScore>computerScore ? 'You win the game!':'You lose the game m8');
}
game();



