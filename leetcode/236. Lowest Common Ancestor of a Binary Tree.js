//236. Lowest Common Ancestor of a Binary Tree

const lowestCommonAncestor = (root, p, q) => {
	if (!root || root === p || root === q) return root;

	const leftSubtree = lowestCommonAncestor(root.left, p, q);

	const rightSubtree = lowestCommonAncestor(root.right, p, q);

	if (!leftSubtree) return rightSubtree;

	if (!rightSubtree) return leftSubtree;

	return root;
};
