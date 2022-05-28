//2099. Find Subsequence of Length K With the Largest Sum

const maxSubsequence = (nums, k) => {
	const subsequence = [...nums].sort((a, b) => b - a).slice(0, k);

	const map = subsequence.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	const result = [];

	for (const num of nums) {
		if (num in map) {
			if (map[num]) {
				result.push(num);

				map[num]--;
			}
		}
	}

	return result;
};
