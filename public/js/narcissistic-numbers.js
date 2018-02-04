"use strict";

function isNarcissistic(n) {

	let digits = n.toString().split(''),
		exp = digits.length;

	let m = digits.map(digit => {
		return digit ** exp;
	}).reduce((a, b) => {
		return a + b;
	});

	return n == m ? true : false;
}
