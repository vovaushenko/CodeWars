// https://leetcode.com/problems/two-sum/

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (nums: number[], target: number): number[] => {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i];
		if (map.has(currentNum)) {
			map.get(currentNum).push(i);
		} else {
			map.set(currentNum, [i]);
		}
	}

	for (let j = 0; j < nums.length; j++) {
		let currentNum = nums[j];
		if (map.has(target - currentNum)) {
			let secondNumId = map
				.get(target - currentNum)
				.find((id: number) => id !== j);
			if (secondNumId) return [j, secondNumId];
		}
	}

	return [0, 5];
};
