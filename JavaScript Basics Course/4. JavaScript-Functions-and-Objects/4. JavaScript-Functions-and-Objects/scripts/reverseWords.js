/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 5, Reverse Every Word in a String
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
//One way
function reverseWord(word) {
  var reversedWord = "", i;
  var wordLen = word.length;
  for (i = 0; i < wordLen; i = i + 1) {
      reversedWord = word[i] + reversedWord;
  }

  return reversedWord;
}
//Another way with StringBuilder
function buildStringBuilder() {
  return {
    strs: [],
    len: 0,
    append: function (str) {
        this.strs[this.len++] = str;
        return this;
    },
    toString: function () {
        return this.strs.join("");
    }
  };
}
function reverseWithStringBuilder (word) {
  var reversedWord = "", i;
  var wordLeng = word.length;
  reversedWord = buildStringBuilder();
  for (i = wordLeng; i >= 0; i = i - 1) {
    reversedWord.append(word[i]);
  }

  return reversedWord.toString();
}

function reverseWords(text) {
  var words = text.split(' ');
  var wordsLen = words.length;
  var i, reversedText = "", currentWord;
  for (i = 0; i < wordsLen; i++) {
    currentWord = words[i];    
    if (i !== wordsLen - 1) {
      reversedText += reverseWord(currentWord) + " ";
    } else {
      reversedText += reverseWord(currentWord);
    }
  }

  return reversedText;
}

/* For html result view */
function reverseWordsByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outRes = reverseWords(data);
  var elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var texts = [
   "Hello, how are you.",
   "Life is pretty good, isn’t it?"
  ];
var length = texts.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = reverseWords(texts[m]);
  console.log(outResult);
}