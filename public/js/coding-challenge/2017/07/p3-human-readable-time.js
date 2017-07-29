"use strict";

/*
	Write a function that takes a positive integer (seconds) and returns the time
	in a human-readable format (HH:MM:SS). Note: you will never be given a number
	greater than 86400, the amount of seconds in 24 hours.
	Example: 
	input: 28314
	output: 07:51:54
*/

function humanReadableTime(seconds) {

	var hours = '00',
		minutes = '00';

	if (seconds > 0) {
		hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
		seconds %= 3600;
	}

	if (seconds > 0) {
		minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
		seconds %= 60;
	}

	seconds = seconds.toString().padStart(2, '0');

	return `${hours}:${minutes}:${seconds}`;
}
