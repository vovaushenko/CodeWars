// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 Do not return anything, modify nums in-place instead.
 */
interface NonEmptyArray<T> extends Array<T> {
  pop: () => T;
}

function isNonEmpty<T>(arr: Array<T>): arr is NonEmptyArray<T> {
  return arr.length > 0;
}

const rotate = (nums: number[], k: number): void => {
  let rotationsCounter = 0;
  let num: number;

  while (rotationsCounter < k) {
    if (isNonEmpty(nums)) {
      num = nums.pop();
      nums.unshift(num);
    }
    rotationsCounter++;
  }
};
