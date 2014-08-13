/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 2, N-th Digit of Number
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findNthDigit(inArray) {
  var index = parseInt(inArray[0]);
  var signs = inArray[1].toString().replace('.','').replace(',', '').replace('-','').replace(' ', '');
  var result, i;
  var numLen = signs.length;
  if (signs[numLen - index] !== undefined) {
    result = signs[numLen - index];
  } else {
    result = "The number doesn't have " + index + " digits";
  }


  return result;
}

/* For html result view */
function findNthDigitByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  data = data.replace('[', '').replace(']', '').replace(' ', '').split(',');
  var outRes = findNthDigit(data);
  var elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var numbers = [
  [1, 6],
  [2, -55],
  [6, 923456],
  [3, 1451.78],
  [6, 888.88]
 ];
var length = numbers.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = findNthDigit(numbers[m]);
  console.log(outResult);
}