// 1026. Maximum Difference Between Node and Ancestor
/*
Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.
*/
const maxAncestorDiff = (root) => {
	let maxDiff = -Infinity;
	const traverse = (node, max, min) => {
		max = Math.max(node.val, max);
		min = Math.min(node.val, min);

		maxDiff = Math.max(maxDiff, max - min);

		node.right && traverse(node.right, max, min);
		node.left && traverse(node.left, max, min);
	};

	traverse(root, root.val, root.val);

	return maxDiff;
};
