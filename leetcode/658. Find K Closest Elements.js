// https://leetcode.com/problems/find-k-closest-elements/

/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
*/

/**
 *@BRUTE FORCE
 */

const findClosestElements = (arr, k, x) => {
	const transformed = arr
		.reduce((acc, num) => [...acc, [Math.abs(x - num), num]], [])
		.sort((a, b) => a[0] - b[0])
		.slice(0, k)
		.map((n) => n[1])
		.sort((a, b) => a - b);

	return transformed;
};
