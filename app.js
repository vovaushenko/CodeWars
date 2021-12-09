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

console.log(numComponents([], [1, 2, 3]));
