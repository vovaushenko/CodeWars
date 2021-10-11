/*
2032. Two Out of Three
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
*/

const twoOutOfThree = (nums1, nums2, nums3) => {
	const lookup = {};

	for (let num of nums1) {
		if (!(num in lookup)) lookup[num] = [1];
	}

	for (let num of nums2) {
		if (!(num in lookup)) {
			lookup[num] = [2];
		} else {
			lookup[num] = [...lookup[num], 2];
		}
	}
	for (let num of nums3) {
		if (num in lookup) lookup[num] = [...lookup[num], 3];
	}

	const res = [];
	for (let key in lookup) {
		if ([...new Set(lookup[key])].length >= 2) res.push(+key);
	}

	return res;
};
