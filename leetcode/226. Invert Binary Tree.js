// 226. Invert Binary Tree

/*
Given the root of a binary tree, invert the tree, and return its root.
*/

const invertTree = (root) => {
	if (root) {
		[root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
	}
	return root;
};
