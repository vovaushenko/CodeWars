// 454. 4Sum II
/*
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
*/

const generateSumMap = (arr1, arr2) => {
	const map = {};
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr1.length; j++) {
			const sum = arr1[i] + arr2[j];
			map[sum] ? map[sum]++ : (map[sum] = 1);
		}
	}

	return map;
};

const fourSumCount = (nums1, nums2, nums3, nums4) => {
	const sumsOfLastTwo = generateSumMap(nums3, nums4);
	let count = 0;

	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums1.length; j++) {
			const sum = nums1[i] + nums2[j];
			const complement = 0 - sum;

			if (complement in sumsOfLastTwo) count += sumsOfLastTwo[complement];
		}
	}

	return count;
};
