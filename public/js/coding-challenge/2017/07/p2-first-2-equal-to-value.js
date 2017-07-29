"use strict";

/*
	Given a list of integers and a single value, return the first two integers
	in order of appearance that add up to form the value.
	Example:
	input: [4, 3, 2, 3, 4], 6		input: [11, 3, 7, 5], 10
	output: [4, 2]					output: [3, 7]
*/

function first2IntegersToEqualValue(integers, value) {

	var indices = [],
		addend;

	for (var i = 0; i < integers.length; i++) {

		for (var j = i + 1; j < integers.length; j++) {
			if (integers[i] + integers[j] === value) indices.push(j);
		};

	};

	addend = integers[Math.min(...indices)];

	return [value - addend, addend];
}
