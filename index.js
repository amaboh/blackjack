

let firstCard =  10
let secondCard = 11
let hasBlackJack = false
let isAlive = true

const sum = firstCard + secondCard

function startG(){
if (sum < 21){
    message = " DO you want to try another draw 😉"
} else if ( sum ===21 ){
    message = " You've got blackjack 😎"
    hasBlackJack = true
} else {
    message = "You've lost the game ☹️"
    isAlive = false
}
console.log(message)
console.log(isAlive)
}