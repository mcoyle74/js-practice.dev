'use strict';

// Create a function that returns the total number of smiley faces in a given array.
// A valid smiley face must have:
// 	eyes: ';' or ':'
// 	nose: '-', '~' or no nose
// 	mouth: ')' or 'D'

function countSmileys(arr) {

	var count = 0;
	
	arr.forEach(function(face) {
		if (/;|:/.test(face) && /\)|D/.test(face)) {
			if (face.length == 2) {
				count++;
			} else if (face.length == 3) {
				if (/-|~/.test(face)) {
					count++;
				}
			}
		}
	});

	return count;
}
