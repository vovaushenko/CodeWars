/*
112. Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

const hasPathSum = (root, sum) => {
	let traverse = (node, tempSum) => {
		if (!node) return false;
		tempSum += node.val;

		if (node.left === null && node.right === null) {
			return tempSum === sum;
		}

		return traverse(node.left, tempSum) || traverse(node.right, tempSum);
	};

	return traverse(root, 0);
};
