// 817. Linked List Components
/*
You are given the head of a linked list containing unique integer values and an integer array nums that is a subset of the linked list values.

Return the number of connected components in nums where two values are connected if they appear consecutively in the linked list.
*/
const numComponents = (head, nums) => {
	let lookup = new Map();

	nums.forEach((item) => {
		lookup.set(item, true);
	});

	let count = 0;

	while (head) {
		if (lookup.has(head.val)) {
			while (head && lookup.has(head.val)) head = head.next;
			count++;
		}
		if (head) head = head.next;
	}
	return count;
};
