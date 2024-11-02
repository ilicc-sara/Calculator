"use strict";
import "./style.css";

let firstNumber;
let secondNumber;
let operation;
let result;

// const add = function (num1, num2) {
//   result = num1 + num2;
//   return result;
// };

// const subtract = function (num1, num2) {
//   result = num1 - num2;
//   return result;
// };

// const multiply = function (num1, num2) {
//   result = num1 * num2;
//   return result;
// };

// const divide = function (num1, num2) {
//   result = num1 / num2;
//   return result;
// };

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");

const getResult = document.querySelector(".equals");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

numBtns.forEach(function (num, i) {
  num.addEventListener("click", function (e) {
    // dodati posebnu klasu na = , maknuti ovaj if
    if (e.target.dataset.num === "=") return;
    // firstNumber.textContent = e.target.dataset.num;
    firstNumber = firstNumberEl.textContent + e.target.dataset.num;
    firstNumberEl.textContent = firstNumber;
  });
});

opBtns.forEach(function (op, i) {
  op.addEventListener("click", function (e) {
    operation = e.target.dataset.op;
    secondNumber = firstNumber + operation;
    secondNumberEl.textContent = secondNumber;
    firstNumberEl.textContent = "";

    console.log("firstNumber: ", firstNumber);
    console.log("secondNumber:", secondNumber);
    console.log("operation:", operation);
  });
});

getResult.addEventListener("click", function () {
  console.log("operation in getResult:", operation);
  if (secondNumber.includes("+")) {
    result =
      Number(secondNumberEl.textContent.replace("+", " ")) +
      Number(firstNumberEl.textContent);
    console.log(result);
    firstNumberEl.textContent = result;
    secondNumberEl.textContent = " ";
  }

  if (secondNumber.includes("-")) {
    result =
      Number(secondNumberEl.textContent.replace("-", " ")) -
      Number(firstNumberEl.textContent);
    console.log(result);
    firstNumberEl.textContent = result;
    secondNumberEl.textContent = " ";
  }

  if (secondNumber.includes("*")) {
    result =
      Number(secondNumberEl.textContent.replace("*", " ")) *
      Number(firstNumberEl.textContent);
    console.log(result);
    firstNumberEl.textContent = result;
    secondNumberEl.textContent = " ";
  }

  if (secondNumber.includes("/")) {
    result =
      Number(secondNumberEl.textContent.replace("/", " ")) /
      Number(firstNumberEl.textContent);
    console.log(result);
    firstNumberEl.textContent = result;
    secondNumberEl.textContent = " ";
  }
});

clearBtn.addEventListener("click", function () {
  firstNumber = 0;
  secondNumber = 0;
  firstNumberEl.textContent = " ";
  secondNumberEl.textContent = " ";
});

deleteBtn.addEventListener("click", function () {
  firstNumberEl.textContent = firstNumberEl.textContent.slice(0, -1);
});
