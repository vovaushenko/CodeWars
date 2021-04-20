// https://www.codewars.com/kata/560a4962c0cc5c2a16000068

const calculateSumOfPowers = (num, p) =>
  [...(num + '')].reduce((total, digit) => total + (+digit) ** p, 0);

const eqSumPowdig = (hMax, exp) => {
  let res = [];
  for (let i = 2; i <= hMax; i++) {
    if (calculateSumOfPowers(i, exp) === i) res.push(i);
  }
  return res;
};
