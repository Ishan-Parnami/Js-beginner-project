let randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("div");

let prevGuesses = [];
let numGuesses = 10;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

const validateGuess = (guess) => {
    if(isNaN(guess)) {
        displayMessage(`<span class=\"info-msg\">Please enter a valid number.</span>`);
        return;
    }
    if(guess < 1 || guess > 100) {
        displayMessage(`<span class=\"info-msg\">Please enter a number between 1 and 100.</span>`);
        return;
    }
    prevGuesses.push(guess);
    if(numGuesses === 1){
        displayGuess(guess);
        displayMessage(`<span class=\"wrong-msg\">Game over! The correct number was ${randomNumber}.</span>`);
        endGame();
    } else {
        displayGuess(guess);
        CheckGuess(guess);
    }
}

const CheckGuess = (guess) => {
    if(guess === randomNumber) {
        displayMessage(`<span class=\"congrats\">🎉 Congratulations! You've guessed the number!</span>`);
        endGame(true);
    } else if(guess < randomNumber) {
        displayMessage(`<span class=\"wrong-msg\">Your guess is too low.</span>`);
    } else {
        displayMessage(`<span class=\"wrong-msg\">Your guess is too high.</span>`);
    }
}

const displayGuess = (guess) => {
    userInput.value = '';
    // If this is the first guess, don't prepend comma
    if (guessSlot.innerHTML === '' || guessSlot.innerHTML.trim() === '') {
        guessSlot.innerHTML = `${guess}`;
    } else {
        guessSlot.innerHTML += `, ${guess}`;
    }
    numGuesses--;
    remaining.innerHTML = `${numGuesses}`;
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = message;
}

const endGame = () => {
    userInput.value = '';
    userInput.disabled = true;
    p.className = "button-container";
    p.innerHTML = `<button id="newGame" class="start-again-btn">Start Again</button>`;
    startOver.appendChild(p);
    playGame = false;
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e) {
        newGame();
    });
}

const newGame = () => {

    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e) {
        randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);
        prevGuesses = [];
        numGuesses = 10;
        guessSlot.innerHTML = '';
        startOver.removeChild(p);
        remaining.innerHTML = `${numGuesses}`;
        lowOrHi.innerHTML = '';
        userInput.disabled = false;
        userInput.value = '';
        userInput.focus();
        p.innerHTML = '';
        playGame = true;
    });

}