class MinMaxStack {
	constructor() {
		this.stack = [];
		this.minMaxStack = [];
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}
	pop() {
		this.minMaxStack.pop();
		return this.stack.pop();
	}

	push(num) {
		const minMaxPair = { min: num, max: num };
		if (this.minMaxStack.length) {
			const lastMinMaxPair = this.minMaxStack[this.minMaxStack.length - 1];
			minMaxPair.min = Math.min(num, lastMinMaxPair.min);
			minMaxPair.max = Math.max(num, lastMinMaxPair.max);
		}
		this.minMaxStack.push(minMaxPair);
		this.stack.push(num);
	}

	getMin() {
		return this.minMaxStack[this.minMaxStack.length - 1].min;
	}
	getMax() {
		return this.minMaxStack[this.minMaxStack.length - 1].max;
	}
}
