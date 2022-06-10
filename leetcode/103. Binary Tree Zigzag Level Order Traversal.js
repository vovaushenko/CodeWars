//103. Binary Tree Zigzag Level Order Traversal

const zigzagLevelOrder = (root) => {
	if (!root) return [];

	const levels = {};

	const traverse = (node, level) => {
		levels[level] ? levels[level].push(node.val) : (levels[level] = [node.val]);

		node.left && traverse(node.left, level + 1);

		node.right && traverse(node.right, level + 1);
	};

	traverse(root, 1);

	return Object.values(levels).map((values, id) =>
		id % 2 === 0 ? values.reverse() : values
	);
};
