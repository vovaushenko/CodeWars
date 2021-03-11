// https://www.codewars.com/kata/56dc83840a10fee472000ca1

const isFibo = (a, b, f) => {
  const memo = [a, b];

  while (memo[memo.length - 1] + memo[memo.length - 2] <= f) {
    memo.push(memo[memo.length - 1] + memo[memo.length - 2]);
  }

  return memo[memo.length - 1] === f;
};
