/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 11, Digit as Word
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function convertDigitToWord(inputValue) {
  var digit = parseInt(inputValue, 10);
  var outputData = "";
  switch (digit) {
   case 0: outputData = "zero"; break;
   case 1: outputData = "one"; break;
   case 2: outputData = "two"; break;
   case 3: outputData = "three"; break;
   case 4: outputData = "four"; break;
   case 5: outputData = "five"; break;
   case 6: outputData = "six"; break;
   case 7: outputData = "seven"; break;
   case 8: outputData = "eight"; break;
   case 9: outputData = "nine"; break;
   default: outputData = "Invalid digit input!"; break;
  }

  return outputData;
}

/* For html result view */
function convertDigitToWordByInput() {
  var output = document.getElementById("output");
  var digitValue = document.getElementById('digit').value;
  var elementP = document.createElement("p");
  var result = convertDigitToWord(digitValue);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var digits = [8, 3, 5];
var length = digits.length;
var i = 0;
var outResult;
for (i = 0; i < length; i = i + 1) {
  outResult = convertDigitToWord(digits[i]);
  console.log(outResult);
}