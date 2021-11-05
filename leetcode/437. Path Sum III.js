// 437. Path Sum III
/*
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
*/

const pathSum = (root, targetSum) => {
	if (!root) return 0;

	let sumHelper = (root, pre) => {
		if (!root) return 0;
		let total = pre + root.val;
		return (
			(total === targetSum) +
			sumHelper(root.left, total, targetSum) +
			sumHelper(root.right, total, targetSum)
		);
	};

	return (
		sumHelper(root, 0, targetSum) +
		pathSum(root.left, targetSum) +
		pathSum(root.right, targetSum)
	);
};
