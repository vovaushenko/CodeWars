// 606. Construct String from Binary Tree
/*
Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.
*/

const tree2str = (root) => {
	if (!root) return '';

	const base = root.val;
	const left = tree2str(root.left);
	const right = tree2str(root.right);

	if (!left && !right) return String(base);

	if (!right) return `${base}(${left})`;

	return `${base}(${left})(${right})`;
};
