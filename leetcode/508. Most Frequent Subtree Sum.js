// 508. Most Frequent Subtree Sum
/*
Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
*/

const getTreeSum = (rootNode) => {
	let sum = 0;

	const traverse = (node) => {
		if (!node) return;
		sum += node.val;
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(rootNode);

	return sum;
};

const getMostFrequentSum = (sums) => {
	const frequencyMap = sums.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
	const maxFrequency = Math.max(...Object.values(frequencyMap));
	return Object.entries(frequencyMap).reduce(
		(res, [num, fr]) => (fr === maxFrequency && res.push(Number(num)), res),
		[]
	);
};

const findFrequentTreeSum = (root) => {
	const sums = [];

	const traverse = (node) => {
		if (!node) return;
		sums.push(getTreeSum(node));

		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(root);

	return getMostFrequentSum(sums);
};
