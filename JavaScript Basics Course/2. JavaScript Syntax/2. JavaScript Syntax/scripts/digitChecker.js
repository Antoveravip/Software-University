/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 10, Digit Checker
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function checkDigit(inputValue) {
  var number = parseInt(inputValue, 10);
  var outputData = Math.floor(number / 100) % 10 === 3;

  return outputData;
}

/* For html result view */
function checkDigitByInput() {
  var output = document.getElementById("output");
  var num = document.getElementById('number').value;
  var elementP = document.createElement("p");
  var result = checkDigit(num);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var numbers = [1235, 25368, 123456];
var length = numbers.length;
var i = 0;
var outResult;
for (i = 0; i < length; i = i + 1) {
  outResult = checkDigit(numbers[i]);
  console.log(outResult);
}