/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/
const findMaxAverage = (nums, k) => {
	let curr = 0;
	let max = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		curr += nums[i];
		if (i >= k) {
			curr -= nums[i - k];
		}
		if (i >= k - 1) {
			max = Math.max(curr, max);
		}
	}
	return max / k;
};
