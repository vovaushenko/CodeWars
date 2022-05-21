//2270. Number of Ways to Split Array

const waysToSplitArray = (nums) => {
	let total = nums.reduce((a, b) => a + b, 0);

	let count = 0;

	let runningSum = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		runningSum += nums[i];

		total -= nums[i];

		if (runningSum >= total) count++;
	}

	return count;
};
