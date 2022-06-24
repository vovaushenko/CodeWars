//623. Add One Row to Tree
const addOneRow = (root, v, d) => {
	const traverse = (node, depth, direction) => {
		if (!node) return null;
		if (depth === d) {
			return direction === 'L'
				? new TreeNode(v, node, null)
				: new TreeNode(v, null, node);
		}
		node.left = traverse(node.left, depth + 1, 'L');
		node.right = traverse(node.right, depth + 1, 'R');
		return node;
	};

	return traverse(root, 1, 'L');
};
