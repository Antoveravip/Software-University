/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 11, Check the Brackets
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function checkBrackets(expression) {
  var brackets, i;
  var exprLen = expression.length;
  var result = "incorrect";
  brackets = 0;
  for (i = 0; i < exprLen; i = i + 1) {
    if (expression[i] === '(') {
      brackets++;
    } else if (expression[i] === ')') {
      brackets--;
    }
    if (brackets < 0) {
      break;
    }
  }

  if (brackets === 0) {
    result = "correct";
  }

  return result;
}

/* For html result view */
function checkBracketsByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var outRes = checkBrackets(data);
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var someExpr = ['( ( a + b ) / 5 – d )', ') ( a + b ) )', '( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'];
var length = someExpr.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = checkBrackets(someExpr[m]);
  console.log(outResult);
}