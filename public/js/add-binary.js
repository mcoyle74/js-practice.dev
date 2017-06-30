"use strict";

function addBinaryStrings(str0, str1) {
	
	var sum = '',
		carrying = false;

	while (str0.length < str1.length) {
		str0 = '0' + str0;
	}

	while (str1.length < str0.length) {
		str1 = '0' + str1;
	}

	for (var i = str0.length; i >= 0; i--) {

		if (str0[i] === '0' && str1[i] === '0') {

			sum = !carrying ? '0' + sum : (carrying = false, '1' + sum);

		} else if (str0[i] !== str1[i]) {

			sum = !carrying ? '1' + sum : (carrying = true, '0' + sum);

		} else if (str0[i] === '1' && str1[i] === '1') {

			sum = !carrying ? (carrying = true, '0' + sum) : '1' + sum;

		}
	}

	if (carrying) {
		sum = '1' + sum;
	}

	while (sum[0] === '0' && sum.length > 1) {
		sum = sum.slice(1);
	}

	return sum;
}
