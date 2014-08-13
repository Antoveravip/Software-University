/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 10*, Deep Copy of Object
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function clone(obj) {
  var i, copy, attrib;
  if (obj === null || typeof (obj) !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    copy = [];
    for (i = 0; i < obj.length; i = i + 1) {
      copy[i] = clone(obj[i]);
    }

    return copy;
  }

  if (obj instanceof Object) {
    copy = {};
    for (attrib in obj) {
      if (obj.hasOwnProperty(attrib)) {
        copy[attrib] = clone(obj[attrib]);
      }
    }

    return copy;
  }
  throw new Error("Unable copy format!");
}

function compareObjects(firstObj, secondObj) {
    var result = firstObj == secondObj;

    return result;
}
/* For html result view */
// TODO
/* For console result */
var inObj = [{name: 'Pesho', age: 21}];
var length = inObj.length;
var m = 0, a, b;
var outResult;
for (m = 0; m < length; m = m + 1) {
  a = inObj[m];
  b = clone(a);
  outResult = compareObjects(a, b);  
  console.log('a == b --> ' + outResult);
  b = a;
  outResult = compareObjects(a, b);  
  console.log('a == b --> ' + outResult);
}