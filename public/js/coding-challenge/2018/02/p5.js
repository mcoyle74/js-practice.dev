"use strict";

/*
	Write a function that returns a duration (given as a number of seconds) 
	in a human-readable way. This function will only take a non-negative 
	integer and return a duration expressed as a combination of years, days, 
	hours, minutes and seconds. If the number is 0, the function must return 
	"now".

	Example: 
		input: 4782
		output: 1 hour, 19 minutes and 42 seconds

		input: 84773672123
		output: 2688 years, 56 days, 18 hours, 15 minutes and 23 seconds

*/

function humanReadableDuration(seconds) {

	if (seconds == 0) return 'now';

	const MIN = 60,
		HR = 60 * MIN,
		DAY = 24 * HR,
		YEAR = 365 * DAY;

	let minutes = '',
		hours = '',
		days = '',
		years = '';

	if (seconds >= YEAR) {
		years = Math.floor(seconds / YEAR) + ' years';
		seconds %= YEAR;
		if (seconds > 0) years += ', ';
	}

	if (seconds >= DAY) {
		days = Math.floor(seconds / DAY) + ' days';
		seconds %= DAY;
		if (seconds > 0) days += ', ';
	}

	if (seconds >= HR) {
		hours = Math.floor(seconds / HR) + ' hours';
		seconds %= HR;
		if (seconds > 0) hours += ', ';
	}

	if (seconds >= MIN) {
		minutes = Math.floor(seconds / MIN) + ' minutes';
		seconds %= MIN;
		if (seconds > 0) minutes += ', ';
	}

	if (seconds > 0) {
		seconds += ' seconds';
	} else {
		seconds = '';
	}

	return `${years}${days}${hours}${minutes}${seconds}`;
}
