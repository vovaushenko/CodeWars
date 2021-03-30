// 148. Sort List

// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  showList() {
    const values = [];

    const traverse = (node) => {
      values.push(node.val);
      if (node.next) traverse(node.next);
    };

    traverse(this.head);

    return values.join(' -> ');
  }

  sortedPush(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    if (val < this.head.val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    if (val > this.tail.val) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    let current = this.head;
    let node = current;

    while (current.val < val) {
      node = current;
      current = current.next;
    }

    newNode.next = node.next;
    node.next = newNode;

    return node;
  }
}

const sortList = (head) => {
  let sortedList = new SLL();

  const traverse = (node) => {
    if (!node) return;
    sortedList.sortedPush(node.val);
    if (node.next) traverse(node.next);
  };
  traverse(head);
  return sortedList.head;
};
