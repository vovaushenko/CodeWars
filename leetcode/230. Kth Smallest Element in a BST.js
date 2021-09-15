// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallest = (root, k) => {
	const values = [];
	const traverse = (node) => {
		if (!node) return;
		values.push(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	};

	traverse(root);
	return values.sort((a, b) => a - b)[k - 1];
};
