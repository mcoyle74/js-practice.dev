"use strict";

/*
	Create a function that takes in a string of digits and an integer n, and with the string as the initial element, return the nth term of the look-and-say sequence:
	http://mathworld.wolfram.com/LookandSaySequence.html
*/

function lookAndSaySequence(firstElement, n) {

	if (n == 1) {
		return firstElement;
	}
	
	var digits = firstElement.split(''),
		chunks = [];
	
	while (digits.length) {
	
		var digit = digits[0],
			same = '';
			
		while (digit == digits[0]) {
		
			same += digits.shift();
		}
		
		chunks.push(same);
	}

	var next = '';
	chunks.forEach(function(chunk, i, arr) {
		next += String(arr[i].length) + chunk[0];
	});

	return lookAndSaySequence(next, n - 1);
}
