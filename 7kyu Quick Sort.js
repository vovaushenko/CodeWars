const arr = [5, 1, 2, 4, 6, 8, 10, 9, 3];

const qSort = (arr) => {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let less = arr.filter((num) => num < pivot);
  let greater = arr.filter((num) => num > pivot);
  return [...qSort(less), pivot, ...qSort(greater)];
};
