//220. Contains Duplicate III
/*
Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
*/

// === BRUTE FORCE ===
const containsNearbyAlmostDuplicate = (nums, k, t) => {
	const map = nums.reduce(
		(h, c, id) => (h[c] ? h[c].push(id) : (h[c] = [id]), h),
		{}
	);
	const distinct = [...new Set(nums)];

	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		for (const complement of distinct) {
			if (Math.abs(complement - currentNum) <= t) {
				const complementIds = map[complement];
				for (const id of complementIds) {
					if (id !== i && Math.abs(id - i) <= k) return true;
				}
			}
		}
	}

	return false;
};
