// 1394. Find Lucky Integer in an Array

// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

const findLucky = (arr: number[]): number => {
  let map: { [key: string]: number } = {};
  for (let digit of arr) {
    map[digit] ? map[digit]++ : (map[digit] = 1);
  }

  let maxLucky = 0;
  for (let num of arr) {
    if (map[num] === num) maxLucky = Math.max(maxLucky, num);
  }

  return maxLucky || -1;
};
