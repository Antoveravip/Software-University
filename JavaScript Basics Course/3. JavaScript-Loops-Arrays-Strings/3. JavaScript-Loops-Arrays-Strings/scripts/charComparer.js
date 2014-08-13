/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 5, Compare Chars
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function charComparer(inputValue) {
  var fArray = inputValue[0];
  var sArray = inputValue[1];
  var fLen = fArray.length;
  var sLen = sArray.length;
  var result = "Equal";
  var k;
  if (fLen === sLen) {
    for (k = 0; k < fLen; k = k + 1) {
      if (fArray[k] !== sArray[k]) {
        result = "Not Equal";
        break;
      }
    }
  } else {
    result = "Not Equal";
  }

  return result;
}


/* For html result view */
function charComparerByInput() {
  var output = document.getElementById("output");
  var firstArray = document.getElementById("farray").value;
  var secondArray = document.getElementById("sarray").value;
  var elementP = document.createElement("p");
  var data = [firstArray.split(/[\s,.]+/), secondArray.split(/[\s,.]+/)];
  var outRes = charComparer(data);
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js and console result */
var charsArrays = [
  [['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']],
  [['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']],
  [['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']]
];
var length = charsArrays.length;
var outData;
var i = 0;
for (i = 0; i < length; i = i + 1) {
  outData = charComparer(charsArrays[i]);
  console.log(outData);
}