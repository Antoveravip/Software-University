/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 1, Last Digit of Number
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function lastDigitAsText(number) {
  var num = parseInt(number, 10);
  var lastDigit = Math.abs(num % 10);
  var lastDigitName = "";
  switch (lastDigit) {
    case 0: { lastDigitName = "Zero"; break; }
    case 1: { lastDigitName = "One"; break; }
    case 2: { lastDigitName = "Two"; break; }
    case 3: { lastDigitName = "Three"; break; }
    case 4: { lastDigitName = "Four"; break; }
    case 5: { lastDigitName = "Five"; break; }
    case 6: { lastDigitName = "Six"; break; }
    case 7: { lastDigitName = "Seven"; break; }
    case 8: { lastDigitName = "Eight"; break; }
    case 9: { lastDigitName = "Nine"; break; }
    default: { lastDigitName = "Not a number"; break; }
  }

  return lastDigitName;
}

/* For html result view */
function lastDigitAsTextByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outRes = lastDigitAsText(data);
  var elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var numbers = [ 6, -55, 133, 14567 ];
var length = numbers.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = lastDigitAsText(numbers[m]);
  console.log(outResult);
}