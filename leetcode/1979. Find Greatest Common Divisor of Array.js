// 1979. Find Greatest Common Divisor of Array
/*
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
*/

const findGCD = (nums) => {
	const min = Math.min(...nums);
	const max = Math.max(...nums);
	const gcd = (x, y) => (!y ? x : gcd(y, x % y));
	return gcd(min, max);
};
