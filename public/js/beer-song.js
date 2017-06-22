"use strict";

// Stay thirsty my friends.

function BeerSong() {

	this.verse = function(n) {

		if (n === 0) {
				return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'; 
		};

		var btl = ' bottle',
			oneLess = (n !== 1) ? n - 1 : 'no more',
			bottlesNow = (n !== 1) ? n + btl + 's' : n + btl,
			bottlesAfter = (n !== 2) ? oneLess + btl + 's' : oneLess + btl,
			pronoun = (n !== 1) ? 'one' : 'it';

		return bottlesNow + ' of beer on the wall, ' + bottlesNow + ' of beer.\nTake ' + pronoun + ' down and pass it around, ' + bottlesAfter + ' of beer on the wall.\n';
	};

	this.sing = function(start, end = 0) {

		var song = '';

		for (var i = start; i >= end; i--) {
			song += this.verse(i);
			if (i > end) {
				song += '\n';
			}
		};

		return song;
	};
};
