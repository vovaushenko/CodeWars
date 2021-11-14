// 563. Binary Tree Tilt
/*
Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if there the node does not have a right child.
*/

const getSum = (rootNode) => {
	let sum = 0;
	const traverse = (node) => {
		if (!node) return;
		sum += node.val;
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(rootNode);
	return sum;
};

const findTilt = (root) => {
	let totalTilt = 0;

	const traverse = (node) => {
		if (!node) return;
		let currentTilt = Math.abs(getSum(node.left) - getSum(node.right));
		totalTilt += currentTilt;
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};
	traverse(root);
	return totalTilt;
};
