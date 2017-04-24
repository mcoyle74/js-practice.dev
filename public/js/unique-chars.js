'use strict';

function hasUniqueChars (string) {

	for (var i = 0; i < string.length; i++) {

		for (var j = i + 1; j < string.length; j++) {

			if (string.charAt(i) == string.charAt(j)) {

				console.log('Duplicates found in: "' + string + '"');
				return false;
			}
		}
	}

	console.log('All characters unique in: "' + string + '"');
	return true;
}
