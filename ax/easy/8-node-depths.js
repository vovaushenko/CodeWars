//https://www.algoexpert.io/questions/Node%20Depths
const nodeDepths = (root) => {
	if (!root) return 0;
	let totalDepth = 0;

	const traverse = (node, depth) => {
		totalDepth += depth;
		node.left && traverse(node.left, depth + 1);
		node.right && traverse(node.right, depth + 1);
	};

	traverse(root, 0);
	return totalDepth;
};
