// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order.

const sortArray = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  let mid = ~~arr.length / 2;
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

  return merge(left, right);
};

function merge(arr1: number[], arr2: number[]): number[] {
  const mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

console.log(sortArray([5, 1, 1, 2, 0, 0]));
