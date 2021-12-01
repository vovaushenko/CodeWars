// 198. House Robber
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

const rob = (nums) => {
	if (nums.length <= 2) return Math.max(...nums);

	let [a, b] = [nums[0], Math.max(nums[1], nums[0])];

	for (let i = 2; i < nums.length; i++) {
		[a, b] = [b, Math.max(a + nums[i], b)];
	}

	return b;
};

const rob2 = ([a, b, ...rest]) => {
	if (!rest.length) return Math.max(a, b);

	let [current, result] = [a, Math.max(a, b)];

	for (let num of rest) {
		[current, result] = [result, Math.max(current + num, result)];
	}
	return result;
};
