// Your Code Here
let userName = window.prompt('Please enter your name:')

function playGame(){
for(let i= 0; i < questions.length; i++) {
    //console.log(questions[i])
    let questions = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer) {
        console.log('Correct')
        userScore = userScore + 10    
    }
}

window.alert('Your score is:' +userScore)

}
while (playAgain === true) {
    playGame()
    let userChoice = window.prompt ('Would you like to play the game again? Answer Yes or No.')
    if (userChoice === 'yes') {
       playAgain = true
    } else {
        playAgain = false
        windown.alert('Thanks for playing the game!')
    }
}