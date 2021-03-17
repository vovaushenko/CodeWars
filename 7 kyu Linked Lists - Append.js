// https://www.codewars.com/kata/55d17ddd6d7868493e000074/solutions/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!listA) return listB;

  listA.next = append(listA, listB);

  return listA;
}
