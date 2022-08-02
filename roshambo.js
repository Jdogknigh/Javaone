let playerScore = 0
let computerScore = 0
const buttions = document.querySelectorAll('input')

function computerchoice ()
{
    let choices = ['rock', 'paper', 'siccors']
    return choices[Math.floor(Math.random() * choices.length)]

}
console.log (computerchoice())