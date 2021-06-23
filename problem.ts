class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

class SLL {
	head: ListNode | null;
	tail: ListNode | null;
	constructor() {
		this.head = null;
		this.tail = null;
	}

	push(val: any) {
		let newNode = new ListNode(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			if (this.tail) {
				this.tail.next = newNode;
				this.tail = newNode;
			}
		}
	}
}

function reverseBetween(
	head: ListNode | null,
	left: number,
	right: number
): ListNode | null {
	let values = [];

	while (head) {
		values.push(head.val);
		head = head.next;
	}

	let reversedValues = [
		...values.slice(0, left - 1),
		...values.slice(left - 1, right).reverse(),
		...values.slice(right),
	];

	let reversedList = new SLL();

	for (let val of reversedValues) reversedList.push(val);

	return reversedList.head;
}

let list = new SLL();
list.push(1);
list.push(2);
list.push(3);

console.log(list);
