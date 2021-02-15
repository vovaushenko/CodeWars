// https://www.codewars.com/kata/55cb0597e12e896ab6000099

const ArithmeticSequenceSum = (a, r, n) => {
  let res = 0;
  for (let i = 0; i < n; i++) res += a + r * i;
  return res;
};
