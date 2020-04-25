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
};
