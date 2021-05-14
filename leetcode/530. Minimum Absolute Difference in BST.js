// 530. Minimum Absolute Difference in BST

/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const getMinimumDifference = (root) => {
	const values = [];

	(function traverseTree(node) {
		if (!node) return;
		values.push(node.val);
		if (node.left) traverseTree(node.left);
		if (node.right) traverseTree(node.right);
	})(root);

	return findMinDiff(values);
};

const findMinDiff = (arr) => {
	arr.sort((a, b) => a - b);
	let [i, j] = [0, 1];
	let minDiff = Infinity;

	while (j < arr.length) {
		minDiff = Math.min(minDiff, arr[j] - arr[i]);
		i++;
		j++;
	}

	return minDiff;
};
