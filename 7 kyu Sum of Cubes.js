// https://www.codewars.com/kata/59a8570b570190d313000037

const sumCubes = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i ** 3;
  }
  return sum;
};
