// https://leetcode.com/problems/maximum-difference-between-increasing-elements/
// 2016. Maximum Difference Between Increasing Elements
/*
Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

Return the maximum difference. If no such i and j exists, return -1.
*/
const maximumDifference = (nums) => {
	const maxDiff = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		const firstNum = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const currentNum = nums[j];
			if (currentNum > firstNum)
				maxDiff = Math.max(currentNum - firstNum, maxDiff);
		}
	}

	return maxDiff !== -Infinity ? maxDiff : -1;
};
