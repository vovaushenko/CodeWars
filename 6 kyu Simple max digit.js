// https://www.codewars.com/kata/5b162ed4c8c47ea2f5000023

const solve = (num) => {
  let max = 0;
  let result;
  for (let i = 1; i <= num; i++) {
    let sum = String(i)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
    if (sum >= max) {
      max = sum;
      result = i;
    }
  }
  return result;
};
