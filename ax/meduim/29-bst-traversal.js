// https://www.algoexpert.io/questions/BST%20Traversal

const traverse = ({ root, arr, traverseType }) => {
	const tr = (node) => {
		if (traverseType === 'preOrder') arr.push(node.value);
		node.left && tr(node.left);
		if (traverseType === 'inOrder') arr.push(node.value);
		node.right && tr(node.right);
		if (traverseType === 'postOrder') arr.push(node.value);
	};
	tr(root);
	return arr;
};

const inOrderTraverse = (tree, arr) =>
	traverse({ root: tree, arr, traverseType: 'inOrder' });
const preOrderTraverse = (tree, arr) =>
	traverse({ root: tree, arr, traverseType: 'preOrder' });
const postOrderTraverse = (tree, arr) =>
	traverse({ root: tree, arr, traverseType: 'postOrder' });
