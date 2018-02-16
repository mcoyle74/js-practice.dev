"use strict";

/*
	Given an array of numbers, find the maximum sum of a contiguous subsequence
	of any length. If the array is made up entirely of positive numbers, simply
	give the sum of the entire array. If they are all negative, return 0;

	Example:
		input: [2, 6, -1, 3, -2]			input: [-4, 3, -2, -7, 1, 1]
		output: 10							3
*/

function maxSubsequenceSum(array) {
	let sums = [],
		maxSum;

	for (let length = 1; length <= array.length; length++) {
		for (let i = 0; i < length; i++) {
			sums.push(
				array.slice(i, length).reduce((a, b) => {
					return a + b;
				})
			);
		}
	}

	maxSum = Math.max(...sums);

	return maxSum >= 0 ? maxSum : 0;
}
