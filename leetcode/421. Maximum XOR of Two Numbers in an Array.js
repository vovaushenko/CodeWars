//421. Maximum XOR of Two Numbers in an Array
/*
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.
*/

const findMaximumXOR = (nums) => {
	let maxXOR = -Infinity;

	const unique = [...new Set(nums)];

	for (let i = 0; i < unique.length; i++) {
		for (let j = i; j < unique.length; j++) {
			maxXOR = Math.max(maxXOR, unique[j] ^ unique[i]);
		}
	}

	return maxXOR;
};
