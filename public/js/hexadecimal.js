"use strict";

function decToHex (n) {

	var digits = [],
		remainder;

	do {
		remainder = n % 16;
		digits.unshift(remainder);
		n = Math.floor(n / 16);
	} while (n > 15);

	if (n > 0) {
		digits.unshift(n);
	}

	var hex = digits.map(function(digit) {
		if (digit == 10) {
			return 'a';
		} else if (digit == 11) {
			return 'b';
		} else if (digit == 12) {
			return 'c';
		} else if (digit == 13) {
			return 'd';
		} else if (digit == 14) {
			return 'e';
		} else if (digit == 15) {
			return 'f';
		} else {
			return digit;
		}
	});

	return hex.join('');
}
