//https://www.algoexpert.io/questions/Find%20Closest%20Value%20In%20BST

// AVG: Time = O(log(N)), N - number of nodes
// worst case  - O(N)

const findClosestValueInBst = (tree, target) => {
	let diff = Infinity;
	let closest = Infinity;
	const traverse = (node) => {
		if (node.value === target) {
			return (closest = node.value);
		}
		const currentDiff = Math.abs(node.value - target);
		if (currentDiff < diff) {
			diff = currentDiff;
			closest = node.value;
		}

		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(tree);
	return closest;
};
