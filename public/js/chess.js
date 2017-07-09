'use strict';

function Game() {

	this.board = null;
	this.onMove = 'white';
	this.set = {
		blackRook1: $('#black-rook-1'),
		blackKnight1: $('#black-knight-1'),
		blackBishop1: $('#black-bishop-1'),
		blackQueen: $('#black-queen'),
		blackKing: $('#black-king'),
		blackBishop2: $('#black-bishop-2'),
		blackKnight2: $('#black-knight-2'),
		blackRook2: $('#black-rook-2'),
		blackPawnA: $('#black-pawn-a'),
		blackPawnB: $('#black-pawn-b'),
		blackPawnC: $('#black-pawn-c'),
		blackPawnD: $('#black-pawn-d'),
		blackPawnE: $('#black-pawn-e'),
		blackPawnF: $('#black-pawn-f'),
		blackPawnG: $('#black-pawn-g'),
		blackPawnH: $('#black-pawn-h'),
		whitePawnA: $('#white-pawn-a'),
		whitePawnB: $('#white-pawn-b'),
		whitePawnC: $('#white-pawn-c'),
		whitePawnD: $('#white-pawn-d'),
		whitePawnE: $('#white-pawn-e'),
		whitePawnF: $('#white-pawn-f'),
		whitePawnG: $('#white-pawn-g'),
		whitePawnH: $('#white-pawn-h'),
		whiteRook1: $('#white-rook-1'),
		whiteKnight1: $('#white-knight-1'),
		whiteBishop1: $('#white-bishop-1'),
		whiteQueen: $('#white-queen'),
		whiteKing: $('#white-king'),
		whiteBishop2: $('#white-bishop-2'),
		whiteKnight2: $('#white-knight-2'),
		whiteRook2: $('#white-rook-2')
	};

	this.move = function(fromSq, toSq) {
	
		var piece = $(fromSq),
			from = {
				row: this.rowTrans(fromSq[1]),
				col: this.colTrans(fromSq[0])
			},
			to = {
				row: this.rowTrans(toSq[1]),
				col: this.colTrans(toSq[0])
			};

		this.board[to.row][to.col] = this.board[from.row][from.col];
		this.board[from.row][from.col] = '';	
		this.onMove = (this.onMove === 'white') ? 'black' : 'white';
		this.display();
	};

	this.reset = function() {
		this.board = [
			[
				this.set.blackRook1,
			 	this.set.blackKnight1,
				this.set.blackBishop1,
				this.set.blackQueen,
				this.set.blackKing,
				this.set.blackBishop2,
				this.set.blackKnight2,
				this.set.blackRook2
			],
			[
				this.set.blackPawnA,
				this.set.blackPawnB,
				this.set.blackPawnC,
				this.set.blackPawnD,
				this.set.blackPawnE,
				this.set.blackPawnF,
				this.set.blackPawnG,
				this.set.blackPawnH,
			],
			['', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', ''],
			[
				this.set.whitePawnA,
				this.set.whitePawnB,
				this.set.whitePawnC,
				this.set.whitePawnD,
				this.set.whitePawnE,
				this.set.whitePawnF,
				this.set.whitePawnG,
				this.set.whitePawnH,
			],
			[
				this.set.whiteRook1,
			 	this.set.whiteKnight1,
				this.set.whiteBishop1,
				this.set.whiteQueen,
				this.set.whiteKing,
				this.set.whiteBishop2,
				this.set.whiteKnight2,
				this.set.whiteRook2
			],
		]

		this.display();	
	};

	this.display = function() {
		this.board.forEach((row) => {
			console.log(row);
		});
	};

	this.rowTrans = function(row) {

		return -(row - 8);
	};

	this.colTrans = function(col) {

		var columns = {
			a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7
		};

		return columns[col];
	};
};

var game = new Game();
game.reset();
