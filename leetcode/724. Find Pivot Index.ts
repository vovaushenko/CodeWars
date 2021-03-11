// 724. Find Pivot Index
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

const pivotIndex = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.slice(0, i).reduce((a, b) => a + b, 0) === nums.slice(i + 1).reduce((a, b) => a + b, 0)
    ) {
      return i;
    }
  }

  return -1;
};
