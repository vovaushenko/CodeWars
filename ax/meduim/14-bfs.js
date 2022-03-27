class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	breadthFirstSearch() {
		const queue = [this];
		const values = [];

		while (queue.length) {
			const node = queue.pop();
			values.push(node.name);
			for (const child of node.children) {
				queue.shift(child);
			}
		}
		return values;
	}
}
