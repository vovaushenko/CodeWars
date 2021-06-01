const getDecimalValue = (head) => {
	let binary = '';

	while (head) {
		binary += head.val + '';
		head = head.next;
	}

	return parseInt(binary, 2);
};
