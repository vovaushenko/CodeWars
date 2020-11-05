// https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (start, end, step) => {
  let sum = 0;

  for (let i = start; i <= end; i = i + step) {
    sum += i;
  }
  return sum;
};
