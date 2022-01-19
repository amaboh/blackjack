let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-mi")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Ama",
    chips: 150
}

let playersEl = document.getElementById("player-el")
playersEl.textContent = player.name + ": $" +player.chips 

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
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
   
    cardsEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
    message = " DO you want to try another draw?"
    isAlive=true
    } else if ( sum ===21 ) {
    message = " You've got blackjack! "
    hasBlackJack = true
    } else {

    message = "You've lost the game!"
    isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let nuCard = getRandomCard()
    sum += nuCard
    cards.push(nuCard)
    renderGame()
    }
}