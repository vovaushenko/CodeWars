export {};

class BSTNode {
	val: number;
	left: null | BSTNode;
	right: null | BSTNode;

	constructor(val: number) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BST {
	root: null | BSTNode;
	constructor() {
		this.root = null;
	}

	push(val: number) {
		let newNode = new BSTNode(val);
		if (!this.root) {
			this.root = newNode;
			return;
		} else {
			let currentNode = this.root;
			while (true) {
				if (val < currentNode.val) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return;
					} else {
						currentNode = currentNode.left;
					}
				} else if (val > currentNode.val) {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return;
					} else {
						currentNode = currentNode.right;
					}
				} else {
					return undefined;
				}
			}
		}
	}

	dfs(): number[] {
		const values: number[] = [];

		const traverse = (node: BSTNode | null) => {
			if (!node) return;
			values.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);
		return values;
	}

	bfs(): number[] {
		const values: number[] = [];

		const queue = [this.root];

		while (queue.length) {
			let currentNode = queue.shift();
			values.push(currentNode?.val!);
			if (currentNode?.left) queue.push(currentNode.left);
			if (currentNode?.right) queue.push(currentNode.right);
		}

		return values;
	}
}

let tree = new BST();

tree.push(13);
tree.push(9);
tree.push(23);
tree.push(7);
tree.push(11);
tree.push(17);
tree.push(77);
console.log(tree);
console.log(tree.dfs());
console.log(tree.bfs());

//            13
//        9        23
//     7   11   17    77
//
