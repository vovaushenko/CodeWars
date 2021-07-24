// https://leetcode.com/problems/reverse-nodes-in-k-group/

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	push(val) {
		let newNode = new ListNode(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}

const reverseKGroup = (head, k) => {
	const values = [];

	while (head) {
		values.push(head.val);
		head = head.next;
	}

	const res = [];
	let chunk = [];

	for (let i = 0; i < values.length; i++) {
		chunk.push(values[i]);

		if (chunk.length === k) {
			res.push(...chunk.reverse());
			chunk = [];
		}

		if (i === values.length - 1) {
			if (chunk.length > 0) res.push(...chunk);
		}
	}

	let list = new SLL();

	for (let val of res) list.push(val);

	return list.head;
};
// https://leetcode.com/problems/reverse-nodes-in-k-group/
//*25. Reverse Nodes in k-Group
/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
*/

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	push(val) {
		let newNode = new ListNode(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}

const reverseKGroup = (head, k) => {
	const values = [];

	while (head) {
		values.push(head.val);
		head = head.next;
	}

	const res = [];
	let chunk = [];

	for (let i = 0; i < values.length; i++) {
		chunk.push(values[i]);

		if (chunk.length === k) {
			res.push(...chunk.reverse());
			chunk = [];
		}

		if (i === values.length - 1) {
			if (chunk.length > 0) res.push(...chunk);
		}
	}

	let list = new SLL();

	for (let val of res) list.push(val);

	return list.head;
};
