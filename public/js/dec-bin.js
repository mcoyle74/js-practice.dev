"use strict";

function decToBinary(n) {

	if (!Number.isInteger(n)) {

		throw new TypeError('argument must be in integer');

	} else if (n === 0) {

		return '0';

	}

	var digits = '',
		remainder;

	while (n > 0) {

		remainder = n % 2;
		n = Math.floor(n / 2);
		digits = remainder + digits;

	}

	return digits;
};

console.log('Binary representations:');

for (var i = 0; i <= 32; i++) {
	console.log(i + ': ' + decToBinary(i));
};
