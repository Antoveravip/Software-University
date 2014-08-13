/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 9, Tree or House
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
// Function that calculate area of roof triangle
function calculateAreaOfTriangle(baseSide) {
  var heigth = baseSide * 2 / 3;
  var triangleArea = baseSide * heigth / 2;

  return triangleArea;
}
// Function that calculate area of the base of the house
function calculateAreaOfSquare(side) {
  var squareArea = Math.pow(side, 2);

  return squareArea;
}
// Function that calculate area of the stem of the tree
function calculateAreaOfRectangle(heightB) {
  var base = heightB / 3;
  var rectangleArea = base * heightB;

  return rectangleArea;
}
// Function that calculate area of the crown of the tree
function calculateAreaOfCircle(stemHeight) {
  var radius = stemHeight * 2 / 3;
  var circleArea = Math.PI * Math.pow(radius, 2);

  return circleArea;
}
// Function that calculate area of the tree
function calculateAreaOfTree(heightB) {
  var stem = calculateAreaOfRectangle(heightB);
  var crown = calculateAreaOfCircle(heightB);
  var areaOfTheTree = stem + crown;

  return areaOfTheTree;
}
// Function that calculate area of the house
function calculateAreaOfHouse(baseA) {
  var base = calculateAreaOfSquare(baseA);
  var roof = calculateAreaOfTriangle(baseA);
  var areaOfTheHouse = base + roof;

  return areaOfTheHouse;
}

function treeHouseCompare(sideA, lengthB) {
  var valueOfA = parseInt(sideA, 10);
  var valueOfB = parseInt(lengthB, 10);
  var houseArea = calculateAreaOfHouse(valueOfA);
  var treeArea = calculateAreaOfTree(valueOfB);
  var outputData = "";
  if (houseArea > treeArea) {
    outputData = "house/" + houseArea.toFixed(2);
  } else if (treeArea > houseArea) {
    outputData = "tree/" + treeArea.toFixed(2);
  } else {
    outputData = "equal/" + houseArea.toFixed(2);
  }

  return outputData;
}

/* For html result view */
function treeHouseCompareByInput() {
  var output = document.getElementById("output");
  var inSideA = document.getElementById('side-a').value;
  var inSideB = document.getElementById('side-b').value;
  var elementP = document.createElement("p");
  var result = "";
  result = treeHouseCompare(inSideA, inSideB);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var sidesA = [3, 3, 4];
var sidesB = [2, 3, 5];
var length = sidesA.length;
var i = 0;
var outResult = "";
for (i = 0; i < length; i = i + 1) {
  outResult = treeHouseCompare(sidesA[i], sidesB[i]);
  console.log(outResult);
}