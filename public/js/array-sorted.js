'use strict';

function isSorted(array) {

	var sorted = true;
	var sortedArray = array.map(function(e) {
		return e;
	}).sort();

	for (var i = 0; i < array.length; i++) {
		if (array[i] != sortedArray[i]) {
			sorted = false;
			break;
		}
	};

	return sorted;
}
