import { hints } from './hints.js'
import {
  quizHint,
  quizResult,
  quizGuessesAccent,
  modalWindow,
  modalHeading,
  modalButton,
} from './init.js'

// Add secret word, hint and guesses when page load
let gameOver = false
let secretWord = null
let prevHint = true
quizHint.textContent = 'Hints: ' + addRandomHint(hints)
function addRandomHint(hints) {
  let randomHint = false
  do {
    randomHint = Math.round(Math.random() * (hints.length - 1))
  } while (prevHint === randomHint)
  prevHint = randomHint
  secretWord = Object.keys(hints[randomHint])[0]
  quizResult.textContent = Object.keys(hints[randomHint]).map((item) =>
    item
      .split('')
      .map((i) => (i = '_'))
      .join(' '),
  )
  quizGuessesAccent.textContent = '0/6'
  return Object.values(hints[randomHint])
}

let currentButton = null
document.addEventListener('keyup', (event) => {
  currentButton = event
  checkLetter(event.key, secretWord)
})

// Get collection of the buttons after loaded page
let buttonsKeyboard = null
buttonsKeyboard = document.getElementsByClassName('quiz-block__keyboard__key')
for (let i = 0; i < buttonsKeyboard.length; i++) {
  buttonsKeyboard[i].addEventListener('click', touchButton)
  buttonsKeyboard[i].addEventListener('touchstart', touchButton)
}
function touchButton(event) {
  currentButton = event
  checkLetter(event.target.textContent, secretWord)
}

function checkLetter(letter, word) {
  let l = letter.toLowerCase()
  if (word.includes(l)) {
    if (gameOver) return
    addDisableClass(currentButton)
    changeUnderscore(l)
  } else {
    if (gameOver) return
    addDisableClass(currentButton)
    updateGuessesCounter(letter, quizGuessesAccent)
  }
}

// Add disabled class for pressed button
function addDisableClass(button) {
  if (button.type === 'keyup') {
    for (let i = 0; i < buttonsKeyboard.length; i++) {
      button.key.toLowerCase() === buttonsKeyboard[i].innerHTML.toLowerCase()
        ? (buttonsKeyboard[i].disabled = true)
        : false
    }
  }
  if (button.type === 'click') button.target.disabled = true
}

// Change underscores to the correct letter
function changeUnderscore(letter) {
  let undesscores = quizResult.textContent.split(' ')
  let word = secretWord.split('')
  for (let i = 0; i < word.length; i++) {
    letter === word[i] ? (undesscores[i] = word[i]) : false
  }
  !undesscores.includes('_') ? appearModal(true) : false
  quizResult.textContent = undesscores.join(' ')
}

// Update the incorrect guesses counter
let counterGuesses = 0
function updateGuessesCounter(letter, guesses) {
  // Make accent only on buttons with letters
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm'
  if (alphabet.includes(letter.toLowerCase())) {
    guesses.textContent = `${++counterGuesses}/6`
    counterGuesses === 6 ? appearModal(false) : false
    addPartsOfBody(counterGuesses)
  }
}

// Add parts of the body if there is a mistake
let partsOfBody = null
document.addEventListener('DOMContentLoaded', function () {
  partsOfBody = document.getElementById('human').children
})
function addPartsOfBody(index) {
  partsOfBody[index - 1].style.display = 'block'
}

// Play Again
modalButton.addEventListener('click', playAgain)

function playAgain() {
  gameOver = false
  modalWindow.style.display = 'none'
  quizHint.textContent = 'Hints: ' + addRandomHint(hints)
  counterGuesses = 0
  for (let button of buttonsKeyboard) {
    button.disabled = false
  }
  for (let part of partsOfBody) {
    part.style.display = 'none'
  }
}

// A modal window appears
function appearModal(result) {
  modalWindow.style.display = 'flex'
  gameOver = true
  if (result) {
    modalWindow.style.border = '2.08vw solid green'
    modalHeading.textContent = `Hurray, you guessed my secret word "${secretWord}", well done :)`
  } else {
    modalHeading.textContent = `Unfortunately, you couldn't guess the secret word :( The secret word was "${secretWord}"`
    modalWindow.style.border = '2.08vw solid red'
  }
}
