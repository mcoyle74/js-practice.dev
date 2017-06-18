'use strict';

function isPangram(string) {

	if (typeof string != 'string') {
		throw new TypeError('argument must be a string');
	} else if (string.length < 26) {
		return false;
	}

	var alphabet = a_to_z(),
		letters = 0;

	for (var i = 0; i < alphabet.length; i++) {
		if (string.includes(alphabet[i]) || string.includes(alphabet[i].toUpperCase())) {
			letters++;
		}
	}

	return (letters == 26) ? true : false;
}

function missingLetters(string) {

	if (typeof string != 'string') {
		throw new TypeError('argument must be a string');
	}

	var alphabet = a_to_z(),
		missing = [];

	alphabet.forEach(function(letter) {
		if (!string.includes(letter) && !string.includes(letter.toUpperCase())) {
			missing.push(letter);
		}
	});

	return missing.join(', ');
}

function a_to_z() {

	var abcs = [];

	for (var i = 97; i < 123; i++) {
		abcs.push(String.fromCharCode(i));
	}

	return abcs;
}

var testStrings = [
	"abcdefghijklmnopqrstuvwxyz",
	"ab_defghijkl_nopqrstuvwxyz",
	"Bold crisp qwerty juxtaposition",
	"XrC]eebvxJ|2P:pwk/C_*YACQ<",
	"A quick brown fox jumps over the lazy dog",
	"Pack my box with five dozen liquor jugs",
	"Jack loves my big sphinx of quartz",
	"The five boxing wizards jump quickly",
	"Black quartz Sphinx, judge my vow",
	"How vexingly quick daft zebras jump!",
	"Grumpy wizards make a toxic brew for the jovial queen",
	"Sixty zips quickly picked from the woven jute bag"
];

testStrings.forEach(function(str) {
	if (isPangram(str)) {
		console.log('"' + str + '" is a pangram.');
	} else {
		console.log('"' + str + '" is missing the letters: ' + missingLetters(str) + '.');
	}
});
