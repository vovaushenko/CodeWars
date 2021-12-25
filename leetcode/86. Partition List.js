// 86. Partition List
/*
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
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

const getListValues = (head) => {
	let currentNode = head;
	const values = [];
	while (currentNode) {
		values.push(currentNode.val);
		currentNode = currentNode.next;
	}
	return values;
};

const partitonList = (values, x) => {
	const higherValues = values.filter((v) => v >= x);
	const smaller = values.filter((v) => v < x);
	return [...smaller, ...higherValues];
};

const partition = (head, x) => {
	const values = getListValues(head);
	const partitionedSLL = new SLL();
	partitonList(values, x).forEach((val) => partitionedSLL.push(val));
	return partitionedSLL.head;
};
