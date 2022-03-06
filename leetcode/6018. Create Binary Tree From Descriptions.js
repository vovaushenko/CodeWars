//6018. Create Binary Tree From Descriptions
/*
You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,

If isLefti == 1, then childi is the left child of parenti.
If isLefti == 0, then childi is the right child of parenti.
Construct the binary tree described by descriptions and return its root.

The test cases will be generated such that the binary tree is valid.

 
*/
const createBinaryTree = (desc) => {
	const children = {};
	const nodes = {};

	for (const [parent, child, isLeft] of desc) {
		if (!nodes[parent]) {
			const newNode = new TreeNode(parent);
			nodes[parent] = newNode;
			if (!nodes[child]) {
				if (isLeft) newNode.left = new TreeNode(child);
				if (!isLeft) newNode.right = new TreeNode(child);
			} else {
				if (isLeft) newNode.left = nodes[child];
				if (!isLeft) newNode.right = nodes[child];
			}
		} else {
			if (!nodes[child]) {
				if (isLeft) nodes[parent].left = new TreeNode(child);
				if (!isLeft) nodes[parent].right = new TreeNode(child);
			} else {
				if (isLeft) nodes[parent].left = nodes[child];
				if (!isLeft) nodes[parent].right = nodes[child];
			}
		}

		children[child] = true;
	}
	for (const [parent, child, isLeft] of desc) {
		if (!nodes[parent]) {
			const newNode = new TreeNode(parent);
			nodes[parent] = newNode;
			if (!nodes[child]) {
				if (isLeft) newNode.left = new TreeNode(child);
				if (!isLeft) newNode.right = new TreeNode(child);
			} else {
				if (isLeft) newNode.left = nodes[child];
				if (!isLeft) newNode.right = nodes[child];
			}
		} else {
			if (!nodes[child]) {
				if (isLeft) nodes[parent].left = new TreeNode(child);
				if (!isLeft) nodes[parent].right = new TreeNode(child);
			} else {
				if (isLeft) nodes[parent].left = nodes[child];
				if (!isLeft) nodes[parent].right = nodes[child];
			}
		}
	}

	for (const [parent, _, __] of desc) {
		if (!(parent in children)) return nodes[parent];
	}
};
