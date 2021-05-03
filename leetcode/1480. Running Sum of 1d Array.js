// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (nums) => {
	let accumulator = 0;
	for (let i = 0; i < nums.length; i++) {
		accumulator += nums[i];
		nums[i] = accumulator;
	}

	return nums;
};
