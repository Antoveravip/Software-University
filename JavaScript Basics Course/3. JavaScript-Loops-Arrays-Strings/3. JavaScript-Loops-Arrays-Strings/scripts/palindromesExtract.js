/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 14, Palindromes
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findPalindromes(text) {
  text = text.toLowerCase();
  var words = text.trim().split(/\W+/);
  var palindromes = [];
  var result = "";
  var p;
  var wordsLength = words.length;
  var isPalindrom = false;
  for (p = 0; p < wordsLength; p++) {
    isPalindrom = words[p] === words[p].split('').reverse().join('');
    if (isPalindrom && words[p] !== '') {
      palindromes.push(words[p]);
    }
  }

  if (palindromes.length === 0) {
    result = "No palindromes found!";
  } else {
    result = palindromes.join(', ');
  }

  return result;
}
// TODO: Test the speed of each funcion
/* For html result view */
function findPalindromesByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var outRes = findPalindromes(data);
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var texts = [
    "There is a man, his name was Bob.",
    "ABBA, lamal, exe, Ana, This, anna, or elle, even eve, best hanah, may Hannah",
    "The car was there!"
  ];
var length = texts.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = findPalindromes(texts[m]);
  console.log(outResult);
}