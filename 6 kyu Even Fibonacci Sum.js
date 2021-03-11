//www.codewars.com/kata/57d81d428462e10e63000205

const fibonacci = (max, memo = [0, 1]) => {
  let evenSum = 0;
  while (memo[memo.length - 1] + memo[memo.length - 2] < max) {
    memo.push(memo[memo.length - 1] + memo[memo.length - 2]);
    if (memo[memo.length - 1] % 2 === 0) evenSum += memo[memo.length - 1];
  }
  return evenSum;
};
