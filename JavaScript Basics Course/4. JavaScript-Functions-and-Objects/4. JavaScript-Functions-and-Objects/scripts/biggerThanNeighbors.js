/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 4, Bigger Than Neighbors
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function largestSumOfDigits(position, numbers) {
  var result = "";
  var numLen = numbers.length;
  var position = parseInt(position);
  for (var i = 0; i < numLen; i++) {
    numbers[i] = parseInt(numbers[i]);
  }
  if (position > 0 && position < numLen - 1) {
    if (numbers[position] > numbers[position - 1] && numbers[position] > numbers[position + 1]) {
      result = "bigger";
    }
    else {
      result = "not bigger";
    }
  } else if ((position === 0 && numbers[position] > numbers[position + 1]) ||
    (position === numLen - 1 && numbers[position] > numbers[position - 1])) {
      result = "only one neighbor"; // bigger thab this one
  } else if ((position === 0 && numbers[position] < numbers[position + 1]) ||
       (position === numLen - 1 && numbers[position] < numbers[position - 1])) {
    result = "only one neighbor"; // not bigger than its one neighbor
  } else {
    result = "invalid index";
  }

  return result;
}

/* For html result view */
function largestSumOfDigitsByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var ind = parseInt(data[0]);
  var nums = data.replace('[', '').replace(']', '').replace(' ', '').split(',');
  nums.shift();
  var outRes = largestSumOfDigits(ind, nums);
  var elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var numbers = [
   [2, [1, 2, 3, 3, 5]],
   [2, [1, 2, 5, 3, 4]],
   [5, [1, 2, 5, 3, 4]],
   [0, [1, 2, 5, 3, 4]]
  ];
var length = numbers.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = largestSumOfDigits(numbers[m][0], numbers[m][1]);
  console.log(outResult);
}