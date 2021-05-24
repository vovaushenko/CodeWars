// https://leetcode.com/problems/max-consecutive-ones/

/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

const findMaxConsecutiveOnes = (nums) =>
	Math.max(
		...nums
			.join('')
			.split('0')
			.map((c) => c.length)
	);
