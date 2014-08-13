/*
Info: JavaScript for JavaScript Basics Lesson 1, JavaScript Development Introduction, Task 2, Numbers 1...10
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
/* Uncomment to see the result in html page */
/*
var mainNode = document.getElementsByTagName("section")[0];
var output = document.createElement("div.output");
output.innerHTML = "Result:"
output.style = "text-align: left;"
var line = "";
var elementP = "";
*/
var i = 0;
for (i = 1; i <= 10; i = i + 1) {
  console.log(i);
  /* For displaing the result in the html page */
  /*
  elementP = document.createElement("p");
  line = document.createTextNode(i);
  elementP.appendChild(line);
  output.appendChild(elementP);
  */
}
//mainNode.appendChild(output);