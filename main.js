"use strict";
import "./style.css";

let firstNumber = " ";
let secondNumber = " ";
let operation;
let result;
// let a = 10;
// let b;
// let operation
// kliknula sam +

// b = a  // 10
// a = " " // prazno
// operation = +
//
// let number;

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

const equals = document.querySelector(".equals");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

numBtns.forEach(function (num, i) {
  num.addEventListener("click", function (e) {
    firstNumber += e.target.dataset.num;
    firstNumberEl.textContent = firstNumber;
  });
});

opBtns.forEach(function (op, i) {
  op.addEventListener("click", function (e) {
    operation = e.target.dataset.op;

    if (secondNumber && firstNumber && operation === "+") {
      firstNumber = firstNumber + secondNumber;
      secondNumberEl.textContent = firstNumber;
    }

    if (secondNumber && firstNumber && operation === "-") {
      firstNumber = firstNumber - secondNumber;
      secondNumberEl.textContent = firstNumber;
    }

    if (secondNumber && firstNumber && operation === "*") {
      firstNumber = firstNumber * secondNumber;
      secondNumberEl.textContent = firstNumber;
    }

    if (secondNumber && firstNumber && operation === "/") {
      firstNumber = firstNumber / secondNumber;
      secondNumberEl.textContent = firstNumber;
    }

    console.log("firstNumber: ", firstNumber);
    console.log("secondNumber:", secondNumber);
    console.log("operation:", operation);

    equals.addEventListener("click", function () {
      console.log("operation equals:", operation);
      if (secondNumber && firstNumber && operation === "+") {
        firstNumber = firstNumber + secondNumber;
        firstNumberEl.textContent = firstNumber;
        secondNumberEl.textContent = " ";
      }

      if (secondNumber && firstNumber && operation === "-") {
        firstNumber = firstNumber - secondNumber;
        firstNumberEl.textContent = firstNumber;
        secondNumberEl.textContent = " ";
      }

      if (secondNumber && firstNumber && operation === "*") {
        firstNumber = firstNumber * secondNumber;
        firstNumberEl.textContent = firstNumber;
        secondNumberEl.textContent = " ";
      }

      if (secondNumber && firstNumber && operation === "/") {
        firstNumber = firstNumber / secondNumber;
        firstNumberEl.textContent = firstNumber;
        secondNumberEl.textContent = " ";
      }
    });
  });
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
