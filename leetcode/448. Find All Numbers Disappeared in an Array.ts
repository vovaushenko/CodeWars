// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

const findDisappearedNumbers = (nums: number[]): number[] => {
  const map: { [key: string]: number } = nums.reduce(
    (h: { [key: string]: number }, c) => ((h[c] = h[c] + 1 || 1), h),
    {}
  );
  let missingNumbers: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!(i in map)) missingNumbers.push(i);
  }

  return missingNumbers;
};
