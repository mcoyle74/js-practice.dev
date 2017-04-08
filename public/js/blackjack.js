'use strict';

// var spades = String.fromCharCode(9824),
// 	clubs = String.fromCharCode(9827),
// 	hearts = String.fromCharCode(9829),
// 	diamonds = String.fromCharCode(9830);

var suits = ['&clubs;', '&spades;', '&hearts;', '&diams;'];
var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cards = $('.card-rank');

function buildDeck(suits, ranks) {
	var deck = [];
	suits.forEach(function(suit, index) {
		ranks.forEach(function(rank) {
			if (index < 2) {
				deck.push(rank + '<br><span class="suit">' + suit + '</span>');
			} else {
				deck.push('<span class="red">' + rank + '</span><br>' + '<span class="suit red">' + suit + '</span>');
			}
		});
	});

	return deck;
}

// Fisher-Yates shuffle: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
	var cardsRemaining = array.length,
		temp,
		index;
	while (cardsRemaining) {
		index = Math.floor(Math.random() * cardsRemaining--);
		temp = array[cardsRemaining];
		array[cardsRemaining] = array[index];
		array[index] = temp;
	}
	return array;
}

var deck = buildDeck(suits, ranks);

$('#deal').click(function() {
	cards[0].innerHTML = buildDeck(suits, ranks)[randomCard()];
	cards[1].innerHTML = buildDeck(suits, ranks)[randomCard()];
});
