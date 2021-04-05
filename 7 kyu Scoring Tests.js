// https://www.codewars.com/kata/55d2aee99f30dbbf8b000001

const scoreTest = (arr, right, omit, wrong) =>
  arr.reduce((total, score) => {
    if (score === 0) total += right;
    if (score === 1) total += omit;
    if (score === 2) total -= wrong;
    return total;
  }, 0);
