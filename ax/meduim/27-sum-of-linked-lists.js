'use strict';

class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const getListValues = (head) => {
	let current = head;
	const values = [];
	while (current) {
		values.push(current.value);
		current = current.next;
	}
	return Number(values.reverse().join(''));
};

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const newNode = new LinkedList(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}

const sumOfLinkedLists = (list1, list2) => {
	const listSum = [...String(getListValues(list1) + getListValues(list2))]
		.reverse()
		.map(Number);

	const sumList = new SLL();
	for (const digit of listSum) sumList.push(digit);

	return sumList.head;
};

console.log(
	sumOfLinkedLists(
		{
			value: 2,
			next: { value: 4, next: { value: 7, next: { value: 1, next: null } } },
		},
		{
			value: 9,
			next: { value: 4, next: { value: 5, next: null } },
		}
	)
);
