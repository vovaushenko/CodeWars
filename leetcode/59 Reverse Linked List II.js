//Reverse Linked List II
const listValues = (head) => {
	const values = [];
	let current = head;
	while (current) {
		values.push(current.val);
		current = current.next;
	}

	return values;
};

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

const reverseBetween = (head, left, right) => {
	if (left === right) return head;
	const values = listValues(head);

	const leftId = left;
	const rightId = right;

	const reversed = [
		...values.slice(0, leftId - 1),
		...values.slice(leftId - 1, rightId).reverse(),
		...values.slice(rightId),
	];

	const sll = new SLL();
	for (const val of reversed) sll.push(val);
	return sll.head;
};
