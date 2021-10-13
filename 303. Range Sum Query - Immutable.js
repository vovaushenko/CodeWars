class NumArray {
	constructor(nums) {
		this.nums = nums;
	}

	sumRange(left, right) {
		return this.nums.slice(left, right + 1).reduce((a, b) => a + b, 0);
	}
}
