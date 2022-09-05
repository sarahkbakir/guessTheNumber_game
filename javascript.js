//setgameover if turns === 10
//setresetgame if correct asnswer


//get elements to variable (define and get guesses, count turns and displayed previous guesses with hints)
let randomNumber = Math.floor(Math.random()*100) +1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

console.log(randomNumber)

//checkGuess if ==, > , <
function checkGuess () {
    let userGuess = Number(guessField.value);

    if(userGuess === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;


    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congrats ! you got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';

        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = '!!! GAME OVER !!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.style.backgroundColor = 'red';
        lastResult.textContent = 'Wrong guess! Try again!';

        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'your guess is too low !';
            console.log( 'your guess is too low !')
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'your guess is too high !';
            console.log( 'your guess is too high !')
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }


  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }