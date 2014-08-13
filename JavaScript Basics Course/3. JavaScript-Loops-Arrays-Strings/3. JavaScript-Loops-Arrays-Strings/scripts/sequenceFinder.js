/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 6, Maximal Sequence
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findMaxSequence(seq) {
  var length = 1, maxLength = 1;
  var maxSeqValue = seq[0];
  var seqLength = seq.length;
  var i, k;
  var result = [];
  for (i = 1; i < seqLength; i = i + 1) {
    if (seq[i - 1] === seq[i]) {
      length = length + 1;
      if (length >= maxLength) {
        maxLength = length;
        maxSeqValue = seq[i];
      }
    } else {
      length = 1;
    }
  }

  for (k = 0; k < maxLength; k = k + 1) {
    result.push(maxSeqValue);
  }

  return result;
}

/* For html result view */
function findMaxSequenceByInput() {
  var output = document.getElementById("output");
  var sequence = document.getElementById('sequence').value;
  var elementP = document.createElement("p");
  var data = sequence.split(/[\s,.]+/);
  var outRes = "[";
  outRes += findMaxSequence(data).join(", ");
  outRes += "]";
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var sequences = [
  [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
  ['happy'],
  [2, 'qwe', 'qwe', 3, 3, '3']
];
var length = sequences.length;
var i = 0;
var outResult;
for (i = 0; i < length; i = i + 1) {
  outResult = findMaxSequence(sequences[i]);
  console.log(outResult);
}