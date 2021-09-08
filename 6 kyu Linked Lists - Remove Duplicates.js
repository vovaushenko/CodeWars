// https://www.codewars.com/kata/55d9f257d60c5fd98d00001b

const removeDuplicates = (head) => {
	let values = [];
	while (head) {
		values.push(head.data);
		head = head.next;
	}
	values = [...new Set(values)];

	let uniqueList = new SLL();
	for (let val of values) uniqueList.push(val);
	return uniqueList.head;
};

class SLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}
