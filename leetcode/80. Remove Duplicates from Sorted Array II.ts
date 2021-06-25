// 80. Remove Duplicates from Sorted Array II
/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Ju
*/

export type Cache = Record<string, number>;

export function removeDuplicates(nums: number[]): number {
	let hash: Cache = nums.reduce(
		(h, c) => ((h[c] = h[c] + 1 || 1), h),
		{} as Cache
	);

	for (let i = nums.length - 1; i >= 0; i--) {
		let currentNum = nums[i];
		if (hash[currentNum] > 2) {
			hash[currentNum]--;
			nums.splice(i, 1);
		}
	}

	return nums.length;
}

removeDuplicates([1, 1, 1, 2, 2, 3]);
