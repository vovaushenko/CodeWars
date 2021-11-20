// 540. Single Element in a Sorted Array
/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.
*/

const singleNonDuplicate = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		const prev = nums[i - 1];
		const next = nums[i + 1];
		if (prev) {
			if (prev !== nums[i] && next !== nums[i]) return nums[i];
		}
	}
	return nums[0];
};
