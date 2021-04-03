// 26. Remove Duplicates from Sorted Array

const removeDuplicates = (nums: number[]): number => {
  const lookup: { [key: string]: boolean } = {};
  for (let num of nums) {
    lookup[num] = false;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (lookup[nums[i]]) nums.splice(i, 1);
    lookup[nums[i]] = true;
  }

  return nums.length;
};
