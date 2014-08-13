/*
Info: JavaScript for JavaScript Basics Lesson 5, JavaScript DOM and Events, Task 1, Like / Unlike Button
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function changeText() {
  var output = document.getElementById("ld-button");
  var currentValue = output.innerHTML;
  if (currentValue === "Like") {
    currentValue = "Unlike";
  } else {
    currentValue = "Like";
  }

  output.innerHTML = currentValue;
}