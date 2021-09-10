// 102. Binary Tree Level Order Traversal
/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/
const levelOrder = (root) => {
	if (!root) return [];
	const result = [];
	const queue = [root];

	while (queue.length) {
		const level = [];
		const levelLength = queue.length;
		for (let i = 0; i < levelLength; i++) {
			const node = queue.shift();
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		result.push(level);
	}
	return result;
};
