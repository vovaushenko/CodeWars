// 1457. Pseudo-Palindromic Paths in a Binary Tree
/*
Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.
*/
const isLeafNode = (node) => !node.left && !node.right;

const isPalindromicPath = (path) => {
	path = [...path];
	const pathMap = path.reduce((h, k) => ((h[k] = h[k] + 1 || 1), h), {});
	if (path.length % 2 === 0) {
		return Object.values(pathMap).every((frequecy) => frequecy % 2 === 0);
	} else {
		const frequencies = Object.values(pathMap);

		return (
			frequencies.length - frequencies.filter((fr) => fr % 2 === 0).length === 1
		);
	}
};

const pseudoPalindromicPaths = (root) => {
	let count = 0;

	const traverse = (node, path) => {
		if (isLeafNode(node)) {
			if (isPalindromicPath(path + node.val)) count++;
		}
		node.left && traverse(node.left, path + node.val);
		node.right && traverse(node.right, path + node.val);
	};

	traverse(root, '');
	return count;
};
