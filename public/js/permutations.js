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

function permute4(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms3;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms3 = permute3(arrayCopy);

		for (let j = 0; j < perms3.length; j++) {
			permutations.push(next.concat(perms3[j]));	
		}
	}

	return permutations;

}

function permute5(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms4;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms4 = permute4(arrayCopy);

		for (let j = 0; j < perms4.length; j++) {
			permutations.push(next.concat(perms4[j]));	
		}
	}

	return permutations;

}

function permute6(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms5;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms5 = permute5(arrayCopy);

		for (let j = 0; j < perms5.length; j++) {
			permutations.push(next.concat(perms5[j]));	
		}
	}

	return permutations;

}

function permute7(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms6;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms6 = permute6(arrayCopy);

		for (let j = 0; j < perms6.length; j++) {
			permutations.push(next.concat(perms6[j]));	
		}
	}

	return permutations;

}

function permute8(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms7;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms7 = permute7(arrayCopy);

		for (let j = 0; j < perms7.length; j++) {
			permutations.push(next.concat(perms7[j]));	
		}
	}

	return permutations;

}

function permute9(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms8;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms8 = permute8(arrayCopy);

		for (let j = 0; j < perms8.length; j++) {
			permutations.push(next.concat(perms8[j]));	
		}
	}

	return permutations;

}

function permute10(array) {

	var permutations = [],
		arrayCopy,
		next,
		perms9;

	for (let i = 0; i < array.length; i++) {
	
		arrayCopy = array.slice();
		next = arrayCopy.splice(i, 1);
		perms9 = permute9(arrayCopy);

		for (let j = 0; j < perms9.length; j++) {
			permutations.push(next.concat(perms9[j]));	
		}
	}

	return permutations;

}
