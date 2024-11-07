"use strict";
import "./style.css";

let firstNumber = "";
let secondNumber;
let operation;
let result;

console.log(Boolean(Infinity));

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");

const equals = document.querySelector(".equals");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

numBtns.forEach(function (num, i) {
  num.addEventListener("click", function (e) {
    if (e.target.dataset.num === "." && firstNumber === "") return;
    if (e.target.dataset.num === "." && firstNumber.includes(".")) return;
    firstNumber += e.target.dataset.num;
    firstNumberEl.textContent = firstNumber;
  });
});

const clearFunction = function () {
  firstNumber = "";
  secondNumber = "";
  firstNumberEl.textContent = "";
  secondNumberEl.textContent = "";
};

const calculate = function (a, b, operation) {
  if (operation === "+") result = b + a;
  if (operation === "-") result = b - a;
  if (operation === "*") result = b * a;
  if (operation === "/") result = b / a;
  return result;
};

opBtns.forEach(function (op, i) {
  op.addEventListener("click", function (e) {
    if (firstNumber === "") return;
    if (operation && secondNumber) {
      if (firstNumber === "0" && operation === "/") {
        alert(`Can't divide by '0'`);
      }
      firstNumber = calculate(
        Number(firstNumber),
        Number(secondNumber),
        operation
      );
      secondNumber = "";
      operation = "";
      if (firstNumber === Infinity) clearFunction();
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
    // console.log("first number:", firstNumber);
    // console.log("second number:", secondNumber);
    // console.log("operation:", operation);
    // console.log("END");

    equals.addEventListener("click", function () {
      if (secondNumber && firstNumber && operation) {
        if (firstNumber === "0" && operation === "/") {
          alert(`Can't divide by '0'`);
          // firstNumber = "";
        }
        result = calculate(
          Number(firstNumber),
          Number(secondNumber),
          operation
        );
        // firstNumber = result;
        firstNumberEl.textContent = result; //firstNumber;
        secondNumberEl.textContent = "";
        if (result === Infinity) clearFunction();
      }
    });
  });
});

clearBtn.addEventListener("click", clearFunction);

deleteBtn.addEventListener("click", function () {
  firstNumber = firstNumber.slice(0, -1);
  firstNumberEl.textContent = firstNumber;
});
