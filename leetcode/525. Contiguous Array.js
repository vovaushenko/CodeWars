//525. Contiguous Array
/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
*/
const findMaxLength = (nums) => {
	const map = { 0: -1 };
	let [count, max] = [0, 0];

	for (let i = 0; i < nums.length; i++) {
		nums[i] === 0 ? count-- : count++;

		map[count] != null
			? (max = Math.max(max, i - map[count]))
			: (map[count] = i);
	}
	return max;
};
