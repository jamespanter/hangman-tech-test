const wordContainer = document.getElementById("word-container");
const wrongLetterContainer = document.getElementById("wrong-letter-container");

let correctLettersArray,
  revealedLettersArray,
  wrongLettersArray = [];

const resetGame = () => {
  wrongLettersArray = [];
  revealedLettersArray = [];
  correctLettersArray = "Hangman".toUpperCase().split("");
  correctLettersArray.forEach(() => {
    revealedLettersArray.push("_");
  });
  updateHTML();
};

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

const checkLetter = (letter) => {
  correctLettersArray.includes(letter)
    ? addCorrectLetter(letter)
    : addWrongLetter(letter);
  updateHTML();
};

const addCorrectLetter = (letter) => {
  let indexesOfCorrectLetter = [];
  correctLettersArray.forEach((char, index) =>
    char === letter ? indexesOfCorrectLetter.push(index) : null
  );

  for (let i = 0; i < indexesOfCorrectLetter.length; i++) {
    revealedLettersArray[indexesOfCorrectLetter[i]] = letter;
  }
};

const addWrongLetter = (letter) =>
  wrongLettersArray.includes(letter) ? null : wrongLettersArray.push(letter);

const checkLose = () => wrongLettersArray.length >= 6;

const checkWin = () => !revealedLettersArray.includes("_");

window.addEventListener("keydown", (e) => {
  e.keyCode >= 65 && e.keyCode <= 90 && !checkWin() && !checkLose()
    ? checkLetter(e.key.toUpperCase())
    : null;
});
