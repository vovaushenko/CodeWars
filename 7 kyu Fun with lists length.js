function length(head) {
  let counter = 0;
  let current = head;
  while (current) {
    current = current.next;
    counter++;
  }

  return counter;
}
