/*
897. Increasing Order Search Tree

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
*/
const sortedTreeValues = (root) => {
	const values = [];
	const q = [root];
	while (q.length) {
		const node = q.pop();
		values.push(node.val);
		if (node.left) q.push(node.left);
		if (node.right) q.push(node.right);
	}
	return values.sort((a, b) => a - b);
};

const increasingBST2 = (root) => {
	const sortedValues = sortedTreeValues(root);
	const nodes = sortedValues.map((val) => new TreeNode(val));
	let [slow, fast] = [0, 1];
	while (fast < nodes.length) {
		nodes[slow].right = nodes[fast];
		slow++;
		fast++;
	}
	return nodes[0];
};

//  ===== OLD =====

const increasingBST = (root) => {
	const values = [];

	const DFS = (node) => {
		if (!node) return;
		values.push(node.val);
		if (node.left) DFS(node.left);
		if (node.right) DFS(node.right);
	};
	DFS(root);
	values.sort((a, b) => b - a);
	let tree = new BST();
	for (let val of values) {
		tree.insert(val);
	}

	return tree.root;
};

class Node {
	constructor(val) {
		this.left = null;
		this.right = null;
		this.val = val;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);

		if (!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;
			while (true) {
				if (val < current.val) {
					if (!current.left) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else {
					if (!current.right) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
}
