/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
	const minId = nums.indexOf(1);
	const maxId = nums.indexOf(nums.length);
	const joker = minId > maxId ? 1 : 0;
	return minId - 0 + nums.length - 1 - maxId - joker;
};
