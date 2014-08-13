/*
Info: JavaScript for JavaScript Basics Lesson 1, JavaScript Development Introduction, Task 3, Current Time
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
/* Uncomment to see the result in html page */
/*
var mainNode = document.getElementsByTagName("section")[0];
var output = document.createElement("div.output");
var elementP = document.createElement("p");
output.innerHTML = "Current Time:"
output.style = "text-align: left;"
*/
var currenttime = new Date();
var hours = currenttime.getHours();
var minutes = currenttime.getMinutes();
var result = "";
if (minutes < 10) {
	result = hours + ":" + 0 + minutes;
	console.log(result);
	/* For displaing the result in the html page */
	//elementP.innerHTML = result;
} else {
	result = hours + ":" + minutes;
	console.log(result);
	/* For displaing the result in the html page */
	//elementP.innerHTML = result;
}
/*
output.appendChild(elementP);
mainNode.appendChild(output);
*/