// https://www.algoexpert.io/questions/Depth-first%20Search
class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	depthFirstSearch(array) {
		const traverse = (node) => {
			array.push(node.name);
			for (const child of node.children) traverse(child);
		};

		traverse(this);
		return array;
	}
}
