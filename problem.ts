// merge sort

const merge = (a1: number[], a2: number[]): number[] => {
  const mergedArr: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      mergedArr.push(a1[i]);
      i++;
    } else {
      mergedArr.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    mergedArr.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    mergedArr.push(a2[j]);
    j++;
  }

  return mergedArr;
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  let mid = ~~(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([1, 9, 8, 2, 4, 7, 6, 11, 44, 5, 3]));
