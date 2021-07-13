// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/
//! 1887. Reduction Operations to Make the Array Elements Equal
/*
Given an integer array nums, your goal is to make all elements in nums equal. To complete one operation, follow these steps:

Find the largest value in nums. Let its index be i (0-indexed) and its value be largest. If there are multiple elements with the largest value, pick the smallest i.
Find the next largest value in nums strictly smaller than largest. Let its value be nextLargest.
Reduce nums[i] to nextLargest.
Return the number of operations to make all elements in nums equal.
*/
const reductionOperations = (nums) => {
	let frequencies = nums.reduce((h, n) => ((h[n] = h[n] + 1 || 1), h), {});

	let sortedUnique = [...new Set(nums.sort((a, b) => b - a))];

	let reductions = 0;
	for (let i = 0; i < sortedUnique.length - 1; i++) {
		let currentNum = sortedUnique[i];
		let nextNum = sortedUnique[i + 1];

		reductions += frequencies[currentNum];

		frequencies[nextNum] += frequencies[currentNum];
	}

	return reductions;
};
