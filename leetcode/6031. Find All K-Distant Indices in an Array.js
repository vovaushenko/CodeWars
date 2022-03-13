//6031. Find All K-Distant Indices in an Array
const findKDistantIndices = (nums, key, k) => {
	if (!nums.includes(key)) return [];
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (nums[j] === key && j - i <= k) {
				res.push(i);
				break;
			}
		}
	}
	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = i; j >= 0; j--) {
			if (nums[j] === key && i - j <= k) {
				if (!res.includes(i)) {
					res.push(i);
				}
				break;
			}
		}
	}

	return res.sort((a, b) => a - b);
};
