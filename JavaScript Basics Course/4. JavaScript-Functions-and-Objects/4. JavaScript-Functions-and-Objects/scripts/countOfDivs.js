/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 6, Count Number of DIVs
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
//One way
function countOfDivs(htmlData) {
  var counter = 0;
  var index = 0;
  while (htmlData.indexOf('<div', index) != -1) {
    counter++;
    index = htmlData.indexOf('<div', index) + 1;
  }

  return counter;
}
/* For html result view */
function countOfDivsByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outRes = countOfDivs(data);
  var elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var htmlDatas = [
   '<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title><script src="/yourScript.js" defer></script>' +
   '</head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div></div><div>hi<div></div></div><div>I am a div</div>' +
   '</div></body></html>'
  ];
var length = htmlDatas.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = countOfDivs(htmlDatas[m]);
  console.log(outResult);
}