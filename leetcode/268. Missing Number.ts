function missingNumber(nums: number[]): number {
	const totalSum = (nums.length + 1) * (nums.length / 2);
	return totalSum - nums.reduce((a, b) => a + b, 0);
}
