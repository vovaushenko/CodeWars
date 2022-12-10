//1339. Maximum Product of Splitted Binary Tree

/*
Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.

Note that you need to maximize the answer before taking the mod and not after taking it.
*/
const getTreeValuesSum = (root) => {
	let sum = 0;
	const queue = [root];

	while (queue.length) {
		const node = queue.pop();
		sum += node.val;
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}

	return sum;
};

const maxProduct = (root) => {
	const total = getTreeValuesSum(root);
	let max = Number.MIN_SAFE_INTEGER;
	const MOD = 1e9 + 7;

	dfs(root);

	return max % MOD;

	function dfs(node) {
		if (node == null) return 0;

		const left = dfs(node.left);
		const right = dfs(node.right);

		const sum = (node.val + left + right) % MOD;

		const prod = (total - sum) * sum;
		max = Math.max(prod, max);

		return sum;
	}
};
