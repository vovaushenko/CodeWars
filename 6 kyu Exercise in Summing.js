// https://www.codewars.com/kata/52cd0d600707d0abcd0003eb

const minimumSum = (values, num) => {
  if (num == 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted.slice(0, num).reduce((total, n) => total + n, 0);
};

const maximumSum = (values, num) => {
  if (num == 0) return 0;
  const sorted = [...values].sort((a, b) => b - a);
  return sorted.slice(0, num).reduce((total, n) => total + n, 0);
};