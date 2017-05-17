"use strict";

// Write a function that simplifies an array of directions,
// removing adjacent pairs that cancel each other out.
// Once the array is reduced, new opposite pairs must also be removed.

// Examples: 
// 	input: ['NORTH', 'SOUTH', 'WEST']
// 	output: ['WEST']

// 	input: ['NORTH', 'EAST', 'SOUTH', 'WEST']
// 	output: ['NORTH', 'EAST', 'SOUTH', 'WEST']

// 	input: ['WEST', 'NORTH', 'SOUTH' 'EAST', 'SOUTH', 'WEST']
// 	output: ['SOUTH', 'WEST']

// 	input: ['EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'SOUTH']
// 	output: []

function dirReduc(arr) {

	var directions = arr.map(function(dir) {
		return dir.slice(0, 1);
	}).join('');

	for (var i = 0; i < 2; i++) {
		directions = directions.replace(/NS/g, '');
		directions = directions.replace(/EW/g, '');
		directions = directions.replace(/SN/g, '');
		directions = directions.replace(/WE/g, '');
	}
	
	return directions.split('').map(function(dir) {
		switch (dir) {
			case 'N':
				return 'NORTH';
				break;
			case 'S':
				return 'SOUTH';
				break;
			case 'E':
				return 'EAST';
				break;
			case 'W':
				return 'WEST';
				break;
			default:
				return '';
		}
	});
}
