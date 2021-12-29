// 1381. Design a Stack With Increment Operation
/*
Design a stack which supports the following operations.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
int pop() Pops and returns the top of stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.

*/
class CustomStack {
	constructor(maxSize) {
		this.stack = [];
		this.maxSize = maxSize;
	}

	push(x) {
		if (this.stack.length === this.maxSize) {
			return;
		} else {
			this.stack.push(x);
		}
	}
	pop() {
		if (this.stack.length) {
			return this.stack.pop();
		} else {
			return -1;
		}
	}
	increment(k, val) {
		for (let i = 0; i < k; i++) {
			if (this.stack[i] !== undefined) this.stack[i] += val;
		}
	}
}
