// 794. Valid Tic-Tac-Toe State
/*
Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares ' '.
The first player always places 'X' characters, while the second player always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
*/
const getGameTotals = (board) =>
	[...board.join('')].reduce(
		(acc, c) => {
			if (c === 'X') acc['X']++;
			if (c === 'O') acc['O']++;
			return acc;
		},
		{ X: 0, O: 0 }
	);

let validTicTacToe = (A) => {
	let { X, O } = getGameTotals(A);
	let win = (c) => {
		let target = c.repeat(3);
		if (A.some((row) => row == target)) return true;
		for (let j = 0; j < 3; ++j) {
			let col = A[0][j] + A[1][j] + A[2][j];
			if (col == target) return true;
		}
		return (
			A[0][0] + A[1][1] + A[2][2] == target ||
			A[0][2] + A[1][1] + A[2][0] == target
		);
	};
	let winX = win('X'),
		winO = win('O');
	if (winX && winO) return false;
	if (winX && X - O != 1) return false;
	if (winO && X - O != 0) return false;
	return X - O == 0 || X - O == 1;
};
