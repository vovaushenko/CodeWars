const countNodes = (root) => {
	let count = 0;

	const traverse = (node) => {
		if (!node) return;
		count++;

		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	};

	traverse(root);
	return count;
};
