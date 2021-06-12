// https://leetcode.com/problems/contains-duplicate-ii/

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

console.log(containsNearbyDuplicate([1, 2, 3, 1], 2));
