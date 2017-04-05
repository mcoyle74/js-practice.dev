'use strict';

var spades = String.fromCharCode(9824),
	clubs = String.fromCharCode(9827),
	hearts = String.fromCharCode(9829),
	diamonds = String.fromCharCode(9830);

var $rank = $('.card-rank');

$rank[0].innerHTML = 'A' + '<br>' + spades;
