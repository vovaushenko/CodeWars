// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

const maxDepth = (root) => {
	if (!root) return 0;
	let maxDepth = 1;

	const traverse = (node, depth) => {
		if (!node) return;
		maxDepth = Math.max(depth, maxDepth);

		for (let child of node.children) {
			traverse(child, depth + 1);
		}
	};

	traverse(root, 1);
	return maxDepth;
};
