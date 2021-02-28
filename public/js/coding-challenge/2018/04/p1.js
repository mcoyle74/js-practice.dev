function convertCase(string, theCase) {
	switch (theCase) {
		case 'camel':
			return toCamelCase(string);
			break;
		case 'snake':
			return toSnakeCase(string);
			break;
		case 'kebab':
			return toKebabCase(string);
			break;
	}
	
}

function toCamelCase(string) {
	let characters = string.toLowerCase().split('');

	characters.forEach((character, index, array) => {
		if (character === '-' || character === '_') {
			array.splice(index, 2, array[index + 1].toUpperCase());
		}
	});

	return characters.join('');
}

function toSnakeCase(string) {
	let characters = string.split('');
	let	letter;

	for (let i = 0; i < characters.length; i++) {
		if (characters[i].charCodeAt(0) > 64 && characters[i].charCodeAt(0) < 91) {
			letter = characters[i].toLowerCase();
			characters.splice(i, 1, ('_' + letter));
		}
	}

	characters.forEach((character, index, array) => {
		if (character === '-') {
			array.splice(index, 1, '_');
		}
	});

	return characters.join('');
}

function toKebabCase(string) {
	let characters = string.split('');
	let	letter;

	for (let i = 0; i < characters.length; i++) {
		if (characters[i].charCodeAt(0) > 64 && characters[i].charCodeAt(0) < 91) {
			letter = characters[i].toLowerCase();
			characters.splice(i, 1, ('-' + letter));
		}
	}

	characters.forEach((character, index, array) => {
		if (character === '_') {
			array.splice(index, 1, '-');
		}
	});

	return characters.join('');
}
