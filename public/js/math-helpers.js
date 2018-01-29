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

function factorial(n) {

	if (!Number.isInteger(n)) {
		throw new TypeError('argument must be an integer');
	} else if (n < 0) {
		throw new RangeError('argument must be nonnegative')
	}

	let product = 1;

	for (let i = n; i > 1; i--) {
		product *= i;
	}

	return product;
}

function factorize(n) {

	let factors = [],
		half = n / 2;

	for (let i = 2; i <= half; i++) {
		if (n % i == 0) factors.push(i);
	}

	return factors;
}
