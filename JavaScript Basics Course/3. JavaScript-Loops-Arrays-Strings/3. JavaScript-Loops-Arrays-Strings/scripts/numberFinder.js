/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 9, Most Frequent Number
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findMostFreqNum(numSeq) {
  var count = 0, maxCount = 0, freqNum = 0, i, j;
  var numSeqLength = numSeq.length;
  var result = [];
  // Add this for only one number seq
  freqNum = numSeq[0];
  maxCount = 1;
  for (i = 0; i < numSeqLength - 1; i = i + 1) {
    count = 1;
    for (j = i + 1; j < numSeqLength; j = j + 1) {
      if (numSeq[i] === numSeq[j]) {
        count++;
        if (count > maxCount) {
          maxCount = count;
          freqNum = numSeq[i];
        }
      }
    }
  }

  result[0] = freqNum;
  result[1] = maxCount;

  return result;
}

/* For html result view */
function findMostFreqNumByInput() {
  var output = document.getElementById("output");
  var sequence = document.getElementById('data').value;
  var elementP = document.createElement("p");
  var data = sequence.split(/[\s,.]+/);
  var outRes = "";
  var p;
  for (p = 0; p < data.length; p = p + 1) {
    data[p] = parseInt(data[p], 10);
  }
  var calcRes = findMostFreqNum(data);
  outRes = calcRes[0] + " (" + calcRes[1] + " times)";
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For node.js result */
var nums = [
  [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
  [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
];
var length = nums.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  outResult = findMostFreqNum(nums[m]);
  console.log(outResult[0] + " (" + outResult[1] + " times)");
}