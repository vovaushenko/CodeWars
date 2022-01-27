//1749. Maximum Absolute Sum of Any Subarray
/*
You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.

*/
const maxAbsoluteSum = (nums) => {
	let [min, max] = [0, 0];
	let [gMin, gMax] = [0, 0];

	for (const num of nums) {
		max = Math.max(num, num + max);
		gMax = Math.max(gMax, max);
		min = Math.min(num, num + min);
		gMin = Math.min(gMin, min);
	}

	return Math.max(gMax, Math.abs(gMin));
};
