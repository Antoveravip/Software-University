/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 19**, Replace <a> Tag
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function toUpLetter(text) {
  var startIndex = text.indexOf("<upcase>");
  var region, regionText, endIndex, toUp;
  while (startIndex > -1) {
    regionText = text.substring(startIndex + 8, text.indexOf("</upcase>", startIndex));
    region = text.substring(startIndex, startIndex + 8);
    text = text.replace(region, "");
    endIndex = text.indexOf("</upcase>");
    region = text.substring(endIndex, endIndex + 9);
    text = text.replace(region, "");
    toUp = regionText.toUpperCase();
    text = text.replace(regionText, toUp);
    startIndex = text.indexOf("<upcase>", startIndex + 1);
  }

  return text;
}

function toMixLetter(text) {
  var startIndex = text.indexOf("<mixcase>");
  var regionText, region, endIndex, mixText, i, random;
  while (startIndex > -1) {
    regionText = text.substring(startIndex + 9, text.indexOf("</mixcase>", startIndex));
    region = text.substring(startIndex, startIndex + 9);
    text = text.replace(region, "");
    endIndex = text.indexOf("</mixcase>");
    region = text.substring(endIndex, endIndex + 10);
    text = text.replace(region, "");
    mixText = regionText;
    for (i = 0; i < mixText.length; i++) {
      random = Math.floor(Math.random() * 2);
      if (random % 2 === 0) {
        mixText = mixText.replace(mixText[i], mixText[i].toUpperCase());
      } else {
        mixText = mixText.replace(mixText[i], mixText[i].toLowerCase());
      }
    }
    text = text.replace(regionText, mixText);
    startIndex = text.indexOf("<mixcase>", startIndex + 1);
  }

  return text;
}

function toLowLetter(text) {
  var startIndex = text.indexOf("<lowcase>");
  var regionText, region, endIndex, lowText;
  while (startIndex > -1) {
    regionText = text.substring(startIndex + 9, text.indexOf("</lowcase>", startIndex));
    region = text.substring(startIndex, startIndex + 9);
    text = text.replace(region, "");
    endIndex = text.indexOf("</lowcase>");
    region = text.substring(endIndex, endIndex + 10);
    text = text.replace(region, "");
    lowText = regionText.toLowerCase();
    text = text.replace(regionText, lowText);
    startIndex = text.indexOf("<lowcase>", startIndex + 1);
  }

  return text;
}

function fixCasing(data) {
  var result = data;
  result = toUpLetter(result);
  result = toMixLetter(result);
  result = toLowLetter(result);

  return result;
}
/* For html result view */
function fixCasingHTML() {
  var output = document.getElementById("res");
  var element = document.getElementById('test');
  var data = element.innerHTML;
  var outText = fixCasing(data);
  output.innerText = outText;
}

function fixCasingByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outText = fixCasing(data);
  var elementP;
  elementP = document.createElement("p");
  elementP.innerHTML = outText;
  output.appendChild(elementP);
}
/* For console result */
var htmlContents = [
    "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."
  ];
var length = htmlContents.length;
var m = 0;
var extrText;
for (m = 0; m < length; m = m + 1) {
  extrText = fixCasing(htmlContents[m]);
  console.log(extrText);
}