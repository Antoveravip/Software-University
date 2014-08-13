/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 6, Bit Checker
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function bitChecker(inputValue) {
  var number = parseInt(inputValue, 10);
  var isBitValueOne = false;
  var position = 3;
  var bitValue = (number >> position) & 1;
    if (bitValue === 1) {
      isBitValueOne = true;
    }

  return isBitValueOne;
}


/* For html result view */
function bitCheckerByInput() {
  var output = document.getElementById("output");
  var inpValue = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var num = parseInt(inpValue, 10);
  var bitIsOne = false;
  bitIsOne = bitChecker(num);
  elementP.innerHTML = bitIsOne;
  output.appendChild(elementP);
}
/* For node.js result */
var inputDatas = [333, 425, 2567564754];
var length = inputDatas.length;
var outData = false;
var i = 0;
for (i = 0; i < length; i = i + 1) {
  outData = bitChecker(inputDatas[i]);
  console.log(outData);
}