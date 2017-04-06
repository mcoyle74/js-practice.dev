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

function randomCard() {
	return Math.floor(Math.random() * 52);
}

$('#deal').click(function() {
	cards[0].innerHTML = buildDeck(suits, ranks)[randomCard()];
	cards[1].innerHTML = buildDeck(suits, ranks)[randomCard()];
});
