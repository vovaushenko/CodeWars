const insertionSortList = (head) => {
	const values = [];

	while (head) {
		values.push(head.val);
		head = head.next;
	}

	values.sort((a, b) => a - b);
	let list = new SLL();
	for (let val of values) list.push(val);

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
