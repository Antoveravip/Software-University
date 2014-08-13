/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 7, The Lifetime Supply Calculator
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function calcSupply(args) {
  var age = parseInt(args[0], 10);
  var maxAge = parseInt(args[1], 10);
  var amount = parseFloat(args[2]);
  var favFood = args[3];
  var daysInYear = 365;
  var maxAmount = (maxAge - age) * amount * daysInYear;
  var outputData = "" + maxAmount + "kg of " + favFood + " would be enough until I am " + maxAge + " years old.";
  
  return outputData;
}

/* For html result view */
function calcSupplyByInput() {
  var output = document.getElementById("output");
  var inAge = document.getElementById('age').value;
  var inMaxAge = document.getElementById('max-age').value;
  var inAmount = document.getElementById('amount').value;
  var inFood = document.getElementById('food');
  var favorFood = inFood.options[inFood.selectedIndex].value;
  var elementP = document.createElement("p");
  var result = "";
  result = calcSupply([inAge, inMaxAge, inAmount, favorFood]);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var ages = [38, 20, 16];
var maxAges = [118, 87, 102];
var amounts = [0.5, 2, 1.1];
var favoriteFoods = ["chocolate", "fruits", "nuts"];
var length = ages.length;
var i = 0;
var outResult = "";
for (i = 0; i < length; i = i + 1) {
  outResult = calcSupply([ages[i], maxAges[i], amounts[i], favoriteFoods[i]]);  
  console.log(outResult);
}