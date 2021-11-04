// https://leetcode.com/problems/shuffle-an-array/

// 384. Shuffle an Array
/*
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
*/

const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);
class Solution {
	constructor(nums) {
		this.original = nums;
		this.shuffled = [...nums];
	}

	reset() {
		return this.original;
	}

	shuffle() {
		for (let i = 0; i < this.shuffled.length; i++) {
			const rndId1 = ~~(Math.random() * this.shuffled.length);
			const rndId2 = ~~(Math.random() * this.shuffled.length);

			swap(this.shuffled, rndId1, rndId2);
		}

		return this.shuffled;
	}
}
