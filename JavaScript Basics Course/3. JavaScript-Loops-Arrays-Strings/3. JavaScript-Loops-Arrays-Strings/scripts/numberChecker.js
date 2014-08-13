/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 1, Number Checker
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function printNumbers(inputValue) {
  var number = parseInt(inputValue, 10);
  var outputData = [];
  var i = 0;
  var n = 0;
  for (i = 1; i <= number; i = i + 1) {
    if (i % 4 !== 0 && i % 5 !== 0) {
      outputData[n] = i;
      n = n + 1;
    }
  }

  if (outputData.length === 0) {
    outputData[0] = "no";
  }

  return outputData;
}

/* For html result view */
function printNumbersByInput() {
  var output = document.getElementById("output");
  var num = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var result = printNumbers(num);
  elementP.innerHTML = result.join(", ");
  output.appendChild(elementP);
}
/* For node.js result */
var numbers = [20, -5, 13];
var length = numbers.length;
var k = 0;
var outResult;
for (k = 0; k < length; k = k + 1) {
  outResult = printNumbers(numbers[k]);
  console.log(outResult.join(", "));
}