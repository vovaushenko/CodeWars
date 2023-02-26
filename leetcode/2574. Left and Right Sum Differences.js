// 2574. Left and Right Sum Differences
const leftRigthDifference = (nums) => {
	const rightSum = [];
	const leftSum = [];

	for (let i = 0; i < nums.length; i++) {
		rightSum.push(nums.filter((_, id) => id > i).reduce((a, b) => a + b, 0));
		leftSum.push(nums.filter((_, id) => id < i).reduce((a, b) => a + b, 0));
	}

	return rightSum.map((v, id) => Math.abs(v - leftSum[id]));
};
