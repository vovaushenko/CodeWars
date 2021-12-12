// 2104. Sum of Subarray Ranges
/*
You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

const subArrayRanges = (nums) => {
	let total = 0;

	for (let i = 0; i < nums.length; i++) {
		let max = nums[i];
		let min = nums[i];
		for (let j = i; j < nums.length; j++) {
			const currentNum = nums[j];
			if (currentNum > max) max = currentNum;
			if (currentNum < min) min = currentNum;
			total += max - min;
		}
	}
	return total;
};
