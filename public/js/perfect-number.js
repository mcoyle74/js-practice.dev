"use strict";

function isPerfect (n) {

	if (!Number.isInteger(n)) {
		throw new TypeError('argument must be an integer');
	} else if (n < 1) {
		throw new RangeError('argument must be > 0');
	} else if (n == 1) {
		return false;
	}

	var factors = [1];

	for (var i = 2; i <= n / 2; i++) {
		if (n % i == 0) {
			factors.push(i);
		}
	}

	var sum = factors.reduce(function(a, b) {
		return a + b;
	});

	return (sum == n) ? true : false;
}
