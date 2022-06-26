//1423. Maximum Points You Can Obtain from Cards
const maxScore = (nums, k) => {
	const n = nums.length;

	const diff = n - k;

	for (let i = 1; i < n; i++) {
		nums[i] += nums[i - 1];
	}

	let dmg = nums[diff - 1];

	for (let i = 0; i + diff < n; i++) {
		dmg = Math.min(nums[i + diff] - nums[i], dmg);
	}

	return diff ? nums[n - 1] - dmg : nums[i - 1];
};
