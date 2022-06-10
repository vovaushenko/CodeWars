//107. Binary Tree Level Order Traversal II

const levelOrderBottom = (root) => {
	if (!root) return [];

	const levels = {};

	const traverse = (node, level) => {
		levels[level] ? levels[level].push(node.val) : (levels[level] = [node.val]);

		node.left && traverse(node.left, level + 1);

		node.right && traverse(node.right, level + 1);
	};

	traverse(root, 0);

	const lvls = Object.entries(levels)

		.reverse()

		.map(([_, vals]) => vals);

	return lvls;
};
