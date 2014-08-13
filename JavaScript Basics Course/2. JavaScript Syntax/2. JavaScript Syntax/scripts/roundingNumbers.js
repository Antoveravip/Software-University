/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 2, Simple Calculations
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
var nums;

function roundNumber(inputValue) {
  var numbers = [];
  numbers[0] = Math.floor(inputValue);
  numbers[0] = Number(numbers[0].toFixed(1));
  numbers[1] = Math.round(inputValue);
  numbers[1] = Number(numbers[1].toFixed(1));

  return numbers;
}
/* For html result view */
function roundNumberByInput() {
  var output = document.getElementById("output");
  var inpValue = document.getElementById('data').value;
  var elementP = document.createElement("p");
  nums = [];
  var result = "";
  nums = roundNumber(inpValue);
  result = nums[0] + " | " + nums[1];
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var inputDatas = [22.7, 12.3, 58.7];
var length = inputDatas.length;
var i = 0;
var outData = "";
for (i = 0; i < length; i = i + 1) {
  nums = roundNumber(inputDatas[i]);
  outData = nums[0] + '\n' + nums[1];
  console.log(outData);
}