//6027. Count Hills and Valleys in an Array
/*
You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

Return the number of hills and valleys in nums.
*/
const isPeak = (x, y, z) => y > x && y > z;
const isValley = (x, y, z) => y < x && y < z;

const countHillValley = (nums) => {
	let hillCount = 0;

	for (let i = 0; i < nums.length; i++) {
		let [j, k] = [i, i];
		while (nums[j] === nums[i] && j > 0) j--;
		while (nums[i] === nums[k] && k < nums.length) k++;

		if (
			nums[i] !== undefined &&
			nums[j] !== undefined &&
			nums[k] !== undefined
		) {
			if (isPeak(nums[j], nums[i], nums[k]) && nums[i] !== nums[i - 1]) {
				hillCount++;
			}
			if (isValley(nums[j], nums[i], nums[k]) && nums[i] !== nums[i - 1]) {
				hillCount++;
			}
		}
	}

	return hillCount;
};
