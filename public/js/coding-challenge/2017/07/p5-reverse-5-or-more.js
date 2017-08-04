"use strict";

/*
	
	Write a function that takes a sting and returns the same string with all
	five or more letter words reversed.
	Example: 
	input: "Coding is fun"
	output: "gnidoC is fun"

*/

function reverse5lettersOrMore(str) {

	var words = str.split(' ');

	words = words.map(word => {
		return word.length >= 5 ? word.split('').reverse().join('') : word;
	});

	return words.join(' ');

	// Successfully tested the chained version below, but the above seems more readable.
	/* 
		return str.split(' ').map(word => {
			return word.length >= 5 ? word.split('').reverse().join('') : word;
		}).join(' ');
	*/

}
