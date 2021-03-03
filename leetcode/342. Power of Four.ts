// 342. Power of Four
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

const isPowerOfFour = (n: number): boolean => {
  if (n === 1) return true;
  let tempNum = 4;

  while (tempNum < n) tempNum = tempNum * 4;

  return tempNum === n;
};
