// 300. Longest Increasing Subsequence

const lengthOfLIS = (nums) => {
	if (!nums.length) return 0;

	let table = Array(nums.length).fill(1);

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) table[i] = Math.max(table[i], table[j] + 1);
		}
	}

	return Math.max(...table);
};
