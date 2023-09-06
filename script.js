'use strict';

//getting display boards
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const againElement = document.querySelector('.again');
const highScoreElement = document.querySelector('.highscore');

//initial declaration of variables
let score = 0,
  secretNumber = 0,
  highScore = 0;

//starts next round
function resetGame() {
  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
  }
  scoreElement.textContent = score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
  numberElement.textContent = '?';
  messageElement.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
}

//initializes game
resetGame();

//enables Again button
againElement.addEventListener('click', resetGame);

// function checks input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    //no input scenario
    if (!guess) {
      messageElement.textContent = '🚨 Please input a value!';

      //guess is secret number
    } else if (guess === secretNumber) {
      messageElement.textContent = '🎉 Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      numberElement.style.width = '30rem';
      numberElement.textContent = secretNumber;

      //guess is too high
    } else if (guess > secretNumber) {
      messageElement.textContent = 'Guess is too high! ✋';
      score--;
      scoreElement.textContent = score;

      //guess is too low
    } else if (guess < secretNumber) {
      messageElement.textContent = 'Guess is too low! ✋';
      score--;
      scoreElement.textContent = score;
    }

    //score reaches 0
  } else {
    messageElement.textContent = 'You lost the game 🥱';
    score = 0;
  }
});
