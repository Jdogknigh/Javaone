// computer picks variable associated to a type//
// user inputs pick//
// compairs pick for winning//
// if winning say you win if lose say you lose//
//now for a restart//


// computer must generate one of the three random options
//player has options to pick one of the three
    //player input
//compair the two choices using r > s, s > p, p >r
// if its p , c its victory if its c , p then lost and if
// r = r , s = s, p=p its tie. 
//output outcome./ 
function getCompterchoice(){
    let randomNumber = Math.floor((Math.random()) * 3);
console.log (randomNumber)
  if (randomNumber=== (0) )
    {console.log ("rock")}
else if (randomNumber === (1) )
    console.log ("paper")
else 
    console.log ("scissors")

}
//code above works for ouput of will need to place all input into lowercase
//code to create computer selection 

function playerSelection(){
    const guesses = document.querySelector('.guesses');
    const guessField = document.querySelector('.guessSubmit');
let playerSelection = guessField.string
console.log (playerSelection)
function play (){
    if (playerSelection === getCompterchoice)
    return 'Draw!'
    else 
    return 'fail'           //cannot get player input and computer to output anything
}
}
console.log (playerSelection)
//code for player input
//function playRound(playerSelection, computerSelection){
//code

//const playerSelection = "rock";
//const computerSelection = getCompterchoice();
//console.log(playRound(playerSelection, computerSelection))
      
    
//function game ()

//for (let i=0; i < 5; i++){
    //code
