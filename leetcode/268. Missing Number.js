//**268. Missing Number**

const missingNumber = (nums) => {
	let total = 0;
	let n = 0;
	while (n <= nums.length) {
		total += n;
		n++;
	}
	return total - nums.reduce((a, b) => a + b, 0);
};
