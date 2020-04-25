const wordContainer = document.getElementById("word-container");
const wrongLetterContainer = document.getElementById("wrong-letter-container");

let correctLettersArray,
  revealedLettersArray,
  wrongLettersArray = [];

// Empty letter arrays and setup arrays for new word
const resetGame = () => {
  wrongLettersArray = [];
  revealedLettersArray = [];
  correctLettersArray = "Hangman".toUpperCase().split("");
  correctLettersArray.forEach(() => {
    revealedLettersArray.push("_");
  });
  updateHTML();
};

// Update HTML with current state of arrays
const updateHTML = () => {
  wordContainer.innerHTML = revealedLettersArray
    .map((letter) => `<span>${letter} </span>`)
    .join("");
  wrongLetterContainer.innerHTML = wrongLettersArray
    .map((letter) => `<span>${letter} </span>`)
    .join("");
  checkWin() ? (wrongLetterContainer.innerHTML = "Game won") : null;
  checkLose() ? (wrongLetterContainer.innerHTML = "Game over") : null;
};

// Check letter from the keydown event listener
// Initialise action based on right or wrong letter
const checkLetter = (letter) => {
  correctLettersArray.includes(letter)
    ? addCorrectLetter(letter)
    : addWrongLetter(letter);
  updateHTML();
};

// Change any correct letters from '_' to actual letter in RevealedLettersArray
const addCorrectLetter = (letter) => {
  let indexesOfCorrectLetter = [];
  correctLettersArray.forEach((char, index) =>
    char === letter ? indexesOfCorrectLetter.push(index) : null
  );

  for (let i = 0; i < indexesOfCorrectLetter.length; i++) {
    revealedLettersArray[indexesOfCorrectLetter[i]] = letter;
  }
};

// Add incorrect letter to wrongLettersArray if it is not already present
const addWrongLetter = (letter) =>
  wrongLettersArray.includes(letter) ? null : wrongLettersArray.push(letter);

const checkLose = () => wrongLettersArray.length >= 6;

const checkWin = () => !revealedLettersArray.includes("_");

// Check keydown is a letter and that the game is not already won/lost and call checkLetter function
window.addEventListener("keydown", (e) => {
  e.keyCode >= 65 && e.keyCode <= 90 && !checkWin() && !checkLose()
    ? checkLetter(e.key.toUpperCase())
    : null;
});
