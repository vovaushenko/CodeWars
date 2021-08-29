// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
/*

You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.


*/
const minimumDifference = (nums, k) => {
	nums.sort((a, b) => a - b);
	if (k === 1) return 0;

	let minDiff = Infinity;

	for (let i = 0; i <= nums.length - k; i++) {
		minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
	}

	return minDiff;
};

console.log(minimumDifference([9, 4, 1, 7], 2));
