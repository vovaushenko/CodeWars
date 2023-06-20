/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
	const n = nums.length;
	const prefixSums = new Array(n + 1).fill(0);

	for (let i = 0; i < n; i++) {
		prefixSums[i + 1] = prefixSums[i] + nums[i];
	}

	const result = [];
	for (let i = 0; i < n; i++) {
		if (i >= k && i + k < n) {
			const intervalSum = prefixSums[i + k + 1] - prefixSums[i - k];
			const intervalLength = 2 * k + 1;
			result.push(Math.floor(intervalSum / intervalLength));
		} else {
			result.push(-1);
		}
	}

	return result;
};
