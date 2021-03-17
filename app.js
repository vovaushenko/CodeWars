function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  const newNode = new Node(data);
  if (!head) {
    return newNode;
  }

  if (data < head.data) {
    newNode.next = head;

    return newNode;
  }
  let current = head;

  while (current) {
    if (current.data <= data && !current.next) {
      current.next = newNode;
      return head;
    } else if (current.next.data < data) {
      newNode.next = current.next;
      current.next = newNode;
      return head;
    }
  }
}

let linkedList = new Node(5);

console.log(sortedInsert(linkedList, 6));
console.log(sortedInsert(linkedList, 8));
console.log(sortedInsert(linkedList, 8));
console.log(sortedInsert(linkedList, 111));
console.log(sortedInsert(linkedList, 2));

console.log(linkedList);
