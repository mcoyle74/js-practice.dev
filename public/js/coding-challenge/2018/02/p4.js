"use strict";

/*
	Write a function that decomposes a given positive integer's factorial (n!) 
	into its prime factors. Your inputs will be anywhere from 2 -> 20 (due to 
	different language's math limitations). Your output should be an equation 
	string of the prime factors listed from least to greatest.

	Example: 
		input 5									input: 17
		(5! = 5 * 4 * 3 * 2 * 1 = 120)			output: 2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17
		output: 2^3 * 3 * 5
*/

function factorialToPrimeFactors(integer) {
	// primeFactors() and factorial() are from ../../../math-helpers.js
	let array = primeFactors(factorial(integer)), 
		baseExponent = {},
		factors = [],
		factorsString;

	array.forEach(value => {
		if (baseExponent.hasOwnProperty(value)) {
			baseExponent[value]++;
		} else {
			baseExponent[value] = 1;
		}
	});

	for (let key in baseExponent) {

		factorsString = key;

		if (baseExponent[key] > 1) {
			factorsString += `^${baseExponent[key]}`;
		}

		factors.push(factorsString);
	}

	return factors.join(' * ');
}