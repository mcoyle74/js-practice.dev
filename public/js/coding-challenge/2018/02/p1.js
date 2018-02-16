"use strict";

/*
	Given a string of words, find the highest scoring word. Each letter of the
	word has a score corresponding to its place in the alphabet (a = 1, b = 2, 
	, c = 3, ..., z = 26). If two words have the same score, return the word
	that comes first in the string. All letters will be lowercase, all inputs
	will be valid.
	Example:
		input: 'two toads talking'
		output 'talking' 
*/

function highestScoringWord(str) {

	let words = str.split(' '),
		wordScores = [],
		score;

	words.forEach(word => {

		score = 0;

		for (let i = 0; i < word.length; i++) {
			score += word.charCodeAt(i) - 96; // char code of 'a' = 97
		}

		wordScores.push(score);
	});

	return words[wordScores.indexOf(Math.max(...wordScores))];
}
