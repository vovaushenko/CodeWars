// 1252. Cells with Odd Values in a Matrix
/*
There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.
*/

const incrementRow = (matrix, m) => {
	for (let i = 0; i < matrix[m].length; i++) {
		matrix[m][i]++;
	}
};

const incrementCol = (mat, col) => {
	for (let i = 0; i < mat.length; i++) {
		mat[i][col]++;
	}
};

const countOddElements = (matrix) => {
	let oddsCount = 0;
	for (const row of matrix) oddsCount += row.filter((el) => el % 2).length;
	return oddsCount;
};

const oddCells = (m, n, ids) => {
	const matrix = Array.from({ length: m }, () => Array(n).fill(0));

	for (let [row, col] of ids) {
		incrementRow(matrix, row);
		incrementCol(matrix, col);
	}

	return countOddElements(matrix);
};
