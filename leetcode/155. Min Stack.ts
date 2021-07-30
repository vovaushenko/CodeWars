// https://leetcode.com/problems/min-stack/

class MinStack {
	stack: number[];
	minStack: number[];

	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(val: number): void {
		this.minStack.push(val);
		this.minStack.sort((a, b) => b - a);

		this.stack.push(val);
	}

	pop(): void {
		let poppedValue = this.stack.pop();
		if (typeof poppedValue === 'number') {
			const deleteID = this.minStack.indexOf(poppedValue);
			this.minStack.splice(deleteID, 1);
		}
	}

	top(): number {
		return this.stack[this.stack.length - 1];
	}

	getMin(): number {
		return this.minStack[this.minStack.length - 1];
	}
}
