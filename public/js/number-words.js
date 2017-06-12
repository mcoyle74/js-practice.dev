'use strict';

function number_words(n) {

	function threeDigit(m) {

		var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
			teens = ['ten', 'eleven', 'twelve', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'],
			tens = ['', 'teen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
			word = '';
		
		if (m >= 100) {
			word += ones[Math.floor(m / 100)];
			word += (m % 100 == 0) ? ' hundred' : ' hundred ';
			m %= 100;
		}

		if (m < 10) {
			word += ones[m];
		} else if (m < 20) {
			word += (m < 13) ? teens[m - 10] : teens[m - 10] + 'teen';
		} else if (m < 100) {
			var ten = Math.floor(m / 10);
			var unit = m % 10;
			word += (m % 10 == 0) ? tens[ten] : tens[ten] + '-' + ones[unit];
		}

		return word; 
	}

	if (n == 0) {
		return 'zero';
	} else if (n < 1000) {
		return threeDigit(n);
	} else if (n >= 1000) {
		var word = '';
		word += threeDigit(Math.floor(n / 1000));
		word += (n % 1000 == 0) ? ' thousand' : ' thousand ' + threeDigit(n % 1000);
		return word;
	}
}
