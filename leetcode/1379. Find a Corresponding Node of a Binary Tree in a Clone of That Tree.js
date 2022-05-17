// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree

const getTargetCopy = (original, cloned, target) => {
	let foundNode = null;

	const traverse = (node) => {
		if (node.val === target.val) return (foundNode = node);

		node.left && traverse(node.left);

		node.right && traverse(node.right);
	};

	traverse(cloned);

	return foundNode;
};
