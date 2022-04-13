//289. Game of Life
/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
*/
const alive = (neighbors) => neighbors.filter((n) => n).length;

const parse = (cellVal, aliveNeighbors) => {
	if (!cellVal && aliveNeighbors === 3) return 1;
	if (aliveNeighbors < 2) return 0;
	if (cellVal && [2, 3].includes(aliveNeighbors)) return 1;
	if (cellVal && aliveNeighbors > 3) return 0;
	if (!cellVal) return 0;
};

const arrayToMatrix = (arr, rowLength) => {
	const matrix = [];
	while (arr.length) {
		matrix.push(arr.slice(0, rowLength));
		arr = arr.slice(rowLength);
	}
	return matrix;
};

const cellNeighbors = (board, cellCoords) => {
	const [row, col] = cellCoords;
	const neighbors = [];

	if (board[row - 1] && board[row - 1][col - 1] !== undefined)
		neighbors.push(board[row - 1][col - 1]);
	if (board[row - 1] && board[row - 1][col] !== undefined)
		neighbors.push(board[row - 1][col]);
	if (board[row - 1] && board[row - 1][col + 1] !== undefined)
		neighbors.push(board[row - 1][col + 1]);
	if (board[row][col - 1] !== undefined) neighbors.push(board[row][col - 1]);
	if (board[row][col + 1] !== undefined) neighbors.push(board[row][col + 1]);
	if (board[row + 1] && board[row + 1][col - 1] !== undefined)
		neighbors.push(board[row + 1][col - 1]);
	if (board[row + 1] && board[row + 1][col] !== undefined)
		neighbors.push(board[row + 1][col]);
	if (board[row + 1] && board[row + 1][col + 1] !== undefined)
		neighbors.push(board[row + 1][col + 1]);

	return neighbors;
};

const gameOfLife = (board) => {
	const nextBoard = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const aliveNeighbors = alive(cellNeighbors(board, [i, j]));
			nextBoard.push(parse(board[i][j], aliveNeighbors));
		}
	}

	const next = arrayToMatrix(nextBoard, board[0].length);

	for (let i = 0; i < next.length; i++) {
		for (let j = 0; j < next[i].length; j++) {
			board[i][j] = next[i][j];
		}
	}
	return board;
};

// Hi Creig. I've been mainly in meetings. Taking a look into WEB components regarding their use in the JET.
// Today will be taking a look more particularly into the authentication workflows for the Zoom application
// Will also sync up later with Daniela and Austing on Auth
