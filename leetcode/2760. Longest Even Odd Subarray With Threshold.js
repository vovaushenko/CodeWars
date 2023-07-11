/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

const isEvenOdd = (arr, t) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > t) return false;
		if (i % 2 === 0) {
			if (arr[i] % 2 !== 0) return false;
		} else {
			if (arr[i] % 2 === 0) return false;
		}
	}

	return true;
};

var longestAlternatingSubarray = function (nums, threshold) {
	let longest = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j <= nums.length; j++) {
			const subarr = nums.slice(i, j);
			if (isEvenOdd(subarr, threshold))
				longest = Math.max(longest, subarr.length);
		}
	}

	return longest;
};
