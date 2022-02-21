//2181. Merge Nodes in Between Zeros
/*
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.
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

const listValues = (head) => {
	let current = head;
	const values = [];
	while (current) {
		values.push(current.val);
		current = current.next;
	}
	return values;
};

const mergeNodes = (head) => {
	const values = listValues(head);
	let sumNode = 0;
	const merged = [];
	for (const val of values) {
		if (!val) {
			if (sumNode) merged.push(sumNode);
			sumNode = 0;
		} else {
			sumNode += val;
		}
	}
	console.log({ merged });
	const list = new SLL();
	merged.forEach((val) => list.push(val));
	return list.head;
};
