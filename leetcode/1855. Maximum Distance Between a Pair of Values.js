//1855. Maximum Distance Between a Pair of Values
/*
You are given two non-increasing 0-indexed integer arrays nums1​​​​​​ and nums2​​​​​​.

A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length, is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i​​​​.

Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.

An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.
*/
const maxDistance = (nums1, nums2) => {
	let maxDist = 0;
	let [size1, size2] = [nums1.length, nums2.length];
	let [i, j] = [0, 0];

	while (i < size1 && j < size2) {
		if (nums1[i] <= nums2[j]) {
			if (j - i > maxDist) {
				maxDist = j - i;
			}
			j++;
		} else {
			i++;
		}
	}

	return maxDist;
};
