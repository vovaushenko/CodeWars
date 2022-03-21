//2206. Divide Array Into Equal Pairs
/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.
*/

const isEven = (v) => v % 2 === 0;

const divideArray = (nums) => {
	const frequencies = nums.reduce(
		(h, c) => ((h[c] = h[c] + 1 || 1), h),
		new Object(null)
	);
	return Object.values(frequencies).every(isEven);
};
