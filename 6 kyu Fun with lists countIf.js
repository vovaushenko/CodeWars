// https://www.codewars.com/kata/581e476d5f59408553000a4b

const countIf = (head, p) => {
  let currentNode = head;
  let count = 0;

  while (currentNode) {
    if (p(currentNode.data)) count++;
    currentNode = currentNode.next;
  }

  return count;
};
