// https://leetcode.com/problems/degree-of-an-array/

// 697. Degree of an Array
/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
*/

const findShortestSubArray = (arr) => {
	const hash = arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
	let maxFrequency = Math.max(...Object.values(hash));
	let coordinates = {};

	for (let i = 0; i < arr.length; i++) {
		if (hash[arr[i]] === maxFrequency) {
			if (!coordinates[arr[i]]) {
				coordinates[arr[i]] = [i];
			} else {
				coordinates[arr[i]].push(i);
			}
		}
	}

	let lengths = Object.values(coordinates).map(
		(coords) => coords[coords.length - 1] - coords[0] + 1
	);
	return Math.min(...lengths);
};
