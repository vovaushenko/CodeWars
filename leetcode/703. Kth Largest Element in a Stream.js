// 703. Kth Largest Element in a Stream
/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
*/

class KthLargest {
	constructor(k, nums) {
		this.k = k;
		this.nums = nums.sort((a, b) => b - a).slice(0, k);
	}

	add(val) {
		this.nums.push(val);
		this.nums = this.nums.sort((a, b) => b - a).slice(0, this.k);
		return this.nums[this.k - 1];
	}
}
