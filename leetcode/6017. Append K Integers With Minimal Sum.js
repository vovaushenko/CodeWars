//6017. Append K Integers With Minimal Sum
/*
You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum.

Return the sum of the k integers appended to nums.


*/

//!BRUTE FORCE
const minimalKSum = (nums, k) => {
	const map = nums.reduce((h, c) => ((h[c] = true), h), new Object(null));
	let lacking = 1;
	let res = 0;
	while (k) {
		if (!(lacking in map)) {
			res += lacking;
			lacking++;
			k--;
		} else {
			lacking++;
		}
	}

	return res;
};
