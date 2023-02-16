let firstnum = 10;
let secondnum = 11;
let displayEL = Document.getElementById("display-el");
let cardsEL = Document.getElementById("cards-el");
let sumEL = Document.getElementById("sum-el");
let sum = firstnum + secondnum;
let message = "";
console.log(displayEL);

function myfunction(){
    if(sum < 21){
        message = "do you want to pick another card";
        
    }else if(sum === 21){
        message = "you got blackjack!";
    
    }else{
        message = "you are out of game";
    }
    
    displayEL.textContent = message;
}

