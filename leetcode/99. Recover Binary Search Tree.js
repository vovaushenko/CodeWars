// 99. Recover Binary Search Tree
/*
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
*/
const recoverTree = (root) => {
	let prev, first, second;

	const inorderTraverse = (node) => {
		if (!node) return;
		inorderTraverse(node.left);
		if (prev && prev.val > node.val) {
			if (!first) first = prev;
			second = node;
		}
		prev = node;
		inorderTraverse(node.right);
	};

	inorderTraverse(root);

	[first.val, second.val] = [second.val, first.val];
};
