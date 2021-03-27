// https://www.codewars.com/kata/581e476d5f59408553000a4b

const indexOf = (head, value) => {
  let current = head;
  let indexes = [];
  while (current) {
    if (current.data === value) indexes.push(index);
    current = current.next;
    index++;
  }

  return indexes.length ? indexes[indexes.length - 1] : -1;
};
