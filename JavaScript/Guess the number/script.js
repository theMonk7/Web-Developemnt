"use strict";

// Variables
let randomNumber = evalRandomNumber();
let numberOfChances = 0;
let highScore = 0;
let score = 20;

// DOM elements
const hiddenNumber = document.querySelector(".number");
const messageEl = document.querySelector(".message");
const guessEl = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const body = document.body;
// Actions
checkButton.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = "NO NUMBER";
  } else {
    numberOfChances += 1;
    scoreEl.textContent = String(score - numberOfChances);
    if (guess === randomNumber) {
      messageEl.textContent = "CORRECT";
      hiddenNumber.textContent = String(randomNumber);
      highScore = Math.max(highScore, score - numberOfChances);
      checkButton.disabled = true;
      body.style.backgroundColor = "#9EFD38";
      hiddenNumber.style.width = "30rem";
      highScoreEl.textContent = highScore;
    } else {
      if (guess > randomNumber) {
        updateMessage("Your guess is way high");
      } else {
        updateMessage("Your guess is way low");
      }
    }
  }
});

againButton.addEventListener("click", function () {
  randomNumber = evalRandomNumber();
  numberOfChances = 0;
  hiddenNumber.textContent = "?";
  checkButton.disabled = false;
  body.style.backgroundColor = "#222";
  hiddenNumber.style.width = "15rem";
  score = 20;
  scoreEl.textContent = score;
  guessEl.value = "";
  updateMessage("Start Guessing...");
});

// Helper functions
function evalRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function updateMessage(message) {
  messageEl.textContent = message;
}
