/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 7, Maximal Increasing Sequence
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findMaxSequence(seq) {
  var length = 0, maxLength = 1, index = 0, maxIndex = 0;
  var seqLength = seq.length;
  var i, k, n;
  var result = [];
  for (n = 0; n < seqLength; n = n + 1) {
    seq[n] = parseInt(seq[n]);
  }  

  for (i = 0; i < seqLength; i = i + 1) {
    if (i === 0) {
      length = 1;
      maxLength = 1;
      index = i;
    }
    if (i > 0 && seq[i] < seq[i - 1]) {
      length = 1;
      index = i;
    }
    if (i > 0 && seq[i] > seq[i - 1]) {
      length = length + 1;
      if (length > maxLength) {
        maxIndex = index;
        maxLength = length;
      }
    }
  }

  if (maxLength < 2) {
    result = "no";
  } else {
    for (k = maxIndex; k < (maxLength + maxIndex); k = k + 1) {
      result.push(seq[k]);
    }
  }

  return result;
}

/* For html result view */
function findMaxSequenceByInput() {
  var output = document.getElementById("output");
  var sequence = document.getElementById('sequence').value;
  var elementP = document.createElement("p");
  var data = sequence.split(/[\s,.]+/);  
  var outRes = "";
  var calcRes = findMaxSequence(data);
  if(calcRes !== "no") {
    outRes = "[";
    calcRes = calcRes.join(", ");
    outRes += calcRes;
    outRes += "]";
  } else {
    outRes = calcRes;
  }
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var sequences = [
  [3, 2, 3, 4, 2, 2, 4],
  [3, 5, 4, 6, 1, 2, 3, 6, 10, 32],
  [3, 2, 1]
];
var length = sequences.length;
var i = 0;
var outResult;
for (i = 0; i < length; i = i + 1) {
  outResult = findMaxSequence(sequences[i]);
  console.log(outResult);
}