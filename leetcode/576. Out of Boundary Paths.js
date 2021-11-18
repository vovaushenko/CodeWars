// 576. Out of Boundary Paths
/*
There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.
*/

const findPaths = (m, n, maxMove, startRow, startColumn) => {
	const memo = {};
	const MOD = 10 ** 9 + 7;

	const helper = (currRow, currCol, currMove) => {
		let pathVariation = `${currRow}x${currCol}x${currMove}`;

		if (pathVariation in memo) return memo[pathVariation];
		if (currMove > maxMove) return 0;
		if (currRow < 0 || currCol < 0 || currRow >= m || currCol >= n) return 1;

		let count = 0;
		const directions = [
			[currRow - 1, currCol],
			[currRow + 1, currCol],
			[currRow, currCol - 1],
			[currRow, currCol + 1],
		];

		for (let [r, c] of directions) {
			count = (count + helper(r, c, currMove + 1)) % MOD;
		}

		memo[pathVariation] = count;
		return count;
	};

	const res = helper(startRow, startColumn, 0, {});
	return res;
};
