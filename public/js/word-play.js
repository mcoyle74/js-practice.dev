"use strict";

String.prototype.isAnagram = function(str) {

	if (typeof str !== 'string') {
		throw new TypeError('argument must be a string, ' + (typeof str) + ' given');
	}

	var key = this.valueOf().replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join(''),
		candidate = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
		
	return (candidate === key && str !== this.valueOf()) ? true : false;
};

String.prototype.isPalindrome = function() {

	var key = this.valueOf().replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
		candidate = key.split('').reverse().join('');

	return candidate === key ? true : false;
}

String.prototype.isPangram = function() {

	if (this.valueOf().length < 26) {
		return false;
	}

	var alphabet = getAlphabet(),
		matchedCharCount = 0;

	for (var i = 0; i < alphabet.length; i++) {
		if (this.valueOf().includes(alphabet[i]) || this.valueOf().includes(alphabet[i].toUpperCase())) {
			matchedCharCount++;
		}
	}

	return (matchedCharCount == 26) ? true : false;
}

String.prototype.getMissing = function() {

	var alphabet = getAlphabet().split(''),
		string = this.valueOf(),
		missing = alphabet.filter(letter => {
			return !string.includes(letter) && !string.includes(letter.toUpperCase())
		});

	return missing.join(', ');
}

function getAlphabet() {

	var alphabet = '';

	for (var i = 97; i < 123; i++) {
		alphabet += String.fromCharCode(i);
	}

	return alphabet;
}

var pangramTestStrings = [
	"abcdefghijklmnopqrstuvwxyz",
	"ab_defghijkl_nopqrstuvwxyz",
	"Bold crisp qwerty juxtaposition",
	"dfXrC]egbvxJ|2P:lmwk/C_*YAzCQ<",
	"A quick brown fox jumps over the lazy dog",
	"Pack my box with five dozen liquor jugs",
	"Jack loves my big sphinx of quartz",
	"The five boxing wizards jump quickly",
	"Black quartz Sphinx, judge my vow",
	"How vexingly quick daft zebras jump!",
	"Grumpy wizards make a toxic brew for the jovial queen",
	"Sixty zips quickly picked from the woven jute bag"
];
