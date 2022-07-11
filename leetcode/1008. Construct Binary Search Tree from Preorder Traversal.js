//1008. Construct Binary Search Tree from Preorder Traversal
const insertNode = (root, val) => {
	if (!root) return new TreeNode(val);

	if (val < root.val) {
		root.left = insertNode(root.left, val);
	} else {
		root.right = insertNode(root.right, val);
	}

	return root;
};

const bstFromPreorder = (preorder) => {
	if (!preorder.length) return null;
	if (preorder.length === 1) return new TreeNode(preorder[0]);

	const root = new TreeNode(preorder[0]);
	for (let i = 1; i < preorder.length; i++) insertNode(root, preorder[i]);
	return root;
};
