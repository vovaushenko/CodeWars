// https://leetcode.com/problems/max-consecutive-ones/

/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

const findMaxConsecutiveOnes = (nums) =>
	Math.max(
		...nums
			.join('')
			.split('0')
			.map((c) => c.length)
	);

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

// let [i, j] = [0, 1];
// while (j < nums.length) {
//   i++;
//   j++;
// }
