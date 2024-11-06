"use strict";
import "./style.css";

let firstNumber = "";
let secondNumber;
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

const calculate = function (a, b, operation) {
  if (operation === "+") result = b + a;
  if (operation === "-") result = b - a;
  if (operation === "*") result = b * a;
  if (operation === "/") result = b / a;
  return result;
};

// console.log(calculate(5, 3, "+"));
// console.log(calculate(5, 3, "-"));
// console.log(calculate(5, 3, "*"));
// console.log(calculate(5, 3, "/"));

// za calculate f
// kad se ona poziva imacu 1. 2. i op
// izracunaj i vrati rezultat

opBtns.forEach(function (op, i) {
  op.addEventListener("click", function (e) {
    if (firstNumber === "") return;
    if (operation && secondNumber) {
      firstNumber = calculate(
        Number(firstNumber),
        Number(secondNumber),
        operation
      );
      secondNumber = "";
      operation = "";
    }
    secondNumber = firstNumber;
    firstNumber = "";
    operation = e.target.textContent;
    if (firstNumber === "") {
      secondNumberEl.textContent = `${secondNumber}${operation}`;
    }

    if (secondNumber === "") {
      secondNumberEl.textContent = "";
    }
    firstNumberEl.textContent = firstNumber;
    console.log("first number:", firstNumber);
    console.log("second number:", secondNumber);
    console.log("operation:", operation);
    console.log("END");

    // secondNumberEl.textContent = secondNumber + operation;
    // firstNumberEl.textContent = firstNumber;

    equals.addEventListener("click", function () {
      if (secondNumber && firstNumber && operation) {
        result = calculate(
          Number(firstNumber),
          Number(secondNumber),
          operation
        );
        // firstNumber = result;
        firstNumberEl.textContent = result; //firstNumber;
        secondNumberEl.textContent = "";
      }
    });
  });
});

clearBtn.addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  firstNumberEl.textContent = "";
  secondNumberEl.textContent = "";
});

deleteBtn.addEventListener("click", function () {
  firstNumberEl.textContent = firstNumberEl.textContent.slice(0, -1);
});

// if (secondNumber && firstNumber && operation === "+") {
//   firstNumber = firstNumber + secondNumber;
//   secondNumberEl.textContent = firstNumber;
// }

// if (secondNumber && firstNumber && operation === "-") {
//   firstNumber = firstNumber - secondNumber;
//   secondNumberEl.textContent = firstNumber;
// }

// if (secondNumber && firstNumber && operation === "*") {
//   firstNumber = firstNumber * secondNumber;
//   secondNumberEl.textContent = firstNumber;
// }

// if (secondNumber && firstNumber && operation === "/") {
//   firstNumber = firstNumber / secondNumber;
//   secondNumberEl.textContent = firstNumber;
// }

// console.log("firstNumber: ", firstNumber);
// console.log("secondNumber:", secondNumber);
// console.log("operation:", operation);

// equals.addEventListener("click", function () {
//   console.log("operation equals:", operation);
//   if (secondNumber && firstNumber && operation === "+") {
//     firstNumber = firstNumber + secondNumber;
//     firstNumberEl.textContent = firstNumber;
//     secondNumberEl.textContent = " ";
//   }

//   if (secondNumber && firstNumber && operation === "-") {
//     firstNumber = firstNumber - secondNumber;
//     firstNumberEl.textContent = firstNumber;
//     secondNumberEl.textContent = " ";
//   }

//   if (secondNumber && firstNumber && operation === "*") {
//     firstNumber = firstNumber * secondNumber;
//     firstNumberEl.textContent = firstNumber;
//     secondNumberEl.textContent = " ";
//   }

//   if (secondNumber && firstNumber && operation === "/") {
//     firstNumber = firstNumber / secondNumber;
//     firstNumberEl.textContent = firstNumber;
//     secondNumberEl.textContent = " ";
//   }
// });
