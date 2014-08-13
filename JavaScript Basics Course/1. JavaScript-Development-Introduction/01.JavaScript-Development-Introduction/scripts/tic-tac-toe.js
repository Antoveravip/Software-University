/*
Info: JavaScript for JavaScript Basics, Lesson 1, JavaScript Development Introduction, Task 5, Tic Tac Toe
Author: Removed for reasons of anonymity
Successfully checked as valid in JSLint Validator at: http://www.jslint.com/ and JSHint Validator at: http://www.jshint.com/
*/
// Constants and variables
var signX = 'X';
var sign0 = 'O';
var gameBoard = new Array(9);
var counter = 0;
var round = 0;
var playerWins = 0;
computerWins = 0;
var winCombinations = [
	// Horizontal
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // Vertical
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // Diagonals
    [0, 4, 8], [2, 4, 6]
];
var winningSchemes = [
    [0, 8, 2, 1, 5], [0, 8, 6, 3, 7], [2, 6, 0, 1, 3], [2, 6, 8, 5, 7],
    [4, 0, 6, 3, 2, 8], [4, 0, 2, 1, 6, 8], [4, 2, 8, 5, 6, 0], [4, 8, 6, 7, 2, 0],
    [4, 0, 3, 6, 5], [4, 2, 5, 3, 8], [4, 8, 5, 3, 2], [4, 6, 3, 0, 5],
    [1, 3, 4, 7, 5], [1, 5, 4, 3, 7], [3, 7, 4, 1, 5], [5, 7, 0, 1, 3],
    [1, 3, 0, 2, 6], [1, 5, 2, 0, 8], [5, 7, 8, 6, 2], [3, 7, 6, 0, 8],
    [3, 2, 0, 1, 6], [3, 8, 6, 0, 7], [0, 7, 6, 3, 8], [2, 7, 8, 5, 6]
];
var nScheme = Math.round(Math.random() * winningSchemes.length);
var board = document.getElementById('tic-tac-toe');
var cells = board.getElementsByTagName('span');

// Adding the move to game board
function addMove(elementIndex, value) {
    var board = document.getElementById('tic-tac-toe');
    var cells = board.getElementsByTagName('span');
    gameBoard[elementIndex] = value;
    cells[elementIndex].innerHTML = value;
    counter++;
}

// Check if combination is win
function checkForWinCombination() {
    var board = document.getElementById('tic-tac-toe');
    var cells = board.getElementsByTagName('span');
    for (var i = 0; i < 8; i++) {
        var combination = winCombinations[i];
        if (gameBoard[combination[0]] == gameBoard[combination[1]] && gameBoard[combination[1]] == gameBoard[combination[2]] && typeof gameBoard[combination[2]] != 'undefined') {
            cells[combination[0]].className = "win";
            cells[combination[1]].className = "win";
            cells[combination[2]].className = "win";
            return true;
        }
    }

    return false;
}

function checkForPossibleWinCombination(value) {
    for (var i = 0; i < 8; i++) {
        var combination = winCombinations[i];
        var cellNumber = false;
        if (gameBoard[combination[0]] == value && gameBoard[combination[1]] == value && typeof gameBoard[combination[2]] == 'undefined') {
            cellNumber = combination[2];
        } else if (gameBoard[combination[1]] == value && gameBoard[combination[2]] == value && typeof gameBoard[combination[0]] == 'undefined') {
            cellNumber = combination[0];
        } else if (gameBoard[combination[0]] == value && gameBoard[combination[2]] == value && typeof gameBoard[combination[1]] == 'undefined') {
            cellNumber = combination[1];
        }
		
        if (typeof cellNumber === 'number') {
            return cellNumber;
        }
    }

    return cellNumber;
}

function getMoveOfScheme() {
    var cellNumber = false;
    while (cellNumber == false && nScheme < winningSchemes.length) {
        for (var i = winningSchemes[nScheme].length - 1; i >= 0; i--) {
            if (gameBoard[winningSchemes[nScheme][i]] == signX) {
                cellNumber = false;
                break;
            } else if (gameBoard[winningSchemes[nScheme][i]] != sign0) {
                cellNumber = winningSchemes[nScheme][i];
            }
        }
        nScheme++;
    }

    return cellNumber;
}

function randomMove() {
    do {
        var cellsNumber = Math.round(Math.random() * 8);
    } while (typeof gameBoard[cellsNumber] != 'undefined')

    return cellsNumber;
}

function clearTable() {
    var board = document.getElementById('tic-tac-toe');
    var cells = board.getElementsByTagName('span');
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].className = '';
        gameBoard = new Array(9);
        counter = 0;
    }

}

function gameEngine(el) {
    var spanElement = el.target;
    if (spanElement.innerHTML) {
        return;
    }
    spanElement.innerHTML = 'X';
    gameBoard[parseInt(spanElement.id)] = signX;
    counter++;

    if (checkForWinCombination()) {
        alert('You won! Well done! Now go out or play another game.');
        clearTable();
        nScheme = Math.round(Math.random() * winningSchemes.length);
        playerWins++;
        document.getElementById('human').innerHTML = 'Player: ' + playerWins;
        round++;
        document.getElementById('round').innerHTML = 'Round: ' + round;
    }

    if (counter == 9) {
        alert('There is no winner! Another game?');
        clearTable();
        nScheme = Math.round(Math.random() * winningSchemes.length);
        round++;
        document.getElementById('round').innerHTML = 'Round: ' + round;
    }

    var playCell = checkForPossibleWinCombination(sign0);

    if (playCell === false) {
        playCell = checkForPossibleWinCombination(signX);
    }

    if (playCell === false) {
        playCell = getMoveOfScheme();
    }

    if (playCell === false) {
        playCell = randomMove();
    }

    addMove(playCell, 'O');

    if (checkForWinCombination()) {
        alert('You lose. Get revenge?');
        clearTable();
        computerWins++;
        document.getElementById('comp').innerHTML = 'Computer: ' + computerWins;
        round++;
        document.getElementById('round').innerHTML = 'Round: ' + round;
    }

    if (counter == 9) {
        alert('There is no winner! Another game?');
        clearTable();
        round++;
        document.getElementById('round').innerHTML = 'Round: ' + round;
    }
}

board.addEventListener('click', gameEngine);