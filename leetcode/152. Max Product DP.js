// https://leetcode.com/problems/maximum-product-subarray/

// 152. Maximum Product Subarray
/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
*/

const maxProduct = (nums) => {
	let min = [nums[0]];
	let max = [nums[0]];
	let res = nums[0];

	for (let i = 1; i < nums.length; i++) {
		min.push(Math.min(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]));
		max.push(Math.max(nums[i], min[i - 1] * nums[i], max[i - 1] * nums[i]));
		res = Math.max(res, max[i]);
	}
	return res;
};
