const maxSubArray = (nums: number[]): number => {
	let maxSum = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		let tempSum = 0;
		for (let j = i; j < nums.length; j++) {
			tempSum += nums[j];
			maxSum = Math.max(tempSum, maxSum);
		}
	}

	return maxSum;
};

console.log(maxSubArray([]));
