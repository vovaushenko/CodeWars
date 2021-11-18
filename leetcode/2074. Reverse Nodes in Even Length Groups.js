// 2074. Reverse Nodes in Even Length Groups
/*
You are given the head of a linked list.

The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers (1, 2, 3, 4, ...). The length of a group is the number of nodes assigned to it. In other words,

The 1st node is assigned to the first group.
The 2nd and the 3rd nodes are assigned to the second group.
The 4th, 5th, and 6th nodes are assigned to the third group, and so on.
Note that the length of the last group may be less than or equal to 1 + the length of the second to last group.

Reverse the nodes in each group with an even length, and return the head of the modified linked list.
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

const getSLLvalues = (head) => {
	let currentNode = head;
	const values = [];
	while (currentNode) {
		values.push(currentNode.val);
		currentNode = currentNode.next;
	}
	return values;
};

const reversify = (values) => {
	const reversed = [];
	let target = 1;
	let chunk = [];
	for (let val of values) {
		chunk.push(val);
		if (chunk.length === target) {
			if (chunk.length % 2 !== 0) {
				reversed.push(...chunk);
			} else {
				reversed.push(...chunk.reverse());
			}
			target++;
			chunk = [];
		}
	}

	if (chunk.length) {
		if (chunk.length % 2 !== 0) {
			reversed.push(...chunk);
		} else {
			reversed.push(...chunk.reverse());
		}
	}

	return reversed;
};

const reverseEvenLengthGroups = (head) => {
	const reversed = reversify(getSLLvalues(head));
	const reversedList = new SLL();
	for (let val of reversed) reversedList.push(val);
	return reversedList.head;
};
