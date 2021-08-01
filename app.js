// https://leetcode.com/problems/path-sum-ii/

const pathSum = (root, targetSum) => {
	const solutions = [];
	const traverse = (node, currentSum, values) => {
		if (!node) return;
		if (node.left === null && node.right === null) {
			values.push(node.val);
			currentSum += node.val;
			console.log(values);
			if (currentSum === targetSum) {
				solutions.push(values);
			}
		}

		if (node.left)
			traverse(node.left, currentSum + node.val, [...values, node.val]);
		if (node.right)
			traverse(node.right, currentSum + node.val, [...values, node.val]);
	};

	traverse(root, 0, []);

	return solutions;
};
