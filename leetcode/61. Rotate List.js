// https://leetcode.com/problems/rotate-list/

/*
Given the head of a linked list, rotate the list to the right by k places.
*/

const rotateRight = (head, k) => {
	let values = [];

	const dfs = (node) => {
		if (!node) return;
		values.push(node.val);
		if (node.next) dfs(node.next);
	};

	dfs(head);

	let rotated = rotate(values, k);

	let list = new SLL();

	for (let val of rotated) list.push(val);

	return list.head;
};

let rotate = (values, k) => {
	if (!values.length) return values;
	let rotationNum = k % values.length;
	let counter = 0;
	while (counter !== rotationNum) {
		values.unshift(values.pop());
		counter++;
	}

	return values;
};

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	push(val) {
		let node = new ListNode(val);
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}
}
