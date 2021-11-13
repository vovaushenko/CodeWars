class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}

const removeElements = (head, val) => {
	let current = head;
	let newList = new SLL();

	const traverse = (node) => {
		if (!node) return;

		if (node.val !== val) newList.push(node.val);

		if (node.next) traverse(node.next);
	};
	traverse(head);
	return newList.head;
};

const removeElements = (head, val) => {
	var current = head;
	var previous = null;

	while (current) {
		if (current.val === val) {
			if (previous) {
				previous.next = current.next;
			} else {
				head = current.next;
			}
		} else {
			previous = current;
		}

		current = current.next;
	}

	return head;
};
