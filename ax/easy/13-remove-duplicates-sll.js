const removeDuplicatesFromLinkedList = (head) => {
	let current = head;

	while (current) {
		let nextNode = current.next;

		while (nextNode && nextNode.value === current.value) {
			nextNode = nextNode.next;
		}

		current.next = nextNode;
		current = nextNode;
	}
	return head;
};
