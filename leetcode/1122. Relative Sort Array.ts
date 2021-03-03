// 1122. Relative Sort Array
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
  const map: { [key: string]: number } = {};
  for (let num of arr2) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let res: any = [];
  const nonAppearing = [];

  for (let num1 of arr2) {
    res = [...res, ...arr1.filter((num) => num === num1)];
  }

  for (let num of arr1) {
    if (!(num in map)) nonAppearing.push(num);
  }

  return res.concat(nonAppearing.sort((a, b) => a - b));
};
