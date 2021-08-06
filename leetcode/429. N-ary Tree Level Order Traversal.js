// 429. N-ary Tree Level Order Traversal

/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/

const levelOrder = (root) => {
	if (!root) return [];
	const res = [];

	let queue = [root];

	while (queue.length > 0) {
		let level = [];
		const nextLevel = [];
		for (let node of queue) {
			if (node !== null) {
				level.push(node.val);

				for (let child of node.children) {
					nextLevel.push(child);
				}
			}
		}

		res.push(level);
		level = [];
		queue = nextLevel;
	}

	return res;
};
