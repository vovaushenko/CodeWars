// 496. Next Greater Element I

// You are given two integer arrays nums1 and nums2 both of unique elements, where nums1 is a subset of nums2.

// Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, return -1 for this number.

const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  const res = [];

  let locationInNums2;
  for (let num of nums1) {
    locationInNums2 = nums2.indexOf(num);
    for (let i = locationInNums2; i < nums2.length; i++) {
      if (nums2[i] > num) {
        res.push(nums2[i]);
        break;
      }
      if (i === nums2.length - 1) res.push(-1);
    }
  }

  return res;
};
