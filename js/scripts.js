// // Get all the keys from document
// var keys = document.querySelectorAll('#calculator span');
// var operators = ['+', '-', 'x', '÷'];
// var decimalAdded = false;
//
// // Add onclick event to all the keys and perform operations
// for(var i = 0; i < keys.length; i++) {
// 	keys[i].onclick = function(e) {
// 		// Get the input and button values
// 		var input = document.querySelector('.screen');
// 		var inputVal = input.innerHTML;
// 		var btnVal = this.innerHTML;
//
// 		// If eval key is pressed, calculate and display the result
// 		if(btnVal == '=') {
// 			var equation = inputVal;
// 			var lastChar = equation[equation.length - 1];
//
// 			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
// 			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
//
// 			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
// 			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
// 				equation = equation.replace(/.$/, '');
//
// 			if(equation)
// 				input.innerHTML = eval(equation);
//
// 			decimalAdded = false;
// 		}
//
// }
