// 167. Two Sum II - Input array is sorted
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

const twoSum = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while (numbers[i] + numbers[j] !== target) {
    if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }

    if (i == j) return -1;
  }

  return [i + 1, j + 1];
};

// Success
// Details
// Runtime: 76 ms, faster than 89.43% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 39 MB, less than 52.24% of JavaScript online submissions for Two Sum II - Input array is sorted.
