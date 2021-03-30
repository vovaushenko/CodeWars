// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

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
      if (!node) return;
      values.push(node.val);
      if (node.next) traverse(node.next);
    };

    traverse(this.head);

    return values.join(' -> ');
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const deleteDuplicates = (head) => {
  const uniqueValues = [];

  const traverseList = (node) => {
    if (!node) return;
    if (!uniqueValues.includes(node.val)) uniqueValues.push(node.val);

    if (node.next) traverseList(node.next);
  };

  traverseList(head);

  const uniqueList = new SLL();

  for (let num of uniqueValues) uniqueList.push(num);

  return uniqueList.head;
};
