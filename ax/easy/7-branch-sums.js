//https://www.algoexpert.io/questions/Branch%20Sums
//
const isDeadEnd = (node) => !node.left && !node.right;

const branchSums = (root) => {
	const sums = [];

	const traverse = (node, pathSum) => {
		if (isDeadEnd(node)) {
			sums.push(pathSum + node.value);
			return;
		}
		pathSum += node.value;
		node.left && traverse(node.left, pathSum);
		node.right && traverse(node.right, pathSum);
	};

	traverse(root, 0);

	return sums;
};
