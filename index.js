const guessField = document.getElementById("guessField");
const submitGuess = document.getElementById("submitguess");
const resultMessage = document.getElementById("resultMessage");

let randomNumber = Math.floor(Math.random() * 24 + 1);
let guess = 1;

const whenClick = () => {
    let numberGuessedByUser = parseInt(guessField.value);

    if (numberGuessedByUser === randomNumber) {
        resultMessage.textContent = "Awesome! You guessed the correct number: " + numberGuessedByUser + ".";
        resultMessage.className = "result-message success";
    } else {
        resultMessage.textContent = "Oh no! You guessed " + numberGuessedByUser + ", but the correct number was " + randomNumber + ".";
        resultMessage.className = "result-message failure";
    }

    setTimeout(() => {
        window.location.reload();
    }, 3000);
};

submitGuess.addEventListener('click', whenClick);
