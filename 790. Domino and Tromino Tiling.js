// 790. Domino and Tromino Tiling
/*
You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.

Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.
*/
const numTilings = (n) => {
	const mod = 1e9 + 7;
	let dp = Array.from({ length: n }, () => 0);
	dp[0] = 1;
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
	}

	return dp[n];
};
