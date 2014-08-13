/*
Info: JavaScript for JavaScript Basics Lesson 3, JavaScript Loops, Arrays, Strings, Task 16, Cards Frequencies
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
'use strict';
function findUniqueCard(inArray) {
  var uniqueElements = [];
  var elem;
  for (elem in inArray) {
    if (uniqueElements.indexOf(inArray[elem]) === -1) {
      uniqueElements.push(inArray[elem]);
    }
  }

  return uniqueElements;
}

function findCardFrequency(inCards) {
  var cards = inCards.split(/[♣♦♥♠ ]+/);
  var frequencies = [];
  var card, percent;
  var result = [];
  cards.pop();

  for (card in cards) {
    if (cards[card] in frequencies) {
      frequencies[cards[card]]++;
    } else {
      frequencies[cards[card]] = 1;
    }
  }

  var cardsLength = cards.length;
  cards = findUniqueCard(cards);

  for (card in cards) {
    percent = (frequencies[cards[card]] / cardsLength * 100).toFixed(2); // calculate percent for each element
    result[card] = cards[card] + ' -> ' + percent; // in the browser console <br> should be /n !!
  }

  return result;
}
/* For html result view */
function findCardFrequencyByInput() {
  var output = document.getElementById("output");
  var data = document.getElementById('data').value;
  var aCards = findCardFrequency(data);
  var elementP, outRes = "", n;
  var aCardsLength = aCards.length;
  for (n = 0; n < aCardsLength; n = n + 1) {
    outRes += aCards[n] + '%<br>';
  }
  elementP = document.createElement("p");
  elementP.innerHTML = outRes;
  output.appendChild(elementP);
}
/* For console result */
var cardsFreq = [
    '8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦',
    'J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠',
    '10♣ 10♥'
  ];
var length = cardsFreq.length;
var m = 0, p;
var allCards, allCardsLength, percent, outResult;
for (m = 0; m < length; m = m + 1) {
  allCards = findCardFrequency(cardsFreq[m]);
  allCardsLength = allCards.length;
  for (p = 0; p < allCardsLength; p = p + 1) {
    console.log(allCards[p] + '%');
  }
}