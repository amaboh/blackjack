let firstCard =  2
let secondCard = 11
let cards = [ firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-mi")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function startG(){
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] 
if (sum <= 20){
    message = " DO you want to try another draw"
} else if ( sum ===21 ) {
    message = " You've got blackjack "
    hasBlackJack = true
} else {
    message = "You've lost the game"
    isAlive = false
}

messageEl.textContent = message
}

function newCard() {
    let nuCard = 8
    sum += nuCard
    cards.push(nuCard)
    renderGame()
}