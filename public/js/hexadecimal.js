"use strict";

function decHex (n) {

	var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'],
		digits = [],
		remainder;

	do {
		remainder = n % 16;
		digits.unshift(hex[remainder]);
		n = Math.floor(n / 16);
	} while (n > 15);

	if (n > 0) {
		digits.unshift(hex[n]);
	}

	return digits.join('');
}
