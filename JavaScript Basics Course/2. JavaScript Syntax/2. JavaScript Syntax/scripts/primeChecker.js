/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 4, Check if Number is Prime
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function isPrime(inputValue) {
  var number = parseInt(inputValue, 10);
  var halfNumber = Math.round(Math.sqrt(number), 0);
  var isPrimeNumber = true;
  var i = 0;
  for (i = 2; i <= halfNumber; i = i + 1) {
    if (number % i === 0 && i !== number) {
      isPrimeNumber = false;
    }
  }

  return isPrimeNumber;
}
/* For html result view */
function isPrimeByInput() {
  var output = document.getElementById("output");
  var inpValue = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var num = parseInt(inpValue, 10);
  var result = false;
  result = isPrime(num);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var inputDatas = [7, 254, 587];
var length = inputDatas.length;
var i = 0;
var outData = false;
for (i = 0; i < length; i = i + 1) {
  outData = isPrime(inputDatas[i]);
  console.log(outData);
}