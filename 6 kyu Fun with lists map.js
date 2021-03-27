// https://www.codewars.com/kata/58259d9062cfb45e1a00006b

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const map = (head, f) => {
  let mappedList = new LinkedList();
  let newNode;
  const traverse = (node) => {
    if (!node) return;
    newNode = { ...node, data: f(node.data) };

    mappedList.push(newNode);

    node.next && traverse(node.next);
  };

  traverse(head);
  return mappedList.head;
};
