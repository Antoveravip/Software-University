/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 3, Number with Largest Sum of Digits
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function largestSumOfDigits(numbers) {
  var numArr = numbers;
  var result, i, k, currentNum, currNumLen, maxSum = 0, currentSum = 0, largestNumber;
  var numLen = numbers.length;
  for (i = 0; i < numLen; i = i + 1) {
    if (parseInt(numbers[i], 10) != numbers[i]) {
      result = undefined;
      break;
    }

    currentNum = Math.abs(numbers[i]).toString();
    currNumLen = currentNum.length;
    currentSum = 0
    for (k = 0; k < currNumLen; k = k + 1) {
        currentSum += parseInt(currentNum[k]);
    }
    if (currentSum >= maxSum) {
        result = numbers[i];
        maxSum = currentSum;
    }
  }

  return result;
}

/* For html result view */
function largestSumOfDigitsByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  data = data.split(', ');
  var outRes = largestSumOfDigits(data);
  var elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var numbers = [
   [5, 10, 15, 111],
   [33, 44, -99, 0, 20],
   ['hello'],
   [5, 3.3]
  ];
var length = numbers.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = largestSumOfDigits(numbers[m]);
  console.log(outResult);
}