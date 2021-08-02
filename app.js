// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//* Input: nums = [2,7,11,15], target = 9
// 2  100000

//* num = [1,2,3,4,5,6,7,8,9,10]    9

const twoSum = (nums, target) => {
	const map = nums.reduce((h, c, id) => ((h[c] = id), h), {});

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (diff in map && i !== map[diff]) {
			return [i, map[diff]];
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 4));
//* O(1) O(log) O(N) O(N**2) .....  O(N!)
