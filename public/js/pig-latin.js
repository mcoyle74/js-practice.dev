'use strict';

// Onvertcay ethay entencesay otay Igpay Atinlay!

function translateToPigLatin(sentence) {

	var ordway;
	var translation = sentence.split(' ').map(word => {

		if (/[aeiou]/i.test(word[0])) {
			ordway = word.replace(/([aeiou][a-z]*)/i, '$1way');
		} else {
			ordway = word.replace(/([bcdfghj-np-tv-z]+)(\w+)/i, '$2$1ay').toLowerCase();
			if (/[A-Z]/.test(word[0])) ordway = ordway[0].toUpperCase() + ordway.slice(1);
		}

		return ordway;
	});

	return translation.join(' ');
};