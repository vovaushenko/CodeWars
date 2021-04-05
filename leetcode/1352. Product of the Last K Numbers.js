// 1352. Product of the Last K Numbers
// Implement the class ProductOfNumbers that supports two methods:

// 1. add(int num)

// Adds the number num to the back of the current list of numbers.
// 2. getProduct(int k)

// Returns the product of the last k numbers in the current list.
// You can assume that always the current list has at least k numbers.
// At any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.

class ProductOfNumbers {
  constructor() {
    this.numbers = [];
  }

  add(num) {
    this.numbers.push(num);
  }
  getProduct(k) {
    return this.numbers.slice(-k).reduce((a, b) => a * b, 1);
  }
}
