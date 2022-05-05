//225. Implement Stack using Queues
class MyStack {
	constructor() {
		this.stack = [];
	}

	push(val) {
		this.stack.push(val);
	}

	pop() {
		return this.stack.pop();
	}

	top() {
		return this.stack[this.stack.length - 1];
	}

	empty() {
		return this.stack.length === 0;
	}
}
