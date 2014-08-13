/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 1, Powerful Cars
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
var hpPower;
function convertKWtoHP(valueOfKW) {
  var hpValue = valueOfKW / 0.745699872;

  return hpValue;
}
/* For html result view */
function convertKWtoHPByInput() {
  var output = document.getElementById("output");
  var kwValue = document.getElementById('car-power').value;
  var elementP = document.createElement("p");
  var result = "";
  hpPower = convertKWtoHP(kwValue);
  hpPower = Number(hpPower.toFixed(2));
  result = kwValue + " kW = " + hpPower + " hp";
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var kwValues = [75, 150, 1000];
var length = kwValues.length;
var i = 0;
for (i = 0; i < length; i = i + 1) {
  hpPower = convertKWtoHP(kwValues[i]);
  hpPower = Number(hpPower.toFixed(2));
  console.log(hpPower);
}