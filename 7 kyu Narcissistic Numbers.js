// https://www.codewars.com/kata/56b22765e1007b79f2000079

const isNarcissistic = (n, digits = [...(n + '')].map(Number)) =>
  digits.reduce((a, b) => a + b ** digits.length, 0) === n;
