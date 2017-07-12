"use strict";

var white = $('#white'),
	red = $('#red'),
	green = $('#green'),
	blue = $('#blue'),
	yellow = $('#yellow'),
	purple = $('#purple'),
	gray = $('#gray'),
	orange = $('#orange'),
	black = $('#black'),
	circles = $('.circle');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(time = 400) {

	circles.each(function(i) {
		$(this).animate({
			opacity: '1',
			height: '60',
			width: '60',
			top: '50',
			left: String((i * 100) + 50)
		}, time).removeAttr('style');
	});
}

function scatter(scale = 400, time = 400, ease = 'linear') {

	var op1, op2, pixels1, pixels2;

	circles.each(function() {
		op1 = getRandomInt(0, 1) === 0 ? "+=" : "-=";
		op2 = getRandomInt(0, 1) === 0 ? "+=" : "-=";
		pixels1 = getRandomInt(0, scale);
		pixels2 = getRandomInt(0, scale);

		$(this).animate({
			top: op1 + pixels1,
			left: op2 + pixels2
		}, {
			duration: time,
			easing: ease
		});
	});
}

function center(time = 400, ease = 'linear') {

	circles.each(function() {
		$(this).animate({
			top: "50%",
			left: "50%"
		}, {
			duration: time,
			easing: ease
		});
	});
}

function resize(plusOrMinusEquals, pixels, which = 'all') {

	if (which === 'all') {

		circles.each(function() {
			$(this).animate({
				height: plusOrMinusEquals + pixels,
				width: plusOrMinusEquals + pixels
			});
		});

	} else {

		which.animate({
			height: plusOrMinusEquals + pixels,
			width: plusOrMinusEquals + pixels
		});

	}
}

function runCircle(color, h, k, radius, time = 400, ease = 'linear') {

	var tau = 2 * Math.PI,
		a = Math.sin( tau / 16 ) * radius,
		b = Math.sin( tau / 8 ) * radius,
		c = Math.cos( tau / 16 ) * radius;

	color.animate({
		left: h + c,
		top: k - a
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h + b,
		top: k - b
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h + a,
		top: k - c
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h,
		top: k - radius
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - a,
		top: k - c
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - b,
		top: k - b
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - c,
		top: k - a
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - radius,
		top: k
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - c,
		top: k + a
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - b,
		top: k + b
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h - a,
		top: k + c
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h,
		top: k + radius
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h + a,
		top: k + c
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h + b,
		top: k + b
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h + c,
		top: k + a
	}, {
		duration: time,
		easing: ease
	}).animate({
		left: h + radius,
		top: k
	});
}

function rain(direction = 'd', multiple = 10, time = 50, ease = 'linear') {

	var rand,
	index;

	for (var i = 0; i < multiple; i++) {

		for (var j = 0; j < 100; j++) {

			rand = getRandomInt(10, 100);
			index = getRandomInt(0, circles.length - 1);
			
			if (direction === 'd') {
				circles[index].animate({
					top: "+=" + rand
				}, {
					duration: time,
					easing: ease
				});
			}
		}

		reset(10);
	}
}

function randomGrid(spacing = 80, duration = 500) {

	var halfHeight = Math.round(window.innerHeight / 2) - 100,
		halfWidth = Math.round(window.innerWidth / 2) - 100,
		randomX,
		randomY,
		randomZ,
		x, y,
		x1, x2, x3,
		y1, y2, y3;

		randomX = getRandomInt(0, 5);
		randomY = getRandomInt(0, 5);
		
		switch (randomX) {
			case 0:
				x1 = halfWidth;
				x2 = halfWidth + spacing;
				x3 = halfWidth - spacing;
				break;
			case 1:
				x1 = halfWidth;
				x2 = halfWidth - spacing;
				x3 = halfWidth + spacing;
				break;
			case 2:
				x1 = halfWidth + spacing;
				x2 = halfWidth;
				x3 = halfWidth - spacing;
				break;
			case 3:
				x1 = halfWidth + spacing;
				x2 = halfWidth - spacing;
				x3 = halfWidth;
				break;
			case 4:
				x1 = halfWidth - spacing;
				x2 = halfWidth;
				x3 = halfWidth + spacing;
				break;
			case 5:
				x1 = halfWidth - spacing;
				x2 = halfWidth + spacing;
				x3 = halfWidth;
		}

		switch (randomY) {
			case 0:
				y1 = halfHeight;
				y2 = halfHeight + spacing;
				y3 = halfHeight - spacing;
				break;
			case 1:
				y1 = halfHeight;
				y2 = halfHeight - spacing;
				y3 = halfHeight + spacing;
				break;
			case 2:
				y1 = halfHeight + spacing;
				y2 = halfHeight;
				y3 = halfHeight - spacing;
				break;
			case 3:
				y1 = halfHeight + spacing;
				y2 = halfHeight - spacing;
				y3 = halfHeight;
				break;
			case 4:
				y1 = halfHeight - spacing;
				y2 = halfHeight;
				y3 = halfHeight + spacing;
				break;
			case 5:
				y1 = halfHeight + spacing;
				y2 = halfHeight - spacing;
				y3 = halfHeight;
		}				

	circles.each(function(index) {

		randomZ = getRandomInt(0, 8).toString();

		if (index % 3 === 0) {

			y = y1;

		} else if (index % 2 === 0) {

			y = y2;

		} else {

			y = y3;

		}

		if (index < 3) {

			x = x1;

		} else if (index < 6) {

			x = x2;

		} else {

			x = x3;

		}

		$(this).animate({
			left: x,
			top: y
		}, duration);

	});
}

function gridShuffle(spacing = 80, duration = 1000) {

	randomGrid(spacing, duration);
	scatter(spacing, duration / 4);
	randomGrid(spacing, duration);

}
