let player= {              //creating an object , no need to initialise with let, replace equals to with colon and separate variable with commas
    name :"per",           // methods are simply functions attach with objects
    chips : 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl= document.getElementById("player-el")      
playerEl.textContent = player.name + " : $" + player.chips      // calling player object here


// math.random generates number from 0 to less than 1 and  math.floor removes the decimal values from a number
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else {
        return randomCard
    }

}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]            // array--ordered list of items
    sum = firstCard + secondCard

    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards:" +" "                       //render out all the cards we have
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + " " + sum                         
    if (sum <= 20) {                                     //comparison operator
        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum == 21) {
        messsage = "You have got blackjack 😍"
        hasBlackJack = true

    }
    else {
        message = "You are out of the game 😟"
        isAlive = false

    }
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackJack===false && isAlive===true ) {       //loggical operators 
        console.log("Drawing a new card from deck")
    let card = getRandomCard()
    sum += card
    cards.push(card)                             // to push new card in cards array
    renderGame()
    }
    
}