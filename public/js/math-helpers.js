"use strict";

function isPrime(n) {

	if (!Number.isInteger(n)) {
		throw new TypeError('argument must be an integer');
	} else if (n < 2) {
		return false;
	} else if (n == 2) {
		return true;
	} else if (n % 2 == 0) {
		return false;
	}

	let nSqrt = Math.sqrt(n);

	for (let i = 3; i <= nSqrt; i += 2) {
		if (n % i == 0) return false;
	}

	return true;
}
