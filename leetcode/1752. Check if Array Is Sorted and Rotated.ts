// 1752. Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

const check = (nums: number[]): boolean => {
  const sortedArr = JSON.stringify([...nums].sort((a, b) => a - b));

  for (let i = 0; i < nums.length; i++) {
    if (JSON.stringify(nums) === sortedArr) return true;
    rotate(nums);
  }

  return false;
};

const rotate = (arr: number[]): number[] => {
  const firstNumber: number = arr.shift()!;
  arr.push(firstNumber);

  return arr;
};
