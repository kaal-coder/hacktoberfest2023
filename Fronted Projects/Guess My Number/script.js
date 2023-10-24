"use strict";
// document.querySelector('.number').textContent = 12;
// console.log((document.querySelector('.guess').value = 202));

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ No Number";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🥳 You Won!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "16rem";
    let high = 0;
    let hs = (document.querySelector(".number").value = score);
    if (hs > high) {
      document.querySelector(".label-highscore").textContent =
        "🥇 Highscore:" + score;
      high = hs;
    } else {
      document.querySelector(".label-highscore").textContent =
        "🥇 Highscore:" + high;
    }
  } else if (guess < number) {
    if (score > 1) {
      score--;
      document.querySelector(".label-score").textContent = "💯 Score:" + score;
      document.querySelector(".message").textContent = "⬇️ too low";
    } else {
      document.querySelector(".message").textContent = "😤 You lost!";
      document.querySelector(".label-score").textContent = "💯 Score:" + 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector(".label-score").textContent = "💯 Score:" + score;
      document.querySelector(".message").textContent = "⬆️ too high";
    } else {
      document.querySelector(".message").textContent = "😤 You lost!";
      document.querySelector(".label-score").textContent = "💯 Score:" + 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".label-score").textContent = "💯 Score: 20";
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});

////////////////In this codebase we can do 'REFACTORING' i.e. writing coding according to DRY=do not repeat yourself
