/*
96. Unique Binary Search Trees
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

*/

const numTrees = (n) => {
	const res = [1, 1];

	for (let i = 2; i <= n; i++) {
		res[i] = 0;
		for (let j = 0; j < i; j++) {
			res[i] += res[j] * res[i - j - 1];
		}
	}

	return res[n];
};
