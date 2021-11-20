// 611. Valid Triangle Number
/*
Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
*/

const isProperTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

const triangleNumber = (nums) => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		const a = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			const b = nums[j];
			for (let k = j + 1; k < nums.length; k++) {
				const c = nums[k];

				if (isProperTriangle(a, b, c)) {
					count++;
				}
			}
		}
	}
	return count;
};
