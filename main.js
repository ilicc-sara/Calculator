"use strict";
import "./style.css";

let firstNumber;
let secondNumber;
let operation;
let result;

const numBtns = document.querySelectorAll(".op-btn");

numBtns.forEach(function (num, i) {
  num.addEventListener("click", function (e) {
    console.log(e.target.dataAttribute);
  });
});
