//979. Distribute Coins in Binary Tree
/*
You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree.

In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.

Return the minimum number of moves required to make every node have exactly one coin.

*/

const distributeCoins = (root) => {
	let totalMoves = 0;

	const traverse = (node) => {
		if (!node) return 0;

		const left = traverse(node.left);
		const right = traverse(node.right);

		totalMoves += Math.abs(left) + Math.abs(right);

		return left + right + node.val - 1;
	};

	traverse(root);
	return totalMoves;
};
