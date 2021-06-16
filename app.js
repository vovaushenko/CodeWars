// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/

const containsPattern = (arr, m, k) => {
	if (m * k > arr.length) return false;
	let nums = arr.join('');

	for (let i = 0; i < nums.length; i++) {
		let currentChunk = nums.slice(i, i + m);
		let possiblePattern = nums.slice(i, i + currentChunk.length * k);
		if (currentChunk.repeat(k) === possiblePattern) return true;
		if (possiblePattern.length < currentChunk.length * k) return false;
	}

	return false;
};

console.log(containsPattern([1, 2, 1, 2, 1, 3], 2, 3));
