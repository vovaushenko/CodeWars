// https://leetcode.com/problems/check-completeness-of-a-binary-tree/

/*
958. Check Completeness of a Binary Tree

Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/

const isCompleteTree = (root) => {
	const queue = [root];
	let visitedNull = false;

	while (queue.length) {
		let nextLevel = [];

		for (let node of queue) {
			if (!node) {
				visitedNull = true;
			} else {
				if (visitedNull) return false;
				nextLevel.push(node.left);
				nextLevel.push(node.right);
			}
		}

		queue = nextLevel;
	}
};
