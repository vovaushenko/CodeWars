//895. Maximum Frequency Stack
/*
Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

*/
class FreqStack {
	constructor() {
		this.stack = [];
		this.map = {};
		this.mostFrequent = 0;
	}

	push(val) {
		this.map[val] ? this.map[val]++ : (this.map[val] = 1);
		if (this.map[val] > this.mostFrequent) this.mostFrequent = this.map[val];
		this.stack.push(val);
	}

	pop() {
		for (let i = this.stack.length - 1; i >= 0; i--) {
			if (this.map[this.stack[i]] === this.mostFrequent) {
				this.map[this.stack[i]]--;
				if (this.map[this.stack[i]] < 0) this.map[this.stack[i]] = 0;
				this.mostFrequent = Math.max(...Object.values(this.map));
				return this.stack.splice(i, 1);
			}
		}
	}
}

class FreqStack {
	constructor() {
		this.stack = [];
		this.frequency = {};
	}

	push(val) {
		let frequency = this.frequency[val] || 0;
		if (!this.stack[frequency]) this.stack[frequency] = [];
		this.stack[frequency].push(val);

		this.frequency[val] = (this.frequency[val] || 0) + 1;
	}

	pop() {
		let topStack = this.stack[this.stack.length - 1];
		let topVal = topStack.pop();
		if (!topStack.length) this.stack.pop();
		this.frequency[topVal]--;

		return topVal;
	}
}
