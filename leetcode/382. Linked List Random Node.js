// 382. Linked List Random Node
/*
Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Implement the Solution class:

Solution(ListNode head) Initializes the object with the integer array nums.
int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be choosen.
*/

class Solution {
	constructor(head) {
		this.head = head;
	}

	getRandom() {
		let counter = 0;
		let val;

		let node = this.head;
		while (node) {
			counter++;
			if (Math.floor(Math.random() * counter) + 1 === counter) val = node.val;
			node = node.next;
		}
		return val;
	}
}
