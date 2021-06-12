// https://leetcode.com/problems/contains-duplicate-ii/

/*
219. Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

const containsNearbyDuplicate = (nums, k) => {
	const charFrequencies = [...nums].reduce(
		(h, c) => ((h[c] = h[c] + 1 || 1), h),
		{}
	);

	let duplicates = {};

	for (let i = 0; i < nums.length; i++) {
		if (charFrequencies[nums[i]] > 1) {
			if (!duplicates[nums[i]]) {
				duplicates[nums[i]] = [i];
			} else {
				duplicates[nums[i]].push(i);
			}
		}
	}

	let ids = Object.values(duplicates);

	for (let id of ids) {
		if (validateDistance(id, k)) return true;
	}

	return false;
};

let validateDistance = (ids, k) => {
	let [i, j] = [0, 1];

	while (j < ids.length) {
		let diff = Math.abs(ids[i] - ids[j]);
		if (diff <= k) return true;
		i++;
		j++;
	}

	return false;
};
