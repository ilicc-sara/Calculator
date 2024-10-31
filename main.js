"use strict";
import "./style.css";

let firstNumber;
let secondNumber;
let operation;
let result;

const firstNumberEl = document.querySelector(".first");

const numBtns = document.querySelectorAll(".op-btn");

numBtns.forEach(function (num, i) {
  num.addEventListener("click", function (e) {
    firstNumber = e.target.dataset.num;
    firstNumberEl.textContent = firstNumber;
  });
});
