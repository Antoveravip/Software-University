/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 8, Sort Array
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function sortArray(arr) {
  var minElem, elemHold = 0, i, j;
  var arrLength = arr.length;

  for (i = 0; i < arrLength - 1; i = i + 1) {
    minElem = i;
    for (j = i + 1; j < arrLength; j = j + 1) {
      if (arr[j] < arr[minElem]) {
        minElem = j;
      }
    }
    if (minElem !== i) {
      elemHold = arr[i];
      arr[i] = arr[minElem];
      arr[minElem] = elemHold;
    }
  }

  return arr;
}

/* For html result view */
function sortArrayByInput() {
  var output = document.getElementById("output");
  var sequence = document.getElementById('sequence').value;
  var elementP = document.createElement("p");
  var data = sequence.split(/[\s,.]+/);
  var outRes = "";
  var p;
  for (p = 0; p < data.length; p = p + 1) {
    data[p] = parseInt(data[p], 10);
  }
  var calcRes = sortArray(data);
  calcRes = calcRes.join(", ");
  outRes = calcRes;
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var arrays = [
  [5, 4, 3, 2, 1],
  [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]
];
var length = arrays.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = sortArray(arrays[m]);
  console.log(outResult.join(", "));
}