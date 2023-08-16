/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const dq = [];
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		while (nums[i] > dq.at(-1)) dq.pop();
		dq.push(nums[i]);

		if (i >= k - 1) {
			result.push(dq[0]);
			if (nums[i - k + 1] === dq[0]) dq.shift();
		}
	}

	return result;
};
