// 1302. Deepest Leaves Sum

/*
  Given the root of a binary tree, return the sum of values of its deepest leaves.
*/
// https://leetcode.com/problems/deepest-leaves-sum/

const treeMaxDepth = (root) => {
	let maxDepth = 0;

	const traverse = (node, depth) => {
		if (!node) return;
		maxDepth = Math.max(depth, maxDepth);

		node.left && traverse(node.left, depth + 1);
		node.right && traverse(node.right, depth + 1);
	};

	traverse(root, 1);

	return maxDepth;
};

const deepestLeavesSum = (root) => {
	const maxDepth = treeMaxDepth(root);
	let sum = 0;

	const traverse = (node, depth) => {
		if (!node) return;
		if (depth === maxDepth) sum += node.val;

		node.left && traverse(node.left, depth + 1);
		node.right && traverse(node.right, depth + 1);
	};

	traverse(root, 1);
	return sum;
};
