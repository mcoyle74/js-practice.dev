'use strict';

function formatDuration(seconds) {

	if (seconds === 0) return 'now';

	const MINUTE = 60,
    	HOUR = MINUTE * 60,
		DAY = HOUR * 24,
		YEAR = DAY * 365;

	var duration = [];

	function formatUnits(sec, timeConst, unit) {

		var time = Math.floor(sec / timeConst);
		time += time > 1 ? `${unit}s` : unit;
		seconds %= timeConst;
		return time;

	}

	if (seconds >= YEAR) duration.push(formatUnits(seconds, YEAR, ' year'));
	
	if (seconds >= DAY) duration.push(formatUnits(seconds, DAY, ' day'));
	
	if (seconds >= HOUR) duration.push(formatUnits(seconds, HOUR, ' hour'));
	
	if (seconds >= MINUTE) duration.push(formatUnits(seconds, MINUTE, ' minute'));

	if (seconds > 0) {
		seconds += seconds > 1 ? ' seconds' : ' second';
		duration.push(seconds);
	}

	return duration.join(', ').replace(/,([^,]*)$/, ' and$1');

}