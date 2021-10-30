interface ITreeNode {
	val: number;
	left: null | ITreeNode;
	right: null | ITreeNode;
}

export class TreeNode implements ITreeNode {
	val: number;
	left: null | ITreeNode;
	right: null | ITreeNode;
	constructor(val: number) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

export class BST {
	root: null | ITreeNode;

	constructor() {
		this.root = null;
	}

	push(val: number): void {
		const newNode = new TreeNode(val);
		if (this.root === null) {
			this.root = newNode;
			return;
		} else {
			let current = this.root;
			while (true) {
				if (val < current.val) {
					if (!current.left) {
						current.left = newNode;
						return;
					} else {
						current = current.left;
					}
				} else if (val > current.val) {
					if (!current.right) {
						current.right = newNode;
						return;
					} else {
						current = current.right;
					}
				} else {
					throw new Error('This node already exists');
				}
			}
		}
	}

	dfs(): number[] {
		if (!this.root) return [];
		const values: Array<number> = [];

		const traverse = (node: TreeNode): void => {
			if (!node) return;
			values.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);
		return values;
	}

	bfs(): number[] {
		if (!this.root) return [];
		const values: Array<number> = [];
		const queue: Array<TreeNode> = [this.root];

		while (queue.length) {
			let node = queue.shift();
			if (node) {
				values.push(node.val);
				if (node.left) queue.push(node.left);
				if (node.right) queue.push(node.right);
			}
		}

		return values;
	}
}

const tree = new BST();
tree.push(12);
tree.push(10);
tree.push(11);
tree.push(6);
tree.push(15);
tree.push(13);
tree.push(77);
console.log(tree);

console.log(tree.dfs());
console.log(tree.bfs());
