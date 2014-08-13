/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 10, Reverse String
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
// One way
function reverseString(str) {
  var reversedStr, i;
  var strLen = str.length;
  reversedStr = "";
  for (i = 0; i < strLen; i++) {
    reversedStr = str[i] + reversedStr;
  }

  return reversedStr;
}

//Another way with StringBuilder
function buildStringBuilder() {
  return {
    strs: [],
    len: 0,
    append: function (str) {
      this.strs[this.len++] = str;
      return this;
    },
    toString: function () {
      return this.strs.join("");
    }
  };
}

function reverseWithStringBuilder(str) {
  var reversedStrg = "";
  var len = str.length;
  var k;
  reversedStrg = buildStringBuilder();
  for (k = len - 1; k >= 0; k = k - 1) {
    reversedStrg.append(str[k]);
  }

  return reversedStrg.toString();
}

/* For html result view */
function reverseStringByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var outRes = reverseString(data);
  elementP.innerHTML = "With simple function: " + outRes;
  output.appendChild(elementP);
  var elementP2 = document.createElement("p");
  outRes = reverseWithStringBuilder(data);
  elementP2.innerHTML = "With StringBuilder: " + outRes;
  output.appendChild(elementP2);
}
/* For node.js result */
var someStrings = ['sample', 'softUni', 'java script'];
var length = someStrings.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = reverseString(someStrings[m]);
  console.log("With simple function: " + outResult);
  outResult = reverseWithStringBuilder(someStrings[m]);
  console.log("With StringBuilder: " + outResult);
}