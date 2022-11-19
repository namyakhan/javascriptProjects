let cards = []

let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el')

let player = {
    name: 'Sarfraz',
    chips: '150'
}

playerEl.textContent = player.name + ': $' + player.chips

function getRandonCard(){
    
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    
    if(randomNumber === 1){
        randomNumber = 11;
    }
    else if(randomNumber > 10){
        randomNumber = 10;
    }
    else{
        randomNumber;
    }

    return randomNumber;

}

function startGame(){
    let firstCard = getRandonCard();
    let secondCard = getRandonCard();
    isAlive= true;

    sum= firstCard + secondCard;
    cards = [firstCard, secondCard];

    renderGame();
}

function renderGame(){

    cardsEl.textContent = 'Cards: ';
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i]+ ' ';
    }

    sumEl.textContent = 'Sum: ' + sum;

    if(sum <21){
        message ='Do you want to draw a card ?' 
    }

    else if(sum ===21){
        message = 'You have won the game'
        hasBlackJack = true;
    }

    else{
        message = 'You have lost the game'
        isAlive = false;
    }

    messageEl.textContent = message;

}

function newCard(){
    if(isAlive === true && hasBlackJack=== false){
    let card = getRandonCard();
    sum += card;
    cards.push(card);
    renderGame(); 
    }
}
