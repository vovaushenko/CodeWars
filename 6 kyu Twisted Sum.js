// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f

const summarizeDigits = (num) => [...(num + '')].reduce((total, digit) => total + +digit, 0);

const twistedSum = (n) =>
  Array.from({ length: n }, (_, id) => id + 1).reduce(
    (tSum, num) => tSum + summarizeDigits(num),
    0
  );
