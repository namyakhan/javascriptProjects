const computer = document.getElementById("computer");
const user = document.getElementById("you");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let userOutput;
let computerOutput;
let displayResult;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    userOutput = e.target.id;
    user.innerHTML = userOutput;
    computerChoice();
    score();
  })
);

function computerChoice() {
  const randomNumber = Math.floor(Math.random() * buttons.length) + 1;

  if (randomNumber === 1) {
    computerOutput = "rock";
  }
  if (randomNumber === 2) {
    computerOutput = "scissors";
  }
  if (randomNumber === 3) {
    computerOutput = "paper";
  }
  computer.innerHTML = computerOutput;
}

function score() {
  if (computerOutput === userOutput) {
    displayResult = "Draw!😐";
  }
  if (computerOutput === "rock" && userOutput === "paper") {
    displayResult = "You Win!🎉";
  }
  if (computerOutput === "rock" && userOutput === "scissors") {
    displayResult = "You Lose!😭";
  }
  if (computerOutput === "paper" && userOutput === "rock") {
    displayResult = "You Lose!😭";
  }
  if (computerOutput === "paper" && userOutput === "scissors") {
    displayResult = "You Win!🎉";
  }
  if (computerOutput === "scissors" && userOutput === "paper") {
    displayResult = "You Lose!😭";
  }
  if (computerOutput === "scissors" && userOutput === "rock") {
    displayResult = "You Win!🎉";
  }

  result.innerHTML = displayResult;
}
