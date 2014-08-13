/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 9*, Array Prototype Function
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
Array.prototype.removeItem = function(value) {
    while (this.indexOf(value) >= 0) {
        this.splice(this.indexOf(value), 1);
    }

    return this;
};

function removeItemByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  data = data.split(', ');
  var val = document.getElementById('val').value;
  data.removeItem(val);
  var elementP = document.createElement("p");
  elementP.innerHTML = data;
  output.appendChild(elementP);
}
/* For console result */
var arraysData = [
    [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'], 
    ['hi', 'bye', 'hello' ]
  ];
var length = arraysData.length;
var m;
var valuesToRemove = [1, 'bye'];
var outArray;
for (m = 0; m < length; m = m + 1) {
  arraysData[m].removeItem(valuesToRemove[m]);
  console.log(arraysData[m].toString());
}