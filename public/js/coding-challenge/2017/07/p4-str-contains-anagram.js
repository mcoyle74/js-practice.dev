"use strict";

/*

	Given string1 and string2, return true if a portion of the characters in 
	string1 can be rearranged to form string2. Otherwise return false.
	Example; 
	input: "lhkioell", "hello"		input: "kjshaaeeee", "code"
	output: true 					output: false

*/

function stringContainsAnagram(string1, string2) {

	var count = 0,
		index;

	for (var i = 0; i < string2.length; i++) {
		index = string1.indexOf(string2[i]);
		if (index >= 0) {
			string1 = string1.slice(0, index) + string1.slice(index + 1);
			count++;
		}	
	};

	return count === string2.length ? true : false;
}
