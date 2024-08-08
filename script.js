let rndNum = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInp = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector('#resultBox')
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInp.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number more than 1')
    }
    else if(guess>100){
        alert('Please enter a number lesser than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${rndNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess==rndNum){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess> rndNum){
        displayMessage(`Number is High`)
    }
    else if(guess<rndNum){
        displayMessage(`Number is Short`)
    }

}

function displayGuess(guess) {
    userInp.value=''
    guessSlot.innerHTML+=`${guess},  `;
    numGuess++
    remaning.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInp.value=''
    userInp.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    rndNum=Math.floor(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaning.innerHTML=`${11-numGuess}`
    userInp.removeAttribute('disabled','')
    startOver.removeChild(p)
    playGame=true
    })
}