'use strict';

// Given a string, '123456789', how many expressions can be made
// that total 100 by inserting a '+', '-' or '' between the 
// digits. Example: 123 + 45 - 67 + 8 - 9 = 100

function insertOperator(index, op) {

	inputs.eq(index).removeClass('underlined');

	if (op === '+') {
		inputs.eq(index).attr('value', String.fromCharCode(43));
	} else if (op === '-') {
		inputs.eq(index).attr('value', String.fromCharCode(8722));
	} else {

		inputs.eq(index).animate({
			width: '0'
		}, 500);

		inputs.slice(index + 1).animate({
			left: '-=12'
		}, 500);

	}

	inputs.eq(index + 2).addClass(
		'underlined'
	);
}

$(document).ready(function() {

	var opWidth = inputs.filter('.operator').css('width'),
		concatBtn = $('#concat'),
		plusBtn = $('#plus'),
		minusBtn = $('#minus'),
		resetBtn = $('#reset'),
		index = 1;

	concatBtn.click(function() {
		insertOperator(index, 'concat');
		index += 2;
	});

	plusBtn.click(function() {
		insertOperator(index, '+');
		index += 2;
	});

	minusBtn.click(function() {
		insertOperator(index, '-');
		index += 2;
	});

	resetBtn.click(function() {
		inputs.removeAttr('style');
		ops.removeAttr('value');
		ops.slice(1).removeClass('underlined');
		ops.first().addClass('underlined');
		index = 1;
	});

});

var digits = $('.digit'),
	inputs = $('input'),
	ops = $('.operator'),
	ternaries = [],
	expressions = [],
	ternary,
	expression,
	results;

for (var i = 0; i < 6561; i++) {

	ternary = i.toString(3);

	while (ternary.length < 8) {
		ternary = '0' + ternary;
	};

	ternaries.push(ternary);
		
}

ternaries.forEach(sequence => {

	expression = '';
	
	for (var i = 0; i < sequence.length; i++) {

		if (sequence[i] == 0) {
			expression += i + 1;
		} else if (sequence[i] == 1) {
			expression += (i + 1) + ' -';
		} else {
			expression += (i + 1) + ' ';
		};

	};

	expression += '9';
	expressions.push(expression.split(' '));
	
});

results = expressions.filter(expression => {

	return expression.reduce((a, b) => {
		return parseInt(a) + parseInt(b);
	}) === 100;

}).map(result => {

	return result.map((value, i, arr) => {

		if (i === 0) {
			return value;
		} else if (Math.sign(value) === 1) {
			return ' + ' + Math.abs(value);
		} else {
			return ' - ' + Math.abs(value);
		}

	});

}).map(result => {
	return result.join('');
});

results.forEach(result => {
	console.log(result + ' = 100');
});
