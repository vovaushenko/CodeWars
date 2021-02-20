// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchInsert = (nums: number[], target: number): number => {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }

  return 1;
};
