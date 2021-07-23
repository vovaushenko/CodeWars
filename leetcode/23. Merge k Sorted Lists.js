// https://leetcode.com/problems/merge-k-sorted-lists/

// 23. Merge k Sorted Lists
/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
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

let getValues = (heads) => {
	let values = [];
	for (let head of heads) {
		while (head) {
			values.push(head.val);
			head = head.next;
		}
	}

	return values;
};

const mergeKLists = (lists) => {
	let allValues = getValues(lists).sort((a, b) => a - b);

	let sortedList = new SLL();
	for (let val of allValues) sortedList.push(val);

	return sortedList.head;
};
