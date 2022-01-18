//1670. Design Front Middle Back Queue
/*
Design a queue that supports push and pop operations in the front, middle, and back.

Implement the FrontMiddleBack class:

FrontMiddleBack() Initializes the queue.
void pushFront(int val) Adds val to the front of the queue.
void pushMiddle(int val) Adds val to the middle of the queue.
void pushBack(int val) Adds val to the back of the queue.
int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].
 
*/

class FrontMiddleBackQueue {
	constructor() {
		this.queue = [];
	}

	_mid() {
		return Math.floor(this.queue.length / 2);
	}

	pushFront(val) {
		return this.queue.unshift(val);
	}
	pushMiddle(val) {
		const mid = this._mid();
		this.queue = [...this.queue.slice(0, mid), val, ...this.queue.slice(mid)];
	}
	pushBack(val) {
		return this.queue.push(val);
	}
	popFront() {
		return this.queue.length ? this.queue.shift() : -1;
	}
	popMiddle() {
		if (!this.queue.length) return -1;
		if (this.queue.length === 1) {
			this.queue = [];
			console.log(this.queue);
			return this.queue[0];
		}
		const mid = this._mid();
		const res = this.queue[mid];
		this.queue = [...this.queue.slice(0, mid), ...this.queue.slice(mid + 1)];
		return res;
	}
	popBack() {
		return this.queue.length ? this.queue.pop() : -1;
	}
}
