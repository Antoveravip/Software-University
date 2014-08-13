/*
Info: JavaScript for JavaScript Basics, Lesson 1, JavaScript Development Introduction, Task 4, Circle Area
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
function calcCircleArea(r) {
	'use strict';
	var radius = r;
	var area = Math.PI * Math.pow(r, 2);
	// This is for displaing the result in console
	console.log(area);
	// This call function for displaing output the result in html page
	render(area);
}

function render(args) {
	var mainNode = document.getElementById("output");
	var output = document.createElement("div");
	var rad = document.getElementById('radius').value;
	output.innerHTML = "r = " + rad + "; " + "аrea = " + args;
	mainNode.appendChild(output);
}