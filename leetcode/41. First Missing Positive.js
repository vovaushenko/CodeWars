// 41. First Missing Positive
// Given an unsorted integer array nums, find the smallest missing positive integer.

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

const firstMissingPositive = (nums) => {
  if (!nums.includes(1)) return 1;
  const positive = nums.filter((num) => num > 0).sort((a, b) => a - b);

  let i = 0;
  let j = 1;
  let missing;
  while (j < positive.length) {
    if (positive[j] - positive[i] > 1) {
      missing = positive[i] + 1;
      break;
    }
    i++;
    j++;
  }

  return missing || positive[positive.length - 1] + 1;
};
