

/* let card1=document.getElementById("card1")
let card2=document.getElementById("card2")

 */


let cardIndexes=[]
let MaxPotential=52
let usedPotential=0

function newCard(toWhom)
{
    /// Ensuring each card is selected only once via selecting index numbers in interval [0,51] only once
    let toUse = usedPotential + Math.floor(Math.random()*MaxPotential)
    for(let i=0;i<usedPotential;++i)
    {
        if(toUse===cardIndexes[i])
        {
            --toUse
        }
    }
    
    --MaxPotential
    ++usedPotential

    cardIndexes.push(toUse)

    var elem = document.createElement("img");
    if(toWhom)
    {
        document.getElementById("dealerCards").appendChild(elem);
    }else
    {
        document.getElementById("playerCards").appendChild(elem);
    }
    
    elem.setAttribute("src",cards[toUse].url)
}

