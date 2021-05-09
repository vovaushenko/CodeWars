// 1413. Minimum Value to Get Positive Step by Step Sum

/*

Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.

*/

const minStartValue = (nums) => {
	let min = Infinity;
	let tempSum = 0;

	for (num of nums) {
		min = Math.min(min, (tempSum += num));
		console.log(min);
	}

	return min >= 1 ? 1 : -min + 1;
};
