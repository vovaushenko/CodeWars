// 868. Binary Gap
// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

const binaryGap = (n) => {
  if (n == 1) return 0;
  const bin = n.toString(2);
  console.log(bin);

  let i = 0;
  let j = 1;
  let maxGap = -Infinity;

  while (j < bin.length) {
    if (bin[j] === '1') {
      maxGap = Math.max(maxGap, j - i);
      i = j;
    }
    j++;
  }

  if (maxGap === -Infinity) {
    if (bin[1] === '0') return 0;
    if (bin[1] === '1') return 1;
  }

  return maxGap;
};
