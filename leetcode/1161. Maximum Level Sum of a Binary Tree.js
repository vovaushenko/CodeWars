// 1161. Maximum Level Sum of a Binary Tree
/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
*/
const maxLevelSum = (root) => {
	const levels = {};

	const traverse = (node, level) => {
		if (!node) return;
		levels[level] ? levels[level].push(node.val) : (levels[level] = [node.val]);

		node.left && traverse(node.left, level + 1);
		node.right && traverse(node.right, level + 1);
	};

	traverse(root, 1);

	let maxLevelSum = -Infinity;

	for (let key in levels) {
		const levelSum = levels[key].reduce((a, b) => a + b, 0);
		levels[key] = levelSum;
		maxLevelSum = Math.max(levelSum, maxLevelSum);
	}

	const levelsWithMaxSum = [];

	for (let key in levels) {
		if (levels[key] === maxLevelSum) levelsWithMaxSum.push(+key);
	}

	return Math.min(...levelsWithMaxSum);
};
