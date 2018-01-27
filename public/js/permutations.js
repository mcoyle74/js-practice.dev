"use strict";

function permute2(array) {

	return [
		array,
		[array[1], array[0]]
	];
}

function permute3(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms2;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms2 = permute2(arrayCopy);

		for (let j = 0; j < perms2.length; j++) {
			permutations.push(next.concat(perms2[j]));	
		}
	}

	return permutations;

}
