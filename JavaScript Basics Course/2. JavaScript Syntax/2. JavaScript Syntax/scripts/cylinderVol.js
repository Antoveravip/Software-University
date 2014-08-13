/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 8, Cylinder Volume
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function calcCylinderVol(rVal, hVal) {
  var r = parseInt(rVal, 10);
  var h = parseInt(hVal, 10);
  var volume = (Math.PI * Math.pow(r, 2) * h);
  
  return volume;
}

/* For html result view */
function calcCylinderVolByInput() {
  var output = document.getElementById("output");
  var inRad = document.getElementById('radius').value;
  var inHeight = document.getElementById('height').value;
  var elementP = document.createElement("p");
  var result;
  result = calcCylinderVol(inRad, inHeight);
  elementP.innerHTML = result.toFixed(3);
  output.appendChild(elementP);
}
/* For node.js result */
var rads = [2, 5, 12];
var heights = [4, 8, 3];
var length = rads.length;
var i = 0;
var outResult;
for (i = 0; i < length; i = i + 1) {
  outResult = calcCylinderVol(rads[i], heights[i]);  
  console.log(outResult.toFixed(3));
}