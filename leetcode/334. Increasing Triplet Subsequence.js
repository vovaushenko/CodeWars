// https://leetcode.com/problems/increasing-triplet-subsequence/

/*
334. Increasing Triplet Subsequence

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/

const increasingTriplet = (nums) => {
	let [one, two] = [Infinity, Infinity];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= one) {
			one = nums[i];
		} else if (nums[i] <= two) {
			two = nums[i];
		} else {
			return true;
		}
	}

	return false;
};
