// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/

/*
Given an array of positive integers arr,  find a pattern of length m that is repeated k or more times.

A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.*/

const containsPattern = (arr, m, k) => {
	if (m * k > arr.length) return false;
	let nums = arr.join('');

	for (let i = 0; i < nums.length; i++) {
		let currentChunk = nums.slice(i, i + m);
		let possiblePattern = nums.slice(i, i + currentChunk.length * k);
		if (currentChunk.repeat(k) === possiblePattern) return true;
		if (possiblePattern.length < currentChunk.length * k) return false;
	}
};
