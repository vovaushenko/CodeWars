// 1290. Convert Binary Number in a Linked List to Integer
/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
*/

const getDecimalValue = (head) => {
	let binary = '';

	while (head) {
		binary += head.val + '';
		head = head.next;
	}

	return parseInt(binary, 2);
};
