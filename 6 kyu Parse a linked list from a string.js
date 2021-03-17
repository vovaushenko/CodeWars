class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function parse(string) {
  if (string === 'null') return null;

  const values = string
    .split('->')
    .map(Number)
    .filter((val) => val || val === 0);

  let list = new Node(values[0]);

  let current = list;
  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = current.next;
  }

  return list;
}
