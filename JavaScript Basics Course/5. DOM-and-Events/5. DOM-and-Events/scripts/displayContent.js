/*
Info: JavaScript for JavaScript Basics Lesson 5, JavaScript DOM and Events, Task 2, Display DIVs Content
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function replaceDivElements() {
  var currentHTML = document.getElementById("input");
  var data = currentHTML.getElementsByTagName("div");
  var ulElement, liElement;

  function replaceDiv(inputData) {
    var dataLength = inputData.length;
    // When we have documentFragment must use .textContent - not innerText to work in all browsers !!!
    var outputData = document.createDocumentFragment();
    var i, currentData;
    for (i = 0; i < dataLength; i = i + 1) {
      /*if (inputData[i].innerText == "") {
          continue;
      }*/
      currentData = inputData[i].getElementsByTagName("div");

      if (currentData.length > 0) {
        liElement = document.createElement('li');
        //var child = inputData[i].firstChild();
        liElement.textContent = inputData[i].firstChild.data;
        outputData.appendChild(liElement);
        ulElement = document.createElement('ul');
        liElement.appendChild(ulElement);
        liElement = replaceDiv(currentData);
        ulElement.appendChild(liElement);
        //outputData.appendChild(liElement);
        i++;
      } else {
        liElement = document.createElement('li');
        liElement.textContent = inputData[i].textContent;
      }

      outputData.appendChild(liElement);
    }

    return outputData;
  }

  var result = document.getElementById('result');
  var outResult = replaceDiv(data);
  result.appendChild(outResult);
}