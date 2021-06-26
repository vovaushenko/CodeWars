// https://leetcode.com/problems/largest-number/

/*
179. Largest Number
Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.
*/

const largestNumber = (nums) =>
	[...new Set(nums)].length === 1 && nums[0] === 0
		? '0'
		: nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
