// https://leetcode.com/problems/middle-of-the-linked-list/
// 876. Middle of the Linked List
/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

const middleNode = (head) => {
	let listLength = 0;
	let current = head;
	while (current) {
		listLength++;
		current = current.next;
	}

	let mid = head;
	for (let i = 0; i <= Math.floor(listLength / 2); i++) {
		mid = mid.next;
	}

	return mid;
};
