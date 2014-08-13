/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 7, Find Youngest Person
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
//One way
function findYoungestPerson(data) {
  var position = 0, i;
  var youngestAge = 217;
  var result = "";
  for (i in data) {
    if (data[i].age < youngestAge) {
      youngestAge = data[i].age;
      position = i;
    }
  }
  result = "The youngest person is " + data[position].firstname + " "+ data[position].lastname; 

  return result;
}
/* For html result view */
function findYoungestPersonByInput() {
  var output = document.getElementById("output");
  var elementP = document.createElement("p");
  elementP.innerHTML = outResult;
  output.appendChild(elementP);
}
/* For console result */
var persons = [
   { firstname : 'George', lastname: 'Kolev', age: 32}, 
   { firstname : 'Bay', lastname: 'Ivan', age: 81},
   { firstname : 'Baba', lastname: 'Ginka', age: 40}
  ];
var length = persons.length;
var outResult;
outResult = findYoungestPerson(persons);
console.log(outResult);