"use strict";

String.prototype.isAnagram = function(str) {

	if (typeof str !== 'string') {
		throw new TypeError('argument must be a string, ' + (typeof str) + ' given');
	}

	var key = this.valueOf().replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join(''),
		candidate = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
		
	return (candidate === key && str !== this.valueOf()) ? true : false;
};

String.prototype.isPalindrome = function() {

	var key = this.valueOf().replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
		candidate = key.split('').reverse().join('');

	return candidate === key ? true : false;
}
