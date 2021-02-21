// https://www.codewars.com/kata/55a9c0994cb7e284d500005e/train/javascript
class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(item) {
    return this.q.unshift(item);
  }
  dequeue() {
    return this.q.pop();
  }

  size() {
    return this.q.length;
  }
}
