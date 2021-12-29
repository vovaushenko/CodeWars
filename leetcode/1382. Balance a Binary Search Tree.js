// 1382. Balance a Binary Search Tree
/*  
Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
*/

const balanceBST = (root) => {
	const inorderTraverse = (node) => {
		if (!node) return [];
		return [
			...inorderTraverse(node.left),
			node.val,
			...inorderTraverse(node.right),
		];
	};

	const sortedValues = inorderTraverse(root);

	const buildBST = (values) => {
		if (!values.length) return null;
		const mid = ~~(values.length / 2);
		const left = values.slice(0, mid);
		const right = values.slice(mid + 1);
		const node = new TreeNode(values[mid]);
		node.left = buildBST(left);
		node.right = buildBST(right);
		return node;
	};
	return buildBST(sortedValues);
};
