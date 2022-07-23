//2342. Max Sum of a Pair With Equal Sum of Digits

const digitsSum = (num) =>
	[...String(num)].reduce((sum, digit) => sum + Number(digit), 0);

const maximumSum = (nums) => {
	let maxSum = -1;
	const map = {};

	for (const num of nums) {
		const digitSum = digitsSum(num);
		if (digitSum in map) {
			maxSum = Math.max(maxSum, num + map[digitSum]);
		}
		map[digitSum] = Math.max(num, map[digitSum]) || num;
	}

	return maxSum;
};
