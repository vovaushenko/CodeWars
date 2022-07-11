//2331. Evaluate Boolean Binary Tree
const evaluateTree = (root) => {
	const traverse = (node) => {
		if (node.val === 1) return true;
		if (node.val === 0) return false;

		if (node.val === 2) return traverse(node.left) || traverse(node.right);
		if (node.val === 3) return traverse(node.left) && traverse(node.right);
	};

	return traverse(root);
};
