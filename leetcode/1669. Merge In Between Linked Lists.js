/*
1669. Merge In Between Linked Lists
*/
/*
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
*/
const listToArray = (head) => {
	let current = head;
	const values = [];
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

const mergeInBetween = (list1, a, b, list2) => {
	const arr1 = listToArray(list1);
	const arr2 = listToArray(list2);

	const mixed = [...arr1.slice(0, a), ...arr2, ...arr1.slice(b + 1)];
	const list = new SLL();
	for (const val of mixed) list.push(val);
	return list.head;
};
