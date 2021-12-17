// 221. Maximal Square
/*
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
*/

const maximalSquare = (matrix) => {
	let max = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === '0') continue;
			if (i > 0 && j > 0)
				matrix[i][j] =
					Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
					1;
			max = Math.max(matrix[i][j], max);
		}
	}
	return max ** 2;
};
