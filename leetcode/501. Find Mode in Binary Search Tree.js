// https://leetcode.com/problems/find-mode-in-binary-search-tree/
/*
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
*/
const findMode = (root) => {
	if (!root || !root.val) return [0];
	const nodeFrequencies = {};
	const traverse = (node) => {
		if (!node) return;
		nodeFrequencies[node.val]
			? nodeFrequencies[node.val]++
			: (nodeFrequencies[node.val] = 1);

		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};
	traverse(root);
	const maxFr = Math.max(...Object.values(nodeFrequencies));

	const modes = [];

	const traverseAndGet = (node) => {
		if (!node) return;
		if (nodeFrequencies[node.val] === maxFr) modes.push(node.val);

		node.left && traverseAndGet(node.left);
		node.right && traverseAndGet(node.right);
	};

	traverseAndGet(root);

	return [...new Set(modes)];
};
