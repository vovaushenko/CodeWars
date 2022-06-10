//98. Validate Binary Search Tree

const inorderTraversal = (root) => {
	const list = [];

	if (!root) return list;

	const stack = [];

	while (root || stack.length) {
		while (root) {
			stack.push(root);

			root = root.left;
		}

		root = stack.pop();

		list.push(root.val);

		root = root.right;
	}

	return list;
};

const isValidBST = (root) => {
	if (!root) return true;

	const stack = [];

	let pre = null;

	while (root || stack.length) {
		while (root) {
			stack.push(root);

			root = root.left;
		}

		root = stack.pop();

		if (pre && root.val <= pre.val) return false;

		pre = root;

		root = root.right;
	}

	return true;
};
