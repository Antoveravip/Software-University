/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 15, Most Frequent Word
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findMostFreqWord(text) {
  text = text.toLowerCase();
  var words = text.match(/\b\w+\b/g);
  var results = [];
  var maxTimes = 0;
  var word, k, i;
  for (k in words) {
    word = words[k];
    if (results[word] === undefined) {
      results[word] = { word: word, times: 1 };
    } else {
      results[word].times++;
    }

    if (results[word].times > maxTimes) {
      maxTimes = results[word].times;
    }
  }

  var mostFrequentWords = [];

  for (i in results) {
    if (results[i].times === maxTimes) {
      mostFrequentWords.push(results[i]);
    }
  }

  mostFrequentWords.sort(
    function (a, b) {
      return a.word.localeCompare(b.word);
    }
  );

  return mostFrequentWords;
}

/* For html result view */
function findMostFreqWordByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outRes = findMostFreqWord(data);
  var elementP, wordFreq;
  for (wordFreq in outRes) {
    elementP = document.createElement("p");
    elementP.innerHTML = outRes[wordFreq].word + " -> " + outRes[wordFreq].times + " times";
    output.appendChild(elementP);
  }
}
/* For console result */
var texts = [
    'in the middle of the night',
    'Welcome to SoftUni. Welcome to Java. Welcome everyone.',
    'Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'
  ];
var length = texts.length;
var m = 0;
var wd;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = findMostFreqWord(texts[m]);
  for (wd in outResult) {
    console.log(outResult[wd].word + " -> " + outResult[wd].times + " times");
  }
}