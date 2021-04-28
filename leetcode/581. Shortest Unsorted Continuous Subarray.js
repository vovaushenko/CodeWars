// 581. Shortest Unsorted Continuous Subarray

const findUnsortedSubarray = (nums) => {
  const sorted = [...nums].sort((a, b) => a - b);

  let similarity = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] === nums[i]) similarity++;
  }

  if (similarity === nums.length) return 0;

  let start = 0;
  let finish = nums.length - 1;

  while (nums[start] === sorted[start]) {
    start++;
  }

  while (nums[finish] === sorted[finish]) {
    finish--;
  }

  return finish - start + 1;
};
