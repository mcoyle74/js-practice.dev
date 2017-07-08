'use strict';

function Game() {

	this.board = null;
	this.onMove = 'white';
	this.set = {
		black: {
			rooks: [ new Piece('rook', 'black', 'a8'), new Piece('rook', 'black', 'h8') ],
			knights: [ new Piece('knight', 'black', 'b8'), new Piece('knight', 'black', 'g8') ],	
			bishops: [ new Piece('bishop', 'black', 'c8'), new Piece('bishop', 'black', 'f8') ],
			queen: new Piece('queen', 'black', 'd8'),
			king: new Piece('king', 'black', 'e8'),
			pawns: [
				new Piece('pawn', 'black', 'a7'), new Piece('pawn', 'black', 'b7'),
				new Piece('pawn', 'black', 'c7'), new Piece('pawn', 'black', 'd7'),
				new Piece('pawn', 'black', 'e7'), new Piece('pawn', 'black', 'f7'), 
				new Piece('pawn', 'black', 'g7'), new Piece('pawn', 'black', 'h7')
			]
		},
		white: {
			rooks: [ new Piece('rook', 'white', 'a1'), new Piece('rook', 'white', 'h1') ],
			knights: [ new Piece('knight', 'white', 'b1'), new Piece('knight', 'white', 'g1') ],	
			bishops: [ new Piece('bishop', 'white', 'c1'), new Piece('bishop', 'white', 'f1') ],
			queen: new Piece('queen', 'white', 'd1'),
			king: new Piece('king', 'white', 'e1'),
			pawns: [
				new Piece('pawn', 'white', 'a2'), new Piece('pawn', 'white', 'b2'),
				new Piece('pawn', 'white', 'c2'), new Piece('pawn', 'white', 'd2'),
				new Piece('pawn', 'white', 'e2'), new Piece('pawn', 'white', 'f2'), 
				new Piece('pawn', 'white', 'g2'), new Piece('pawn', 'white', 'h2')
			]
		},
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
				this.set.black.rooks[0],
			 	this.set.black.knights[0],
				this.set.black.bishops[0],
				this.set.black.queen,
				this.set.black.king,
				this.set.black.bishops[1],
				this.set.black.knights[1],
				this.set.black.rooks[1]
			],
			[
				this.set.black.pawns[0],
				this.set.black.pawns[1],
				this.set.black.pawns[2],
				this.set.black.pawns[3],
				this.set.black.pawns[4],
				this.set.black.pawns[5],
				this.set.black.pawns[6],
				this.set.black.pawns[7],
			],
			['', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', ''],
			[
				this.set.white.pawns[0],
				this.set.white.pawns[1],
				this.set.white.pawns[2],
				this.set.white.pawns[3],
				this.set.white.pawns[4],
				this.set.white.pawns[5],
				this.set.white.pawns[6],
				this.set.white.pawns[7],
			],
			[
				this.set.white.rooks[0],
			 	this.set.white.knights[0],
				this.set.white.bishops[0],
				this.set.white.queen,
				this.set.white.king,
				this.set.white.bishops[1],
				this.set.white.knights[1],
				this.set.white.rooks[1]
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

function Piece(rank, color, square) {

	this.rank = rank;
	this.color = color;
	this.square = square;
	
	switch (rank) {

		case 'king':
			this.token = String.fromCharCode(9818);
			break;
		case 'queen':
			this.token = String.fromCharCode(9819);
			break;
		case 'rook':
			this.token = String.fromCharCode(9820);
			break;
		case 'bishop':
			this.token = String.fromCharCode(9821);
			break;
		case 'knight':
			this.token = String.fromCharCode(9822);
			break;
		case 'pawn':
			this.token = String.fromCharCode(9823);
			break;
		default:
			this.token = null;
			break;
	}
};

var game = new Game();
game.reset();
