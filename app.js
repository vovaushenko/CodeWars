// https://leetcode.com/problems/add-two-numbers/

const transformListIntoNumber = (head) => {
	let digits = [];
	while (head) {
		digits.push(head.val);
		head = head.next;
	}

	return parseInt(digits.reverse().join(''));
};

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
		let newNode = new Node(val);

		if (this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		return this;
	}
}

const addTwoNumbers = (l1, l2) => {
	let digits = [
		...String(transformListIntoNumber(l1) + transformListIntoNumber(l2)),
	]
		.reverse()
		.map(Number);

	let list = new SLL();

	for (let digit of digits) list.push(digit);
	return list.head;
};

let list = new SLL();
list.push(1);
list.push(2);
list.push(3);
console.log(list);
