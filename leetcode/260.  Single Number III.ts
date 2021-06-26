/**
 * *260.  Single Number III
 * Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
 */

const singleNumber = (nums: number[]): number[] => {
	const hash = nums.reduce(
		(h, n) => ((h[n] = h[n] + 1 || 1), h),
		{} as Record<string, number>
	);

	const res = Object.entries(hash)
		.filter(([_, fr]) => fr === 1)
		.map((t) => +t[0]);

	return res;
};
