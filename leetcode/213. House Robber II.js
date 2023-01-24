// 213. House Robber II
const rob = (nums) => {
	if (!nums || nums.length == 0) return 0;

	const n = nums.length;
	if (n == 1) return nums[0];

	return Math.max(robHomes(1, n - 1), robHomes(0, n - 2));

	function robHomes(start, end) {
		const len = end - start + 1;
		const dp = [0, 0];

		for (let i = 0, j = 2; i < len; i++, j++) {
			const num = nums[start + i];
			dp[j] = Math.max(num + dp[j - 2], dp[j - 1]);
		}

		return dp[dp.length - 1];
	}
};
