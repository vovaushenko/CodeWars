//64. Minimum Path Sum
/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.


*/
const minPathSum = (grid) => {
	const m = grid.length;
	const n = grid[0].length;

	for (let i = 1; i < m; i++) {
		grid[i][0] += grid[i - 1][0];
	}

	for (let i = 1; i < n; i++) {
		grid[0][i] += grid[0][i - 1];
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
		}
	}

	return grid[m - 1][n - 1];
};
