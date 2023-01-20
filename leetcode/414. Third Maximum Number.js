// // 414. Third Maximum Number
// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

const thirdMax = (nums) => {
	nums = [...new Set(nums)].sort((a, b) => b - a);

	return nums[2] || nums[2] === 0 ? nums[2] : nums[0];
};

const thirdMax = (nums) => {
	let [first, second, third] = [-Infinity, -Infinity, -Infinity];
	for (const num of nums) {
		if (num === first || num === second || num === third) continue;
		if (num > first) {
			[first, second, third] = [num, first, second];
		} else if (num > second) {
			[second, third] = [num, second];
		} else if (num > third) {
			third = num;
		}
	}

	return third === -Infinity ? first : third;
};
