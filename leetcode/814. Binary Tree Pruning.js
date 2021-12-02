//814. Binary Tree Pruning
/*
Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

A subtree of a node node is node plus every node that is a descendant of node.
*/

const pruneTree = (root) => {
	if (root) {
		if (!root.left && !root.right && root.val === 0) {
			return null;
		} else {
			root.left = pruneTree(root.left);
			root.right = pruneTree(root.right);
			if (!root.left && !root.right && root.val === 0) {
				return null;
			}
		}
	}
	return root;
};
