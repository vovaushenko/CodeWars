//701. Insert into a Binary Search Tree
/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
*/
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

const insertIntoBST = (root, val) => {
	if (!root) return new TreeNode(val, null, null);
	const values = [val];
	const traverse = (node) => {
		values.push(node.val);
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(root);
	values.sort((a, b) => a - b);

	return buildBST(values);
};
