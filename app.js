// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

// 1437. Check If All 1's Are at Least Length K Places Away
/*
Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.
*/

const kLengthApart = (nums, kLen) => {
	let ids = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) ids.push(i);
	}

	let [j, k] = [0, 1];
	console.log(ids);

	while (k < ids.length) {
		if (ids[k] - ids[j] < kLen + 1) return false;
		j++;
		k++;
	}
	return true;
};

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
