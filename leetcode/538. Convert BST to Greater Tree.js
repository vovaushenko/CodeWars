//538. Convert BST to Greater Tree
/*
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

// == BRUTE FORCE ==
'use strict';

const getTreeValues = (root) => {
	const values = [];

	const traverse = (node) => {
		if (!node) return;
		values.push(node.val);
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(root);

	return values;
};

const convertBST = (root) => {
	const values = getTreeValues(root);

	const traverseAndUpdate = (node) => {
		if (!node) return;
		node.val = values
			.filter((value) => value >= node.val)
			.reduce((a, b) => a + b, 0);
		node.left && traverseAndUpdate(node.left);
		node.right && traverseAndUpdate(node.right);
	};

	traverseAndUpdate(root);
	return root;
};
