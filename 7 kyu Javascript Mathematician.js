// https://www.codewars.com/kata/55c211cce1ef691d9b000061

const calculate = (...fistArgs) => (...secondArgs) =>
  fistArgs.reduce((a, b) => a + b, 0) + secondArgs.reduce((a, b) => a + b, 0);
