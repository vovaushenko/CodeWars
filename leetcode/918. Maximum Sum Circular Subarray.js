//918. Maximum Sum Circular Subarray
/*
Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
*/

// Brute force

var maxSubarraySumCircular = function (nums) {
	const extended = [...nums, ...nums];

	let max = -Infinity;

	for (let i = 0; i < extended.length; i++) {
		let runningSum = 0;
		for (let j = i; j < i + nums.length; j++) {
			runningSum += extended[j] || 0;
			max = Math.max(runningSum, max);
		}
	}

	return max;
};

var maxSubarraySumCircular2 = function (nums) {
	const extended = [...nums, ...nums];

	let max = -Infinity;

	for (let i = 0; i < extended.length; i++) {
		let runningSum = 0;
		for (let j = i; j < i + nums.length; j++) {
			runningSum += extended[j] || 0;
			max = Math.max(runningSum, max);
		}
	}

	return max;
};

var maxSubarraySumCircular = function (A) {
	let maxSum, max, minSum, min, total;
	maxSum = max = minSum = min = total = A[0];

	for (let i = 1; i < A.length; i++) {
		const n = A[i];
		max = Math.max(n, n + max);
		maxSum = Math.max(max, maxSum);
		min = Math.min(n, n + min);
		minSum = Math.min(min, minSum);
		total += n;
	}
	return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};

console.log(maxSubarraySumCircular2([3])); // 3
