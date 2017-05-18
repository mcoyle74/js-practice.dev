'use strict';

/*
	Given a positive number n, remove one of its digits and reinsert it so as to make the smallest possible number.
	Return an array with:
		1. the smallest number
		2. the index of the digit removed, as small as possible
		3. the index of insertion, as small as possible
*/

function smallest(n) {

	var results = [],
		digits = n.toString().split(''),
		min = Math.min(...digits),
		minIndex = digits.indexOf(min.toString());

	if (minIndex > 1) {

		digits.unshift(digits.splice(minIndex, 1)[0]);
		results.push(parseInt(digits.join('')), minIndex, 0);

	} else if (minIndex == 1) {

		var zeroth = digits.shift(),
			first = digits.shift();

		digits.unshift(first, zeroth);

		results.push(parseInt(digits.join('')), 0, 1)
	}

	return results;
}
