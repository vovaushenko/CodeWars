const getValues = (head, p, values = []) => {
	if (!head) return values;
	if (p(head.data)) values.push(head.data);
	return getValues(head.next, p, values);
};

const filter = (head, p) => {
	const values = getValues(head, p);
	if (!values.length) return null;
	const listHead = new Node(values[0]);
	let prev = listHead;

	for (let i = 1; i < values.length; i++) {
		const newNode = new Node(values[i]);
		prev.next = newNode;
		prev = newNode;
	}

	return listHead;
};
