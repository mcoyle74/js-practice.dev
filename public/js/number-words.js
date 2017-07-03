'use strict';

function numberWords(n) {

	if (!Number.isInteger(n)) {

		throw new TypeError('argument must be an integer');

	} else if (n > Number.MAX_SAFE_INTEGER) {

		throw new RangeError('argument must be <= Number.MAX_SAFE_INTEGER');

	} else if (n === 0) {

		return 'zero';
	};

	function toWords(m) {

		var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
			teens = ['ten', 'eleven', 'twelve', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'],
			tens = ['', 'teen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
			group100 = '',
			group10 = '',
			units = '';
		
		if (m >= 100) {

			group100 = ones[Math.floor(m / 100)];
			m %= 100;
			group100 += (m > 0) ? ' hundred ' : ' hundred';

		}

		if (m < 10) {

			units = ones[m];

		} else if (m < 20) {

			group10 = (m < 13) ? teens[m - 10] : (teens[m - 10] + 'teen');

		} else if (m < 100) {

			var ten = Math.floor(m / 10),
				unit = m % 10;
			group10 = (unit > 0) ? (tens[ten] + '-' + ones[unit]) : tens[ten];

		}

		return group100 + group10 + units; 
	}

	var quadrillions = '',
		trillions = '',
		billions = '',
		millions = '',
		thousands = '',
		pow15 = Math.pow(10, 15),
		pow12 = Math.pow(10, 12),
		pow9 = Math.pow(10, 9),
		pow6 = Math.pow(10, 6);

	if (n < 1000) {

		return toWords(n);

	} else {

		if (n >= pow15) {

			quadrillions = toWords(Math.floor(n / pow15)) + ' quadrillion';
			n %= Math.floor(n / pow15) * pow15;
			if (n > 0) { quadrillions += ' '; }

		}

		if (n >= pow12) {

			trillions = toWords(Math.floor(n / pow12)) + ' trillion';
			n %= Math.floor(n / pow12) * pow12;
			if (n > 0) { trillions += ' '; }

		}

		if (n >= pow9) {

			billions = toWords(Math.floor(n / pow9)) + ' billion';
			n %= Math.floor(n / pow9) * pow9;
			if (n > 0) { billions += ' '; }

		}

		if (n >= pow6) {

			millions = toWords(Math.floor(n / pow6)) + ' million';
			n %= Math.floor(n / pow6) * pow6;
			if (n > 0) { millions += ' '; }

		}

		if (n >= 1000) {
			thousands = toWords(Math.floor(n / 1000)) + ' thousand';
			n %= Math.floor(n / 1000) * 1000;
			if (n > 0) { thousands += ' '; }
		}
		
	}

	n = n > 0 ? toWords(n) : '';

	return quadrillions + trillions + billions + millions + thousands + n;
}
