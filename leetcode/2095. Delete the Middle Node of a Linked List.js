// 2095. Delete the Middle Node of a Linked List
/*
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
*/

const getListLength = (head) => {
	let length = 0;
	let current = head;
	while (current) {
		length++;
		current = current.next;
	}

	return length;
};

const deleteMiddle = (head) => {
	const length = getListLength(head);
	if (length === 1) return null;
	if (length === 2) {
		head.next = null;
		return head;
	}
	const mid = Math.floor(length / 2);

	let count = 0;
	let currentNode = head;
	while (currentNode) {
		count++;
		if (count === mid) {
			break;
		}
		currentNode = currentNode.next;
	}
	let midNode = currentNode.next;
	currentNode.next = midNode.next;
	return head;
};
