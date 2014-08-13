/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 4, Create Array
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function createArray(value) {
  var array = new Array(value);
  var length = array.length;
  var index = 0;
  var result = "[";
  for (index = 0; index < length; index = index + 1) {
    array[index] = index * 5;
    if (index !== (length - 1)) {
      result += " " + array[index] + ",";
    } else {
      result += " " + array[index] + " ]";
    }
  }

  return result;
}
/* For html result view */
function createArrayByInput() {
  var output = document.getElementById("output");
  var data = 20; // can be made to take input from html page
  var elementP = document.createElement("p");
  var result = createArray(data);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var len = 20;
var outResult = createArray(len);
console.log(outResult);