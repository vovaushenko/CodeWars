// 674. Longest Continuous Increasing Subsequence

const findLengthOfLCIS = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let [i, j] = [0, 1];
  const diff = [];

  while (j < nums.length) {
    diff.push(nums[j] - nums[i]);
    i++;
    j++;
  }

  let maxLength = 0;
  let tempLength = 1;

  for (let k = 0; k < diff.length; k++) {
    if (diff[k] > 0) {
      tempLength++;
    } else {
      maxLength = Math.max(maxLength, tempLength);
      tempLength = 1;
    }

    if (k === diff.length - 1) {
      maxLength = Math.max(maxLength, tempLength);
    }
  }

  return maxLength;
};
