// 398. Random Pick Index
/*
Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the array nums.
int pick(int target) Picks a random index i from nums where nums[i] == target. If there are multiple valid i's, then each index should have an equal probability of returning.
*/
class Solution {
	constructor(nums) {
		this.nums = nums;
		this.map = nums.reduce((m, d, id) => {
			!m[d] ? (m[d] = [id]) : m[d].push(id);
			return m;
		}, {});
	}

	pick(target) {
		const ids = this.map[target];
		return ids[~~(Math.random() * ids.length)];
	}
}
