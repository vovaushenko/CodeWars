// 354. Russian Doll Envelopes

const maxEnvelopes = (envelopes) => {
	envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

	return lis(envelopes.map((e) => e[1]));
};

function lengthOfLIS(nums) {
	let n = nums.length;

	if (!n) return 0;

	let len = 1;

	let dp = [nums[0]];

	for (let i = 1; i < n; i++) {
		if (dp[len - 1] < nums[i]) {
			dp[len++] = nums[i];
		} else {
			let left = 0,
				right = len - 1,
				num = nums[i];

			while (left < right) {
				let mid = left + Math.floor((right - left) / 2);

				if (dp[mid] < num) left = mid + 1;
				else right = mid;
			}

			dp[right] = num;
		}
	}

	return len;
}
