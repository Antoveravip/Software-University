/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 18*, Replace <a> Tag
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function replaceATag(data) {
  var regEx = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
  data = data.replace(regEx, '[URL $1]$2[/URL]');

  return data;
}
/* For html result view */
function replaceATagHTML() {
  var output = document.getElementById("res");
  var element = document.getElementById('test');
  var data = element.innerHTML;
  var outText = replaceATag(data);
  output.innerText = outText;
}

function replaceATagByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outText = replaceATag(data);
  var elementP;
  elementP = document.createElement("p");
  elementP.innerHTML = outText;
  output.appendChild(elementP);
}
/* For console result */
var htmlContents = [
    "<ul> <li> <a href='http://softuni.bg'>SoftUni</a> </li> </ul>",
    "<p>Hello</p><a href='http://w3c.org'>W3C</a>"
  ];
var length = htmlContents.length;
var m = 0;
var extrText;
for (m = 0; m < length; m = m + 1) {
  extrText = replaceATag(htmlContents[m].toString());
  console.log(extrText);
}