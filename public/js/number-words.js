'use strict';

function numberWords(n) {

	if (!Number.isInteger(n)) {

		throw new TypeError('argument must be an integer');

	} else if (n > Number.MAX_SAFE_INTEGER) {

		throw new RangeError('argument must be <= Number.MAX_SAFE_INTEGER');

	} else if (n === 0) {

		return 'zero';
	};

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

	var quadrillion = '',
		trillion = '',
		billion = '',
		million = '',
		thousand = '';

	if (n < 1000) {

		return threeDigit(n);

	} else {

		if (n >= Math.pow(10, 15)) {

			quadrillion = Math.floor(n / Math.pow(10, 15));
			n %= quadrillion * Math.pow(10, 15);
			quadrillion = threeDigit(quadrillion);
			quadrillion += (n > 0) ? ' quadrillion ' : ' quadrillion';

		}

		if (n >= Math.pow(10, 12)) {

			trillion = Math.floor(n / Math.pow(10, 12));
			n %= trillion * Math.pow(10, 12);
			trillion = threeDigit(trillion);
			trillion += (n > 0) ? ' trillion ' : ' trillion';

		}

		if (n >= Math.pow(10, 9)) {

			billion = Math.floor(n / Math.pow(10, 9));
			n %= billion * Math.pow(10, 9);
			billion = threeDigit(billion);
			billion += (n > 0) ? ' billion ' : ' billion';

		}

		if (n >= Math.pow(10, 6)) {

		 	million = Math.floor(n / Math.pow(10, 6));
			n %= million * Math.pow(10, 6);
			million = threeDigit(million);
			million += (n > 0) ? ' million ' : ' million';

		}

		if (n >= 1000) {
			thousand = Math.floor(n / 1000);
			n %= thousand * 1000;
			thousand = threeDigit(thousand);
			thousand += (n > 0) ? ' thousand ' : ' thousand';
		}
		
	}

	n = n > 0 ? threeDigit(n) : '';

	return quadrillion + trillion + billion + million + thousand + n;
}
