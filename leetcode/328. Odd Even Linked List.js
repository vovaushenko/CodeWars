// 328. Odd Even Linked List
/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/

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

const oddEvenList = (head) => {
	const odd = [];
	const even = [];
	let currentNode = head;
	let counter = 0;

	while (currentNode) {
		if (currentNode) {
			if (counter % 2 === 0) {
				odd.push(currentNode.val);
			} else {
				even.push(currentNode.val);
			}
		}
		counter++;

		currentNode = currentNode.next;
	}

	console.log(odd, even);

	const list = new SLL();
	for (let val of even) list.push(val);
	for (let val of odd) list.push(val);
	return list.head;
};
