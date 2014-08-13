/*
Info: JavaScript for JavaScript Basics Lesson 5, JavaScript DOM and Events, Task 5, Print Mouse Coordinates
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
var startButton = document.getElementById("start");
startButton.addEventListener('click', startDisplay, false);
var stopButton = document.getElementById("end");
stopButton.addEventListener('click', endDisplay, false);

var mouseCoordinates = { x: 0, y: 0 };
var display = document.getElementById('output');
var container = document.createElement("div");
display.appendChild(container);

function displayMouseCoordinates(ev) {
  var currentTime = new Date();

  mouseCoordinates.x = ev.clientX || ev.pageX;
  mouseCoordinates.y = ev.clientY || ev.pageY;

  container.innerHTML += "X:" + mouseCoordinates.x + "; Y:" + mouseCoordinates.y + " Time: " + currentTime + '<br />';
}

function startDisplay() {
  document.addEventListener('mousemove', displayMouseCoordinates, false);
}

function endDisplay() {
  document.removeEventListener('mousemove', displayMouseCoordinates, false);
}