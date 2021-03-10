// 1374. Generate a String With Characters That Have Odd Counts
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

const generateTheString = (n: number): string =>
  n % 2 === 0 ? 'x'.repeat(n - 1) + 'y' : 'x'.repeat(n);

console.log(generateTheString(5));
