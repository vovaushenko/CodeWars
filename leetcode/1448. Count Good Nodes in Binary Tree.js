// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// 1448. Count Good Nodes in Binary Tree
/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
*/

const goodNodes = (root) => {
	let count = 0;
	let maxVal = -Infinity;

	const traverse = (node, maxVal) => {
		if (!node) return;

		if (node.val >= maxVal) {
			maxVal = node.val;
			count++;
		}

		traverse(node.left, maxVal);
		traverse(node.right, maxVal);
	};

	traverse(root, maxVal);
	return count;
};
