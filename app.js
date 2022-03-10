'use strict';

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
