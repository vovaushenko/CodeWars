//https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End

const removeKthNodeFromEnd = (head, k) => {
	let counter = 1;
	let [first, second] = [head, head];

	while (counter <= k) {
		second = second.next;
		counter++;
	}

	if (second === null) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}

	while (second.next !== null) {
		second = second.next;
		first = first.next;
	}
	first.next = first.next.next;
};
