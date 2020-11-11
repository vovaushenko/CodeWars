// https://www.codewars.com/kata/558f9f51e85b46e9fa000025

const differenceOfSquares = (n) => {
  let sum = 0;
  let sumOfSquares = 0;

  let helper = (num) => {
    if (num === 0) {
      return;
    }
    sum += num;
    sumOfSquares += num ** 2;
    helper(num - 1);
  };
  helper(n);
  return sum ** 2 - sumOfSquares;
};
