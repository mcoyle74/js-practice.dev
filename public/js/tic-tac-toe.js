"use strict";

function TicTacToe() {

	this.board = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];

	this.column = function(col) {

		var column;

		if (col === 0) {
			column = this.board[0][0] + this.board[1][0] + this.board[2][0];
		} else if (col === 1) {
			column = this.board[0][1] + this.board[1][1] + this.board[2][1];
		} else {
			column = this.board[0][2] + this.board[1][2] + this.board[2][2];
		}

		return column;
	
	};

	this.row = function(r) {

		var row;

		if (r === 0) {
			row = this.board[0].join('');
		} else if (r === 1) {
			row = this.board[1].join('');
		} else {
			row = this.board[2].join('');
		}

		return row;
	};

	this.diagonals = [
		this.board[0][0] + this.board[1][1] + this.board[2][2],
		this.board[2][0] + this.board[1][1] + this.board[0][2]
	];

	this.display = function() {
		this.board.forEach(row => {
			console.log(row);
		});
	};

	this.play = function(row, col) {

		var message;

		if (this.status()) {

			const X = 'X',
				O = 'O';

			if (this.board[row][col] === ' ') {

				this.playCount += 1;

				if (this.turn === 'X') {

					this.board[row][col] = X;
					this.turn = this.status() ? O : X;

				} else {

					this.board[row][col] = O;
					this.turn = this.status() ? X : O;
	
				}

				message = this.status() ? this.turn + "'s turn" : this.gameOver();

			} else {

				console.log('Illegal play: the square at (' + row + ', ' + col + ') is taken. Please choose an available square.');

			}

			this.display();

		} else {

			message = this.gameOver();

		}

		console.log(message);
	};

	this.status = function() {

		var gameOn = true,
			col,
			row;

		for (var i = 0; i < this.board.length; i++) {
			col = this.column(i);
			row = this.row(i);	
			if (col === 'XXX' || col === 'OOO' || row === 'XXX' || row === 'OOO') {
				gameOn = false;
			}
		}

		if (this.diagonals[0] === 'XXX' || this.diagonals === 'OOO') {
			gameOn = false;
		}

		if (this.playCount >= 9) {
			gameOn = false;
		}

		return gameOn;
	};

	this.turn = 'X';

	this.playCount = 0;

	this.gameOver = function() {
		return this.playCount < 9 ? ('Game over: ' + this.turn + ' wins') : ('Game over: tie');
	};

	return this.display();
};
