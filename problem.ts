export default class Node {
	public val: any;
	public next: Node | null;

	constructor(val: any) {
		this.val = val;
		this.next = null;
	}
}

class SLL {
	public head: Node | null;
	public tail: Node | null;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	printList(): string {
		if (!this.head) return 'This list is empty';

		let values: any[] = [];

		const DFS = (node: Node): void => {
			values.push(node.val);

			node.next && DFS(node.next);
		};

		DFS(this.head);

		return values.join(' -> ');
	}

	push(val: any) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			if (this.tail) {
				this.tail.next = newNode;
				this.tail = newNode;
			}
		}

		this.length++;
		return this;
	}

	pop(): Node | undefined {
		if (!this.head) return undefined;
		let poppedNode = this.head;
		let newTail = this.head;

		while (poppedNode.next) {
			newTail = poppedNode;
			poppedNode = poppedNode.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (!this.length) {
			this.tail = null;
			this.head = null;
		}

		return poppedNode;
	}
}

let list = new SLL();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
console.log(list.pop());

console.log(list.printList());
