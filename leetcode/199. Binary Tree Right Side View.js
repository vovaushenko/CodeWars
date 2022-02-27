//199. Binary Tree Right Side View
/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/
const rightSideView = (root) => {
	const values = [];

	const traverse = (node, lvl) => {
		if (!node) return;
		if (!values[lvl]) values.push(node.val);
		node.right && traverse(node.right, lvl + 1);
		node.left && traverse(node.left, lvl + 1);
	};

	traverse(root, 0);

	return values;
};
