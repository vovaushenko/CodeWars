//2341. Maximum Number of Pairs in Array
const numberOfPairs = (nums) => {
	const map = nums.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	return Object.values(map).reduce(
		(res, freq) => {
			if (freq % 2 === 0) {
				res[0] += freq / 2;
			} else {
				res[0] += (freq - 1) / 2;
				res[1]++;
			}
			return res;
		},
		[0, 0]
	);
};
