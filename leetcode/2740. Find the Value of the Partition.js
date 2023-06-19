/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
	nums.sort((a, b) => a - b);
	let min = Infinity;
	let [i, j] = [0, 1];
	while (j < nums.length) {
		min = Math.min(min, Math.abs(nums[i] - nums[j]));
		i++;
		j++;
	}
	return min;
};
