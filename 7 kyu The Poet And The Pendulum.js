// https://www.codewars.com/kata/5bd776533a7e2720c40000e5

const pendulum = (nums) => {
  const nums1 = [];
  const nums2 = [];

  const sorted = nums.sort((a, b) => a - b).map((v, i) => (!(i % 2) ? nums1 : nums2).push(v));

  return [...nums1.reverse(), ...nums2];
};
