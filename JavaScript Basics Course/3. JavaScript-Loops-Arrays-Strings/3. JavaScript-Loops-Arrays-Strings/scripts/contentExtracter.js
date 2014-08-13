/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 17*, Extract Element Content
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function buildStringBuilder() {
  return {
    strs: [],
    len: 0,
    append: function (str) {
      this.strs[this.len++] = str;
      return this;
    },
    toString: function () {
      return this.strs.join("");
    }
  };
}

function extractContent(text) {
  var extractedText, closeBraketIndex, extractedData;
  var textLen = text.length;
  extractedText = buildStringBuilder();
  closeBraketIndex = text.indexOf(">");
  while (closeBraketIndex >= 1 && closeBraketIndex !== textLen - 1) {
    if (text[closeBraketIndex + 1] !== "<") {
      extractedData = text.substring(closeBraketIndex + 1, text.indexOf("<", closeBraketIndex + 1));
      extractedText.append(extractedData).append(" ");
    }
    closeBraketIndex = text.indexOf(">", closeBraketIndex + 1);
  }

  return extractedText.toString();
}
/* For html result view */
function extractContentHTML() {
  var output = document.getElementById("res");
  var element = document.getElementById('test');
  var data = element.innerHTML;
  var outText = extractContent(data);
  output.innerText = outText;
}

function extractContentByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var outText = extractContent(data);
  var elementP;
  elementP = document.createElement("p");
  elementP.innerHTML = outText;
  output.appendChild(elementP);
}
/* For console result */
var htmlContents = [
    "<p>Hello</p><a href='http://w3c.org'>W3C</a>",
    "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>"
  ];
var length = htmlContents.length;
var m = 0;
var extrText;
for (m = 0; m < length; m = m + 1) {
  extrText = extractContent(htmlContents[m]);
  console.log(extrText);
}