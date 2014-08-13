/*
Info: JavaScript for JavaScript Basics Lesson 5, JavaScript DOM and Events, Task 3, Hide Odd Rows
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function hideOddRows() {
  var data = document.getElementsByTagName("tr"),
    i,
    m,
    rows = [];

  for (m = 0; m < data.length; m = m + 1) {
    if (data[m].style.display !== 'none') {
      rows.push(data[m]);
    }
  }
  var length = rows.length;
  for (i = 0; i < length; i = i + 2) {
    if (i % 2 === 0 && rows[i].style.display === 'none') {
      i = i + 1;
    }
    rows[i].style.display = 'none';
  }
}

function hideEvenRows() {
  var data = document.getElementsByTagName("tr"),
    k,
    l,
    rows = [];

  for (l = 0; l < data.length; l = l + 1) {
    if (data[l].style.display !== 'none') {
      rows.push(data[l]);
    }
  }
  var length = rows.length;
  for (k = 1; k < length; k = k + 2) {
    if (k % 2 !== 0) {
      rows[k].style.display = 'none';
    }
  }
}

function showRows() {
  var rows = document.getElementsByTagName("tr"),
    length = rows.length,
    j;

  for (j = 0; j < length; j = j + 1) {
    rows[j].style.display = 'block';
  }
}

var hideOddButton = document.getElementById("oddRows");
hideOddButton.addEventListener('click', hideOddRows, false);

var hideEvenButton = document.getElementById("evenRows");
hideEvenButton.addEventListener('click', hideEvenRows, false);

var showAllButton = document.getElementById("showAll");
showAllButton.addEventListener('click', showRows, false);