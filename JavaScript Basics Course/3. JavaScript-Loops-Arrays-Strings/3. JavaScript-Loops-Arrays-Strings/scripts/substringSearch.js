/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 12, Substring Count
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function wordCountCaseInsensitive(substring, text) {
  text = text.toLowerCase();
  var reg = new RegExp(substring, 'g');
  var substrCount = text.match(reg);
  var count = substrCount.length;

  return count;
}

function wordCountCaseSensitive(substring, text) {
  //indexOf is case-sensitive
  var index = text.indexOf(substring);
  var substrCount = 0;
  while (index >= 0) {
    substrCount++;
    index = text.indexOf(substring, index + 1);
  }

  return substrCount;
}

function countSubstringOccur(inData) {
  var wordCount = 0;
  var len = inData.length;
  var substring = inData[0];
  substring = substring.replace(/\"/g, '');
  var text = inData[1];
  var isCaseSensitive = false;
  if (len > 2) {
    isCaseSensitive = inData[2];
  }
  switch (len) {
  case 2:
    wordCount =  wordCountCaseInsensitive(substring, text);
    break;
  case 3:
    wordCount =  isCaseSensitive ? wordCountCaseSensitive(substring, text) : wordCountCaseInsensitive(substring, text);
    break;
  default:
    wordCount = 0;
  }

  return wordCount;
}
/* For html result view */
function countSubstringOccurByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var inData = data.split('", "');
  var elementP = document.createElement("p");
  var outRes = countSubstringOccur(inData);
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var someStr = [
    ["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."],
    ["your", "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."],
    ["but", "But you were living in another world tryin' to get your message through."]
  ];
var length = someStr.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = countSubstringOccur(someStr[m]);
  console.log(outResult);
}