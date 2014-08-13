/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 14, Calculate Expression
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
// Add a contains method for Array instances
Array.prototype.contains = function (value) {
  return this.indexOf(value) > -1;
};
// Removes all unallowed signs from the input so it could be evaluated with eval()
function removeBadSigns(input) {
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var signs = ["/", "*", "-", "+"];
  var parenth = ["(", ")"];
  var sign = false;

  var result = "";
  var i = 0;
  var length = input.length;
  var len = 0;
  for (i = 0; i < length; i++) {
    if (digits.contains(parseInt(input[i], 10)) || parenth.contains(input[i], 10)) {
      result += input[i];
      sign = false;
    } else if (signs.contains(input[i])) {
      if (sign === false) {
        result += input[i];
        sign = true;
      } else {
        sign = false;
      }
    }
  }
  len = result.length - 1;
  for (i = len; i >= 0; i = i - 1) {
    if (result[i] === "(" || signs.contains(result[i]) || (result[i] === ')' && signs.contains(result[i - 1])) ||
        (result[i] === ')' && result[i - 1] === "(")) {
      result = result.substring(0, i);
    } else {
      break;
    }
  }

  return result;
}

function calculateExpression(inputValue) {
  var calculatedValue = eval(inputValue);

  return calculatedValue;
}
/* For html result view */
function calculateExpressionByInput() {
  var inpExpr = document.getElementById('expression').value;
  var elementP = document.getElementById("result");
  var result = "";
  var exprToCalculate = removeBadSigns(inpExpr);
  result = calculateExpression(exprToCalculate);
  elementP.innerHTML = result;
}
/* For node.js result */
var inputExpression = "5-9+158/9*12596-1";
var expToCalc = removeBadSigns(inputExpression);
var res = calculateExpression(inputExpression);
console.log(res);