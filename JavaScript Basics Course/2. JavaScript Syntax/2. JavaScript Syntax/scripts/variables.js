/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 12, Digit as Word
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function variablesTypes(args) {
  var name = args[0];
  var age = args[1];
  var isMale = args[2];
  var foods = args[3];
  var result = "My name is: " + name + " //type is " + typeof(name) + "\nMy age: " + age + " //type is " + typeof(age) + "\nI am male: " + isMale 
           + " //type is " + typeof(isMale) + "\nMy favourite foods are: " + foods.join(", ") + " //type is " + typeof(food);

  return result;
}

/* For html result view */
function getCheckedRadioId(name) {
  var radioButtons = document.getElementsByName(name);
  var i = 0;
  var len = radioButtons.length;
  var result;
  var isMale = true;
  for (i = 0; i < len; i = i + 1) {
    if (radioButtons[i].checked) {
    	result = radioButtons[i].value;
    } 
  }

  if(result === "man") {
  	isMale = true;
  } else {
  	isMale = false;
  }

  return isMale;
}

function addFoods(name, addFood) {
  var checkBoxes = document.getElementsByName(name);
  var i = 0, k = 0;
  var len = checkBoxes.length;
  var result = [];
  for (i = 0; i < len; i = i + 1) {
    if (checkBoxes[i].checked) {
    	result[k] = checkBoxes[i].value;
    	k = k + 1;
    } 
  }

  result[k] = addFood;

  return result;
}

function variablesTypesByInput() {
  var output = document.getElementById("output");
  var inName = document.getElementById('name').value;
  var inAge = document.getElementById('age').value;
  var inIsMale = getCheckedRadioId('sex');
  var addFood = document.getElementById('addFood').value;
  var inFavFoods = addFoods('foods', addFood);
  var elementP = document.createElement("p");
  var result = variablesTypes([inName, inAge, inIsMale, inFavFoods]);
  elementP.innerHTML = result;
  output.appendChild(elementP);
}
/* For node.js result */
var variables = ['Pesho', 22, true, ['fries', 'banana', 'cake']];
var outResult;
outResult = variablesTypes(variables);
console.log(outResult);