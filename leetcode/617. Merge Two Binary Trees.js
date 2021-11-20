const mergeTrees = (root1, root2) => {
	if (!root1 || !root2) {
		return root1 || root2;
	}

	const root = new TreeNode(root1.val + root2.val);

	root.left = mergeTrees(root1.left, root2.left);
	root.right = mergeTrees(root1.right, root2.right);

	return root;
};
