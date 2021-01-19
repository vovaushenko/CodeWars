// 164. Maximum Gap

// Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

// Return 0 if the array contains less than 2 elements.

const maximumGap = (nums) => {
  if (nums.length < 2) return 0;
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  let j = 1;

  let maxDiff = -Infinity;
  while (j < nums.length) {
    maxDiff = Math.max(maxDiff, nums[j] - nums[i]);
    i++;
    j++;
  }

  return maxDiff;
};

// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Maximum Gap.
// Memory Usage: 39.3 MB, less than 52.56% of JavaScript online submissions for Maximum Gap.
