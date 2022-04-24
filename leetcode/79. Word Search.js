//79. Word Search
/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/
const isFound = (b, w, c, r) => {
	if (w === '') return true;

	if (!(c >= 0) || !(c < b.length) || !(r >= 0) || !(r < b[c].length))
		return false;

	if (b[c][r] != w[0]) return false;

	let temp = b[c][r];

	b[c][r] = '#';

	if (
		isFound(b, w.slice(1), c + 1, r) ||
		isFound(b, w.slice(1), c - 1, r) ||
		isFound(b, w.slice(1), c, r + 1) ||
		isFound(b, w.slice(1), c, r - 1)
	) {
		b[c][r] = temp;

		return true;
	} else {
		b[c][r] = temp;
	}
};

const exist = (board, word) => {
	const [m, n] = [board.length, board[0].length];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === word[0]) {
				if (isFound(board, word, i, j)) return true;
			}
		}
	}

	return false;
};

console.log(
	exist(
		[
			['A', 'B', 'C', 'E'],

			['S', 'F', 'C', 'S'],

			['A', 'D', 'E', 'E'],
		],

		'ABCCED'
	)
);
