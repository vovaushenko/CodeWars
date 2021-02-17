// SLL

// Node () 1 -> 2 -> 3 -> 4 -> {} -> [];
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Singly Linked List Class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  traverse() {
    if (!this.head) return 'This list is empty 😐';
    let route = [];

    (function traverse(node) {
      if (typeof node.val !== 'object') {
        route.push(node.val);
      } else {
        route.push(JSON.stringify(node.val));
      }
      node.next && traverse(node.next);
    })(this.head);

    return route.join(' -> ');
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push('hey');
list.push({ hey: 5 });
list.push({ hey: 5, there: 5, how: 'are' });
console.log(list.traverse());
