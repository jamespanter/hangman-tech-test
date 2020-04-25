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
};

const checkLetter = (letter) => {
  correctLettersArray.includes(letter)
    ? addCorrectLetter(letter)
    : console.log("add wrong letter");
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

window.addEventListener("keydown", (e) => {
  e.keyCode >= 65 && e.keyCode <= 90 ? checkLetter(e.key.toUpperCase()) : null;
});
