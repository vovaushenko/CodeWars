// https://leetcode.com/problems/binary-tree-paths/

//257. Binary Tree Paths

/*
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.
*/

const binaryTreePaths = (root) => {
	const allPaths = [];

	const traverse = (node, path) => {
		if (!node.left && !node.right) {
			path.push(node.val);
			allPaths.push(path.join('->'));
		}

		if (node.left) traverse(node.left, [...path, node.val]);
		if (node.right) traverse(node.right, [...path, node.val]);
	};

	traverse(root, []);
	return allPaths;
};
