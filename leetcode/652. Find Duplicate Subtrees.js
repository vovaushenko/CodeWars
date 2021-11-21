// 652. Find Duplicate Subtrees
/*
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

*/
const findDuplicateSubtrees = (root) => {
	const result = [];
	const map = new Map();

	const traverse = (node) => {
		if (!node) return null;
		const subtree = `${node.val}-${traverse(node.left)}-${traverse(
			node.right
		)}`;
		map.set(subtree, (map.get(subtree) || 0) + 1);

		if (map.get(subtree) === 2) {
			result.push(node);
		}

		return subtree;
	};

	traverse(root);

	return result;
};
