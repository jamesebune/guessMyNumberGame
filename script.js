"use strict";

let secNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".number").textContent = secNumber;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "NO Number entered❌❌";
    displayMessage("NO Number entered❌❌");
  } else if (guess === secNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = "Correct Answer 😍😍";
      displayMessage("Correct Answer 😍😍");
      score--;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".score").textContent = score;

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else {
      // document.querySelector(".message").textContent = "You loss the game 🤦‍♂️🤦‍♀️";
      displayMessage("You loss the game 🤦‍♂️🤦‍♀️");
    }
  } else if (guess != secNumber) {
    if (score > 1) {
      displayMessage(guess > secNumber ? "Too high 😊😊" : "Too low 😒😒");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      // document.querySelector(".message").textContent = "You loss the game 🤦‍♂️🤦‍♀️";
      displayMessage("You loss the game 🤦‍♂️🤦‍♀️");
    }
  }
  // else if (guess < secNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low 😒😒";
  //     displayMessage;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".message").textContent = "You loss the game 🤦‍♂️🤦‍♀️";
  //   }
  // } else if (guess > secNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high 😊😊";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".message").textContent = "You loss the game 🤦‍♂️🤦‍♀️";
  //   }
  // }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
