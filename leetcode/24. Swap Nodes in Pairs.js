// 24. Swap Nodes in Pairs
/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/
// https://leetcode.com/problems/swap-nodes-in-pairs/

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

const swap = (arr, id1, id2) => ([arr[id1], arr[id2]] = [arr[id2], arr[id1]]);

const getListValues = (head) => {
	let currentNode = head;
	const values = [];
	while (currentNode) {
		values.push(currentNode.val);
		currentNode = currentNode.next;
	}
	return values;
};

const swapValues = (values) => {
	let [i, j] = [0, 1];
	while (j < values.length) {
		swap(values, i, j);
		i += 2;
		j += 2;
	}
	return values;
};

const swapPairs = (head) => {
	const swappedList = new SLL();
	const swappedListValues = swapValues(getListValues(head)).forEach((val) =>
		swappedList.push(val)
	);
	return swappedList.head;
};
