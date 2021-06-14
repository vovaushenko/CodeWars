class Node {
	val: any;
	right: Node | null;
	left: Node | null;
	constructor(val: any) {
		this.val = val;
		this.right = null;
		this.left = null;
	}
}

class BST {
	root: Node | null;
	constructor() {
		this.root = null;
	}

	insert(val: any) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;
			while (true) {
				if (val < current.val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if (val > current.val) {
					if (current.right === null) {
						current.right = newNode;
					} else {
						current = current.right;
					}
				} else {
					return undefined;
				}
			}
		}
	}
}

let tree = new BST();

tree.insert(14);
tree.insert(9);
tree.insert(2);
tree.insert(11);
tree.insert(18);
tree.insert(16);
tree.insert(777);

console.log(tree);

export {};
