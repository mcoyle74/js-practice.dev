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
};

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
};

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
};

function center(time = 400, ease = 'linear') {

	var halfHeight = Math.round((window.innerHeight / 2) - parseFloat(white.css('width')) / 2).toString(),
		halfWidth = Math.round((window.innerWidth / 2) - parseFloat(white.css('width')) / 2).toString();

	circles.each(function() {
		$(this).animate({
			top: halfHeight,
			left: halfWidth
		}, {
			duration: time,
			easing: ease
		});
	});
};

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

	};
};

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
};

function rain(multiple = 100, time = 50, ease = 'linear') {

	var discs = [
			black, white, red, green, orange, blue, yellow, purple, gray
		],
		rand,
		index;

	for (var i = 0; i < multiple; i++) {
		for (var j = 0; j < discs.length; j++) {

			rand = getRandomInt(0, window.innerHeight + 70);
			index = getRandomInt(0, discs.length - 1);
			
			discs[index].animate({
				top: rand
			}, {
				duration: time,
				easing: ease
			});
		}

		circles.each(function(i) {
			$(this).css({
				'top': '-70',
				'left': String((i * 100) + 50)
			});
		});
	};

	reset(10);
};

function randomGrid(spacing = 80, duration = 500) {

	var halfHeight = Math.round((window.innerHeight / 2) - parseFloat(white.css('width')) / 2),
		halfWidth = Math.round((window.innerWidth / 2) - parseFloat(white.css('width')) / 2),
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
};

function gridShuffle(spacing = 80, duration = 1000) {

	randomGrid(spacing, duration);
	scatter(spacing, duration / 4);
	randomGrid(spacing, duration);

};

function depthIllusion(time = 2000) {

	var darkColor,
		lightColor;

	circles.each(function(i) {

		darkColor = (-(i - (circles.length + 1))).toString(16).repeat(3);
		lightColor = (-(i - (circles.length + 5))).toString(16).repeat(3);

		$(this).css({
			'background-image':'radial-gradient(ellipse farthest-corner at 33% 33% , #' + lightColor + ' 5%, #' + darkColor + ', #' + darkColor + ' 65%)',
			'border-style':'none'
	    }).animate({
			height: String(Math.pow((i + 10), 2)),
			width: String(Math.pow((i + 10), 2)),
			left: String(7 * Math.pow((i + 1), 2) + 50),
			top: String(Math.pow((i + 1), 2) + 50)
		}, time);
	});
};

function getRandomColor() {

	var hex = '#';

	for (var i = 0; i < 6; i++) {
		hex += getRandomInt(0, 15).toString(16);
	};

	return hex;
};

function animateColorChange(element, hue, amount = 85, seconds = 2) {

	var rgb = element.css('background-color').replace(/[rgb\(\)]/g, '').split(', '),
		r = +rgb[0],
		g = +rgb[1],
		b = +rgb[2],
		ms = Math.round((seconds * 1000) / amount),
		count = 0;

	var intervalID = setInterval(function() {

		if (hue === 'r') {

			element.css('background-color', 'rgb(' + (r++) + ', ' + (g--) + ', ' + (b--) + ')');

		} else if (hue === 'g') {

			element.css('background-color', 'rgb(' + (r--) + ', ' + (g++) + ', ' + (b--) + ')');

		} else if (hue === 'b') {

			element.css('background-color', 'rgb(' + (r--) + ', ' + (g--) + ', ' + (b++) + ')');

		}

		count++;

		if (count >= amount) {
			clearInterval(intervalID);
		};

	}, ms);
};

function animateColorAll(sameHue = false) {

	if (sameHue) {

		circles.each(function() {
			animateColorChange($(this), sameHue);
		})

	} else {

		var rand;

		circles.each(function() {

			rand = getRandomInt(0, 2);

			if (rand === 0) {
				animateColorChange($(this), 'r');
			} else if (rand === 1) {
				animateColorChange($(this), 'g');
			} else {
				animateColorChange($(this), 'b');
			}
		});
	};

};
