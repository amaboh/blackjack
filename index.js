let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-mi")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function getRandomCard (){

    let randomNum= Math.floor(Math.random() * 13) + 1
    if (randomNum > 10){
        return 10
    } else if (randomNum === 1){
        return 11
    } else {
        return randomNum
    } 
}


function startG(){
    let isAlive = true
    let  firstCard = getRandomCard()
    let  secondCard = getRandomCard()
    cards = [ firstCard, secondCard ]
    let sum = firstCard + secondCard
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
    let nuCard = getRandomCard()
    sum += nuCard
    cards.push(nuCard)
    renderGame()
    nuCard = 0
}