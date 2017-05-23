"use strict"

function reverseByCenter(string) {
	
	var half = string.length / 2;
	
	if (string.length % 2 == 0) {
	
		var first = string.slice(0, half),
			last = string.slice(half);
		
		return last + first;
	}
	
	var first = string.slice(0, Math.floor(half)),
		mid = string.substr(Math.floor(half), 1),
		last = string.slice(Math.ceil(half));
			
	return last + mid + first;
}
