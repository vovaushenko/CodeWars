// https://leetcode.com/problems/unique-paths/
/*
62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

const uniquePaths = (m, n, memo = {}) => {
	const pathKey = `${m}-${n}`;
	if (pathKey in memo) return memo[pathKey];
	if (!m) return 0;
	if (!n) return 0;
	if (m === 1 && n === 1) return 1;
	memo[pathKey] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
	return memo[pathKey];
};
