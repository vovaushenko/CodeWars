// 1567. Maximum Length of Subarray With Positive Product
/*
Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

Return the maximum length of a subarray with positive product.

*/
const getMaxLen = (nums) => {
	let max = 0,
		positive = 0,
		negative = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			[positive, negative] = [0, 0];
		} else if (nums[i] < 0) {
			[positive, negative] = [negative > 0 ? negative + 1 : 0, positive + 1];
		} else {
			[positive, negative] = [positive + 1, negative > 0 ? negative + 1 : 0];
		}
		max = Math.max(max, positive);
	}
	return max;
};
