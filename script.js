'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;

// document.querySelector('.score').textContent = scoreValue;
// document.querySelector('.high-score').textContent = highScore;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.checkBtn').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guessValue) {
    displayMessage('🚫 Not allowed');
    // document.querySelector('.message').textContent = '🚫 Not allowed';

    // when player wins
  } else if (guessValue === randomNumber) {
    displayMessage('🎉 Correct Answer');
    // document.querySelector('.message').textContent = '🎉 Correct Answer';

    document.querySelector('body').style.backgroundColor = '#30df30';
    document.querySelector('.number').style.width = '20rem';

    document.querySelector('.number').textContent = guessValue;
    document.querySelector('.score').textContent = scoreValue;

    //high score
    const isHighScore = scoreValue > highScore ? scoreValue : highScore;
    highScore = isHighScore;
    return (document.querySelector('.high-score').textContent = isHighScore);

    //when guess is too low or high
  } else if (guessValue !== randomNumber) {
    if (scoreValue > 1) {
      displayMessage(guessValue > randomNumber ? '⬆️ Too High' : '⬇️ Too low');
      // document.querySelector('.message').textContent =
      // guessValue > randomNumber ? '⬆️ Too High' : '⬇️ Too low';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      displayMessage('😢 You lose');
    }
  }
});

document.querySelector('.againBtn').addEventListener('click', function () {
  scoreValue = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start Guessing');
  // document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = scoreValue;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#1b1919';
  document.querySelector('.number').style.width = '15rem;';
});

// function updateGameState(message, score, number, guess) {
//   document.querySelector('.message').textContent = message;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// }

// function handleGuess(guessValue) {
//   if (guessValue === randomNumber) {
//     updateGameState('🎉 Correct Number!', scoreValue);
//     // Add any additional logic for winning the game
//     document.querySelector('body').style.backgroundColor = '#30df30';
//     document.querySelector('.number').style.width = '20rem';

//     document.querySelector('.number').textContent = guessValue;
//     document.querySelector('.score').textContent = scoreValue;

//     //high score
//     const isHighScore = scoreValue > highScore ? scoreValue : highScore;
//     highScore = isHighScore;
//     return (document.querySelector('.high-score').textContent = isHighScore);
//   } else {
//     const highOrLow = guessValue < randomNumber ? '⬇️ Too low' : '⬆️ Too high';
//     scoreValue = Math.max(scoreValue - 1, 0); //The purpose of this code is to decrease `scoreValue` by 1, but ensure it never becomes negative.
//     const message = scoreValue > 0 ? highOrLow : '😢 You lose';
//     updateGameState(message, scoreValue);
//   }
// }
