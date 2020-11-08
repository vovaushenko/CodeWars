// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

const largestPairSum = (arr) =>
  arr
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((total, el) => total + el);
