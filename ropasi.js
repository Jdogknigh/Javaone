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
    const computerguesses=document.querySelector('.computerguess');
    const guesses = document.querySelector('.guesses');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
    const lastResult = document.querySelector('.lastResult');
    let randomNumber = Math.floor((Math.random()) * 3);
    let playerscore = 0
    let computerscore = 0
    console.log (randomNumber)
    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }
function getCompterchoice(){
  if (randomNumber=== (0) )
    {return  "rock";}
else if (randomNumber === (1) )
{ return  "paper";}
else 
{ return   "scissors";
}
 
}
console.log (computerscore)

// above code to create computer selection 
//make three button! no submit of text
function playerSelectionrock(){
        let counter = ""
    if ( randomNumber===(0))
    guesses.textContent=  "tie"
    else if (randomNumber === (1)) 
   // computerscore +=1;
    guesses.textContent=  "you lose";
    else  
    guesses.textContent=  "you win!";
   // playerscore.textContent= ++playerscore
    //counter = playerscore + "" + computerscore
    function gameplay (){
        if (playerSelectionpaper () == "you lose"||
        playerSelectionrock () =="you lose"||
        playerSelectionsiccors ()== "you lose" )
        {
            computerscore += 1
             counter = playerscore + " " + computerscore
        }
        else ( playerSelectionpaper () ==  "you win!"||
        playerSelectionrock () == "you win!"||
        playerSelectionsiccors ()== "you win!")
        {
            playerscore +=1
            return playerscore + " " + computerscore
        }
    }
}
//console.log (playerSelectionrock ())
function playerSelectionpaper (){
    if (randomNumber === (0))
    guesses.textContent=  "you win!"
    else if (randomNumber===(1))
    guesses.textContent=  "tie"
    else guesses.textContent=  "you lose"
    function gameplay (){
        if (playerSelectionpaper () == "you lose"||
        playerSelectionrock () =="you lose"||
        playerSelectionsiccors ()== "you lose" )
        {
            computerscore += 1
            return playerscore + " " + computerscore
        }
        else ( playerSelectionpaper () ==  "you win!"||
        playerSelectionrock () == "you win!"||
        playerSelectionsiccors ()== "you win!")
        {
            playerscore +=1
            return playerscore + " " + computerscore
        }
    }

    
}

function playerSelectionsiccors (){
  
    if  (randomNumber === (0))
  guesses.textContent= "you lose";
    else if (randomNumber=== (1))
    guesses.textContent=  "you win!";
    else guesses.textContent=  "tie";
    function gameplay (){
        if (playerSelectionpaper () == "you lose"||
        playerSelectionrock () =="you lose"||
        playerSelectionsiccors ()== "you lose" )
        {
            computerscore += 1
            return playerscore + " " + computerscore
        }
        else ( playerSelectionpaper () ==  "you win!"||
        playerSelectionrock () == "you win!"||
        playerSelectionsiccors ()== "you win!")
        {
            playerscore +=1
            return playerscore + " " + computerscore
        }
    }
}
//console.log (playerSelectionsiccors ())

function gameplay (){
    if (playerSelectionpaper () == "you lose"||
    playerSelectionrock () =="you lose"||
    playerSelectionsiccors ()== "you lose" )
    {
        computerscore += 1
        return playerscore + " " + computerscore
    }
    else ( playerSelectionpaper () ==  "you win!"||
    playerSelectionrock () == "you win!"||
    playerSelectionsiccors ()== "you win!")
    {
        playerscore +=1
        return playerscore + " " + computerscore
    }
}
function play (){
document.getElementById('counter').innerHTML = counter
return
}
console.log (gameplay ())
//compair outputs of choices to add to player count

//function stopg ()
//{if (playerSelectionpaper ())
   // {disableButtons ()}}
//console.log (gameplay ())
//button.playerSelectionrock.addEventListener('click', playerSelectionRock);
     
   
//function counterw (){
 //let i=0; i < 5; i++
//}

    //code
//still need counter, block out buttons after use
//reset button