"use strict";

function isLeapYear (n) {

	if (n % 4 == 0) {
		return (n % 100 == 0 && n % 400 != 0) ? false : true;
	}

	return false;
};
