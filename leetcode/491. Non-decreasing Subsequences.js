// 491. Non-decreasing Subsequences
/*

Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.
*/
const findSubsequences = (nums) => {
	const result = [];
	const dfs = (start, current) => {
		current.length >= 2 && result.push(current);
		const hash = new Set();

		for (let index = start; index < nums.length; index++) {
			const num = nums[index];
			const isIncrease = current[current.length - 1] <= num;
			if ((current.length && !isIncrease) || hash.has(num)) continue;

			hash.add(num);
			dfs(index + 1, [...current, num]);
		}
	};

	dfs(0, []);
	return result;
};
