// 416. Partition Equal Subset Sum
/*
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
*/

const canPartition = (nums) => {
	const sum = nums.reduce((a, b) => a + b, 0);
	if (sum % 2 !== 0) return false;
	const halfSum = sum / 2;

	const canHalfSumBeFormed = (sum, numbers, id, memo) => {
		if (sum in memo) return memo[sum];
		if (sum === 0) return true;
		if (sum < 0) return false;

		for (let i = id; i < numbers.length; i++) {
			const diff = sum - numbers[i];

			if (canHalfSumBeFormed(diff, numbers, i + 1, memo)) {
				memo[sum] = true;
				return true;
			}
		}
		memo[sum] = false;
		return false;
	};

	return canHalfSumBeFormed(halfSum, nums, 0, {});
};
