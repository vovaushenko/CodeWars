// memoization 🟢, binary-search🟢, sorts 🟢
'use strict';

const randomArray = Array.from({ length: 10 }, () => ~~(Math.random() * 10 + 1));

const merge = (a1, a2) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      res.push(a1[i]);
      i++;
    } else {
      res.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    res.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    res.push(a2[j]);
    j++;
  }
  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = ~~(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};
console.log(randomArray);
console.log(mergeSort(randomArray));
