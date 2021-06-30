/*
445. Add Two Numbers II
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

let addTwoNumbers = (l1, l2) => {
	let values1 = [];
	let values2 = [];
	while (l1) {
		values1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		values2.push(l2.val);
		l2 = l2.next;
	}
	let list = new SLL();

	let sum = String(BigInt(values1.join('')) + BigInt(values2.join('')));
	console.log(sum);
	for (let digit of sum) list.push(+digit);
	return list.head;
};

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
