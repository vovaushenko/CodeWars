// https://leetcode.com/problems/combinations/

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
