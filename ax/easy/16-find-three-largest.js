// BRUTE FORCE

const findThreeLargestNumbers = (nums) => {
	const largestThree = [nums[0], nums[1], nums[2]].sort((a, b) => b - a);

	for (let i = 3; i < nums.length; i++) {
		const currenNum = nums[i];
		if (currenNum > largestThree[2]) {
			largestThree[2] = currenNum;
			largestThree.sort((a, b) => b - a);
		}
	}

	return largestThree.sort((a, b) => a - b);
};
