/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 3, Check if Number is Even
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function evenNumber(inputValue) {
  var number = parseInt(inputValue, 10);
  var isEven = (number % 2 === 0);

  return isEven;
}
/* For html result view */
function evenNumberByInput() {
  var output = document.getElementById("output");
  var inpValue = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var result = false;
  var num = parseInt(inpValue, 10);
  result = evenNumber(num);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var inputDatas = [3, 127, 588];
var length = inputDatas.length;
var i = 0;
var outData = false;
for (i = 0; i < length; i = i + 1) {
  outData = evenNumber(inputDatas[i]);
  console.log(outData);
}