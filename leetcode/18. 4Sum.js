/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.


*/

// BRUTE FORCE
var fourSum = function (nums, target) {
	const quadruples = [];
	const tracked = new Map();

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				for (let l = k + 1; l < nums.length; l++) {
					if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
						const key = [nums[i], nums[j], nums[k], nums[l]]
							.sort((a, b) => a - b)
							.join('*');
						if (!tracked.has(key)) {
							quadruples.push([nums[i], nums[j], nums[k], nums[l]]);
							tracked.set(key, true);
						}
					}
				}
			}
		}
	}
	return quadruples;
};
