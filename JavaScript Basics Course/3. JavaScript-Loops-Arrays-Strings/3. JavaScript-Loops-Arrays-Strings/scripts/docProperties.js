/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 3, Properties
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function displayProperties(object) {
  var properties = [];
  for (var prop in object) {
    properties.push(prop);
  }

  properties.sort();

  return properties;
}

/* For html result view */
function displayPropertiesByInput() {
  var output = document.getElementById("output");
  var data = document; // can be window, navigator etc.
  var elementP = document.createElement("p");
  var result = displayProperties(data);
  var outRes = result.join("<br />");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var prop = document;
var res = displayProperties(prop);
var outResult = res.join('\n');
console.log(outResult);