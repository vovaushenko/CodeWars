//1658. Minimum Operations to Reduce X to Zero

const minOperations = (nums, x) => {
	const sum = nums.reduce((acc, n) => acc + n, 0);

	const target = sum - x;

	if (target < 0) return -1;

	if (target === 0) return nums.length;

	let start = 0;

	let runningSum = 0;

	let maxLen = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		runningSum += nums[i];

		while (runningSum > target) runningSum -= nums[start++];

		if (runningSum === target) maxLen = Math.max(maxLen, i - start + 1);
	}

	return maxLen === -Infinity ? -1 : nums.length - maxLen;
};
