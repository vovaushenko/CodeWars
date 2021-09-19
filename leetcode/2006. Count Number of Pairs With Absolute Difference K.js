// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

const countKDifference = (nums, k) => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (Math.abs(nums[j] - nums[i]) === k) count++;
		}
	}

	return count;
};
