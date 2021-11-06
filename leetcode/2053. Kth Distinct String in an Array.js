/*
2053. Kth Distinct String in an Array

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.
*/

const kthDistinct = (arr, k) => {
	const distinct = Object.entries(
		arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {})
	).filter(([_, fr]) => fr === 1);

	if (distinct.length < k) return '';

	return distinct[k - 1][0];
};
