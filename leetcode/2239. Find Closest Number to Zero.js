//2239. Find Closest Number to Zero
/*
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.
*/
const findClosestNumber = (nums) => {
	let closest = Infinity;
	for (const num of nums) {
		if (Math.abs(num) < Math.abs(closest)) {
			closest = num;
		}
		if (Math.abs(num) === Math.abs(closest)) {
			if (num > closest) closest = num;
		}
	}

	return closest;
};
