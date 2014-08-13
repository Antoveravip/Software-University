/*
Info: JavaScript for JavaScript Basics Lesson 2, JavaScript Syntax, Task 13, Digital Soothsayer
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function soothsayer(args) {
  var soothYear = args[0];
  var soothLang = args[1];
  var soothCity = args[2];
  var soothCar = args[3];
  var result = [
    soothYear[Math.floor(Math.random() * soothYear.length)],
    soothLang[Math.floor(Math.random() * soothLang.length)],
    soothCity[Math.floor(Math.random() * soothCity.length)],
    soothCar[Math.floor(Math.random() * soothCar.length)]
  ];

  return result;
}

function soothsayerByInput() {
  var output = document.getElementById("output");
  var someVariables  = [
      [1, 8, 3, 5, 2, 7, 4, 6, 9],
      ['Java', 'Python', 'C#', 'JavaScript', 'Ruby', 'PHP', 'C++', 'Database', 'Mobile Applications', 'Web Applications'],
      ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia', 'New York', 'Berlin', 'Bern', 'Madrid', 'Athens', 'Otawa'],
      ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel', 'Mercedes', 'Ferrari', 'WV', 'Porshe', 'Bike', 'Harley-Davidson']
    ];
  var elementP = document.createElement("p");
  var result = soothsayer(someVariables);
  elementP.innerHTML = "You will work " + result[0] + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3] + ".";
  output.appendChild(elementP);
}
/* For node.js result */
var variables = [
    [3, 5, 2, 7, 9],
    ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']
  ];
var outResult;
var sooth = "";
outResult = soothsayer(variables);
sooth = "You will work " + outResult[0] + " years on " + outResult[1] + ". You will live in " + outResult[2] + " and drive " + outResult[3] + ".";
console.log(sooth);