const mainElement = document.createElement('main')
mainElement.classList.add('section-main')

export const modalWindow = document.createElement('section')
modalWindow.classList.add('modal-block')

export const modalHeading = document.createElement('h2')
modalWindow.appendChild(modalHeading)

export const modalButton = document.createElement('button')
modalButton.textContent = 'Try again ?'
modalWindow.appendChild(modalButton)

mainElement.appendChild(modalWindow)

const hangmanSection = document.createElement('section')
hangmanSection.classList.add('hangman-block')

const hangmanHeading = document.createElement('h1')
hangmanHeading.classList.add('hangman-block__heading')
hangmanHeading.textContent = 'HANGMAN GAME'

const hangmanBlock = document.createElement('div')
hangmanBlock.classList.add('hangman-block__hangman')

for (let i = 1; i <= 3; i++) {
  const line = document.createElement('div')
  line.classList.add(`hangman-block__hangman__line-${i}`)
  hangmanBlock.appendChild(line)
}

const human = document.createElement('div')
human.id = 'human'

const head = document.createElement('div')
head.classList.add(`hangman-block__hangman__head`)
human.appendChild(head)

const body = document.createElement('div')
body.classList.add(`hangman-block__hangman__body`)
human.appendChild(body)

const leftArm = document.createElement('div')
leftArm.classList.add(`hangman-block__hangman__left-arm`)
human.appendChild(leftArm)

const rightArm = document.createElement('div')
rightArm.classList.add(`hangman-block__hangman__right-arm`)
human.appendChild(rightArm)

const leftLeg = document.createElement('div')
leftLeg.classList.add(`hangman-block__hangman__left-leg`)
human.appendChild(leftLeg)

const rightLeg = document.createElement('div')
rightLeg.classList.add(`hangman-block__hangman__right-leg`)
human.appendChild(rightLeg)

hangmanSection.appendChild(hangmanHeading)
hangmanSection.appendChild(hangmanBlock)
hangmanBlock.appendChild(human)

const quizSection = document.createElement('section')
quizSection.classList.add('quiz-block')

const quizContent = document.createElement('div')
quizContent.classList.add('quiz-block__content')

const quizContentText = document.createElement('div')
quizContentText.classList.add('quiz-block__content__text')

export const quizResult = document.createElement('h2')
quizResult.classList.add('quiz-block__result')

export const quizHint = document.createElement('h3')
quizHint.classList.add('quiz-block__hint')

const quizGuesses = document.createElement('h3')
quizGuesses.classList.add('quiz-block__guesses')
quizGuesses.innerHTML = 'Incorrect guesses: '

export const quizGuessesAccent = document.createElement('span')
quizGuessesAccent.classList.add('quiz-block__guesses_accent')
quizGuesses.append(quizGuessesAccent)

const quizKeyboard = document.createElement('div')
quizKeyboard.classList.add('quiz-block__keyboard')

const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'
for (const letter of alphabet) {
  const key = document.createElement('button')
  key.classList.add('quiz-block__keyboard__key')
  key.textContent = letter
  quizKeyboard.appendChild(key)
}

quizContentText.appendChild(quizResult)
quizContentText.appendChild(quizHint)
quizContentText.appendChild(quizGuesses)
quizContent.appendChild(quizContentText)
quizContent.appendChild(quizKeyboard)
quizSection.appendChild(quizContent)

mainElement.appendChild(hangmanSection)
mainElement.appendChild(quizSection)

document.body.appendChild(mainElement)
