//  https://www.algoexpert.io/questions/Bubble%20Sort

const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

const bubbleSort = (nums) => {
	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (nums[j] > nums[j + 1]) swap(nums, j, j + 1);
		}
	}
	return nums;
};
