let guessNumber = Math.floor(Math.random() * 20);
const guessFeedback = document.getElementById('guess-feedback');
export function x(){
    if (Number(guessInput.value) === guessNumber) {
        guessFeedback.textContent = 'You guessed right';
    }
    else if (Number(guessInput.value) > guessNumber) {
        guessFeedback.textContent = 'the number is less than your guess';
    }
    else (Number(guessInput.value) < guessNumber);
    guessFeedback.textContent = 'the number is greater than your guess';}