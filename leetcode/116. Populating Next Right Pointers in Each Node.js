//116. Populating Next Right Pointers in Each Node

const connect = (root) => {
	const levels = {};

	const traverse = (node, level) => {
		levels[level] ? levels[level].push(node) : (levels[level] = [node]);

		node.left && traverse(node.left, level + 1);

		node.right && traverse(node.right, level + 1);
	};

	traverse(root, 0);

	const nodes = Object.values(levels);

	for (const level of nodes) {
		for (let i = 0; i < level.length; i++) {
			const currentNode = level[i];

			const nextNode = level[i + 1];

			if (nextNode) currentNode.next = nextNode;
		}
	}
};
