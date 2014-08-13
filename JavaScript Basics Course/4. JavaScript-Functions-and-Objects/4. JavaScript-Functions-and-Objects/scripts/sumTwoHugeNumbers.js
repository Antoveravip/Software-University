/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 8, Sum of Two Huge Numbers
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function sumTwoHugeNumbers(numbers) {
  var firstNumber = numbers[0].split('');
  var secondNumber = numbers[1].split('');
  var length;
  var result = [];
  var reminder = 0;
  var firstNumDigit;
  var secondNumDigit;

  if (firstNumber.length > secondNumber.length) {
    length = firstNumber.length;
  } else {
    length = secondNumber.length;
  }

  for (var k = length - 1; k >= 0; k--) {
    if (firstNumber.length > 0) {
      firstNumDigit = firstNumber.pop() * 1;
    } else {
      firstNumDigit = 0;
    }

    if (secondNumber.length > 0) {
      secondNumDigit = secondNumber.pop() * 1;
    } else {
      secondNumDigit = 0;
    }   

    var sum = firstNumDigit + secondNumDigit + reminder;

    if (sum >= 10) {
      result.unshift(sum % 10);
      reminder = Math.floor(sum / 10);
    } else {
      result.unshift(sum);
      reminder = 0;
    }

    sum = 0;
  }

  return result.join('');
}

/* For html result view */
function sumTwoHugeNumbersByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById("data").value;
  var elementP = document.createElement("p");
  data = data.split(', ');
  var outRes = sumTwoHugeNumbers(data);
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js and console result */
var bigNumbers = [
  ['155', '65'],
  ['123456789', '123456789'],
  ['887987345974539','4582796427862587'],
  ['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']
];
var length = bigNumbers.length;
var outData;
var i = 0;
for (i = 0; i < length; i = i + 1) {
  outData = sumTwoHugeNumbers(bigNumbers[i]);
  console.log(outData);
}