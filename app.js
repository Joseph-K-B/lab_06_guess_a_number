// import functions and grab DOM elements
const guessBtn = document.getElementById('guess-button');
const guessFeedback = document.getElementById('guess-feedback');
const guessInput = document.getElementById('guess-input');
// initialize state
let guessNumber = Math.floor(Math.random() * 20);
let guessCount = 4;
// set event listeners 
guessBtn.addEventListener('click', () => {
    if (guessCount === 0){
        guessBtn.disabled = true;
    }
    if (Number(guessInput.value) === guessNumber) {
        return guessFeedback.textContent = 'You guessed right';
    }
    else if (Number(guessInput.value) > guessNumber) {
        guessCount--;
        return guessFeedback.textContent = 'the number is less than your guess';
    }
    else (Number(guessInput.value) < guessNumber);
guessCount--;
    return guessFeedback.textContent = 'the number is greater than your guess';
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

