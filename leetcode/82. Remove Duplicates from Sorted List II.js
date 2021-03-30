// 82. Remove Duplicates from Sorted List II
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

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
  const values = [];

  const traverseList = (node) => {
    if (!node) return;
    values.push(node.val);

    if (node.next) traverseList(node.next);
  };

  traverseList(head);

  const uniqueList = new SLL();
  const hashMap = values.reduce((h, d) => ((h[d] = h[d] + 1 || 1), h), {});
  const uniqueValues = Object.entries(hashMap)
    .filter((pair) => pair[1] === 1)
    .map((pair) => +pair[0])
    .sort((a, b) => a - b);

  for (let val of uniqueValues) {
    uniqueList.push(val);
  }

  return uniqueList.head;
};
