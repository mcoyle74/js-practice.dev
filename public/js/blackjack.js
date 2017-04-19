'use strict';

// var spades = String.fromCharCode(9824),
// 	clubs = String.fromCharCode(9827),
// 	hearts = String.fromCharCode(9829),
// 	diamonds = String.fromCharCode(9830);

var suits = ['&clubs;', '&spades;', '&hearts;', '&diams;'],
	ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
	cards = $('.card-rank'),
	playerHand = [],
	dealerHand = [];

function buildDeck(suits, ranks) {
	var deck = [];
	suits.forEach(function(suit, index) {
		ranks.forEach(function(rank) {
			deck.push({rank: rank, suit: suit});
		});
	});
	deck.forEach(function(card) {
		switch (card.rank) {
			case 'A':
				card.value = 11;
				break;
			case 'J':
			case 'Q':
			case 'K':
				card.value = 10;
				break;
			default:
				card.value = parseInt(card.rank);
		}
		card.show = function() {
			if (card.suit == '&hearts;' || card.suit == '&diams;') {
				return '<span class="red">' + this.rank + '<br>' + this.suit + '</span>';
			}
			return this.rank + '<br>' + this.suit;
		}
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

var deck = shuffle(buildDeck(suits, ranks));

$('#deal').click(function() {
	$('#deal').hide();
	if (deck.length < 12) {
		deck = shuffle(buildDeck(suits, ranks));
	}
	playerHand.push(deck.shift());
	dealerHand.push(deck.shift());
	playerHand.push(deck.shift());
	dealerHand.push(deck.shift());
	setTimeout(function() {
		$('.player-card').removeAttr('hidden');
		cards[0].innerHTML = playerHand[0].show();
	}, 250);
	setTimeout(function() {
		$('.dealer-card').removeAttr('hidden');
		cards[1].innerHTML = dealerHand[0].show();
	}, 500);
	setTimeout(function() {
		$('.player-card2').removeAttr('hidden');
		cards[2].innerHTML = playerHand[1].show();
	}, 750);
	setTimeout(function() {
		$('.dealer-card2').removeAttr('hidden');
		cards[3].innerHTML = dealerHand[1].show();
	}, 1000);

});
