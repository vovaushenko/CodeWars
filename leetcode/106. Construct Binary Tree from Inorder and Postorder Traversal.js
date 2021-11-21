const buildTree = (inorder, postorder) => {
	const builder = (values) => {
		if (!values.length) return null;
		const val = postorder.pop();
		const id = values.indexOf(val);
		const newNode = new TreeNode(val);

		newNode.right = builder(values.slice(id + 1));
		newNode.left = builder(values.slice(0, id));
		return newNode;
	};

	return builder(inorder);
};
