// https://leetcode.com/problems/maximum-subarray/

/*
!Kadane's Algorithm 
53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

const maxSubArray = (nums) => {
	let tempSum = 0;
	let maxSum = -Infinity;

	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];

	for (let i = 0; i < nums.length; i++) {
		tempSum += nums[i];
		maxSum = Math.max(tempSum, maxSum);
		if (tempSum < 0) tempSum = 0;
	}

	return maxSum;
};
