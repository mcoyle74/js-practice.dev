"use strict";

/* 
	Write a function that takes an integer n and finds integers m and k such that m^k = n. Return an array with the integers, [m, k], or null if none are found.
*/

function isPerfectPower(n) {

	var max = Math.ceil(Math.sqrt(n)),
	factors = [];
  
	for (var i = 2; i <= max; i++) {
		if (n % i == 0) {
			factors.push(i);
		}
	}

	for (var j = 0; j < factors.length; j++) {
		for (var k = 2; k <= max; k++) {
			if (Math.pow(factors[j], k) == n) {
				return [factors[j], k];
			}
		}
	}

	return null;
}
