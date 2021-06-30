'use strict';

// document.querySelector('.message').textContent = 'Correct Number!🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('No number! 🚫');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when player wins
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      //when guess is too high
      displayMessage(guess > secretNumber ? 'Too high!💹' : 'Too Low!〽');

      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      //when guess is too high
    } else {
      displayMessage('You lost the game! 😥');
      //   document.querySelector('.message').textContent = 'You lost the game! 😥';
      document.querySelector('.score').textContent = 0;
      //when player loses the game
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//if(Newscore > currentScore){High+= Newscore}

// const gameSetting = function (number,color,width) {
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = number;
//   document.querySelector('.guess').value = guess;
//   document.querySelector('body').style.backgroundColor = color;
// };
