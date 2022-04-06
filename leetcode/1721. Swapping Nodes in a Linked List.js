//1721. Swapping Nodes in a Linked List
/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
*/

const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const newNode = new ListNode(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}

const swapNodes = (head, k) => {
	const values = [];
	let current = head;

	while (current) {
		values.push(current.val);
		current = current.next;
	}

	swap(values, k - 1, values.length - k);

	const list = new SLL();
	for (const val of values) {
		list.push(val);
	}

	return list.head;
};
