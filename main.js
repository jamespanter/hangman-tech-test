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
    ? console.log("add right letter")
    : console.log("add wrong letter");
  updateHTML();
};

window.addEventListener("keydown", (e) => {
  e.keyCode >= 65 && e.keyCode <= 90 ? checkLetter(e.key.toUpperCase()) : null;
});
