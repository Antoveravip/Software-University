(function(){ 
	var buttons = document.getElementsByTagName('button');
	var operators = ['+', '-', '*', '/'];
	var operatorUsed = false;
	var tempValue;
	var currValArr = [];

	function buttonAction(index) {

		//You need to return a new function that does your job otherwise it wont wait for onclick event and just finish
		return function () {
			var currentInput = document.getElementById('calculator-display');
			var btnValue = buttons[index].value;

			if (btnValue === 'C') { //Clear the display and reset the calculator
				currentInput.value = '';
				operatorUsed = false;

			} else if (btnValue === '=') {
				if(operatorUsed) { // Check if expression end with operator and remove it.
					tempValue = currentInput.value;
					currValArr = tempValue.split('');
					currValArr[currValArr.length - 1] = '';
					currentInput.value = currValArr.join('');
					operatorUsed = false;
				}
				if(currentInput.value == '') {
					currentInput.value = '0';
				}

				currentInput.value = eval(currentInput.value);

			} else {
				if (operators.indexOf(btnValue) > -1) { //Check if its an operator
					if(currentInput.value != '' || btnValue == '-') { 
						if (!operatorUsed) { //If not used -> use it
							currentInput.value += btnValue;
							operatorUsed = true;

						} else { //If already used but want to use another -> swap it
							tempValue = currentInput.value;
							currValArr = tempValue.split('');
							currValArr[currValArr.length - 1] = btnValue;
							currentInput.value = currValArr.join('');
						}
					}

				} else if (operators.indexOf(btnValue) == -1) { //Check if its a number
					if (operatorUsed) {
						operatorUsed = false;
					}
					
					currentInput.value += btnValue;
				}

			}
		};
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', buttonAction(i), false);
	}
})();