// 1374. Generate a String With Characters That Have Odd Counts

const generateTheString = (n: number): string =>
  n % 2 === 0 ? 'x'.repeat(n - 1) + 'y' : 'x'.repeat(n);

console.log(generateTheString(5));
