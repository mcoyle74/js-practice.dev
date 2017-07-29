"use strict";

/*
	Write a function that simplifies an array of directions: 'North' and 'South,'
	or 'East' then 'West' cancel out and should be removed.

	Example: 
	input: ['North', 'South', 'South', 'East', 'West', 'North', 'West']
	output: ['West']
*/

function simplifyDirections(directionsArray) {

	var counts = {
		north: 0,
		south: 0,
		east: 0,
		west: 0
	};

	var simpleDirections = [];

	directionsArray.forEach(direction => {
		switch (direction) {
			case 'North':
				counts.north++;
				break;
			case 'South':
				counts.south++;
				break;
			case 'East':
				counts.east++;
				break;
			case 'West':
				counts.west++;
				break;
		}
	});
	
	while (Math.abs(counts.north - counts.south) > 0) {

		if (counts.north > counts.south) {
			simpleDirections.push('North');
			counts.north--;
		} else if (counts.south > counts.north) {
			simpleDirections.push('South');
			counts.south--;
		}

	}

	while (Math.abs(counts.east - counts.west) > 0) {

		if (counts.east > counts.west) {
			simpleDirections.push('East');
			counts.east--;
		} else if (counts.west > counts.east) {
			simpleDirections.push('West');
			counts.west--;
		}

	}

	return simpleDirections;
}
