/*
Info: JavaScript for JavaScript Basics Lesson 4, JavaScript Functions and Objects, Task 11***, Group Persons
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.toString = function () {
    return (this.firstName + ' ' + this.lastName + " (age " + this.age + ")");
  };
}
function group(people, property) {
  var groups;
  switch (property) {
  case "firstName":
  case "lastName":
  case "age":
    {
    groups = {};

    people.map(function (p) {
      if (!groups[p[property]]) {
        groups[p[property]] = [];
      }
      groups[p[property]].push(p);
    });

    return groups;
      }
  default:
    throw new Error("No such property in person.");
  }
}
function viewGroup(groups) {
  var entry;
  for (entry in groups) {
    console.log("Group " + entry + " : [" + groups[entry] + "]");
  }
}
function viewGroupInHTML(groups) {
  var entry, outData;
  var elementP = document.createElement("p");
  for (entry in groups) {
    outData = "Group " + entry + " : [" + groups[entry] + "]";
    elementP.innerHTML += outData + "<br />";
  }
  output.appendChild(elementP);
}
/* For html result view */
function groupByInput() {
  var output = document.getElementById("output");  
  groups = group(persons, 'firstName');
  viewGroupInHTML(groups);
  groups = group(persons, 'age');
  viewGroupInHTML(groups);
  groups = group(persons, 'lastName');
  viewGroupInHTML(groups);

}
/* For console result */
var personsData = [
    ["Scott", "Guthrie", 38],
    ["Scott", "Johns", 36],
    ["Scott", "Hanselman", 39],
    ["Jesse", "Liberty", 57],
    ["Jon", "Skeet", 38]
  ];
var persons = [];
var groups;
var length = personsData.length;
var m = 0;
var outResult;
for (m = 0; m < length; m = m + 1) {
  persons.push(new Person(personsData[m][0], personsData[m][1], personsData[m][2]));
}
groups = group(persons, 'firstName');
viewGroup(groups);
groups = group(persons, 'age');
viewGroup(groups);
groups = group(persons, 'lastName');
viewGroup(groups);