/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 13, Replace the White-Spaces
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
// One way with custom function
function replaceSpaces(text, symbol) {
  var modText = "";
  var i;
  var textLen = text.length;
  for (i = 0; i < textLen; i = i + 1) {
    if (text[i] === ' ') {
      modText += symbol;
    } else {
      modText += text[i];
    }
  }

  return modText;

}
// Another way using replace
function replaceSpacesWithReplace(text, symbol) {
  var modText = "";
  modText = text.replace(/\ /g, symbol);

  return modText;
}

/* For html result view */
function replaceSpacesByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var elementP = document.createElement("p");
  //var hSym = '&nbsp;';
  var hSym = '';
  var outRes = replaceSpaces(data, hSym);
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var someStr = [
    "But you were living in another world tryin' to get your message through",
    "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
    "No one heard a single word you said. They should have seen it in your eyes. What was going around your head.",
  ];
var length = someStr.length;
var m = 0;
var outResult;
var symb = '';
for (m = 0; m < length; m = m + 1) {
  outResult = replaceSpaces(someStr[m], symb);
  console.log(outResult);
  outResult = replaceSpacesWithReplace(someStr[m], symb);
  console.log(outResult);
}