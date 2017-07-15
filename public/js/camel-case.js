"use strict";

function toCamelCase(str) {

	var characters = str.toLowerCase().split('');

	characters.forEach((character, index, array) => {
		if (character === '-' || character === '_') {
			array.splice(index, 2, array[index + 1].toUpperCase());
		}
	});

	return characters.join('');
}

console.log(
	"toCamelCase(str);\nEnter a string with dashes or underscores and the function will return the string in camelCase:\n\tinput: 'the-dude-abides'\n\toutput: " + toCamelCase('the-dude-abides')
);
