// 515. Find Largest Value in Each Tree Row
/*
Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
*/

const largestValues = (root) => {
	const levels = {};

	const traverse = (node, currentLevel) => {
		if (!node) return;

		levels[currentLevel] !== undefined
			? (levels[currentLevel] = Math.max(levels[currentLevel], node.val))
			: (levels[currentLevel] = node.val);

		node.left && traverse(node.left, currentLevel + 1);
		node.right && traverse(node.right, currentLevel + 1);
	};

	traverse(root, 0);
	return Object.values(levels);
};
