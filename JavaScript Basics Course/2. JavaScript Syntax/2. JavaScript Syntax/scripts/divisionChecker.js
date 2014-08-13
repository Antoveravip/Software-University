/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 5, Division by 3
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function divisionBy3(inputValue) {
  var number = parseInt(inputValue, 10);
  var isDivided = false;
    if (number % 3 === 0) {
      isDivided = true;
    }

  return isDivided;
}

function resultOfDivisionBy3(args) {
  var outputData = "the number is ";
  if(args === true) {
    outputData += "divided";
  } else {
    outputData += "not divided";
  }

  outputData += " by 3 without remainder";

  return outputData;
}

/* For html result view */
function divisionBy3ByInput() {
  var output = document.getElementById("output");
  var inpValue = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var num = parseInt(inpValue, 10);
  var divideBy3 = false;
  var result = "";
  divideBy3 = divisionBy3(num);
  result = resultOfDivisionBy3(divideBy3);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var inputDatas = [12, 188, 591];
var length = inputDatas.length;
var i = 0;
var outData = false;
var outResult = "";
for (i = 0; i < length; i = i + 1) {
  outData = divisionBy3(inputDatas[i]);
  outResult = resultOfDivisionBy3(outData);
  console.log(outResult);
}