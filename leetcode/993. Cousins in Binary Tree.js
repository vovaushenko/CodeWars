// 993. Cousins in Binary Tree
/*
Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.
*/
const isCousins = (root, x, y) => {
	const res = [];
	const traverse = (node, depth, parent) => {
		if (node.val === x || node.val === y) {
			res.push({ parent, depth });
		}

		node.left && traverse(node.left, depth + 1, node.val);
		node.right && traverse(node.right, depth + 1, node.val);
	};
	traverse(root, 0, root.val);
	if (res.length < 2) return false;
	return res[0].depth === res[1].depth && res[0].parent !== res[1].parent;
};
