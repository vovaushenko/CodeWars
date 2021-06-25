// https://leetcode.com/problems/combinations/
// 77. Combinations
/*
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
*/

const combine = (n, k) => {
	let res = [];
	let dfs = (combination, start) => {
		if (combination.length === k) {
			res.push(combination);
			return;
		}

		for (let i = start; i <= n; i++) {
			dfs([...combination, i], i + 1);
		}
	};

	dfs([], 1);
	console.log(res);
	return res;
};
