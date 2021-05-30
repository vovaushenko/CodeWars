// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

// 1287. Element Appearing More Than 25% In Sorted Array

/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
*/

const findSpecialInteger = (arr) => {
	let map = {};

	for (let num of arr) {
		map[num] ? map[num]++ : (map[num] = 1);

		if (map[num] / arr.length > 0.25) return num;
	}
};
