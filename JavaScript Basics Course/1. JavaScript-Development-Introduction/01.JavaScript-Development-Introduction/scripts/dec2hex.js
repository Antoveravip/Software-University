/*
Info: JavaScript for JavaScript Basics Lesson 1, JavaScript Development Introduction, Task 5, Decimal to Hexadecimal
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/

/* I decide not to use .toString(16).toUpperCase();, but to write my own convertor from decimal to hexadecimal */
'use strict'
var input = "";
while(true) {
	var inputData = prompt("Enter a number", "254");
	input = parseInt(inputData);
	if(input != NaN & input >= 0) {
		console.log(input);
		break;
	}
}

var hexadecimalNumber = convertDecimalToHexadecimal(input);
alert(hexadecimalNumber);

function convertDecimalToHexadecimal(args) {
	'use strict';
    hexadecimalNumber = "";
    var decimalNumber = parseInt(args);
    var remainder = 1;
    var number = decimalNumber;
    if(number == 0) {
    	hexadecimalNumber = 0;
    }
    while (number != 0) {
        remainder = number % 16;
        number = parseInt(number / 16);
        if (remainder > 9) {
            switch (remainder) {
                case 10: { hexadecimalNumber = "A" + hexadecimalNumber; break; }
                case 11: { hexadecimalNumber = "B" + hexadecimalNumber; break; }
                case 12: { hexadecimalNumber = "C" + hexadecimalNumber; break; }
                case 13: { hexadecimalNumber = "D" + hexadecimalNumber; break; }
                case 14: { hexadecimalNumber = "E" + hexadecimalNumber; break; }
                case 15: { hexadecimalNumber = "F" + hexadecimalNumber; break; }
                default: { break; }                        
            }
        } else {
            hexadecimalNumber = remainder + hexadecimalNumber;
        }            
    }
    return hexadecimalNumber;
}