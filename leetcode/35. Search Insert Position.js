// 35. Search Insert Position
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = (nums, target) => {
	let start = 0;
	let end = nums.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (nums[mid] !== target && start < end) {
		if (target < nums[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	if (nums[mid] === target) {
		return mid;
	}

	return target < nums[mid] ? mid : mid + 1;
};
