// 1403. Minimum Subsequence in Non-Increasing Order
/*
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

*/
const minSubsequence = (nums) => {
	const sorted = [...nums].sort((a, b) => b - a);
	const total = nums.reduce((a, b) => a + b, 0);
	let currentSum = 0;
	const solution = [];
	for (const num of sorted) {
		currentSum += num;
		solution.push(num);
		if (currentSum > total - currentSum) return solution;
	}
};
