let playerScore = 0
let computerScore = 0
const buttions = document.querySelectorAll('input')

function computerchoice ()
{
    let choices = ['rock', 'paper', 'siccors']
    return choices[Math.floor(Math.random() * choices.length)]

}
console.log (computerchoice())
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
function gameplay (PlayerSelection){
    if ((computerchoice()=='rock' &&  PlayerSelection() == 'paper')||
        (computerchoice()=='paper'&& PlayerSelection ()== 'siccors') ||
        (computerchoice()=='siccors' && PlayerSelection()=='rock'))

    
    playerScore +=1
    score = ('You win! ' + playerSelection + ' beats ' + computerSelection
    + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)


    document.getElementById('result').innerHTML = result
    return
}
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.value)
        })
    }
    )
console.log(playerScore)