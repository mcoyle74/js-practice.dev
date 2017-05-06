"use strict";

// Convert the string representation of a fraction to a fraction in its lowest terms, an integer or a mixed number, as appropriate. A zero denominator should throw an error.
// Examples:
//	input: '23/7'	output: '3 2/7'
//	input: '4/-12'	output: '-1/3'
//	input: '5/5'	output: '1'

function mixedFraction(str) {

	var numerator = str.slice(0, str.indexOf('/')), 
		denominator = str.slice(str.indexOf('/') + 1),
		remainder = Math.abs(numerator % denominator),
		integer = Math.abs(Math.trunc(numerator / denominator)),
		negative = false; // The result will be positive unless only one of the terms, numerator or denominator, is negative.

	if (denominator == 0) {
		throw "ZeroDivisionError";
	}

  // If numerator is negative, make it positive and flip the negative variable.
	if (numerator < 0) {
		numerator = Math.abs(numerator);
		negative = !negative;
	}

  // If denominator is negative, make it positve and flip the negative variable.
	if (denominator < 0) {
		denominator = Math.abs(denominator);
		negative = !negative;
	}

	if (numerator == 0) {
		return '0';
	} else if (remainder == 0) {
    // The negative variable should be false unless only one of the terms was negative.
    if (negative) {
      integer *= -1;
    }
		return String(integer);
	}

	// Refactor remainder and denominator to their lowest terms.
	for (var i = remainder; i > 1; i--) {
		if (remainder % i == 0 && denominator % i == 0) {
			remainder /= i;
			denominator /= i;
			break;
		}
	}

	if (integer == 0) {

    // If the result should be negative, place the sign before the fraction with no integer part.
		if (negative) {
			remainder *= -1;
		}

		return remainder + '/' + denominator;

	} else {

    // If the result should be negative, place the sign before the integer part of the mixed fraction.
		if (negative) {
			integer *= -1;
		}

		return integer + ' ' + remainder + '/' + denominator;
	}
}
