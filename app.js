// https://www.codewars.com/kata/581e476d5f59408553000a4b

function length(head) {
  let counter = 0;
  let current = head;
  while (current) {
    current = current.next;
    counter++;
  }

  return counter;
}
