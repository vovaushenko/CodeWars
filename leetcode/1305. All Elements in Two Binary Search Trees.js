// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

const getAllTreeValues = (root) => {
	const values = [];

	const traverse = (node) => {
		if (!node) return;
		values.push(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	};

	traverse(root);

	return values;
};

const getAllElements = (root1, root2) =>
	[...getAllElements(root1), ...getAllElements(root2)].sort((a, b) => a - b);
