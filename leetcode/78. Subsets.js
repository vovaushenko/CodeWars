// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

const subsets = (nums) => {
	let res = [];

	const dfs = (current, id) => {
		res.push(current);
		for (let i = id; i < nums.length; i++) {
			dfs([...current, nums[i]], i + 1);
		}
	};
	dfs([], 0);
	return result;
};
