/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 2, Find Min and Max Number
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findMinAndMax(inputValue) {
  var numbers = inputValue;
  var length = numbers.length;
  var minNumber;
  var maxNumber;
  var currentNumber;
  var outputData = [];
  if (length !== 0) {
    minNumber = parseInt(numbers[0], 10);
    maxNumber = parseInt(numbers[0], 10);
  } else {
    return "There is no numbers!";
  }

  var i = 0;
  for (i = 1; i < length; i = i + 1) {
    currentNumber = parseInt(numbers[i], 10);
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
    if (currentNumber < minNumber) {
      minNumber = currentNumber;
    }
  }
  outputData[0] = minNumber;
  outputData[1] = maxNumber;

  return outputData;
}

/* For html result view */
function findMinAndMaxByInput() {
  var output = document.getElementById("output");
  var nums = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var result;
  var outRes = "";
  if (nums !== "") {
    result = findMinAndMax(nums.split(/[\s,.]+/));
    outRes = "Min -> " + result[0] + '\n' + "Max -> " + result[1];
  } else {
    outRes = "There is no numbers!";
  }
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var numbersArray = [
    [1, 2, 1, 15, 20, 5, 7, 31],
    [2, 2, 2, 2, 2],
    [500, 1, -23, 0, -300, 28, 35, 12],
    []
  ];
var length = numbersArray.length;
var k = 0;
var res;
var outResult;
for (k = 0; k < length; k = k + 1) {
  if (numbersArray[k].length !== 0) {
    res = findMinAndMax(numbersArray[k]);
    outResult = "Min -> " + res[0] + '\n' + "Max -> " + res[1];
  } else {
    outResult = "There is no numbers!";
  }

  console.log(outResult);
}