// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/

/*
2033. Minimum Operations to Make a Uni-Value Grid


You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

A uni-value grid is a grid where all the elements of it are equal.

Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.
*/

const minOperations = (grid, x) => {
	const flattened = [];
	for (let row of grid) {
		for (let num of row) {
			flattened.push(num);
		}
	}
	flattened.sort((a, b) => a - b);

	const median = flattened[~~((flattened.length - 1) / 2)];

	let counter = 0;

	for (let num of flattened) {
		if (num < median) {
			let times = (median - num) / x;
			if (times % 1 !== 0) return -1;
			counter += times;
		} else {
			let times = (num - median) / x;
			if (times % 1 !== 0) return -1;
			counter += times;
		}
	}
	return counter;
};
