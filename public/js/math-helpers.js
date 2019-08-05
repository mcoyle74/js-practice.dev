"use strict";

function isPrime(int) {
	if (!Number.isInteger(int)) {
		throw new TypeError('argument must be an integer');
	} else if (int == 2) {
		return true;
	} else if (int % 2 == 0) {
		return false;
	}

	const SQRT = Math.sqrt(int);

	for (let i = 3; i <= SQRT; i += 2) {
		if (int % i == 0) return false;
	}

	return int > 1;
}

function factorial(int) {
	if (!Number.isInteger(int)) {
		throw new TypeError('argument must be an integer');
	} else if (int < 0) {
		throw new RangeError('argument must be nonnegative')
	}

	let product = 1;

	for (let i = int; i > 1; i--) {
		product *= i;
	}

	return product;
}

function factorize(int) {
	if (!Number.isInteger(int)) {
		throw new TypeError('argument must be an integer');
	} else if (int < 0) {
		throw new RangeError('argument must be nonnegative')
	}

	let factors = [],
		index;

	const SQRT = Math.sqrt(int);

	for (let i = 2; i < SQRT; i++) {
		if (int % i == 0) factors.push(i);
	}

	index = factors.length - 1;

	if (Number.isInteger(SQRT)) factors.push(SQRT);

	for (let i = index; i >= 0; i--) {
		factors.push(int / factors[i]);
	}

	return factors;
}

function primeFactors(int) {
	if (!Number.isInteger(int)) {
		throw new TypeError('argument must be an integer');
	} else if (int < 2) {
		throw new RangeError('argument must be an integer > 1')
	}

	let factors = [];

	const SQRT = Math.sqrt(int);

	while (int % 2 == 0) {
		factors.push(2);
		int /= 2;
	}

	for (let i = 3; i <= int; i += 2) {
		while (int % i == 0) {
			factors.push(i);
			int /= i;
		}

		if (i >= SQRT && factors.length == 0) {
			break;
		}
	}

	return factors;
}

// greatest common divisor
function gcd(int1, int2) {
	let greater = Math.max(int1, int2),
		lesser = Math.min(int1, int2);

	for (let i = lesser; i > 1; i--) {
		if (greater % i == 0 && lesser % i == 0) {
			return i;
		}
	}

	return 1;
}

function percentError(experimental, theoretical) {
	return (Math.abs(experimental - theoretical) / theoretical) * 100;
}

function sumDigits(integer) {
	if (!Number.isInteger(integer)) {
		throw new TypeError('argument must be an integer');
	}

	return Math.abs(integer).toString().split('').reduce((a, b) => {
		return (+a) + (+b);
	});
}
