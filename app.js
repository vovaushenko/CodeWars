// https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d

const swap = (a, id1, id2) => ([a[id1], a[id2]] = [a[id2], a[id1]]);

const swapTwo = (arr, a, b) => {
  let copy = [...arr];
  const firstId = arr.indexOf(a);
  const secondId = arr.lastIndexOf(b);
  swap(copy, firstId, secondId);

  return copy;
};

swapTwo([1, 2, 3, 4], 2, 4);
