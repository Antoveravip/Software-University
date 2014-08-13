/*
Info: JavaScript for JavaScript Basics Lesson 5, JavaScript DOM and Events, Task 4, Numbers Only Field
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
var numberIn = document.getElementById('inNums');

function changeBkgndColor(color) {
  numberIn.style.backgroundColor = color;
}

function showError() {
  changeBkgndColor('#F00');
  setTimeout(function () { changeBkgndColor('#FFF'); }, 1000);
}

function check() {
  var inputData = numberIn.value;
  var regex = /\D/g;
  if (regex.test(inputData)) {
    showError();
    numberIn.value = inputData.replace(regex, '');
  }
}