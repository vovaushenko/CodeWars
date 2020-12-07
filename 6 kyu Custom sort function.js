// https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe

const sort = (arr) => {
  const swap = (a, id1, id2) => ([a[id1], a[id2]] = [a[id2], a[id1]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
