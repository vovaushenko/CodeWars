const invertTree = (root) => {
	if (root) {
		[root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
	}
	return root;
};
