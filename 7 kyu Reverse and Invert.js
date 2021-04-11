// https://www.codewars.com/kata/5899e054aa1498da6b0000cc

const reverseInvert = (arr) =>
  arr
    .filter((el) => typeof el === 'number' && el % 1 === 0)
    .map((num) =>
      num < 0 ? +[...(num * -1 + '')].reverse().join('') : [...(num + '')].reverse().join('') * -1
    );
