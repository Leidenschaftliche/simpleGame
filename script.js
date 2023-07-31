
let cardIndexes = []
let dealerCardIndexes = []
let playerCardIndexes = []
let MaxPotential = 52
let usedPotential = 0
let ds = 0
let ps = 0
let gameOver = true;
let dealermustStay = false;
let playerStayedBefore=false

function resetGame() {
    cardIndexes = []
    dealerCardIndexes = []
    playerCardIndexes = []
    MaxPotential = 52
    usedPotential = 0
    document.getElementById("startGame").disabled = false
    document.getElementById("pHit").disabled = true
    document.getElementById("pStay").disabled = true
    gameOver = true
    dealermustStay = false
}


function updateScores() {
    ds = 0
    ps = 0
    for (let i = 0; i < dealerCardIndexes.length; ++i) {

        ds += cards[dealerCardIndexes[i]].value
    }
    console.log("umut")
    for (let i = 0; i < playerCardIndexes.length; ++i) {
        ps += cards[playerCardIndexes[i]].value
    }
    console.log(ds)
    console.log(ps)
    document.getElementById("dealerScore").textContent = ds
    document.getElementById("playerScore").textContent = ps
}


function checkSituation() {
    gr = document.getElementById("gameResult")

    if (ds === 21) { gr.textContent = "Dealer wins (blackjack)"; resetGame() }
    else if (ps === 21) { gr.textContent = "Player wins (blackjack)"; resetGame() }
    else if (ds > 21) { gr.textContent = "Dealer exceeds 21"; resetGame() }
    else if (ps > 21)  { gr.textContent = "Player exceeds 21"; resetGame() }
    else if (ps === ds) {gr.textContent = "Equal, no one wins"; resetGame()} 
    else if (ds > ps&&playerStayedBefore){gr.textContent = "Dealer wins as closer"; resetGame()} 
    else if (ds >= 17) { ///Dealer must stay so player can't stay.
        document.getElementById("pStay").disabled = true
        dealermustStay = true
    }

}



/**
 * toWhom: false for player
 * toWhom: true for dealer
 * 
 */
function newCard(toWhom) {
    /// Ensuring each card is selected only once via selecting index numbers in interval [0,51] only once
    let toUse = usedPotential + Math.floor(Math.random() * MaxPotential)
    for (let i = 0; i < usedPotential; ++i) {
        if (toUse === cardIndexes[i]) {
            --toUse
        }
    }

    --MaxPotential
    ++usedPotential

    cardIndexes.push(toUse)

    var elem = document.createElement("img");
    if (toWhom) {
        document.getElementById("dealerCards").appendChild(elem);
        dealerCardIndexes.push(toUse)
    } else {
        document.getElementById("playerCards").appendChild(elem);
        playerCardIndexes.push(toUse)
    }

    elem.setAttribute("src", cards[toUse].url)
    updateScores()
    checkSituation()
}


function playerHit() {
    playerStayedBefore=false
    newCard(false)
    if (!(gameOver || dealermustStay)) {
        newCard(true)
    }
    
}

function playerStay() {
    playerStayedBefore=true
    newCard(true)
}

function startGame() {
    gameOver = false
    document.getElementById("startGame").disabled = true
    document.getElementById("pHit").disabled = false
    document.getElementById("pStay").disabled = false
    
    document.getElementById("dealerCards").replaceChildren()
    document.getElementById("playerCards").replaceChildren()
    document.getElementById("dealerScore").textContent = 0
    document.getElementById("playerScore").textContent = 0
    document.getElementById("gameResult").textContent = ""
}





resetGame()