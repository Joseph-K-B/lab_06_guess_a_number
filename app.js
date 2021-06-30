// import functions and grab DOM elements
const guessBtn = document.getElementById('guess-button');
const guessFeedback = document.getElementById('guess-feedback');
const guessInput = document.getElementById('guess-input');
// const resetBtn = document.getElementById('reset-button');
// initialize state
let guessNumber = Math.floor(Math.random() * 20);
let guessCount = 3;
// set event listeners 
guessBtn.addEventListener('click', () => {
    if (guessCount === 0){
        guessBtn.disabled = true;
        return guessFeedback.textContent = 'Try again';
    }
    if (Number(guessInput.value) === guessNumber) {
        guessBtn.disabled = true;
        return guessFeedback.textContent = 'You guessed right';
    }
    else if (Number(guessInput.value) > guessNumber) {
        guessCount--;
        return guessFeedback.textContent = `The number is less than that. Guesses remaining: ${guessCount}`;
    }
    else (Number(guessInput.value) < guessNumber);
    guessCount--;
    return guessFeedback.textContent = `The number is greater than that. Guesses remaining: ${guessCount}`;
});


// resetBtn.addEventListener('click', () => {

// });
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

