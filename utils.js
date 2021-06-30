export function compareNumber

if (guessCount === 0){
    guessBtn.disabled = true;
    return guessFeedback.textContent = 'Try again';
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